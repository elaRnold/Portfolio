"use client";

import Particles from "react-tsparticles";
import { loadAll } from "tsparticles-all";

export default function BubbleBackground() {
    const particlesInit = async (engine: any) => {
        await loadAll(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute top-0 left-0 w-full h-full -z-[999]"
            options={{
                background: {
                    color: { value: "transparent" },
                },
                particles: {
                    number: {
                        value: 15,
                        density: { enable: true, value_area: 800 },
                    },
                    color: {
                        value: ["#a2d2ff", "#cdb4db", "#ffffff", "#bde0fe"],
                    },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0.05,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 10, max: 30 },
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 5,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "top",
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                        explode: {
                            distance: 100,
                            duration: 0.6,
                            particles: {
                                move: {
                                    speed: 6,
                                    direction: "none",
                                    outModes: { default: "destroy" },
                                },
                            },
                        },
                    },
                },
                fullScreen: {
                    enable: false,
                },
            }}
        />
    );
}
