import ToDoHeader from "../components/todo/ToDoHeader";
import ToDoBody from "../components/todo/ToDoBody";
import Archive from "../components/todo/Archive";
import PageWrapper from "../transition/PageWrapper";

const ToDoPage = () => {
  return (
    <PageWrapper>
      <div>
        <ToDoHeader />
        <ToDoBody />
        <Archive />
      </div>
    </PageWrapper>
  );
};

export default ToDoPage;
