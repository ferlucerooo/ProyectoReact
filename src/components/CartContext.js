import { createContext, useEffect, useState } from "react";

export const contexto = createContext ();
const Provider = contexto.Provider



const CartContext = (props) => {

    const [cart, setCart] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(()=>{
      calcularTotales(cart);
    },[cart])

    const calcularTotales = (cart) => {
      let total = 0;
      let cantidad = 0;
  
      cart.forEach((producto) => {
        total += producto.price * producto.contador;
        cantidad += producto.contador;
      });
  
      setMontoTotal(total);
      setCantidadTotal(cantidad);
    };

    const clearCart = () => {
      setCart([]);
      setMontoTotal(0);
      setCantidadTotal(0);

    }

    const removeCart = (id) =>{
      
      const productIndex = cart.findIndex((producto) => producto.id === id);
      if (productIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        calcularTotales(updatedCart); 
      }
      
    } 


    const addCart =  (item, contador) => {

      const existingProductIndex = cart.findIndex((producto) => producto.id === item.id);

      if (existingProductIndex !== -1) {
        
        const updatedCart = [...cart];
        
        updatedCart.push({ ...item, contador });
        setCart(updatedCart);
        calcularTotales(updatedCart);
      } else {
        
        setCart((productos) => [...productos, { ...item, contador }]);
        
      }
     
    };
    
    const valorDelContexto = {
      
      carrito: cart,
      clearCart,
      removeCart,
      addCart,
      cantidadTotal,
      montoTotal,
      
    };
    console.log(valorDelContexto);

  return(
    <Provider value= {valorDelContexto}>
      {props.children}
    </Provider>
      
  )
}
export default CartContext;