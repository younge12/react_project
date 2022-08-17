import { useEffect, useState } from "react";

import { getBooks } from "../../apis";
import Form from "../templates/Book/Form";
import List from "../templates/Book/List";
import Pagination from "../organisms/Pagination";
import { useSearchParams } from "react-router-dom";

const Book = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "" });
  const [searchParams, setSearchParams] = useSearchParams();

  const qsQuery = searchParams.get("query");
  const qsPage = searchParams.get("page");

  const { query } = params;

  useEffect(() => {
    if (qsQuery) {
      setParams((prev) => ({ ...prev, query: qsQuery }));
    } else {
      setParams((prev) => ({ ...prev, query: "" }));
      setItems([]);
      setTotal(0);
    }
    if (qsPage) {
      setPage(+qsPage);
    }
  }, [qsQuery, qsPage]);

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
    setSearchParams({ query, page });
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
    setPage(page);
  };

  return (
    <>
      <h1>책 검색</h1>
      <Form defaultQuery={qsQuery} onChange={handleChange} />
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
