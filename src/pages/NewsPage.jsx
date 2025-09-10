import NewsBody from "../components/news/NewsBody";
import NewsHeader from "../components/news/NewsHeader";
import PageWrapper from "../transition/PageWrapper";

const NewsPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col h-fit bg-[#171717] text-[#e5e5e5]">
        <NewsHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <NewsBody />
        </div>
      </div>
    </PageWrapper>
  );
};

export default NewsPage;
