import "./styles/DoneList.css"

//Componente encargado de contener todas las tareas cometas
//El mismo componente optiene la lista de tareas hechas, y las mapea dándole estructura individual a cada una
//cuenta con un botón en cada tarea que, al pulsar, añade la tarea a la lista de tareas para hacer y la elimina de las tareas hechas
//En caso de estas vacia la lista de tareas hecha, no muestra nada

export const DoneList = ({ estate, setestate }) => {
	return (
		<>
			{estate.done.length > 0 ? (
				<div className="containerDoneList">
					<div className="cajaTitulo">
						<h2 className="subTitulo">Done</h2>
					</div>
					{estate.done.map((x) => (
						<div className="marco">
							<h1 className="marcoTitulo" key={x.titulo}>
								{x.titulo}
							</h1>
							<div className="etiquetas">
								{x.tags.map((i) => (
									<div>
										<p className="etiqueta"> {i}</p>{" "}
									</div>
								))}
							</div>

							<p>{x.descripcion}</p>
							<h3
								onClick={() => {
									setestate({ ...estate, toDo: estate.toDo.concat(x) })
									estate.done.splice(estate.done.indexOf(x), 1)
								}}
								className="marcoButtonUnDo">
								To-Do
							</h3>
						</div>
					))}
				</div>
			) : null}
		</>
	)
}
