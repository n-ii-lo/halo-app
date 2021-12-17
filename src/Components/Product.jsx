import React from 'react';

const Product = ({ product }) => {
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
	let productPrice = `${currency} ${product.price}`;

	//Product setting
	return (
		<div className='product-card'>
			<h4>{productCategory}</h4>
			<h2>{productTitle}</h2>
			<p>{productPrice}</p>
			<button>Buy</button>
		</div>
	);
}

export default Product;
