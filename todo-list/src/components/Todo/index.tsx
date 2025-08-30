import { useState } from 'react';
import type { TodoType } from '../../utilities/types';
import Checkbox from '../Checkbox';
import styles from './style.module.css';

type TodoProps = TodoType;

export default function Todo({ todo }: TodoProps) {
	const [done, setDone] = useState(false);

	return (
		<li className={styles.todo}>
			<p>{todo}</p>
			<Checkbox checked={done} onClick={() => setDone(!done)} />
		</li>
	);
}
