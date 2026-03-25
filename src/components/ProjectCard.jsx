// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(MotionPathPlugin);

// export default function MotionPathAnimation() {
//   const ballRef = useRef();
//   const pathRef = useRef();

//   useEffect(() => {
//     gsap.from(ballRef.current, {
//       duration: 5,
//       motionPath: {
//         path: pathRef.current,
//         align: pathRef.current,
//         autoRotate: true, // rotates along the path
//       },
//       repeat: -1, // loops infinitely
//       yoyo : true,
//       ease: "power1.inOut",
//     });
//   }, []);

//   return (
//     <div className="relative w-full h-96">
//       <svg width="100%" height="100%">
//         <path
//           ref={pathRef}
//           d="M50,150 C150,50 300,250 400,150"
//           stroke="transparent"
//           fill="transparent"
//           strokeWidth="8"
//         />
//       </svg>
//       <div
//         ref={ballRef}
//         className="w-10 h-10 bg-green-500 shadow-2xl shadow-green-400 absolute rounded-full"
//         style={{ top: 0, left: 0 }}
//       ></div>
//     </div>
//   );
// }



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function CollisionDemo() {
  const dragRef = useRef();
  const targetRef = useRef();

  useEffect(() => {
    Draggable.create(dragRef.current, {
      type: "x,y",
      bounds: "body",
      inertia: true,

      onDrag: function () {
        checkCollision();
      },
    });

    function checkCollision() {
      const dragRect = dragRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      const isColliding =
        dragRect.left < targetRect.right &&
        dragRect.right > targetRect.left &&
        dragRect.top < targetRect.bottom &&
        dragRect.bottom > targetRect.top;

      if (isColliding) {
        gsap.to(targetRef.current, { backgroundColor: "pink", scale: 1.2 });
      } else {
        gsap.to(targetRef.current, { backgroundColor: "green", scale: 1 });
      }
    }
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* Draggable Box */}
      <div
        ref={dragRef}
        className="w-24 h-24 bg-blue-500 absolute cursor-pointer"
      ></div>

      {/* Target Box */}
      <div
        ref={targetRef}
        className="w-32 h-32 bg-green-500 absolute top-40 left-60"
      ></div>
    </div>
  );
}


// import React from 'react'

// const Projects = () => {
//   return (
//     <div>
//       Projects
//     </div>
//   )
// }

// export default Projects
