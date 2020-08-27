import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Shop = () => {
	return (
		<Container>
			<Row>
				<Col md={8}>
					<h2 className="text-center mt-5 mb-5">Courses</h2>
					<Course></Course>
				</Col>
				<Col md={4}>
					<h2 className="text-center mt-5 mb-5">Cart</h2>
					<Cart></Cart>
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;
