
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color?: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Function to generate a color from the purple palette
    const getRandomPurpleColor = () => {
      const colors = [
        '155, 135, 245', // Main purple
        '171, 152, 255', // Lighter purple
        '138, 103, 226', // Deeper purple
        '209, 194, 255', // Soft lilac
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    // Function to initialize particles
    const initParticles = () => {
      particles.current = [];
      // Higher density of particles
      const particleCount = Math.min(Math.floor(window.innerWidth / 3), 300);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 6 + 1.5, // Larger particles for better visibility
          speedX: (Math.random() - 0.5) * 1.5, // Faster movement
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: Math.random() * 0.9 + 0.3, // Higher opacity for better visibility
          color: getRandomPurpleColor()
        });
      }
    };
    
    // Set canvas to fill the viewport
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleResize();
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // More transparent clear for longer trailing effect
      ctx.fillStyle = 'rgba(14, 14, 17, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Enhanced mouse interaction - particles move away from cursor with attractive force at distance
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = 3 * (1 - distance / 200);
          const angle = Math.atan2(dy, dx);
          
          if (distance > 100) {
            // Attraction zone (100-200px)
            particle.x += Math.cos(angle) * force * 0.5;
            particle.y += Math.sin(angle) * force * 0.5;
          } else {
            // Repulsion zone (0-100px)
            particle.x -= Math.cos(angle) * force * 2;
            particle.y -= Math.sin(angle) * force * 2;
          }
        }
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();
        
        // Add subtle glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${particle.color}, 0.5)`;
        
        // Draw connections between nearby particles with higher visibility
        for (let j = index + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) { // Increased connection distance
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = 0.25 * (1 - distance / 180); // Higher base opacity
            const gradientColor = ctx.createLinearGradient(
              particle.x, particle.y, otherParticle.x, otherParticle.y
            );
            gradientColor.addColorStop(0, `rgba(${particle.color}, ${opacity})`);
            gradientColor.addColorStop(1, `rgba(${otherParticle.color || particle.color}, ${opacity})`);
            
            ctx.strokeStyle = gradientColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
        
        // Reset shadow for next frame
        ctx.shadowBlur = 0;
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start the animation
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10" 
      style={{ 
        pointerEvents: "none", 
        position: "fixed", 
        width: "100vw", 
        height: "100vh",
      }}
    />
  );
};

export default ParticleBackground;
