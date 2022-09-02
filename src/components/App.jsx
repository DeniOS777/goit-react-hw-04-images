import React, { useState, useEffect } from 'react';
import { useFirstMountState } from 'react-use';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import * as API from '../services';
import 'react-toastify/dist/ReactToastify.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const perPage = 12;

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isShowLoadMore, setIsShowLoadMore] = useState(true);
  const [status, setStatus] = useState(Status.IDLE);
  const [totalHits, setTotalHits] = useState(null);

  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (isFirstMount) {
      return;
    }

    async function fetchImagesFromPixabay() {
      try {
        const data = await API.getImages(query, page, perPage);
        setTotalHits(data.totalHits);

        if (data.totalHits < perPage * page && data.hits.length !== 0) {
          notLoadMoreImagesNotification();
          setImages(state => [...state, ...data.hits]);
          setStatus(Status.RESOLVED);
          setIsShowLoadMore(state => !state);
          return;
        }
        setImages(state => [...state, ...data.hits]);
        setStatus(Status.RESOLVED);
        return;
      } catch (error) {
        setStatus(Status.REJECTED);
        errorNotification(error);
      }
    }
    fetchImagesFromPixabay();
  }, [isFirstMount, page, query]);

  useEffect(() => {
    if (totalHits === 0) {
      setStatus(Status.RESOLVED);
      return notFindedImagesNotification();
    }
  }, [totalHits]);

  useEffect(() => {
    if (totalHits > 0) {
      successFindedImagesNotification(totalHits);
    }
  }, [totalHits, query]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotalHits(null);
    setIsShowLoadMore(true);
    setStatus(Status.PENDING);
  };

  const loadMoreImages = () => {
    setPage(state => state + 1);
    setStatus(Status.PENDING);
  };

  const successFindedImagesNotification = count => {
    toast.success(`Hurra, we finded ${count} images`);
  };

  const notFindedImagesNotification = () => {
    toast.warning('Whoops not finded images. Please enter correct keyword');
  };

  const notLoadMoreImagesNotification = () => {
    toast.info(
      'Sorry, you have uploaded all images with this keyword, please try another word'
    );
  };

  const errorNotification = error => {
    toast.error(error.message);
  };

  const hasImages = images.length > 0;

  if (status === Status.IDLE) {
    return <Searchbar onSubmit={handleSubmit} />;
  }

  if (status === Status.PENDING) {
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {hasImages && <ImageGallery items={images} />}
        <Loader hasImages={hasImages} />
      </>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {hasImages && <ImageGallery items={images} />}
        {hasImages && isShowLoadMore && (
          <Button onClick={loadMoreImages}>Load more</Button>
        )}
      </>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        <ErrorMessage text="Something went wrong😢. Please try again later" />
      </>
    );
  }
};

export { App };
