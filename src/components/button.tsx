type Props = React.ComponentProps<"button"> & {
	name: string;
};

export function Button({ name, onClick }: Props) {
	// biome-ignore lint/a11y/useButtonType: <explanation>
	return <button onClick={onClick}>{name}</button>;
}
