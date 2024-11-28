import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ChromePicker } from "react-color";
import theme from "../styles/theme";
import Button from "./common/Button";
import useColorListStore from "../store/useColorStore";
import { ColorType } from "../types/colorType";

interface Props {
  colorInfo?: ColorType;
  isShowColorModal: boolean;
  handleCloseColorModal: () => void;
}

const ColorPickerModal = ({
  colorInfo,
  isShowColorModal,
  handleCloseColorModal,
}: Props) => {
  const [pickedColor, setPickedColor] = useState<string>(
    colorInfo ? colorInfo.hexCode : "#000"
  );
  const { setAddColorList, setChangeColorList } = useColorListStore();

  const handleColorChange = (color: string) => {
    setPickedColor(color);
  };

  const handleSaveColor = () => {
    const newId = generateUniqueId();
    setAddColorList({ id: newId, hexCode: pickedColor, count: 0 });
    handleCloseColorModal();
  };

  const generateUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

  useEffect(() => {
    if (colorInfo) {
      setChangeColorList({ id: colorInfo.id, hexCode: pickedColor, count: 0 });
    }
  }, [pickedColor]);

  useEffect(() => {
    if (!isShowColorModal) return;
    document.body.addEventListener("click", handleCloseColorModal);
    return () => {
      document.body.removeEventListener("click", handleCloseColorModal);
    };
  }, []);

  return (
    <StyledColorPickerModal id="modal" onClick={(e) => e.stopPropagation()}>
      <ButtonWrapper>
        <span>색상 추가</span>
        <Button size="sm" onClick={handleCloseColorModal}>
          취소
        </Button>
        <Button role="point" size="sm" onClick={handleSaveColor}>
          저장
        </Button>
      </ButtonWrapper>
      <ChromePicker
        color={pickedColor}
        onChange={(color: { hex: string }) => handleColorChange(color.hex)}
      />
    </StyledColorPickerModal>
  );
};

const StyledColorPickerModal = styled.div`
  position: absolute;
  right: 170px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.neutral.black};
  background-color: ${theme.colors.neutral.white};
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 12px;
  border-bottom: 1px solid ${theme.colors.neutral.black};

  span {
    flex: 1;
    font-size: ${theme.fontSizes.sm};
  }
`;

export default ColorPickerModal;
