import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import AuthPage from "../pages/AuthPage";
import AdminProjectUpload from "../pages/AdminProjectUpload";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "projects/:id",
    element: <ProjectDetails />
  },
  {
    path: "admin",
    element: <AuthPage />
  },
  {
    path: "upload",
    element: <AdminProjectUpload />
  },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> }
    ]
  }
]);

export default router;