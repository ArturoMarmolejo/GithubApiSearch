import React, { useState } from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface PaginationProps {
  total: number;
  loading: boolean;
  totalButtons: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  onChange,
  totalButtons,
  loading,
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
    <>
      {
        totalButtons && (
          <form onSubmit={onSubmit} className="form-pagination">
            <button disabled={page - 1 < 1 || loading} onClick={() => changePage(page - 1)}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            {buttonsPage.map((_, index) => {
              const buttonPage =
                page > centerPage ? page - (centerPage - index) : page + index;

              if (buttonPage > 0 && buttonPage < total) {
                return (
                  <button
                    className={
                      page === buttonPage
                        ? loading ? "active button-pagination is-loading" : "active button-pagination"
                        : "button-pagination"
                    }
                    disabled={loading}
                    key={index}
                    onClick={() => changePage(buttonPage)}
                  >
                    {buttonPage}
                  </button>
                );
              }
            })}
            <button disabled={page + 1 > total || loading} onClick={() => changePage(page + 1)}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </form>
        )
      }
    </>
  );
};

export default Pagination;
