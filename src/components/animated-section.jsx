"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useAnimation } from "@/contexts/animation-context";

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  threshold = 0.1,
  rootMargin = "-50px",
  id,
  forceAnimate = false,
}) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });
  const { settings } = useAnimation();
  const shouldAnimate = settings.enabled || forceAnimate;
  const actualDelay = (delay * settings.delay) / 100;

  const getTransformValue = (base) => base * settings.intensity;

  const getTransformStyle = () => {
    if (!shouldAnimate || isIntersecting) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    switch (animation) {
      case "fade-up":
        return `translate3d(0, ${getTransformValue(10)}px, 0)`;
      case "fade-in":
        return "translate3d(0, 0, 0)";
      case "slide-left":
        return `translate3d(-${getTransformValue(10)}px, 0, 0)`;
      case "slide-right":
        return `translate3d(${getTransformValue(10)}px, 0, 0)`;
      case "zoom-in":
        return `translate3d(0, 0, 0) scale(${1 - getTransformValue(0.05)})`;
      case "bounce":
        return `translate3d(0, -${getTransformValue(4)}px, 0)`;
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const style = !shouldAnimate
    ? {}
    : {
        transitionDuration: `${settings.duration}ms`,
        transitionTimingFunction: settings.easing,
        transitionDelay: actualDelay ? `${actualDelay}ms` : undefined,
        transform: getTransformStyle(),
        opacity: isIntersecting ? 1 : 0,
      };

  return (
    <section ref={ref} className={cn(className)} style={style} id={id}>
      {children}
    </section>
  );
}
