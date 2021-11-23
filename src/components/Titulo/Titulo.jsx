import './titleStyle.css'

function Title(props) {
    return (
        <div>
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="subtitulo">
                <h2>{props.subtitulo}</h2>
            </div>
            <div className="autora">
                <h3>{props.autora}</h3>
            </div>
        </div>
    )
}

export default Title