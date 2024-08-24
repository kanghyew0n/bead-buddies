import styled from "@emotion/styled";

import Grid from "./components/Grid";
import Header from "./components/Header";
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <>
      <Header />
      <Body>
        <ColorPicker />
        <Grid column={50} row={30} />
        <ColorPicker />
      </Body>
    </>
  );
}

const Body = styled.main`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export default App;
