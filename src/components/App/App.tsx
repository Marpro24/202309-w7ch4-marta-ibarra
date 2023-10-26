import AppStyled from "./App.styled";

const App = (): React.ReactElement => {
  return (
    <AppStyled className="app-container">
      <header className="main-header"></header>
      <h1 className="title">Añade un perezoso</h1>
    </AppStyled>
  );
};

export default App;
