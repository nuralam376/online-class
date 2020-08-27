import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const Course = () => {
	return (
		<div>
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
		</div>
	);
};

export default Course;
