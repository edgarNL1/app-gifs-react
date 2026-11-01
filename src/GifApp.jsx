import { useState } from 'react'
import Categoria from './Categoria.jsx'

function GifApp() {
  const [categorias, setCategorias] = useState(['dragon ball', 'valorant', 'One punch'])
  const [valor, setValor] = useState('')

  const agregarCategoria = (e) => {
    if (e.key !== 'Enter') return
    const texto = valor.trim()
    if (texto.length < 2) return
    const existe = categorias.some((c) => c.toLowerCase() === texto.toLowerCase())
    if (!existe) setCategorias([texto, ...categorias])
    setValor('')
  }

  return (
    <>
      <h3>App de gifs</h3>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={agregarCategoria}
      />
      {categorias.map((c) => (
        <Categoria key={c} categoria={c} />
      ))}
    </>
  )
}

export default GifApp