import './Pagination.scss';
const Pagination = ({
  gotoNextPage,
  gotoPrevPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div className='container pagination'>
      <button
        onClick={currentPage > 1 ? gotoPrevPage : null}
        className={`${currentPage === 1 ? 'disabled' : ''}`}>
        Previous
      </button>
      <span>
        {' '}
        {currentPage} of {totalPages} pages{' '}
      </span>
      <button
        onClick={currentPage < totalPages ? gotoNextPage : null}
        className={`${currentPage === totalPages ? 'disabled' : ''}`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
