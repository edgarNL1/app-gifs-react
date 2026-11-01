import GifCard from './GifCard.jsx'
import { useFetchGifs } from './useFetchGifs.js'

function Categoria({ categoria }) {
  const { gifs, cargando, error } = useFetchGifs(categoria)

  return (
    <section className="categoria">
      <h2>{categoria}</h2>
      <div className="fila">
        {cargando && <p>Cargando...</p>}
        {error && <p>No se pudieron cargar los gifs.</p>}
        {gifs.map((gif) => (
          <GifCard key={gif.id} titulo={gif.titulo} url={gif.url} />
        ))}
      </div>
    </section>
  )
}

export default Categoria