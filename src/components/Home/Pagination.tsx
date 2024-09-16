import useStateContext from '../../hooks/useStateContext';

type PaginationProps = {
  totalPages: number;
};

const Pagination = ({ totalPages }: PaginationProps) => {
  const { state, actions } = useStateContext();

  const handlePreviousPage = () => {
    if (state.currentPage > 1) {
      actions.setCurrentPage(state.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (state.currentPage < totalPages) {
      actions.setCurrentPage(state.currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={state.currentPage === 1}>
        Previous
      </button>
      <span>
        Page {state.currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={state.currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
