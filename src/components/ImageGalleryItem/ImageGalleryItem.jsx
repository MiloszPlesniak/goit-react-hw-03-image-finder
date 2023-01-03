import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ alt, src, largeFormat }) => {
  return (
    <li className={css.galleryItem}>
      <img
        data-photo={largeFormat}
        className={css.ImageGalleryItemImage}
        src={src}
        alt={alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
