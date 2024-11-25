import styled from "@emotion/styled";
import html2canvas from "html2canvas";
import { theme } from "../styles/theme";
import Button from "./common/Button";
import Logo from "../assets/images/logo.png";
import { commonFlexCenter } from "../styles/commonStyle";
import useGridSizeStore from "../store/useGridSizeStore";
import useGridHistoryStore from "../store/useGridHistoryStore";

const Header = () => {
  const { column, row } = useGridSizeStore();
  const { history, currentHistoryIndex } = useGridHistoryStore();

  const handleDownload = () => {
    const $targetNode = document.getElementById("grid");

    html2canvas($targetNode, { useCORS: true }).then((canvas) => {
      const $downloadLink = document.getElementById(
        "downloadLink"
      ) as HTMLAnchorElement;

      $downloadLink.href = canvas.toDataURL();
      $downloadLink.download = "비즈발도안.png";
    });
  };

  // 임시 초기화
  // grid 정보를 저장해서 히스토리 관리 필요함
  const handleReset = () => {
    Array.from({ length: column * row }).forEach((_, index) => {
      const element = document.getElementById(`grid-item-${index}`);
      if (element) {
        element.style.backgroundColor = theme.colors.neutral.white;
      }
    });
  };

  // currentHistoryIndex 값도 바꿔줘야함
  const handleUndo = () => {
    Array.from({ length: column * row }).forEach((_, index) => {
      const element = document.getElementById(`grid-item-${index}`);
      if (element) {
        if (history[currentHistoryIndex].includes(index)) {
          element.style.backgroundColor = theme.colors.neutral.white;
        }
      }
    });
  };

  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo" />
      <ButtonWrapper>
        <Button role="dark" onClick={handleReset}>
          초기화
        </Button>
        <Divider />
        <Button onClick={handleUndo}>이전</Button>
        <Button disabled>다음</Button>
        <Divider />
        <DownloadButton id="downloadLink" onClick={handleDownload}>
          다운로드
        </DownloadButton>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid ${theme.colors.neutral.black};
  background-color: ${theme.colors.neutral.white};

  img {
    width: 60px;
    height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  ${commonFlexCenter}
  gap: 10px;
`;

const Divider = styled.div`
  width: 1px;
  height: 22px;
  background-color: ${theme.colors.neutral.black};
`;

const DownloadButton = styled.a`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid ${theme.colors.neutral.black};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.neutral.black};
  background-color: ${theme.colors.primary.main};
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    background-color: ${theme.colors.primary[200]};
  }
`;

export default Header;
