import NewsBody from "../components/news/NewsBody";
import NewsHeader from "../components/news/NewsHeader";
import PageWrapper from "../transition/PageWrapper";

const NewsPage = () => {
  return (
    <PageWrapper>
      <div>
        <NewsHeader />
        <NewsBody />
      </div>
    </PageWrapper>
  );
};

export default NewsPage;
