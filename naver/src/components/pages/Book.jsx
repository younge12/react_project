import { useEffect, useState } from "react";

import { getBooks } from "../../apis";
import Form from "../templates/Book/Form";
import List from "../templates/Book/List";
import Pagination from "../organisms/Pagination";

const Book = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "" });

  const { query } = params;

  useEffect(() => {
    refreshList();
  }, [params, page]);

  const refreshList = async () => {
    if (!query) return;
    const display = 10;
    const start = (page - 1) * display + 1;
    const params = { query, start };
    const { items, total } = await getBooks(params);
    setItems(items);
    setTotal(total);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    setPage(page);
  };

  return (
    <>
      <h1>책 검색</h1>
      <Form onChange={handleChange} />
      <List data={items} />
      <Pagination
        nowPage={page}
        total={total}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Book;
