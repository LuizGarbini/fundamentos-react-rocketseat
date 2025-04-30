import { useState } from "react";
import "./global.css";

import { Button } from "./components/button";

import styles from "./app.module.css";

// import { useMessage } from "./hooks/use-message";

export function App() {
	const [count, setCount] = useState(0);

	// const { show } = useMessage({ age: 22, name: "Luiz Garbini" });

	function handleAdd() {
		setCount(count + 1);
	}

	function handleRemove() {
		setCount(count - 1);
	}

	return (
		<div className={styles.container}>
			<Button name="Adicionar" onClick={handleAdd} />
			<span>{count}</span>
			<Button name="Remover" onClick={handleRemove} />
		</div>
	);
}
