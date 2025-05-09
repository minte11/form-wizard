import React from "react";
import clsx from "clsx";

import StepList from "./StepList";
import styles from "./SignupForm.module.css";

const steps = [
	{
		step: 1,
		name: "info",
	},
	{
		step: 2,
		name: "Plan",
	},
	{
		step: 3,
		name: "Summary",
	},
];

const PLANS = [
	{
		id: 1,
		name: "Free Trial",
		description:
			"Start a 2-week free trial, to test the application out and see what you think.",
	},
	{
		id: 2,
		name: "Advanced Package",
		description:
			"Take advantage of the full suite of tools. For students and professionals.",
	},
	{
		id: 3,
		name: "Team Package",
		description:
			"Onboard the entire team, for incredible synergy and productivity across the organization.",
	},
];

const defaultState = {
	name: "",
	email: "",
	planId: null,
};

function SignupForm() {
	const [currentStep, setCurentStep] = React.useState(1);
	const [form, setForm] = React.useState(() => defaultState);
	const [allowedStep, setAllowedStep] = React.useState(1);
	
	const isLastStep = currentStep === steps.length;
	
	const handleStep = () => {
		if (currentStep === 1) {
			if (!form.name || !form.email) {
				alert("Please enter the name and email");
				return;
			}
		}
		if (currentStep === 2) {
			if (!form.planId) {
				alert("Please select plan to continue");
				return;
			}
		}
		if (isLastStep) {
			return alert(JSON.stringify(form));
		}
		setCurentStep(currentStep + 1);
	};
	const handleReset = () => {
		setForm(defaultState);
		setCurentStep(1);
	};
	
	React.useEffect(() => {
		let step = 1;
		if (form.name && form.email) step = 2;
		if (form.name && form.email && form.planId) step = 3;
		setAllowedStep(step);
	}, [form]);
	
	const selectedPlan = PLANS.find((plan) => plan.id === form.planId);
	const selectedPlanName = selectedPlan?.name;
	
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<StepList
					steps={steps}
					allowedStep={allowedStep}
					currentStep={currentStep}
					setCurentStep={setCurentStep}
				/>
			</header>
			<form className={styles.form}>
				{currentStep === 1 && <StepOne form={form} setForm={setForm} />}
				{currentStep === 2 && (
					<StepTwo form={form} plans={PLANS} setForm={setForm} />
				)}
				{currentStep === 3 && (
					<StepThree
						name={form.name}
						email={form.email}
						plan={selectedPlanName}
					/>
				)}
			</form>
			
			<section className={styles.actions}>
				<button
					onClick={handleReset}
					className={clsx(styles.btn, styles.secondary)}
				>
					Reset
				</button>
				<button
					className={clsx(styles.btn, styles.primary)}
					onClick={handleStep}
				>
					Continue »
				</button>
			</section>
		</div>
	);
}

const StepOne = ({ form, setForm }) => {
	return (
		<section className={styles.step}>
			<h2>Personal Information</h2>
			
			<label>Preferred name:</label>
			<input
				type="text"
				value={form.name}
				onChange={(e) => {
					setForm((prev) => ({
						...prev,
						name: e.target.value,
					}));
				}}
			/>
			
			<label>Email address:</label>
			<input
				type="email"
				value={form.email}
				onChange={(e) => {
					setForm((prev) => ({
						...prev,
						email: e.target.value,
					}));
				}}
			/>
		</section>
	);
};

const StepTwo = ({ form, plans, setForm }) => {
	return (
		<section className={styles.step}>
			<h2>Select Plan</h2>
			
			<ul className={styles.planList}>
				{plans.map(({ id, name, description }) => (
					<li key={id}>
						<input
							type="radio"
							name="plan"
							value={id}
							id={id}
							checked={form.planId === id}
							onChange={(e) => {
								setForm((prev) => ({
									...prev,
									planId: Number(e.target.value),
								}));
							}}
						/>
						<label htmlFor={id}>
							<span className={styles.planTitle}>{name}</span>
							<p>{description}</p>
						</label>
					</li>
				))}
			</ul>
		</section>
	);
};

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
};
export default SignupForm;
