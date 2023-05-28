import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Vacancy from '../Vacancy/Vacancy';
import { IVacancy } from '../../interfaces';
import './vacancies.css';
import Uups from '../Uups/Uups';

interface VacanciesProps {
  accessToken: string | null;
}

function VaccanciesFavorite({ accessToken }: VacanciesProps) {
  const [vacancies, setVacancies] = useState<IVacancy[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isLocalStorageEmpty = localStorage.getItem('vacancies') === null || localStorage.getItem('vacancies') === '[]';
  useEffect(() => {
    const savedVacancies: IVacancy[] = JSON.parse(localStorage.getItem('vacancies') || '[]');

      setVacancies(savedVacancies);
  }, [currentPage]);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected + 1);
  };

  const handleRemoveVacancy = (id: number) => {
    const updatedVacancies = vacancies.filter((vacancy) => vacancy.id !== id);
    setVacancies(updatedVacancies);
    localStorage.setItem('vacancies', JSON.stringify(updatedVacancies));
  };

  if (isLocalStorageEmpty) {
    return <Uups />;
  } return (
    <div className="vaccancies__container_favorites">
      {vacancies.map((vacancy: IVacancy) => (
        <Vacancy
          key={vacancy.id}
          vacancy={vacancy}
          accessToken={accessToken}
          onRemoveVacancy={handleRemoveVacancy}
        />
      ))}
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        pageCount={Math.ceil(vacancies.length / 4)}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel=""
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default VaccanciesFavorite;
