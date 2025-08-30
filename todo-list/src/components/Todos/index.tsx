import type { TodoType } from '../../utilities/types';
import Todo from '../Todo';
import styles from './style.module.css';

type TodosProps = {
	todos: TodoType[];
};

export default function Todos({ todos }: TodosProps) {
	return (
		<ul className={styles.todos}>
			{todos.map((todo) => (
				<Todo key={todo.id} id={todo.id} todo={todo.todo} />
			))}
		</ul>
	);
}
