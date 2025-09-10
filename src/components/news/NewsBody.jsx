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
        <div className="w-12 h-12 border-4 border-white/30 border-t-transparent rounded-full animate-spin"></div>
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
            className={`px-3 py-1 text-sm rounded-lg border transition ${
              selectedTag === tag
                ? "bg-[#e5e5e5] text-[#212121] border border-white/30"
                : "bg-[#212121] text-[#e5e5e5] border border-white/30"
            }`}
          >
            #{tag}
          </button>
        ))}
        <div className="flex items-center justify-center bg-[#e5e5e5] text-[#212121] cursor-pointer px-4 py-1 rounded-lg">
          <div>Showing {numberOfArticles} articles</div>
        </div>
        <div className="flex items-center justify-center bg-[#e5e5e5] text-[#212121] cursor-pointer px-4 py-1 rounded-lg">
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
            className="bg-[#171717] border border-white/30 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.cover_image || article.social_image}
                alt={article.title}
                className="w-full h-48 object-cover hover:scale-105 transition hover:opacity-50"
              />
            </a>
            <div className="p-4">
              <h2 className="text-lg font-semibold hover:underline">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
              <p className="text-sm text-[#e5e5e5]/70 mt-1">
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
                  <p className="text-xs text-[#e5e5e5]/70">
                    {article.readable_publish_date}
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#e5e5e5]/70 mt-3">
                <span>🗨️ {article.comments_count}</span>
                <span>❤️ {article.public_reactions_count}</span>
                <span>⏱ {article.reading_time_minutes} min</span>
              </div>
              <div className="mt-2">
                {article.tag_list.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="text-xs inline-block bg-[#171717] text-[#e5e5e5] px-2 py-1 rounded-lg border border-white/30 mr-2 cursor-pointer hover:bg-[#212121] transition"
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
