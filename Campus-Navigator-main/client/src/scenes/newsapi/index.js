import React, { useState, useEffect } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5b7456cc6b174271af5c22f0c14887d8')
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div>
      {news.slice(0, 2).map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/* <img src={article.urlToImage} alt={article.title} /> */}
          <a href={article.url}>Read more<LaunchIcon fontSize="small" /></a>
        </div>
      ))}
    </div>
  );
};

export default News;

