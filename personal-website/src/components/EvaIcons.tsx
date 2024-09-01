'use client';

import React, { useEffect, useRef } from 'react';
import * as eva from 'eva-icons';

interface EvaIconProps {
  name: string;
  size?: string | number;
  animation?: string;
  fill?: string;
}

const EvaIcon: React.FC<EvaIconProps> = ({ name, size = 24, animation, fill }) => {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      eva.replace({
        fill,
        animation,
        width: size,
        height: size,
      });
    }
  }, [name, size, animation, fill]);

  return (
    <i
      ref={iconRef}
      data-eva={name}
      style={{ fontSize: size, width: size, height: size }}
      data-eva-fill={fill}
    />
  );
};

export default EvaIcon;
