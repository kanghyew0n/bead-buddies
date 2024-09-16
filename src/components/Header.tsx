import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import html2canvas from "html2canvas";
import Button from "./common/Button";
import Logo from "../assets/images/logo.png";
import { commonFlexCenter } from "../styles/commonStyle";

const Header = () => {
  const handleDownload = () => {
    const $targetNode = document.getElementById("grid");

    html2canvas($targetNode, { useCORS: true }).then((canvas) => {
      const $downloadLink = document.getElementById(
        "downloadLink"
      ) as HTMLAnchorElement;
      console.log("$downloadLink", $downloadLink);
      $downloadLink.href = canvas.toDataURL();
      $downloadLink.download = "비즈발도안.png";
    });
  };

  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo" />
      <ButtonWrapper>
        <Button role="dark">초기화</Button>
        <Divider />
        <Button disabled>이전</Button>
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
