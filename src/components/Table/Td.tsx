import React, { ReactNode } from 'react';

import { ForSelect, Td as Component, TdBox, TdEdgeSpace } from './td.styles';
import { TextAlign } from './type';

interface TdProps {
  children?: ReactNode;
  isMobileCompatible?: boolean;
  isSelectableRow?: boolean;
  lastColumn?: boolean;
  firstColumn?: boolean;
  textAlign?: TextAlign;
}

export const Td: React.FC<TdProps> = ({
  children,
  isSelectableRow,
  lastColumn,
  firstColumn,
  textAlign,
}) => {
  const alginRight = lastColumn ? { right: 0 } : {};
  const alginLeft = firstColumn ? { left: 0 } : {};

  return (
    <Component>
      {isSelectableRow ? (
        <ForSelect>{children}.</ForSelect>
      ) : (
        <TdBox textAlign={textAlign || TextAlign.START}>{children}</TdBox>
      )}

      <TdEdgeSpace
        style={{
          ...alginRight,
          ...alginLeft,
          display: lastColumn || firstColumn ? 'block' : 'none',
        }}
      />
    </Component>
  );
};

