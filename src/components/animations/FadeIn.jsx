import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
}) {

    const offset = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (

        <motion.div

            initial={{
                opacity: 0,
                ...offset[direction],
            }}

            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}

            viewport={{
                once: true,
                amount: 0.2,
            }}

            transition={{
                duration: 0.8,
                delay,
            }}
        >
            {children}
        </motion.div>

    );
}