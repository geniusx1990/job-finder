import Header from '../../components/Header/Header';
import Uups from '../../components/Uups/Uups';
import VaccanciesFavorite from '../../components/VaccanciesFavorite/VaccanciesFavorite';
import './favorites.css';

function Favorites() {
  const isLocalStorageEmpty = localStorage.getItem('vacancies') === null || localStorage.getItem('vacancies') === '[]';

  return (
    <>
    <Header />
    {isLocalStorageEmpty ? <Uups /> : <VaccanciesFavorite accessToken={null} />}
    </>
  );
}

export default Favorites;
