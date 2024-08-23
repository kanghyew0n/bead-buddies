import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const HEADER_HEIGHT = 70;

interface GridProps {
  column: number;
  row: number;
}

interface GridItemProps {
  cellSize: number;
}

const Grid: React.FC<GridProps> = ({ column, row }) => {
  const [cellSize, setCellSize] = useState(0);

  const calcCellSize = () => {
    if (column > row) {
      const viewPortWidth = window.innerWidth;
      const maxGridWidth = viewPortWidth - 500;
      const cellSize = Math.floor(maxGridWidth / column);
      return cellSize;
    }

    if (column <= row) {
      const viewPortHeight = window.innerHeight;
      const maxGridHeight = viewPortHeight - HEADER_HEIGHT - 140;
      const cellSize = Math.floor(maxGridHeight / row);
      return cellSize;
    }
  };

  useEffect(() => {
    const _size = calcCellSize();
    setCellSize(_size);
  }, [column, row]);

  return (
    <GridWrapper>
      <GridGuide column={column} row={row}>
        {Array.from({ length: column * row }).map((_, index) => (
          <GridItem key={index} cellSize={cellSize} />
        ))}
      </GridGuide>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridGuide = styled.div<GridProps>`
  max-width: calc(100vw - 500px);
  max-height: calc(100vh - 70px - 140px);
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  grid-template-rows: ${({ row }) => `repeat(${row}, 1fr)`};
`;

const GridItem = styled.div<GridItemProps>`
  width: ${({ cellSize }) => `${cellSize}px`};
  height: ${({ cellSize }) => `${cellSize}px`};
  border: 1px solid #ccc;
  background-color: #fff;
`;

export default Grid;
