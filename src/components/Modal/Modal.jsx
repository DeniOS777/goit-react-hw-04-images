import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const refModalRoot = document.querySelector('#root-modal');

export class Modal extends Component {
  static defaultProps = {
    largeImage: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEscape);
  }

  handlePressEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = e => {
    if (e.target !== e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, tag } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleClickBackdrop}>
        <ModalWindow>
          <img src={largeImage} alt={tag} />
        </ModalWindow>
      </Backdrop>,
      refModalRoot
    );
  }
}
