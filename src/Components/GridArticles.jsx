import React from 'react';
import ArticleCard from './ArticleCard';
import {Link} from 'react-router-dom';

const GridArticles = () => {
  const imgLink = "https://res.cloudinary.com/dfbmzsyx7/image/upload/v1563117252/There_app/ethan-sexton-LsWAp-7lRpg-unsplash_qrpzsi.jpg"
  return (
    <div className="grid-articles-container">
      <div className="grid-articles">
      <Link to="/article"><ArticleCard img={imgLink}/></Link>
      <Link to="/article"><ArticleCard img={imgLink}/></Link>
      <Link to="/article"><ArticleCard img={imgLink}/></Link>
      <Link to="/article"><ArticleCard img={imgLink}/></Link>
      <Link to="/article"><ArticleCard img={imgLink}/></Link>
      <Link to="/article"><ArticleCard img={imgLink}/></Link>
      </div>
    </div>
  );
}

export default GridArticles;