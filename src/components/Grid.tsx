import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import useGridSizeStore from "../store/useGridSizeStore";
import useSelectedColorStore from "../store/useSelectedColorStore";
import { commonFlexCenter } from "../assets/styles/common-style";

const HEADER_HEIGHT = 70;
const WIDTH_PADDING = 500; // 250 * 2
const HEIGHT_PADDING = 110; // 55 * 2
const GRID_PADDING = 40; // 20 * 2

interface GridProps {
  column: number;
  row: number;
}

interface GridItemProps {
  cellSize: number;
}

const Grid = () => {
  const { column, row } = useGridSizeStore();
  const { color } = useSelectedColorStore();

  const [cellSize, setCellSize] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    const element = document.getElementById(`grid-item-${index}`);
    if (element) {
      element.style.backgroundColor = color; // 배경색 변경
    }
  };

  const handleMouseMove = (index: number) => {
    if (isDragging) {
      const element = document.getElementById(`grid-item-${index}`);
      if (element) {
        element.style.backgroundColor = color; // 배경색 변경
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const calcCellSize = useMemo(() => {
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;
    const maxGridWidth = viewPortWidth - WIDTH_PADDING - GRID_PADDING;
    const maxGridHeight = viewPortHeight - HEADER_HEIGHT - HEIGHT_PADDING;

    return column > row
      ? Math.floor(maxGridWidth / column)
      : Math.floor(maxGridHeight / row);
  }, [column, row]);

  useEffect(() => {
    setCellSize(calcCellSize);
  }, [calcCellSize]);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <GridWrapper>
      <GridGuide column={column} row={row}>
        {Array.from({ length: column * row }).map((_, index) => (
          <GridItem
            key={index}
            id={`grid-item-${index}`}
            cellSize={cellSize}
            onMouseDown={() => handleMouseDown(index)}
            onMouseMove={() => handleMouseMove(index)}
          />
        ))}
      </GridGuide>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px - ${GRID_PADDING}px);
  ${commonFlexCenter}
`;

const GridGuide = React.memo(styled.div<GridProps>`
  max-width: calc(100vw - ${WIDTH_PADDING}px);
  max-height: calc(100vh - ${HEADER_HEIGHT}px - ${HEIGHT_PADDING}px);
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  grid-template-rows: ${({ row }) => `repeat(${row}, 1fr)`};
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 20px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`);

const GridItem = React.memo(styled.div<GridItemProps>`
  width: ${({ cellSize }) => `${cellSize}px`};
  height: ${({ cellSize }) => `${cellSize}px`};
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  background-color: #fff;
`);

export default Grid;
