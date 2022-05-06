import "./styles/Formulario.css"
import { useState } from "react"

//formulario encargado de recoger los datos del usuario y despues de darle un formato adecuado a las etiquetas, lo setea en el estado

export const Formulario = ({ estate, setestate }) => {
	const [formu, setformu] = useState({ titulo: "", descripcion: "" })
	const handleChange = (e) => {
		setformu({
			...formu,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		var etiquetas = formu.tags.split(",")
		setestate({
			...estate,
			toDo: estate.toDo.concat({ titulo: formu.titulo, descripcion: formu.descripcion, tags: etiquetas }),
		})
	}

	return (
		<div className="containerForm">
			<div className="cajaTitulo">
				<h2 className="subTitulo">CREATE</h2>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="inputContainer">
					<div className="litlInput">
						<h3>Título</h3>
						<input
							placeholder="Título de la tarea"
							className="textoPequeño"
							type="text"
							name="titulo"
							value={formu.titulo}
							onChange={handleChange}
						/>
						<h3>Tags</h3>
						<input
							className="textoPequeño"
							type="text"
							name="tags"
							placeholder="Etiquetas separadas por comas"
							value={formu.tags}
							onChange={handleChange}
						/>
					</div>
					<div className="bigInput">
						<h3>Descripción</h3>
						<textarea
							id="textoGrande"
							type="text"
							name="descripcion"
							value={formu.descripcion}
							onChange={handleChange}
							placeholder="Breve descripción...."
						/>
					</div>
				</div>
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}
