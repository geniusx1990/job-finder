import { useEffect, useState } from 'react';
import Vacancy from '../Vacancy/Vacancy';
import { APIData } from '../../api/api';
import { IVacancy, VacansiesResponse } from '../../interfaces';

interface FiltersProps {
    accessToken: string | null;
  }

function Vaccancies({ accessToken }: FiltersProps) {
  const [vacancies, setVacancies] = useState<VacansiesResponse>([]);

if (accessToken) {
    useEffect(() => {
        const VaccanciesData = () => {
          fetch(
            'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies',
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
              console.log(data);
              setVacancies(data.objects);
})
            .catch((error) => {
              console.error('Error fetching access token:', error);
            });
        };

        VaccanciesData();
      }, []);
}
    return (
        <div>
            {vacancies.map((vacancy: IVacancy) => (
            <Vacancy key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
    );
}

export default Vaccancies;
