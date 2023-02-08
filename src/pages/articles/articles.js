import React, { useEffect, useState } from 'react';
import axiosInstance from './../../axiosConfig/axios';
import Loader from './../../components/loader/loader';
import { useSelector, useDispatch } from 'react-redux';
import { changeArticles } from '../../store/actions/articles';

const Articles = () => {



  const loader = useSelector((state) => state.loader.loader)
  const articles = useSelector((state) => state.articles)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(changeArticles())

  }, []);




  return (
    <div>
      {loader && <Loader />}

      <div className="row row-cols-1 row-cols-md-3 g-4">

        {articles.map((article, index) => {

          return <div className="col" key={index}>
            <div className="card h-100">
              <img src={article.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article.author}</h5>
                <p className="card-text">{article.title}</p>
              </div>
            </div>
          </div>

        })}


      </div>
    </div>
  );
}

export default Articles;
