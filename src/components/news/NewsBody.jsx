import { useEffect, useState } from "react";
import NavigationButtons from ".././ui/NavigationButtons";
import axios from "axios";

const NewsPage = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numberOfArticles, setNumberOfArticles] = useState(20);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `https://dev.to/api/articles?per_page=${numberOfArticles}`
      );
      setAllArticles(response.data);
      setFilteredArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching", error);
      setLoading(false);
    }
  };

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null); // toggle off
      setFilteredArticles(allArticles);
    } else {
      setSelectedTag(tag);
      const filtered = allArticles.filter((article) =>
        article.tag_list.includes(tag)
      );
      setFilteredArticles(filtered);
    }
  };

  const uniqueTags = [...new Set(allArticles.flatMap((a) => a.tag_list))];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6 flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 text-sm rounded-full border transition ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
          >
            #{tag}
          </button>
        ))}
        <div className="flex items-center justify-center bg-blue-100 border border-blue-500 text-blue-600 cursor-pointer px-4 py-1 rounded-full">
          <div>Showing {numberOfArticles} articles</div>
        </div>
        <div className="flex items-center justify-center bg-blue-100 border border-blue-500 text-blue-600 cursor-pointer px-4 py-1 rounded-full">
          <div
            onClick={() => {
              setNumberOfArticles(numberOfArticles + 10);
              fetchArticles();
            }}
          >
            Click to add more
          </div>
        </div>
      </div>
      <NavigationButtons />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
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
              <p className="text-sm text-gray-600 mt-1">
                {article.description}
              </p>
              <div className="flex items-center mt-3">
                <img
                  src={article.user.profile_image}
                  alt={article.user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2 text-sm">
                  <p className="font-medium">{article.user.name}</p>
                  <p className="text-gray-400">
                    {article.readable_publish_date}
                  </p>
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
                    onClick={() => handleTagClick(tag)}
                    className="text-xs inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2 cursor-pointer hover:bg-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
