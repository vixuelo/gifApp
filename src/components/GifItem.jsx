
import PropTypes from 'prop-types';
export const GifItem=({url, title})=>{
    console.log(url)
    return(
        <div className="card">
            <img src={url} alt={title} />
            <figcaption>{title}</figcaption>
        </div>
    )

}
GifItem.propTypes={
    url:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,

}