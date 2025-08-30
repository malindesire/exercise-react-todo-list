import type { TodoType } from '../../utilities/types';
import Checkbox from '../Checkbox';
import styles from './style.module.css';

type TodoProps = TodoType;

export default function Todo({ todo, done }: TodoProps) {
	return (
		<div className={styles.todo}>
			<p>{todo}</p>
			<Checkbox checked={done} />
		</div>
	);
}
