import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';
import './Background3D.css';

function Scene() {
  const { isDark } = useTheme();
  
  return (
    <Stars 
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade={true}
      speed={1}
      color={isDark ? "#ffffff" : "#000000"}
    />
  );
}

export default function Background3D() {
  return (
    <div className="background-3d">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
} 