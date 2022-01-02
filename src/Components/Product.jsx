import { useState } from "react";
import { ProductModal } from ".";

export const Product = ({ product }) => {
	//Product title
	const str = product.name;
	const arr = str.split(' ')
	for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	const productTitle = arr.join(" ")

	//Product category
	const productCategory = product.category.toUpperCase();

	//Product currency
	let currency = '$'
	const productPrice = `${currency} ${product.price}`;

	//Buy button
	const [modalActive, setModalActive] = useState(true);

	//Product grid
	return (
		<div className='product-card'>
			<h3 className="product-card__category">{productCategory}</h3>
			<h2 className="product-card__title">{productTitle}</h2>
			<div className="product-card__price-info">
				<span className="product-card__price">{productPrice}</span>
				<button className="buy-btn default-btn" onClick={() => setModalActive(true)} >Buy</button>
			</div>
			<ProductModal active={modalActive} setActive={setModalActive} />
		</div>
	);
}
