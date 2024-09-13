import styled from "@emotion/styled";

import Grid from "./components/Grid";
import Header from "./components/Header";
import ColorPalette from "./components/ColorPalette";
import GridSizeControl from "./components/GridSizeControl";
import ImageUploader from "./components/ImageUploader";

function App() {
  return (
    <>
      <Header />
      <Body>
        <GridControlSection>
          <GridSizeControl />
          <ImageUploader />
        </GridControlSection>
        <Grid />
        <ColorPalette />
      </Body>
    </>
  );
}

const Body = styled.main`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const GridControlSection = styled.section`
  height: 100%;
  > div + div {
    margin-top: 20px;
  }
`;

export default App;
