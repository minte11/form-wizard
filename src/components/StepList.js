import React from 'react';
import clsx from 'clsx';

import styles from './StepList.module.css';

function StepList ({steps, currentStep, allowedStep, handleStepChange}) {
	return (
		<ol className={styles.stepList}>
			{steps.map(step => (
				<li className={
					clsx(
						styles.stepListItem,
						step.step <= allowedStep && styles.allowed,
						currentStep === step.step && styles.active,
					)}
				    key={step.step}
				    onClick={() => handleStepChange(step.step)}
				>
					<span className={styles.stepNum}> {step.step}</span>
					{
						step.title
					}
				</li>)
			)
			}
		</ol>
	);
}

export default StepList;