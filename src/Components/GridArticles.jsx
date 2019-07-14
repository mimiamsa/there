import React from 'react';
import ArticleCard from './ArticleCard'

const GridArticles = () => {
  const imgLink = "https://res.cloudinary.com/dfbmzsyx7/image/upload/v1563117252/There_app/ethan-sexton-LsWAp-7lRpg-unsplash_qrpzsi.jpg"
  return (
    <div className="grid-articles-container">
      <div className="grid-articles">
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
        <ArticleCard img={imgLink}/>
      </div>
    </div>
  );
}

export default GridArticles;