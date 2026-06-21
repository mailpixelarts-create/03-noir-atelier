import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerOptions {
  trigger: HTMLElement | null | undefined;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  animation?: gsap.core.Tween | gsap.core.Timeline;
  markers?: boolean;
}

export function useScrollTrigger(options: ScrollTriggerOptions) {
  useEffect(() => {
    if (!options.trigger) return;

    const config: ScrollTrigger.StaticVars = {
      trigger: options.trigger,
      start: options.start ?? 'top 80%',
      end: options.end ?? 'bottom 20%',
      scrub: options.scrub ?? false,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
      markers: options.markers ?? false,
    };

    if (options.animation) {
      config.animation = options.animation;
    }

    ScrollTrigger.create(config);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [options.trigger, options.start, options.end]);
}
