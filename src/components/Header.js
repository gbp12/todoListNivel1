import "./styles/Header.css"
//encabezado de la página simple acomodado con flex y space between
export const Header = () => {
	return (
		<div className="headerMain">
			<h1 className="titulo">ToDoApp</h1>
			<h2>Aplicación para la gestión de proyectos</h2>
		</div>
	)
}
