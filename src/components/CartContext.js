import { createContext, useState } from "react";

export const contexto = createContext ();
const Provider = contexto.Provider



const CartContext = (props) => {

    const [cart, setCart] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    /* useEffect(()=> {
      calcularTotales();
    },);

    const calcularTotales = () => {
      let total = 0;
      let cantidad = 0;

      cart.forEach((producto)=> {

        total += producto.precioTotal;
        cantidad += producto.contador;

      });

      setMontoTotal(total);
      setCantidadTotal(cantidad);

    }; */

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
      const removeProduct = cart.find((producto)=> producto.id === id);
      if(removeProduct){
        setCart(cart.filter(producto => producto.id !== id));
        /* setMontoTotal(montoTotal - removeProduct.precioTotal);
        setCantidadTotal(cantidadTotal - removeProduct.contador); */
        calcularTotales(cart.filter((producto) => producto.id !== id));

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
        /* setMontoTotal(calcularMontoTotal(updatedCart));
        setCantidadTotal(calcularCantidadTotal(updatedCart)); */
        calcularTotales(updatedCart);
      } else {
        // El producto no está en el carrito, agrégalo al carrito
        /* const precioTotal = item.price * contador; */
        setCart([...cart, { ...item, contador }]);
       /*  setMontoTotal(montoTotal + precioTotal);
        setCantidadTotal(cantidadTotal + contador); */
        calcularTotales([...cart, { ...item, contador }]);
      }
    };
    
    /* // Esta función calcula el monto total del carrito
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
    }; */

    const valorDelContexto = {
      // lo que usariamos globalmente
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