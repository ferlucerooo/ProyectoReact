import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <ItemListContainer  greeting="Bienvenido "/>
      <Main />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
