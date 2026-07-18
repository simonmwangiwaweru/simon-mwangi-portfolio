"use client";

import { motion } from "framer-motion";

const tags = { div: motion.div, ul: motion.ul } as const;

export default function Reveal({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof tags;
}) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
