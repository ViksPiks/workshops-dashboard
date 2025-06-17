export function Pagination({ currentPage, totalPages }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav
      className="pagination gap-2 justify-content-center"
      aria-label="Workshops pagination"
    >
      <div className="page-item">
        <button
          className="btn btn-primary"
          type="button"
          disabled={isFirstPage}
        >
          Previous
        </button>
      </div>
      <div className="pagination-state">
        {currentPage} of {totalPages}
      </div>
      <div className="page-item">
        <button className="btn btn-primary" type="button" disabled={isLastPage}>
          Next
        </button>
      </div>
    </nav>
  );
}
