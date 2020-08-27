import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const Course = (props) => {
	const { title, price, instructor, duration, image } = props.course;

	return (
		<div>
			<Row className="bg-dark p-3 mb-3">
				<Col md={6}>
					<Image src={image} thumbnail />
				</Col>
				<Col
					md={6}
					className="text-white d-flex justify-content-md-center align-items-md-center"
				>
					<div className="mt-2">
						<h3>{title}</h3>
						<p>Price : ${price}</p>
						<p>Instructor : {instructor}</p>
						<p>Duration : {duration} hours</p>
						{/* Passing the course info in the shop component */}
						<Button
							variant="info"
							onClick={() => props.handleCourseClick(props.course)}
						>
							Enroll Now
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Course;
