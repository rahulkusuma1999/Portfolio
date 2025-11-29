import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const BentoGrid = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto p-4 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default BentoGrid;
