import styled from "@emotion/styled";
import Button from "./common/Button";
import ColorChip from "./ColorChip";
import useSelectedColorStore from "../store/useSelectedColorStore";

const ColorPicker = () => {
  const { setColor } = useSelectedColorStore();

  return (
    <StyledColorPicker>
      <Button width="100%">+ 색상 추가</Button>
      <ColorChip hexCode='#000000' onClick={() => setColor('#000000')}/>
      <ColorChip hexCode='#E0FFAE' onClick={() => setColor('#E0FFAE')}/>
      <ColorChip hexCode='#FF0000' onClick={() => setColor('#FF0000')}/>
      <ColorChip hexCode='#3FC5FF' onClick={() => setColor('#3FC5FF')}/>
      <ColorChip hexCode='#E8E8E8' onClick={() => setColor('#E8E8E8')}/>
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
