import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Shop = () => {
	return (
		<Container>
			<Row>
				<Col md={8}>
					<h1>Courses</h1>
				</Col>
				<Col md={4}>
					<h1>Cart</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;
