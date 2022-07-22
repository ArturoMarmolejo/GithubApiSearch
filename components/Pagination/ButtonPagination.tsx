interface ButtonPaginationProps {
  page: number;
  isActive: boolean;
  onChange: (value: number) => void;
}

const ButtonPagination = ({ page, isActive, onChange }: ButtonPaginationProps) => {
  return (
    <button
      className={isActive ? "active button-pagination" : "button-pagination"}
      key={page}
      onClick={() => onChange(page)}
    >
      {page}
    </button>
  );
};

export default ButtonPagination;
