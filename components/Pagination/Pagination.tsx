import React, { useState } from "react";

interface PaginationProps {
  total: number;
  totalButtons: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  onChange,
  totalButtons = 6
}) => {
  const buttonsPage = [...Array(totalButtons)];
  const centerPage = Math.floor(totalButtons / 2);

  const [page, setPage] = useState(1);

  const changePage = (value: number) => {
    setPage(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    onChange(page);
  };

  return (
    <form onSubmit={onSubmit}>
      <button disabled={page - 1 < 1} onClick={() => changePage(page - 1)}>
        {"<"}
      </button>
      {buttonsPage.map((_, index) => {
        const buttonPage =
          page > centerPage ? page - (centerPage - index) : page + index;

        if (buttonPage > 0 && buttonPage < total) {
          return (
            <button
              className={
                page === buttonPage
                  ? "active button-pagination"
                  : "button-pagination"
              }
              key={index}
              onClick={() => changePage(buttonPage)}
            >
              {buttonPage}
            </button>
          );
        }
      })}
      <button disabled={page + 1 > total} onClick={() => changePage(page + 1)}>
        {">"}
      </button>
    </form>
  );
};

export default Pagination;
