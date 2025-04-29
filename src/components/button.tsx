type Props = {
	name: string;
};

export function Button({ name }: Props) {
	// biome-ignore lint/a11y/useButtonType: <explanation>
	return <button>{name}</button>;
}
