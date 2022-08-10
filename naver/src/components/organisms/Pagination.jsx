import { useState } from "react";
import styled, { css } from "styled-components";

const Pagination = ({ nowPage, total, onChange }) => {
  const dispaly = 10;
  const last = Math.ceil(total / dispaly);
  const btnLength = 5;
  const start = Math.ceil(nowPage / btnLength) * btnLength - (btnLength - 1);
  const end = start + btnLength - 1 > last ? last : start + btnLength - 1;

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Container>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>{"<"}</BtnPage>
      )}
      {pages.map((page) => (
        <BtnPage
          onClick={() => onChange(page)}
          key={page}
          active={nowPage === page}
        >
          {page}
        </BtnPage>
      ))}
      {nowPage < last && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>{">"}</BtnPage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const BtnPage = styled.button`
  background: #ecf1ff;
  color: #3f6bcc;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 30px;
  height: 25px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #3f6bcc;
      color: #fff;
    `}
  & + & {
    margin-left: 5px;
  }
`;

export default Pagination;
