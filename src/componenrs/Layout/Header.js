import headerImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  return (
		<>
			<header className={classes.header}>
				<h1>Fast meals</h1>
				<HeaderCartButton onClick={props.showCart}/>
			</header>

			<div className={classes['main-image']}>
				<img src={headerImg} alt='headerImg' />
			</div>
		</>
	);
}

export default Header