import styled from "@emotion/styled";
import Button from "./common/Button";
import Input from "./common/Input";
import useGridSizeStore from "../store/useGridSizeStore";
import { useEffect, useState } from "react";

const GridSizeControl = () => {
  const { column, row, setColumn, setRow } = useGridSizeStore();
  const [newCol, setNewCol] = useState(column);
  const [newRow, setNewRow] = useState(row);

  const handleClickSaveBtn = () => {
    if (column === newCol && row === newRow) return; // 값 변경이 없을 경우

    /* TODO: 이전 버튼이 활성화 될 경우(작업 내역이 있을 경우)만 안내 띄우도록
     * if (!confirm("값을 변경하면 이전 작업이 모두 초기화됩니다.")) return; */
    if (column !== newCol) setColumn(newCol);
    if (row !== newRow) setRow(newRow);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleClickSaveBtn();
    };
    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [newCol, newRow]);

  return (
    <StyledGridSizeControl>
      <SizeInputWrapper>
        <span>가로크기</span>
        <Input
          value={newCol}
          onChange={(e) => setNewCol(Number(e.target.value))}
        />
      </SizeInputWrapper>

      <SizeInputWrapper>
        <span>세로크기</span>
        <Input
          value={newRow}
          onChange={(e) => setNewRow(Number(e.target.value))}
        />
      </SizeInputWrapper>

      <Button role="point" width="100%" onClick={handleClickSaveBtn}>
        저장
      </Button>
    </StyledGridSizeControl>
  );
};

const StyledGridSizeControl = styled.div`
  width: 150px;
  height: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #000;
  border-radius: 5px;

  span {
    font-size: 14px;
  }

  button {
    margin-top: 5px;
  }
`;

const SizeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default GridSizeControl;
