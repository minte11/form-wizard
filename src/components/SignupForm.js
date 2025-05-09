import React from 'react';
import clsx from 'clsx';

import StepList from './StepList';
import styles from './SignupForm.module.css';

function SignupForm() {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<StepList />
			</header>
			
			<section className={styles.step}>
				<h2>Personal Information</h2>
				
				<label>Preferred name:</label>
				<input type="text" />
				
				<label>Email address:</label>
				<input type="email" />
			</section>
			
			<section className={styles.step}>
				<h2>Select Plan</h2>
				
				<ul className={styles.planList}>
					<li>
						<input type="radio" name="plan" value="trial" />
						<label>
              <span className={styles.planTitle}>
                Free Trial
              </span>
							<p>
								Start a 2-week free trial, to test the
								application out and see what you think.
							</p>
						</label>
					</li>
					<li>
						<input
							type="radio"
							name="plan"
							value="advanced"
						/>
						<label>
              <span className={styles.planTitle}>
                Advanced Package
              </span>
							<p>
								Take advantage of the full suite of tools.
								For students and professionals.
							</p>
						</label>
					</li>
					<li>
						<input type="radio" name="plan" value="team" />
						<label>
              <span className={styles.planTitle}>
                Team Package
              </span>
							<p>
								Onboard the entire team, for incredible
								synergy and productivity across the
								organization.
							</p>
						</label>
					</li>
				</ul>
			</section>
			
			<section className={styles.step}>
				<h2>Order Summary</h2>
				
				<dl>
					<dt>Name:</dt>
					<dd>J. Smith</dd>
					<dt>Email:</dt>
					<dd>smith@acme.test</dd>
					<dt>Plan:</dt>
					<dd>Free Trial</dd>
				</dl>
			</section>
			
			<section className={styles.actions}>
				<button
					className={clsx(styles.btn, styles.secondary)}
				>
					Reset
				</button>
				<button
					className={clsx(styles.btn, styles.primary)}
				>
					Continue »
				</button>
			</section>
		</div>
	);
}

export default SignupForm;