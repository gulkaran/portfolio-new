"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const LegoScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.domElement.style.pointerEvents = "auto";

    const currentContainer = containerRef.current;
    currentContainer.appendChild(renderer.domElement);

    camera.position.set(100, 50, 200);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(100, 50, 200);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.autoRotate = true;

    let rotationSpeed = -2;
    controls.autoRotateSpeed = rotationSpeed;

    let loadedModel: THREE.Group | null = null;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/models/lego_space_dart/scene.gltf", (gltf) => {
      loadedModel = gltf.scene;

      loadedModel.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
      loadedModel.rotateY(0.5);
      loadedModel.translateX(150);

      scene.add(loadedModel);
    });

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (loadedModel) {
        const currentRotationAngle = controls.getAzimuthalAngle();

        if (1.1 < currentRotationAngle && currentRotationAngle < 1.9) {
          rotationSpeed = -0.5;
        } else if (
          1.9 < currentRotationAngle &&
          currentRotationAngle < Math.PI
        ) {
          rotationSpeed -= 0.5;
        } else if (-1.5 < currentRotationAngle && currentRotationAngle < -1) {
          rotationSpeed = -10;
        } else {
          rotationSpeed = -20;
        }

        controls.autoRotateSpeed = rotationSpeed;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      controls.dispose();
      renderer.dispose();
      if (currentContainer.contains(renderer.domElement)) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Ensure the container is full size and allows pointer events
  return (
    <div
      ref={containerRef}
      className="w-full h-full pointer-events-auto overflow-hidden"
    />
  );
};
