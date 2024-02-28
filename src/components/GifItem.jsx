export const GifItem=({url, title})=>{
    console.log(url)
    return(
        <div className="card">
            <img src={url} alt={title} />
            <figcaption>{title}</figcaption>
        </div>
    )
}