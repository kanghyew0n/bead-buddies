import Grid from "./components/Grid";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Grid column={50} row={30} />
    </>
  );
}

export default App;
