import styled from "@emotion/styled";
import Button from "./common/Button";
import ColorChip from "./ColorChip";

const ColorPicker = () => {
  return (
    <StyledColorPicker>
      <Button width="100%">+ 색상 추가</Button>
      <ColorChip />
      <ColorChip />
      <ColorChip />
      <ColorChip />
      <ColorChip />
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > button {
    margin-bottom: 5px;
  }
`;

export default ColorPicker;
