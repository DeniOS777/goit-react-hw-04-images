import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  static defaultProps = {
    items: PropTypes.array.isRequired,
  };

  render() {
    const { items } = this.props;
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
  }
}
