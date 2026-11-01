function GifCard({ titulo, url }) {
  return (
    <div className="card">
      <img src={url} alt={titulo} />
      <p>{titulo}</p>
    </div>
  )
}

export default GifCard