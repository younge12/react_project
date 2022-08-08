import Jsx from "./components/Jsx";
// import Jsx, {b,c} from "./components/Jsx";
import InlineStyle from "./components/InlineStyle";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import IterationSample from "./components/IterationSample";
import Counter02 from "./components/Counter02";
import Counter03 from "./components/Counter03";
import Parents from "./components/Parents";
import Info02 from "./components/Info02";
import Average from "./components/Average";
import InputFile from "./components/InputFile";
import StyleComponents from "./components/StyleComponents";
import Flex from "./components/Flex";
import Todo from "./components/Todo/Index";
import Axios from "./axios/Axios";
import Bootstrap from "./components/bootstrap/Index";

function App() {
  const name1 = "리액트";
  const style1 = {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  };

  return (
    <>
      <Jsx />
      <InlineStyle />
      <MyComponent name={name1} message="반가워요" style={style1} />
      <MyComponent name="뷰" />
      <MyComponent name="앵귤러">
        <h5>children이예요</h5>
        <h6>children이예요</h6>
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice />
      <IterationSample />
      <Counter02 />
      <Parents />
      <Counter03 />
      <Info02 />
      <Average />
      <InputFile />
      <StyleComponents />
      <Flex />
      <Todo />
      <Axios />
      <Bootstrap />
    </>
  );
}

export default App;
