import styles from './style.module.css';

type CheckboxProps = {
	checked: boolean;
};

export default function Checkbox({ checked }: CheckboxProps) {
	return (
		<input className={styles.checkbox} type="checkbox" checked={checked} />
	);
}
