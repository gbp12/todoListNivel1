import "./styles/DoneList.css"

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
