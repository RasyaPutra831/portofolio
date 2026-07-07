import Container from "../ui/Container";
import Button from "../ui/Button";
import profileImage from "../../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
    FaReact,
    FaPython,
} from "react-icons/fa";

import {
    SiPostgresql,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiFlutter
} from "react-icons/si";

const techStack = [
    {
    icon: FaReact,
    color: "text-cyan-400",
    position: "-top-8 left-1/2 -translate-x-1/2",
    },

    {
    icon: FaPython,
    color: "text-yellow-400",
    position: "top-14 -right-8",
    },

    {
    icon: SiJavascript,
    color: "text-yellow-300",
    position: "top-1/2 -right-2 -translate-y-1/2",
    },

    {
    icon: SiCss,
    color: "text-blue-500",
    position: "bottom-16 -right-8",
    },

    {
    icon: SiPostgresql,
    color: "text-blue-400",
    position: "-bottom-8 left-1/2 -translate-x-1/2",
    },

    {
    icon: SiHtml5,
    color: "text-orange-500",
    position: "top-1/2 -left-2 -translate-y-1/2",
    },

    // TAMBAHAN

    {
    icon: SiFlutter,
    color: "text-sky-400",
    position: "bottom-24 -left-10",
    },
    ];
    
const floatingAnimation = [
    {
        y: [0,  -12, 0],
        x: [0, 6, 0],
        rotate: [0, 2, 0],
    },

    {
        y: [0, 10, 0],
        x: [0, -8, 0],
        rotate: [0, -3, 0],
    },

    {
        y: [0, -8, 0],
        x: [0, 4, 0],
        rotate: [0, 4, 0],
    },

    {
        y: [0, 6, 0],
        x: [0, -5, 0],
        rotate: [0, -2, 0],
    },

    {
        scale: [1, 1.08, 1],
        y: [0, -6, 0],
    },
];

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center" id="home">
        <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

            <motion.div
                initial={{
                    opacity: 0,
                    x: -80,
                    }}
                animate={{
                    opacity: 1,
                    x: 0,
                    }}
                transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    }}
            >

            {/* Badge */}
            

            {/* Greeting */}

            <p className="mb-4 text-lg text-violet-400">
                Hello, I'm
            </p>

            {/* Name */}

            <h1 className="text-6xl font-bold leading-tight lg:text-7xl">
                Rasya Putra
            </h1>

            {/* Role */}

            <motion.div
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay:0.4,
                    duration:0.5
                }}
                className="mt-5 h-10">
                <TypeAnimation
                    sequence={[
                    "Software Developer",
                    2500,
                    "Data Scientist",
                    2500,
                    "AI Explorer",
                    2500,
                    ]}
                    wrapper="span"
                    speed={65}
                    repeat={Infinity}
                    className="text-xl font-medium text-violet-400"/>
            </motion.div>

            {/* Description */}

            <motion.p
                initial={{
                    opacity:0,
                    x:-40
                }}
                animate={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    delay:0.55,
                    duration:0.6
                }} 
                className="mt-8 max-w-xl leading-8 text-zinc-400">
                    Passionate about building modern web applications,
                    data-driven solutions, and AI-powered experiences
                    with clean architecture and intuitive design.
            </motion.p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
                <motion.div
                initial={{
                    opacity:0,
                    x:-30
                }}
                animate={{
                    opacity:1,
                    x:0
                }}
                transition={{
                    delay:0.8,
                    duration:0.6
                }}
                >
                    <Button variant="secondary">
                        Download Resume
                    </Button>
                </motion.div>
            </div>
            {/* Social */}
            </motion.div>

          {/* RIGHT */}
            <div className="relative flex h-[520px] items-center justify-center">
            {/* Floating Tech */}
            {techStack.map((tech, index) => {
    const Icon = tech.icon;

    return (
    <motion.div
        key={index}
        initial={{
            opacity:0,
            scale:0,
        }}
        animate={{
            opacity:1,
            scale:1,
            ...floatingAnimation[
            index % floatingAnimation.length
            ]
        }}
        transition={{
            opacity:{
                duration:0.45,
                delay:0.55 + index*0.08,
            },
            scale:{
                duration:0.45,
                delay:0.55 + index*0.08,
            },
            y:{
                duration:4 + index*0.25,
                repeat:Infinity,
                repeatType:"mirror",
                ease:"easeInOut",
            },
            x:{
                duration:5 + index*0.2,
                repeat:Infinity,
                repeatType:"mirror",
                ease:"easeInOut",
            },
            rotate:{
                duration:6,
                repeat:Infinity,
                repeatType:"mirror",
            },
        }}
        className={`absolute ${tech.position}`}>
        <div
        className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-violet-500/20
            bg-zinc-900/90
            backdrop-blur-md
            shadow-lg
            shadow-violet-500/20
            transition-all
            duration-300
            hover:scale-110
            hover:-translate-y-2
            hover:border-violet-400
            hover:shadow-violet-500/20
            hover:bg-violet-500/10">
        <Icon className={`text-3xl ${tech.color}`} />
      </div>
    </motion.div>
  );
})}

            {/* Image */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.9,
                    delay: 0.35,
                    ease: "easeOut",
                }}
                whileHover={{
                    scale: 1.02,
                }}
                className="
                    relative
                    flex
                    h-[430px]
                    w-[430px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-violet-500/30
                    bg-zinc-900
                    shadow-[0_0_180px_rgba(139,92,246,.15)]
                "
            >
    <div
        className="
            absolute
            inset-0
            rounded-full
            bg-violet-600/10
            blur-3xl
        "
    />

    <img
        src={profileImage}
        alt="Rasya Putra"
        className="
            relative
            z-10
            h-full
            w-full
            object-cover
        "
    />
</motion.div>

            </div>

        </div>
        </Container>
        
    </section>
    );
}