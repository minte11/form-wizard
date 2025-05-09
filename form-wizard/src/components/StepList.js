import React from "react";
import clsx from "clsx";

import styles from "./StepList.module.css";

function StepList({ steps, currentStep, setCurentStep, allowedStep }) {
	const handleClick = (step) => {
		if (step > allowedStep) return;
		setCurentStep(step);
	};
	return (
		<ol className={styles.stepList}>
			{steps.map(({ step, name }) => (
				<li
					key={step}
					className={clsx(
						styles.stepListItem,
						step === currentStep && styles.active,
						step <= allowedStep && styles.passed
					)}
					onClick={() => handleClick(step)}
				>
					<span className={styles.stepNum}>{step}</span>
					{name}
				</li>
			))}
		</ol>
	);
}

export default StepList;
