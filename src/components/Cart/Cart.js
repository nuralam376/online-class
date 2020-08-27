import React from "react";
import { ListGroup } from "react-bootstrap";

const Cart = (props) => {
	const totalPrice = props.cart.reduce((total, item) => total + item.price, 0);

	return (
		<div>
			<div className="d-flex justify-content-md-center align-items-md-center">
				<div className="mt-3">
					<h4>Ordered Courses : {props.cart.length}</h4>
					<p>Total Price : ${totalPrice}</p>
					<h6>Added Courses</h6>
					<ListGroup>
						{props.cart.map((course) => (
							<ListGroup.Item key={course.id}>
								{course.title} - ${course.price}
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
			</div>
		</div>
	);
};

export default Cart;
