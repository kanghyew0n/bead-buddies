import styled from "@emotion/styled";
import Delete from "../assets/images/delete.svg";

const ColorChip = () => {
  return (
    <StyledColorChip>
      <ColorInfo>
        <ColorDisplay />
        <span>#FF7979</span>
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

const ColorDisplay = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #000;
  background-color: #ff7979;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
