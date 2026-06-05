'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: any;
  animationNum?: number;
  timelineRef?: React.RefObject<Element | null>;
  customVariants?: any;
  href?: string;
  target?: string;
  rel?: string;
}

export function TimelineContent({
  children,
  as = 'div',
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const fallbackRef = useRef<HTMLElement>(null);
  const inViewRef = timelineRef || fallbackRef;
  const isInView = useInView(inViewRef, { once: true, margin: "-10% 0px -10% 0px" });

  const MotionComponent = motion.create(as) as any;

  return (
    <MotionComponent
      ref={fallbackRef}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
