import styled from "@emotion/styled";
import { commonFlexCenter } from "../styles/commonStyle";

const ImageUploader = () => {
  return (
    <StyledImageUploader>
      <ImageUploaderWrapper>+ 이미지 추가</ImageUploaderWrapper>
      <span>이미지를 추가해보세요</span>
      <span>격자 위에 이미지가 오버레이 돼요!</span>
    </StyledImageUploader>
  );
};

const StyledImageUploader = styled.div`
  width: 150px;

  span {
    display: block;
    font-size: 10px;
    line-height: 130%;
  }
`;

const ImageUploaderWrapper = styled.div`
  width: 150px;
  height: 110px;
  margin-bottom: 10px;
  ${commonFlexCenter}

  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #eee;
`;

export default ImageUploader;
