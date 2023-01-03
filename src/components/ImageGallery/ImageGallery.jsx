import css from "./ImageGallery.module.css"

const ImageGallery = ({ Children, photos,handleShowModal }) => {
    return (
        <ul onClick={handleShowModal} className={css.ImageGallery}>
            {photos.map((item) => { return (
              <Children
                key={item.id}
                alt={item.tags}
                src={item.webformatURL}
                largeFormat={item.largeImageURL}
              />
            );})}
        </ul>
    )
}

export default ImageGallery