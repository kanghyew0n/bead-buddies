import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import Delete from "../assets/images/delete.svg";
import { commonFlexCenter } from "../styles/commonStyle";
import useColorListStore from "../store/useColorStore";
import { ColorType } from "../types/colorType";

interface Props {
  colorInfo: ColorType;
  hexCode: string;
  onClick: () => void;
}

interface ColorChipProps {
  isActive?: boolean;
}

interface ColorDisplayProps {
  color: string;
}

const ColorChip = ({ colorInfo, hexCode, onClick }: Props) => {
  const { selectedColor } = useColorListStore();
  const { setRemoveColorList } = useColorListStore();

  const handleDeleteColor = () => {
    setRemoveColorList(colorInfo);
  };

  return (
    <StyledColorChip
      isActive={selectedColor.id === colorInfo.id}
      onClick={onClick}
    >
      <ColorInfo>
        <ColorDisplay color={hexCode} />
        <span>{hexCode}</span>
      </ColorInfo>
      <DeleteButton onClick={handleDeleteColor}>
        <img src={Delete} alt="delete button" />
      </DeleteButton>
    </StyledColorChip>
  );
};

const StyledColorChip = styled.div<ColorChipProps>`
  position: relative;
  width: 150px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isActive }) =>
    isActive ? theme.colors.neutral.black : theme.colors.gray[200]};
  background-color: ${theme.colors.neutral.white};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${theme.colors.neutral.black};
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
  border: 1px solid ${theme.colors.neutral.black};
  background-color: ${({ color }) => color};
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
