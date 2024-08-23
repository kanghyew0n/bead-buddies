import styled from "@emotion/styled";
import Button from "./Button";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo" />
      <ButtonWrapper>
        <Button role="dark">초기화</Button>
        <Divider />
        <Button>이전</Button>
        <Button>다음</Button>
        <Divider />
        <Button role="point">저장</Button>
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
  border-bottom: 1px solid #000;
  background-color: #fff;

  img {
    width: 60px;
    height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Divider = styled.div`
  width: 1px;
  height: 22px;
  background-color: #000;
`;

export default Header;
