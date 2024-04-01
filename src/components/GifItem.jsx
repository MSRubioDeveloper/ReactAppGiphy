

export const GifItem = ({ url, title }) => {
  return (
    <div className="card">
        
        <img src={ url } alt={ title }  width={"120px"} />
        <p>{ title }</p>
    </div>
  )
}
