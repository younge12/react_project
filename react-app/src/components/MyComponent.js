const MyComponent = ({ name, message, children }) => {
  return (
    <>
      <h5>부모가 물려준 이름은 {name} 입니다.</h5>
      <p>{message}</p>
      {children}
    </>
  );
};

export default MyComponent;
