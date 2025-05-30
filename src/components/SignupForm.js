import React from 'react';
import clsx from 'clsx';

import StepList from './StepList';
import StepOne from './StepOne';
import styles from './SignupForm.module.css';
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const defaultFormState = {
	name: '',
	email: '',
	plan: '',
};

const STEPS = [
	{
		step: 1,
		title: 'Info',
	},
	{
		step: 2,
		title: 'Plan',
	},
	{
		step: 3,
		title: 'Summary',
	}
];

const PLANS = [
	{
		id: 'trial',
		title: 'Free Trial',
		description: 'Start a 2-week free trial, to test the application out and see what you think.',
	},
	{
		id: 'advanced',
		title: 'Advanced Package',
		description: 'Take advantage of the full suite of tools. For students and professionals.',
	},
	{
		id: 'team',
		title: 'Team Package',
		description: 'Onboard the entire team, for incredible synergy and productivity across the organization.',
	},
];

function SignupForm () {
	const [step, setStep] = React.useState(1);
	const [formState, setFormState] = React.useState(defaultFormState);
	const {name, email, plan} = formState;
	const [reachedStep, setReachedStep] = React.useState(1);
	
	const isLastStep = step === STEPS.length;
	
	const handleStepChange = (stepNumber) => {
		const targetStep = stepNumber ?? step + 1;
		if (targetStep > step) {
			if (step === 1 && (!name || !email)) {
				alert('Please fill in all fields');
				return;
			}
			if (step === 2 && !plan) {
				alert('Please select a plan');
				return;
			}
			if (isLastStep && targetStep > step) {
				alert(JSON.stringify(formState));
				return;
			}
			setReachedStep(prev => Math.max(prev, targetStep));
		}

		setStep(targetStep);
	};


	const setName = (name) => {
		return setFormState(prevState => ({
			...prevState,
			name,
		}));
	}
	const setEmail = (email) => {
		return setFormState(prevState => ({
			...prevState,
			email,
		}));
	}
	const setPlan = (plan) => {
		return setFormState(prevState => ({
			...prevState,
			plan,
		}));
	}
	
	return (
		<form className={styles.wrapper} onSubmit={(e) => {
			e.preventDefault()
			handleStepChange()
		}}>
			<header className={styles.header}>
				<StepList steps={STEPS} currentStep={step} allowedStep={reachedStep} handleStepChange={handleStepChange} />
			</header>
			{step === 1 && (
				<StepOne name={name} email={email} setName={setName} setEmail={setEmail}/>
			)}
			{step === 2 && (
				<StepTwo plans={PLANS} plan={plan} setPlan={setPlan}/>
			)}
			{step === 3 && (
				<StepThree name={name} email={email} plan={plan}/>
			)}
			
			<section className={styles.actions}>
				<button
					type="button"
					className={clsx(styles.btn, styles.secondary)}
				>
					Reset
				</button>
				<button
					className={clsx(styles.btn, styles.primary)}
				>
					{isLastStep ? 'Submit' : 'Continue »'}
				</button>
			</section>
		</form>
	);
}

export default SignupForm;