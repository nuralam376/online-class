import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Shop = () => {
	const [courses, setCourses] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const allCourses = [
			{
				id: 1,
				title: "React.js",
				price: 1000,
				instructor: "Ryan Dahl",
				duration: 50,
			},
			{
				id: 2,
				title: "Node.js",
				price: 2000,
				instructor: "Brad Traversy",
				duration: 30,
			},
			{
				id: 3,
				title: "Python",
				price: 5000,
				instructor: "Maximilian",
				duration: 70,
			},
		];
		setCourses(allCourses);
	}, []);

	const handleCourseClick = (course) => {
		let oldCourse = cart.find((items) => items.title === course.title);

		if (oldCourse) {
			alert("Course already added in the cart");
			return;
		}
		const newCart = [...cart, course];
		setCart(newCart);
	};

	return (
		<Container>
			<Row>
				<Col md={8}>
					<h2 className="text-center mt-5 mb-5">Courses</h2>
					{courses.map((course) => (
						<Course
							key={course.id}
							course={course}
							handleCourseClick={handleCourseClick}
						></Course>
					))}
				</Col>
				<Col md={4}>
					<h2 className="text-center mt-5 mb-5">Cart</h2>
					<Cart cart={cart}></Cart>
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;
