import styled from "@emotion/styled";
import Button from "./common/Button";
import Input from "./common/Input";

const GridSizeControl = () => {
  return (
    <StyledGridSizeControl>
      <SizeInputWrapper>
        <span>가로크기</span>
        <Input onChange={() => console.log("e.target.value")} />
      </SizeInputWrapper>

      <SizeInputWrapper>
        <span>세로크기</span>
        <Input onChange={() => console.log("e.target.value")} />
      </SizeInputWrapper>

      <Button role="point" width="100%">
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
