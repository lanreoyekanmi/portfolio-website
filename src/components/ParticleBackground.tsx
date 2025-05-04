import React from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      init={async (engine) => {
        await loadSlim(engine);
      }}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#8B5CF6"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#8B5CF6",
            opacity: 0.2,
            width: 1
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 4
            }
          }
        },
        background: {
          color: "transparent"
        }
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticleBackground; 