import Jsx from "./components/Jsx";
// import Jsx, {b,c} from "./components/Jsx";
import InlineStyle from "./components/InlineStyle";
import MyComponent from "./components/MyComponent";

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
    </>
  );
}

export default App;
