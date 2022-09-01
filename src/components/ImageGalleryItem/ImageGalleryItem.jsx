import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { ImageCard, ImageWrap } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static defaultProps = {
    tag: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  state = {
    isShow: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isShow: !prevState.isShow }));

  render() {
    const { isShow } = this.state;
    const { smallImage, largeImage, tag } = this.props;

    return (
      <ImageCard onClick={this.toggleModal}>
        <ImageWrap>
          <img src={smallImage} alt={tag} />
        </ImageWrap>

        {isShow && (
          <Modal largeImage={largeImage} tag={tag} onClose={this.toggleModal} />
        )}
      </ImageCard>
    );
  }
}
