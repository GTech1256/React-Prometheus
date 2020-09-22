import React from 'react'


export type Props = {
  hasNextPage?: boolean
  hasPreviousPage?: boolean
  onPrev: () => void
  onNext: () => void
}

const Pagination = ({
  hasNextPage = false,
  hasPreviousPage= false,
  onPrev,
  onNext,
}: Props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${!hasPreviousPage ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={onPrev}
            disabled={!hasPreviousPage}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Предыдущая</span>
          </button>
        </li>
        <li className={`page-item ${!hasNextPage ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={onNext}
            disabled={!hasNextPage}
          >
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Следующая</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination