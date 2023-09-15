Descripcion del proyecyo

Trate de hacer un e-commerce como proyecto para el curso de React ofrecido por coderhouse.En el cual se puede filtrar por categorias, al no tener nada en el carrito este mismo no aparece en la landing y al tener aparece en el navBar.
Hacemos un pedido a una base de datos, en este caso usamos firebase como base de datos para guardar nuestros productos.
Al precionar en el detalle que posee cada card nos lleva al detalle de cada producto y a demas en el detalle nos aparece el contador y un boton de agregar al carrito con un maximo de 10 que es el stock que hay. 

La idea de este proyecto es aplicar todas las tecnicas y conceptos de React aprendidos durante la cursada de la mejor manera posible. No le dimos mucha importancia al diseño ya que le dimos muchas mas importancia a la funcionalidad del mismo.

Para iniciar el proyecto se uso:

1- se instalo todos los componentes de react por defecto de la siguiente manera: 
- npm i-g create-react-app
- create-react-app
- create-react-app miproyecto
- para iniciar el server usamos npm start
2- se instalo bootstrap-icons usando 
- npm i bootstrap-icons
3- se instalo firebase que seria la base de datos que utilizamos para el proyecto
- crear cuenta en la web
- crear un proyecto 
- crear la base de datos
- establecer coneccion con la base de datos
4- se instalo react-router-dom para el manejo de las rutas en la app de la siguiente manera
- npm install react-router-dom
- npm run dev

Componentes que use:

cart: aca tenemos lo que se agrega al carrito con una funcion para eliminar de a un producto
cartContext:es el contexto, lo que usamos globalmente esta aca, especialmente lo usamos para el carrito, traer y llevar info a toda la app
cartWidget: solo tenemos el icono del carrito con el numero que se actualiza segun tengamos o no productos en el carrito
footer: simplemte es un footer
header: un header normal que dentro tiene el navbar
item: Muestra la card de cada producto 
itemCount: aca tenemos el contador con sus respectivas funciones para sumar y restar la cantidad
itemDetail: aca tenemos el detalle de cada prodcuto
itemDetalContainer: pedimos a la base de datos el detalle de cada producto segun su id
itemList:  pedimos a la base de datos todos los productos que hay en ella
itemListContainer: Solo recibe un prop para mostar un mensaje; dentro tiene a itemlist
Main: Aca es donde estan todas las rutas proporcionada virtualmente por react-router-dom
NavBar: aca tenemos las rutas por categoria y el cartwidget
firebase: Este componente tiene la configuracion de firebase

