import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  const onDelete = (todo) => {
    console.log("Deleted", todo);
  };
  let todos = [
    {
      sno: 1,
      title: "Job1",
      desc: "This is the description for the 1st todo that you want to do",
    },
    {
      sno: 2,
      title: "Job2",
      desc: "This is the description for the 2nd todo that you want to do",
    },
    {
      sno: 3,
      title: "Job3",
      desc: "This is the description for the 3rd todo that you want to do",
    },
  ];
  return (
    <>
      <Header title="MyTodoList" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
