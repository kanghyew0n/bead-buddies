import React, { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import useGridSizeStore from "../store/useGridSizeStore";
import useColorListStore from "../store/useColorStore";
import useGridHistoryStore from "../store/useGridHistoryStore"; // 전체 Hook 가져오기
import { commonFlexCenter } from "../styles/commonStyle";

const HEADER_HEIGHT = 70;
const WIDTH_PADDING = 500; // 250 * 2
const GRID_PADDING = 40; // 20 * 2

interface GridProps {
  column: number;
  row: number;
}

interface GridItemProps {
  cellSize: number;
}

const Grid = () => {
  const [cellSize, setCellSize] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentGrid, setCurrentGrid] = useState<number[]>([]);
  const { gridState, history, updateHistory } = useGridHistoryStore();
  const { column, row } = useGridSizeStore();
  const { selectedColor } = useColorListStore();

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    const element = document.getElementById(`grid-item-${index}`);
    if (element) {
      element.style.backgroundColor = selectedColor.hexCode; // 배경색 변경
    }
  };

  const handleMouseMove = (index: number) => {
    if (isDragging) {
      setCurrentGrid((prevState) => {
        return prevState.includes(index) || gridState.includes(index)
          ? prevState
          : [...prevState, index];
      });

      const element = document.getElementById(`grid-item-${index}`);
      if (element) {
        element.style.backgroundColor = selectedColor.hexCode; // 배경색 변경
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const calcCellSize = useMemo(() => {
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;
    const maxGridWidth = viewPortWidth - WIDTH_PADDING;
    const maxGridHeight = viewPortHeight - HEADER_HEIGHT - GRID_PADDING;

    const minCellSize = Math.min(maxGridWidth / column, maxGridHeight / row);

    return Math.floor(minCellSize);
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

  // 함수 내부에서는 변경 감지가 비동기적으로 발생해서 useEffect에서 감지?
  useEffect(() => {
    if (!isDragging) {
      updateHistory(currentGrid);
    }
  }, [isDragging]);

  useEffect(() => {
    setCurrentGrid([]);
  }, [history]);

  return (
    <GridWrapper>
      <GridGuide column={column} row={row} id="grid">
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
  max-height: calc(100vh - ${HEADER_HEIGHT}px - ${GRID_PADDING}px);
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  grid-template-rows: ${({ row }) => `repeat(${row}, 1fr)`};
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 20px;
  border-right: 1px solid ${theme.colors.gray[200]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`);

const GridItem = React.memo(styled.div<GridItemProps>`
  width: ${({ cellSize }) => `${cellSize}px`};
  height: ${({ cellSize }) => `${cellSize}px`};
  border-left: 1px solid ${theme.colors.gray[200]};
  border-top: 1px solid ${theme.colors.gray[200]};
  background-color: ${theme.colors.neutral.white};
`);

export default Grid;
