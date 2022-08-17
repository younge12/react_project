import app from "./app.js";

const port = 8000;

app.listen(port, () => {
  console.log("서버 실행중 ... port: " + port);
});
