import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Vacancy from '../Vacancy/Vacancy';
import { APIData } from '../../api/api';
import { IVacancy } from '../../interfaces';
import './vacancies.css';

interface VacanciesProps {
  accessToken: string | null;
}

const pageCount: number = 125;
const count: number = 4;

function Vacancies({ accessToken }: VacanciesProps) {
  const [vacancies, setVacancies] = useState<IVacancy[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (!accessToken) return;

    const VaccanciesData = () => {
        fetch(
          `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies?published=1&count=${count}&page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
              'X-Api-App-Id': `${APIData.client_secret}`,
            },
          }
        )
        .then((response) => response.json())
            .then((data) => {
              setVacancies(data.objects);
              console.log(data.objects);
            })
      .catch((error) => {
        console.error('Error fetching vacancies:', error);
      });
    };

    VaccanciesData();
  }, [accessToken, currentPage]);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected + 1);
  };

  return (
    <div>
      {vacancies.map((vacancy: IVacancy) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} accessToken={accessToken} />
      ))}
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        pageCount={pageCount}
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

export default Vacancies;
