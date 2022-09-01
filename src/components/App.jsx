import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import * as API from '../services';

import 'react-toastify/dist/ReactToastify.css';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isShowLoadMore: true,
    status: STATUS.IDLE,
  };

  perPage = 12;

  async componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state;

    try {
      if (
        prevState.query !== query ||
        prevState.page !== page ||
        prevState.images > images
      ) {
        const data = await API.getImages(query, page);

        if (data.totalHits === 0) {
          this.setState({ status: STATUS.RESOLVED });
          return this.notFindedImagesNotification();
        }

        if (
          prevState.page === page ||
          prevState.query !== query ||
          prevState.images > images
        ) {
          this.successFindedImages(data.totalHits);
        }

        if (data.totalHits < this.perPage * page) {
          this.notLoadMoreImagesNotification();
          return this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            status: STATUS.RESOLVED,
            isShowLoadMore: !prevState.isShowLoadMore,
          }));
        }
        return this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          status: STATUS.RESOLVED,
        }));
      }
    } catch (error) {
      this.setState({ status: STATUS.REJECTED });
      this.errorNotification(error);
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      status: STATUS.PENDING,
      isShowLoadMore: true,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: STATUS.PENDING,
    }));
  };

  successFindedImages = count => {
    toast.success(`Hurra, we finded ${count} images`);
  };

  notFindedImagesNotification = () => {
    toast.warning('Whoops not finded images. Please enter correct keyword');
  };

  notLoadMoreImagesNotification = () => {
    toast.info(
      'Sorry, you have uploaded all images with this keyword, please try another word'
    );
  };

  errorNotification = error => {
    toast.error(error.message);
  };

  render() {
    const { images, status, isShowLoadMore } = this.state;
    const hasImages = images.length > 0;

    if (status === STATUS.IDLE) {
      return <Searchbar onSubmit={this.handleSubmit} />;
    }

    if (status === STATUS.PENDING) {
      return (
        <>
          <Searchbar onSubmit={this.handleSubmit} />
          {hasImages && <ImageGallery items={images} />}
          <Loader hasImages={hasImages} />
        </>
      );
    }

    if (status === STATUS.RESOLVED) {
      return (
        <>
          <Searchbar onSubmit={this.handleSubmit} />
          {hasImages && <ImageGallery items={images} />}
          {hasImages && isShowLoadMore && (
            <Button onClick={this.loadMoreImages}>Load more</Button>
          )}
        </>
      );
    }

    if (status === STATUS.REJECTED) {
      return (
        <>
          <Searchbar onSubmit={this.handleSubmit} />
          <ErrorMessage text="Something went wrong😢. Please try again later" />
        </>
      );
    }
  }
}
