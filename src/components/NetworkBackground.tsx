'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface NetworkBackgroundProps {
  particleCount?: number; // Cantidad total de nodos o partículas
  particleSize?: number; // Tamaño base de cada partícula
  particleColor?: string; // Color de los nodos
  lineColor?: string; // Color de las líneas de conexión
  connectionDistance?: number; // Distancia máxima para conectar nodos
  moveSpeed?: number; // Velocidad del movimiento automático
  interactive?: boolean; // Habilita la interacción con el mouse
  mouseRadius?: number; // Radio de influencia del mouse
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({
  particleCount, // Se manejará dinámicamente si no se provee
  particleSize = 3.5,
  particleColor = 'rgba(0, 217, 255, 0.5)',
  lineColor = 'rgba(0, 217, 255, 0.5)',
  connectionDistance = 150,
  moveSpeed = 1,
  interactive = true,
  mouseRadius = 150,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const isMobile = window.innerWidth < 600;
      const count = particleCount || (isMobile ? 80 : 180);

      if (particles.current.length === 0 || particles.current.length !== count) {
        initParticles(count);
      }
    };

    const initParticles = (count: number) => {
      particles.current = [];
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * moveSpeed * 2,
          vy: (Math.random() - 0.5) * moveSpeed * 2,
          size: Math.random() * particleSize + 1,
        });
      }
    };

    const getMousePos = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        // Movimiento base
        p.x += p.vx;
        p.y += p.vy;

        // Rebote suave en bordes
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        }
        if (p.x > canvas.width) {
          p.x = canvas.width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        }
        if (p.y > canvas.height) {
          p.y = canvas.height;
          p.vy *= -1;
        }

        // Interacción con mouse (Repulsión)
        if (interactive && mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRadius - dist) / mouseRadius;

            p.x -= Math.cos(angle) * force * 3;
            p.y -= Math.sin(angle) * force * 3;
          }
        }

        // Dibujar nodo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Dibujar conexiones
        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = (1 - dist / connectionDistance) * 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const pos = getMousePos(e);
      mouse.current.x = pos.x;
      mouse.current.y = pos.y;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    handleResize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [
    particleCount, // Re-inicia posición solo si cambia el número de partículas
    particleSize,
    particleColor,
    lineColor,
    connectionDistance,
    moveSpeed,
    interactive,
    mouseRadius,
  ]);

  return (
    <Box
      component='canvas'
      ref={canvasRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 1, // Corregido de 2.8 a 1 (máximo válido)
      }}
    />
  );
};

export default NetworkBackground;
