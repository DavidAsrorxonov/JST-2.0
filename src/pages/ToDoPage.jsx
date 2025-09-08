import ToDoHeader from "../components/todo/ToDoHeader";
import ToDoBody from "../components/todo/ToDoBody";
import Archive from "../components/todo/Archive";
import PageWrapper from "../transition/PageWrapper";

const ToDoPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-[#171717] text-[#e5e5e5]">
        <ToDoHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <ToDoBody />
        </div>
      </div>
      <Archive />
    </PageWrapper>
  );
};

export default ToDoPage;
