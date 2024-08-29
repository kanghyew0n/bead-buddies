import styled from "@emotion/styled";
import Delete from "../assets/images/delete.svg";
import { commonFlexCenter } from "../assets/styles/common-style";

interface ColorDisplayProps {
  hexCode: string;
}

const ColorChip = ({ hexCode, onClick }) => {
  return (
    <StyledColorChip onClick={onClick}>
      <ColorInfo>
        <ColorDisplay hexCode={hexCode} />
        <span>{hexCode}</span>
      </ColorInfo>
      <DeleteButton>
        <img src={Delete} alt="delete button" />
      </DeleteButton>
    </StyledColorChip>
  );
};

const StyledColorChip = styled.div`
  width: 150px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 50px;
  border: 1px solid #cfcfcf;
  background-color: #fff;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border-color: #000;
  }
`;

const ColorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ColorDisplay = styled.div<ColorDisplayProps>`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #000;
  background-color: ${({ hexCode }) => hexCode};
`;

const DeleteButton = styled.div`
  ${commonFlexCenter}
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.2s;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: red;
  }
`;

export default ColorChip;
