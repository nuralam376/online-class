import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import CoursesData from "../../fakeData/courses";

const Shop = () => {
	const [courses, setCourses] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		// Set the courses fake data
		const allCourses = CoursesData;
		setCourses(allCourses);
	}, []);

	// Handles the course content user clicks
	const handleCourseClick = (course) => {
		// Checks whether the course is already present in the cart
		let oldCourse = cart.find((items) => items.title === course.title);

		if (oldCourse) {
			alert("Course already added in the cart");
			return;
		}

		// Added the new course in the cart with the previous courses
		const newCart = [...cart, course];
		setCart(newCart);
	};

	return (
		<Container>
			<Row>
				<Col md={8}>
					<h2 className="text-center mt-5 mb-5">Courses</h2>

					{/* Displays the courses using the Course component*/}
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
					{/* Displays the cart info using the Cart Component */}
					<Cart cart={cart}></Cart>
				</Col>
			</Row>
		</Container>
	);
};

export default Shop;
