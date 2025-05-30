import React from "react";
import styles from "./SignupForm.module.css";

const StepThree = ({ name, email, plan }) => {
	return (
		<section className={styles.step}>
			<h2>Order Summary</h2>
			
			<dl>
				<dt>Name:</dt>
				<dd>{name}</dd>
				<dt>Email:</dt>
				<dd>{email}</dd>
				<dt>Plan:</dt>
				<dd>{plan}</dd>
			</dl>
		</section>
	);
}
export default StepThree;