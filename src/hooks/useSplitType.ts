import { useEffect } from 'react';
import SplitType from 'split-type';

interface SplitTypeOptions {
  type?: string;
  tagName?: string;
}

export function useSplitType(
  ref: React.RefObject<HTMLElement | null>,
  options: SplitTypeOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, {
      types: (options.type as 'lines' | 'words' | 'chars') ?? 'lines',
      lineClass: 'line',
      wordClass: 'word',
      charClass: 'char',
    });

    return () => {
      split.revert();
    };
  }, [ref, options.type]);
}
