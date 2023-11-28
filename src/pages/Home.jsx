import Form from "../components/Form";
import List from "../components/List";

const Home = ({isDone}) => {
  
  return (
  <div>
    <header>헤더입니다.</header>
    <main>
    {/* 폼공간입니다. */}
    <Form/>
    {/* 할일 영역입니다. */}
    <List isDone={false}/>
    {/* 완료 영역입니다.*/}
    <List isDone={true}/>
    </main>
    <footer>푸터입니다.</footer>
  </div>
  );
};

export default Home;