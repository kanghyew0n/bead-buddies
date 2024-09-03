import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import useGridSizeStore from "../store/useGridSizeStore";
import useSelectedColorStore from "../store/useSelectedColorStore";
import useGridHistoryStore from "../store/useGridHistoryStore";
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
  backgroundColor: string;
}

const Grid = () => {
  const { column, row } = useGridSizeStore();
  const { color } = useSelectedColorStore();
  const initialState = Array(column * row).fill("#fff");
  const {
    gridState,
    updateGridState,
    undo,
    redo,
    initializeGrid,
    currentIndex,
    history,
  } = useGridHistoryStore();

  const [cellSize, setCellSize] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [updateGrid, setUpdateGrid] = useState(initialState);

  // 초기화
  useEffect(() => {
    initializeGrid(column, row);
  }, [column, row, initializeGrid]);

  const handleMouseDown = (index: number) => {
    setIsDragging(true);

    const newGridState = gridState;
    newGridState[index] = color;

    setUpdateGrid(newGridState);
  };

  const handleMouseMove = (index: number) => {
    if (isDragging) {
      const newGridState = gridState;
      newGridState[index] = color;
      setUpdateGrid(newGridState);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    updateGridState(updateGrid);
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
    <div>
      <button onClick={undo} disabled={currentIndex === 0}>
        Undo
      </button>
      <button onClick={redo} disabled={currentIndex === history.length - 1}>
        Redo
      </button>
      <GridWrapper>
        <GridGuide column={column} row={row}>
          {Array.from({ length: column * row }).map((_, index) => (
            <GridItem
              key={index}
              id={`grid-item-${index}`}
              cellSize={cellSize}
              backgroundColor={updateGrid[index]}
              onMouseDown={() => handleMouseDown(index)}
              onMouseMove={() => handleMouseMove(index)}
            />
          ))}
        </GridGuide>
      </GridWrapper>
    </div>
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
  background-color: ${({ backgroundColor }) => backgroundColor};
`);

export default Grid;
