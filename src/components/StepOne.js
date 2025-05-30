import React from "react";
import styles from "./SignupForm.module.css";

const StepOne = ({ name, email, setName, setEmail}) => {
	return (
		<section className={styles.step}>
			<h2>Personal Information</h2>
			
			<label>Preferred name: </label>
			<input type="text" name="name" value={name} onChange={(e) =>  setName(e.target.value)}/>
			
			<label>Email address:</label>
			<input type="email" name={email} value={email} onChange={(e) =>  setEmail(e.target.value)}/>
		</section>
	);
}

export default StepOne;