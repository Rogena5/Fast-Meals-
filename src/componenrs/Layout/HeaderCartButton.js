import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
	const cartcntxt = useContext(CartContext);
	
	const numberOfItems =  cartcntxt.items.reduce((currentNumber, item)=> {
		return currentNumber + item.amount
	}, 0)

  return (
		<>
			<button className={classes.button} onClick={props.onClick}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{numberOfItems}</span>
			</button>
		</>
	);
}

export default HeaderCartButton