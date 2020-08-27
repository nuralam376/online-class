import React from "react";
import { ListGroup, Image } from "react-bootstrap";

const Cart = (props) => {
	// Added the total prices of the cart courses
	const totalPrice = props.cart.reduce((total, item) => total + item.price, 0);

	return (
		<div>
			<div className="d-flex justify-content-md-center align-items-md-center">
				<div className="mt-3">
					<h4>Ordered Courses : {props.cart.length}</h4>
					<p>Total Price : ${totalPrice}</p>
					<h6>Added Courses</h6>
					{/* Displays the lists of courses  in the cart*/}
					<ListGroup>
						{props.cart.map((course) => (
							<ListGroup.Item key={course.id}>
								<Image src={course.image} style={{ height: "30px" }} /> -{" "}
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
