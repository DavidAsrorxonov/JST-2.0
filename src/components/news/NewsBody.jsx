import React, { useEffect, useState } from "react";

const NewsBody = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?per_page=4")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  if (!articles.length)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img
              src={article.cover_image || article.social_image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          </a>

          <div className="p-4">
            <h2 className="text-lg font-semibold hover:text-blue-600">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>

            <p className="text-sm text-gray-600 mt-1">{article.description}</p>

            <div className="flex items-center mt-3">
              <img
                src={article.user.profile_image}
                alt={article.user.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2 text-sm">
                <p className="font-medium">{article.user.name}</p>
                <p className="text-gray-400">{article.readable_publish_date}</p>
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-3">
              <span>🗨️ {article.comments_count}</span>
              <span>❤️ {article.public_reactions_count}</span>
              <span>⏱ {article.reading_time_minutes} min</span>
            </div>

            <div className="mt-2">
              {article.tag_list.map((tag) => (
                <span
                  key={tag}
                  className="text-xs inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsBody;
