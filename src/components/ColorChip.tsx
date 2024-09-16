// import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import Delete from "../assets/images/delete.svg";
import { commonFlexCenter } from "../styles/commonStyle";
import useSelectedColorStore from "../store/useSelectedColorStore";
import useColorListStore from "../store/useColorListStore";
// import ColorPickerModal from "./ColorPickerModal";
import { ColorType } from "../types/colorType";

interface Props {
  colorInfo: ColorType;
  onClick: () => void;
}

interface ColorChipProps {
  isActive?: boolean;
}

interface ColorDisplayProps {
  color: string;
}

const ColorChip = ({ colorInfo, onClick }: Props) => {
  // const [isShowColorModal, setIsShowColorModal] = useState<boolean>(false);
  const { selectedColor } = useSelectedColorStore();
  const { setRemoveColorList } = useColorListStore();

  const handleDeleteColor = () => {
    setRemoveColorList(colorInfo);
  };

  // const handleShowColorModal = () => {
  //   setIsShowColorModal(!isShowColorModal);
  // };

  return (
    <StyledColorChip
      isActive={selectedColor.id === colorInfo.id}
      onClick={onClick}
    >
      <ColorInfo>
        <ColorDisplay
          color={colorInfo.hexCode}
          // onClick={handleShowColorModal}
        />
        <span>{colorInfo.hexCode}</span>
      </ColorInfo>
      <DeleteButton onClick={handleDeleteColor}>
        <img src={Delete} alt="delete button" />
      </DeleteButton>

      {/* 컬러 색상 변경을 위한 모달 */}
      {/* {isShowColorModal && (
        <ColorPickerModal
          colorInfo={colorInfo}
          handleCloseModal={handleShowColorModal}
        />
      )} */}
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
