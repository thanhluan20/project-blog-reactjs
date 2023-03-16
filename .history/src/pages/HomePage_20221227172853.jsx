import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import { actFetchArticleGeneralAsync, actFetchArticleLatestAsync, actFetchArticlePolularAsync } from '../store/post/action';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actFetchArticleLatestAsync());
    dispatch(actFetchArticleGeneralAsync());
    dispatch(actFetchArticlePolularAsync());
  }, [dispatch])

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
