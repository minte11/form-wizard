import React from 'react';
import clsx from 'clsx';

import styles from './StepList.module.css';

function StepList() {
	return (
		<ol className={styles.stepList}>
			<li className={clsx(styles.stepListItem, styles.active)}>
        <span className={styles.stepNum}>
          1
        </span>
				Info
			</li>
			<li className={styles.stepListItem}>
        <span className={styles.stepNum}>
          2
        </span>
				Plan
			</li>
			<li className={styles.stepListItem}>
        <span className={styles.stepNum}>
          3
        </span>
				Summary
			</li>
		</ol>
	);
}

export default StepList;