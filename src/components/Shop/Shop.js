import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Shop = () => {
	return (
		<Container>
			<Row>
				<Col md={8}>
					<h2 className="text-center mt-5 mb-5">Courses</h2>
					<Row className="bg-dark p-3 mb-3">
						<Col md={6}>
							<Image
								src="https://probella.com/wp-content/uploads/2018/03/React-JS.png"
								thumbnail
							/>
						</Col>
						<Col
							md={6}
							className="text-white d-flex justify-content-md-center align-items-md-center"
						>
							<div className="mt-2">
								<h3>React.js </h3>
								<p>Price : $1000</p>
								<p>Instructor : Ryan Dahl</p>
								<p>Duration : 50hours</p>
								<Button variant="info">Enroll Now</Button>
							</div>
						</Col>
					</Row>
					<Row className="bg-dark p-3 mb-3">
						<Col md={6}>
							<Image
								src="https://probella.com/wp-content/uploads/2018/03/React-JS.png"
								thumbnail
							/>
						</Col>
						<Col
							md={6}
							className="text-white d-flex justify-content-md-center align-items-md-center"
						>
							<div className="mt-2">
								<h3>React.js </h3>
								<p>Price : $1000</p>
								<p>Instructor : Ryan Dahl</p>
								<p>Duration : 50hours</p>
								<Button variant="info">Enroll Now</Button>
							</div>
						</Col>
					</Row>
					<Row className="bg-dark p-3 mb-3">
						<Col md={6}>
							<Image
								src="https://probella.com/wp-content/uploads/2018/03/React-JS.png"
								thumbnail
							/>
						</Col>
						<Col
							md={6}
							className="text-white d-flex justify-content-md-center align-items-md-center"
						>
							<div className="mt-2">
								<h3>React.js </h3>
								<p>Price : $1000</p>
								<p>Instructor : Ryan Dahl</p>
								<p>Duration : 50hours</p>
								<Button variant="info">Enroll Now</Button>
							</div>
						</Col>
					</Row>
				</Col>
				<Col md={4}>
					<h2 className="text-center mt-5 mb-5">Cart</h2>
					<div className="d-flex justify-content-md-center align-items-md-center">
						<div className="mt-3">
							<h4>Ordered Courses : 0</h4>
							<p>Total Price : $100000</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;
