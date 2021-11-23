import './reposStyle.css'
import { useState, useEffect } from 'react'

function Repos() {
    const [repositorios, setRepositorios] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/valenthinatemudo/repos')
            .then(response => response.json())
            .then(data => setRepositorios(data))
    }, [])

    useEffect(() => {
        setFiltro(
            repositorios.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    }, [repositorios, busca])

    return (
        <>
            <input className='input' placeholder="Digite o nome de um repositório" onChange={e => { setBusca(e.target.value) }} />
            {filtro.map(repo =>
                <div className='nome-repo' key={repo.id}>
                    <ul>
                        <li className='lista'>
                            <h2>{repo.name}</h2>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}


export default Repos