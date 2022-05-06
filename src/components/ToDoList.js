import "./styles/ToDoList.css"

export const ToDoList = ({ estate, setestate }) => {
	return (
		<>
			{estate.toDo.length > 0 ? (
				<div className="containerTodoList">
					<div className="cajaTitulo">
						<h2 className="subTitulo">To-Do</h2>
					</div>

					{estate.toDo.map((x) => (
						<div className="marco">
							<h1 className="marcoTitulo" key={x}>
								{x.titulo}
							</h1>
							<div className="etiquetas">
								{x.tags.map((i) => (
									<div>
										<p className="etiqueta"> {i}</p>
									</div>
								))}
							</div>
							<p>{x.descripcion}</p>
							<h3
								onClick={() => {
									console.log(estate.toDo.indexOf(x))
									setestate({ ...estate, done: estate.done.concat(x) })
									estate.toDo.splice(estate.toDo.indexOf(x), 1)
								}}
								className="marcoButtonDo">
								Done
							</h3>
						</div>
					))}
				</div>
			) : null}
		</>
	)
}
