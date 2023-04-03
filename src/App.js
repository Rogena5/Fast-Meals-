import { useState } from "react";
import Cart from "./componenrs/Cart/Cart";
import Header from "./componenrs/Layout/Header";
import Meals from "./componenrs/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCart = () => {
    setCartIsShown(true)
  }
  const hideCart = () => {
    setCartIsShown(false)
  }

  return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCart} />}
			<Header showCart={showCart} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
