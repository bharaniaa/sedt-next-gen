import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveDrone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Lights setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Neon colorful highlights to make the drone feel premium
    const blueLight = new THREE.PointLight(0x00d2ff, 3, 15);
    blueLight.position.set(-3, -2, 2);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x9d4edd, 3, 15);
    purpleLight.position.set(3, -2, 2);
    scene.add(purpleLight);

    // 5. Build Procedural 3D Drone
    const droneGroup = new THREE.Group();

    // Fuselage (Body)
    const bodyGeometry = new THREE.SphereGeometry(0.6, 32, 16);
    bodyGeometry.scale(1.2, 0.5, 1.2); // Squashed sphere for aerodynamics
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.1,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    droneGroup.add(body);

    // High-tech center ring (Glass UI accent)
    const ringGeometry = new THREE.TorusGeometry(0.7, 0.05, 16, 100);
    ringGeometry.rotateX(Math.PI / 2);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00d2ff,
      emissiveIntensity: 1.5,
    });
    const glowRing = new THREE.Mesh(ringGeometry, ringMaterial);
    droneGroup.add(glowRing);

    // Arms
    const armMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.2,
    });
    const armGeometry = new THREE.CylinderGeometry(0.06, 0.06, 2.0, 16);
    armGeometry.rotateZ(Math.PI / 2);

    const arm1 = new THREE.Mesh(armGeometry, armMaterial);
    arm1.rotation.y = Math.PI / 4;
    droneGroup.add(arm1);

    const arm2 = new THREE.Mesh(armGeometry, armMaterial);
    arm2.rotation.y = -Math.PI / 4;
    droneGroup.add(arm2);

    // Motors & Rotors (Blades)
    const motorGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.25, 16);
    const bladeGeometry = new THREE.BoxGeometry(0.9, 0.01, 0.08);
    const motorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.15,
    });
    
    // Glowing active blade material
    const bladeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.9
    });

    const rotors: THREE.Group[] = [];
    const navigationLights: THREE.Mesh[] = [];

    const positions = [
      { x: 0.7, z: 0.7, color: 0x22c55e },  // Front right - Green
      { x: -0.7, z: 0.7, color: 0xef4444 }, // Front left - Red
      { x: 0.7, z: -0.7, color: 0x22c55e }, // Rear right - Green
      { x: -0.7, z: -0.7, color: 0xef4444 } // Rear left - Red
    ];

    positions.forEach((pos) => {
      const rotorGroup = new THREE.Group();
      rotorGroup.position.set(pos.x, 0.1, pos.z);

      // Motor mount
      const motor = new THREE.Mesh(motorGeometry, motorMaterial);
      rotorGroup.add(motor);

      // Rotor blades
      const blades = new THREE.Group();
      const blade1 = new THREE.Mesh(bladeGeometry, bladeMaterial);
      const blade2 = blade1.clone();
      blade2.rotation.y = Math.PI / 2;
      blades.add(blade1, blade2);
      blades.position.y = 0.15;
      rotorGroup.add(blades);

      // Blinking Navigation LED
      const ledGeometry = new THREE.SphereGeometry(0.06, 8, 8);
      const ledMaterial = new THREE.MeshBasicMaterial({ color: pos.color });
      const led = new THREE.Mesh(ledGeometry, ledMaterial);
      led.position.set(0, -0.15, 0);
      rotorGroup.add(led);
      navigationLights.push(led);

      droneGroup.add(rotorGroup);
      rotors.push(blades); // store blade group for spinning
    });

    // Camera / Sensor mount (Gimbal)
    const gimbalGroup = new THREE.Group();
    gimbalGroup.position.set(0, -0.3, 0.2);
    
    const gimbalHolderGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.15, 8);
    const gimbalHolder = new THREE.Mesh(gimbalHolderGeom, armMaterial);
    gimbalGroup.add(gimbalHolder);

    const cameraGeom = new THREE.SphereGeometry(0.15, 16, 16);
    const cameraMaterial = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.9,
      roughness: 0.05,
    });
    const cameraSphere = new THREE.Mesh(cameraGeom, cameraMaterial);
    cameraSphere.position.y = -0.12;
    gimbalGroup.add(cameraSphere);

    // Lens glow
    const lensGeom = new THREE.CircleGeometry(0.06, 16);
    const lensMaterial = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
    const lens = new THREE.Mesh(lensGeom, lensMaterial);
    lens.position.set(0, -0.12, 0.15);
    gimbalGroup.add(lens);

    droneGroup.add(gimbalGroup);

    // Add drone to scene and center it
    scene.add(droneGroup);
    droneGroup.position.set(0, 0, 0);

    // 6. Handle Mouse Movement
    const handleMouseMove = (event: MouseEvent) => {
      // Get relative container coordinates
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / width) * 2 - 1;
      const y = -((event.clientY - rect.top) / height) * 2 + 1;

      mouseRef.current.targetX = x * 2.5; // Bounds of movement
      mouseRef.current.targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Spin blades fast
      rotors.forEach((rotor, index) => {
        // Alternating rotor spins for quadcopter physics
        const dir = index % 2 === 0 ? 1 : -1;
        rotor.rotation.y += 0.45 * dir;
      });

      // LED Blinking
      navigationLights.forEach((led) => {
        const material = led.material as THREE.MeshBasicMaterial;
        material.opacity = Math.sin(time * 8) > 0 ? 1.0 : 0.2;
        material.transparent = true;
      });

      // Smooth interpolation toward target mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Gentle auto hover (sine wave)
      const hover = Math.sin(time * 2.0) * 0.15;

      // Update position
      droneGroup.position.x = mouseRef.current.x;
      droneGroup.position.y = mouseRef.current.y + hover;

      // Realistic tilt physics (pitch and roll based on movement velocity)
      const tiltX = (mouseRef.current.targetY - mouseRef.current.y) * 0.4;
      const tiltZ = -(mouseRef.current.targetX - mouseRef.current.x) * 0.4;

      // Smooth rotation dampening
      droneGroup.rotation.x = THREE.MathUtils.lerp(droneGroup.rotation.x, tiltX, 0.1);
      droneGroup.rotation.z = THREE.MathUtils.lerp(droneGroup.rotation.z, tiltZ, 0.1);
      
      // Gentle constant rotation for depth perception
      droneGroup.rotation.y = time * 0.15 + (mouseRef.current.x * 0.1);

      // Gimbal camera points slightly towards current position
      gimbalGroup.rotation.x = -droneGroup.rotation.x * 0.8;
      gimbalGroup.rotation.y = -droneGroup.rotation.y * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Responsive Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose materials/geometries
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      armGeometry.dispose();
      armMaterial.dispose();
      motorGeometry.dispose();
      motorMaterial.dispose();
      bladeGeometry.dispose();
      bladeMaterial.dispose();
      gimbalHolderGeom.dispose();
      cameraGeom.dispose();
      cameraMaterial.dispose();
      lensGeom.dispose();
      lensMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default InteractiveDrone;
