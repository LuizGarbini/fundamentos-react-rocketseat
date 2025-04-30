import "./global.css";

import { Button } from "./components/button";

import styles from "./app.module.css";

import { useMessage } from "./hooks/use-message";

export function App() {
	const { show } = useMessage({ age: 22, name: "Luiz Garbini" });

	return (
		<div className={styles.container}>
			<Button
				name="Adicionar"
				onClick={() => show("Mensagem personalizada do meu hook")}
			/>
			<span>0</span>
			<Button name="Remover" />
		</div>
	);
}
