import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import ItemListContainer from "./componentes/ItemListContainer";
import Main from "./componentes/Main";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer  greeting="Bienvenido/a "/>
      <Main />
      <Footer/>
    </>
  );
}

export default App;
