import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import { Colors } from '../models/Colors';

interface CellProps {
  cell: Cell;
  color: Colors;
}

const CellComponent: FC<CellProps> = ({cell}) => {
  return (
    <div
      className={['cell', cell.color].join(' ')}
    >
      
    </div>
  );
};

export default CellComponent;