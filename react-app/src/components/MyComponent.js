const MyComponent = (props) => {
  return (
    <>
      <h5>부모가 물려준 이름은 {props.name} 입니다.</h5>
      <p style={props.style}>{props.message}</p>
      {props.children}
    </>
  );
};

export default MyComponent;
