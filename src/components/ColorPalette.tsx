import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "./common/Button";
import ColorChip from "./ColorChip";
import useColorListStore from "../store/useColorStore";
import ColorPickerModal from "./ColorPickerModal";

const ColorPalette = () => {
  const [isShowColorModal, setIsShowColorModal] = useState<boolean>(false);
  const { colorList } = useColorListStore();
  const { setSelectedColor } = useColorListStore();

  const handleToggleColorModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShowColorModal(!isShowColorModal);
  };

  const handleCloseColorModal = () => {
    setIsShowColorModal(false);
  };

  return (
    <StyledColorPalette>
      <Button width="100%" onClick={handleToggleColorModal}>
        + 색상 추가
      </Button>
      <ColorPaletteWrapper>
        {colorList.map((colorInfo, idx) => (
          <ColorChip
            key={idx}
            colorInfo={colorInfo}
            hexCode={colorInfo.hexCode}
            onClick={() => setSelectedColor(colorInfo)}
          />
        ))}
      </ColorPaletteWrapper>

      {isShowColorModal && (
        <ColorPickerModal
          isShowColorModal={isShowColorModal}
          handleCloseColorModal={handleCloseColorModal}
        />
      )}
    </StyledColorPalette>
  );
};

const StyledColorPalette = styled.div`
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > button {
    margin-bottom: 5px;
  }
`;

const ColorPaletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
`;

export default ColorPalette;
