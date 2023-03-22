import React, { ReactNode } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import ArrowDown from '../Icons/arrowDown';
import { SortButton, Th as Component, ThBox } from './th.styles';
import { TextAlign } from './type';

interface ThProps {
  children?: ReactNode;
  textAlign?: TextAlign;
  handleSort?: () => void;
  width?: number;
}

export const Th: React.FC<ThProps> = ({
  children,
  textAlign,
  handleSort,
  width,
}) => {
  const { width: elementWidth, ref } = useResizeDetector();

  return (
    <Component width={width}>
      <ThBox textAlign={textAlign || TextAlign.START}>
        <div ref={ref}>{children} </div>
        {handleSort && (
          <SortButton onClick={handleSort} requiredSpace={elementWidth || 0}>
            <ArrowDown />
          </SortButton>
        )}
      </ThBox>
    </Component>
  );
};
