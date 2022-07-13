import { useState } from "react";

const EventPractice = () => {
  //   const [message, setMessage] = useState("");
  //   const [usermessage, setUserMessage] = useState("");
  const [form, setForm] = useState({
    usermessage: "",
    message: "",
    targetmessage: "",
  });
  const { usermessage, message, targetmessage } = form;

  const handleClick = () => {
    alert(message + usermessage + targetmessage);
    setForm({ usermessage: "", message: "", targetmessage: "" });
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="usermessage"
        placeholder="입력하세요"
        onChange={handleChange}
        value={usermessage}
        onKeyUp={handleKeyUp}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message}
        onKeyUp={handleKeyUp}
      />
      <input
        type="text"
        name="targetmessage"
        placeholder="입력하세요"
        onChange={handleChange}
        value={targetmessage}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};
export default EventPractice;
