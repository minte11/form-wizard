import React, {useId} from "react";
import styles from "./SignupForm.module.css";

const StepTwo = ({plans, plan, setPlan}) => {
	const componentId = useId();
	return (
		<section className={styles.step}>
			<h2>Select Plan</h2>
			
			<ul className={styles.planList}>
				{plans.map(({id, title, description}) => {
					const planId = `${componentId}-${id}`;
					return (
						<li key={id}>
							<input
								id={planId}
								value={id}
								type="radio"
								name="plan"
								checked={plan === id}
								onChange={(e => setPlan(e.target.value))}
							/>
							<label htmlFor={planId}>
								<span className={styles.planTitle}>{title}</span>
								<p>
									{description}
								</p>
							</label>
						</li>
					)
				})}
			</ul>
		</section>
	);
}
export default StepTwo;