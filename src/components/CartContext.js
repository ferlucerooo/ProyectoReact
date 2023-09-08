import { createContext, useState } from "react";

export const contexto = createContext ();
const Provider = contexto.Provider



const CartContext = (props) => {

    const [cart, setCart] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const clearCart = () => {
      setCart([]);
      setMontoTotal(0);
      setCantidadTotal(0);

    }


    /* const inCart = (item) => {
      return cart.find((producto) => producto.id === item.id) ? true : false;
    } */

    const removeCart = (id) =>{
      const removeProduct = cart.find((producto)=> producto.id === id);
      if(removeProduct){
        setCart(cart.filter(producto => producto.id !== id));
        setMontoTotal(montoTotal - removeProduct.precioTotal);
        setCantidadTotal(cantidadTotal - removeProduct.contador);
      }
      
    } 

    const addCart =  (item, contador) => {
      const inCart = cart.find((producto) => producto.id === item.id )
      if (inCart) {
        // El producto ya está en el carrito, actualiza su cantidad
        const updatedCart = cart.map((producto) =>
          producto.id === item.id
            ? { ...producto, contador: producto.contador + contador }
            : producto
        );
        setCart(updatedCart);
        setMontoTotal(calcularMontoTotal(updatedCart));
        setCantidadTotal(calcularCantidadTotal(updatedCart));
      } else {
        // El producto no está en el carrito, agrégalo al carrito
        const precioTotal = item.price * contador;
        setCart([...cart, { ...item, contador }]);
        setMontoTotal(montoTotal + precioTotal);
        setCantidadTotal(cantidadTotal + contador);
      }
    };
    
    // Esta función calcula el monto total del carrito
    const calcularMontoTotal = (cart) => {
      return cart.reduce((total, producto) => {
        return total + producto.price * producto.contador;
      }, 0);
    };
    
    // Esta función calcula la cantidad total de productos en el carrito
    const calcularCantidadTotal = (cart) => {
      return cart.reduce((total, producto) => {
        return total + producto.contador;
      }, 0);
    };

    const valorDelContexto = {
      // lo que usariamos globalmente
      carrito : cart,
      clearCart,
      removeCart,
      addCart,
    };
    console.log(valorDelContexto);

  return(
    <Provider value= {valorDelContexto}>
      {props.children}
    </Provider>
      
  )
}
export default CartContext;