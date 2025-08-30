import styles from './style.module.css';

type CheckboxProps = {
	checked: boolean;
	onClick: () => void;
};

export default function Checkbox({ checked, onClick }: CheckboxProps) {
	return (
		<input
			className={styles.checkbox}
			type="checkbox"
			checked={checked}
			onClick={onClick}
		/>
	);
}
