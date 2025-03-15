// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { TextureLoader } from "three";
// import { htmlLogo } from "../../assets"; // Ensure this path is correct

// const nodes = [
//   { position: [0, 2, 0], imageUrl: htmlLogo },
//   { position: [1.732, 1, 0], imageUrl: htmlLogo },
//   { position: [2, 0, 0], imageUrl: htmlLogo },
//   { position: [1.732, -1, 0], imageUrl: htmlLogo },
//   { position: [0, -2, 0], imageUrl: htmlLogo },
//   { position: [-1.732, -1, 0], imageUrl: htmlLogo },
//   { position: [-2, 0, 0], imageUrl: htmlLogo },
//   { position: [-1.732, 1, 0], imageUrl: htmlLogo },
//   { position: [0, 0, 0], imageUrl: htmlLogo }, // Center node
// ];

// const edges = [
//   [0, 1],
//   [0, 2],
//   [0, 3],
//   [0, 4],
//   [0, 5],
//   [6, 0],
//   [7, 0],
//   [1, 2],
//   [1, 3],
//   [4, 1],
//   [5, 1],
//   [6, 1],
//   [7, 1],
//   [2, 3],
//   [2, 4],
//   [2, 5],
//   [2, 6],
//   [2, 7],
//   [3, 4],
//   [3, 5],
//   [3, 6],
//   [3, 7],
//   [4, 5],
//   [4, 6],
//   [4, 7],
//   [5, 6],
//   [5, 7],
//   [6, 7],
// ];

// const Node = ({ position, imageUrl }) => {
//   const mesh = useRef();
//   const texture = new TextureLoader().load(imageUrl);

//   return (
//     <mesh position={position} ref={mesh}>
//       <planeGeometry args={[0.7, 0.7]} /> {/* Flat logo instead of sphere */}
//       <meshBasicMaterial
//         map={texture}
//         transparent={true}
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// };

// const Edge = ({ start, end }) => {
//   const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
//   const geometry = new THREE.BufferGeometry().setFromPoints(points);

//   return (
//     <line geometry={geometry}>
//       <lineBasicMaterial color="lightblue" />
//     </line>
//   );
// };

// // Continuous Rotation Wrapper
// const AnimatedGroup = ({ children }) => {
//   const groupRef = useRef();
//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.005; // Continuous rotation
//       groupRef.current.rotation.x =
//         Math.sin(state.clock.elapsedTime * 0.2) * 0.2; // Subtle X-axis motion
//     }
//   });

//   return <group ref={groupRef}>{children}</group>;
// };

// const ProjectLibrary = () => {
//   return (
//     <Canvas style={{ width: "600px", height: "600px" }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <AnimatedGroup>
//         {nodes.map((node, index) => (
//           <Node key={index} position={node.position} imageUrl={node.imageUrl} />
//         ))}
//         {edges.map((edge, index) => (
//           <Edge
//             key={index}
//             start={nodes[edge[0]].position}
//             end={nodes[edge[1]].position}
//           />
//         ))}
//       </AnimatedGroup>
//     </Canvas>
//   );
// };

// export default ProjectLibrary;
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { htmlLogo } from "../../assets"; // Verify this path

const ProjectLibrary = () => {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 30 },
          shape: {
            type: "image",
            image: {
              src: htmlLogo,
              width: 50,
              height: 50,
            },
          },
          opacity: { value: 1, random: false },
          size: { value: 30, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
      }}
    />
  );
};

export default ProjectLibrary;
