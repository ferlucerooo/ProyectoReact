import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import CartContext from "./components/CartContext";


function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main />
        <Footer/>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
