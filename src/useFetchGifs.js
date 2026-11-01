import { useEffect, useState } from 'react'

const API_KEY = 'FRZw2kn48a3snGtSFOqmVkFOs2HrhNSd'
const LIMITE = 10

export function useFetchGifs(categoria) {
  const [gifs, setGifs] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const cargar = async () => {
      try {
        const url =
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}` +
          `&q=${encodeURIComponent(categoria)}&limit=${LIMITE}`
        const respuesta = await fetch(url)
        const { data } = await respuesta.json()
        setGifs(
          data.map((g) => ({
            id: g.id,
            titulo: g.title,
            url: g.images.downsized_medium.url,
          }))
        )
      } catch {
        setError(true)
      } finally {
        setCargando(false)
      }
    }
    cargar()
  }, [categoria])

  return { gifs, cargando, error }
}