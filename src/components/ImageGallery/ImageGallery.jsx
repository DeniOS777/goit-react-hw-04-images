import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <ImageList>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          tag={tags}
        />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export { ImageGallery };
