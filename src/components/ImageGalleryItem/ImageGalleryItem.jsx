import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { ImageCard, ImageWrap } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smallImage, largeImage, tag }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => setIsShow(state => !state);

  return (
    <ImageCard onClick={toggleModal}>
      <ImageWrap>
        <img src={smallImage} alt={tag} />
      </ImageWrap>

      {isShow && (
        <Modal largeImage={largeImage} tag={tag} onClose={toggleModal} />
      )}
    </ImageCard>
  );
};

ImageGalleryItem.propTypes = {
  tag: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export { ImageGalleryItem };
