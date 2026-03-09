import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from './Button'; // Reusing utility for now

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, glass = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "rounded-2xl overflow-hidden",
                    glass ? "glass" : "bg-[var(--surface)] border border-[var(--border)]",
                    "hover:border-[var(--border-hover)] transition-colors duration-300",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';
