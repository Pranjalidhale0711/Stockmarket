import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=finance&from=2024-06-13&sortBy=publishedAt&apiKey=e255d757ed5a44e7a64b2e646abe5fca')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-5xl flex items-center text-[#52057B] justify-center font-bold mb-4">Latest Articles</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a
              href={article.url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
