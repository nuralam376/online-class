import React from "react";

const Cart = (props) => {
	const totalPrice = props.cart.reduce((total, item) => total + item.price, 0);

	return (
		<div>
			<div className="d-flex justify-content-md-center align-items-md-center">
				<div className="mt-3">
					<h4>Ordered Courses : {props.cart.length}</h4>
					<p>Total Price : ${totalPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
