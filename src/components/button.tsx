type Props = {
	name: string;
	onClick?: () => void;
};

export function Button({ name, onClick }: Props) {
	// biome-ignore lint/a11y/useButtonType: <explanation>
	return <button onClick={onClick}>{name}</button>;
}
