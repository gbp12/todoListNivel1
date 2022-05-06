import "./styles/Main.css"
import { Header } from "./Header"
import { Formulario } from "./Formulario"
import { ToDoList } from "./ToDoList"
import { useState } from "react"
import { DoneList } from "./DoneList"
function Main() {
	const [estate, setestate] = useState({
		toDo: [],
		done: [],
	})
	return (
		<>
			<Header></Header>
			<div className="main">
				<Formulario estate={estate} setestate={setestate} />
				<div className="second">
					<ToDoList estate={estate} setestate={setestate} />
					<DoneList estate={estate} setestate={setestate}></DoneList>
				</div>
			</div>
			<footer>Todos los derechos reservados 2022.</footer>
		</>
	)
}

export default Main
