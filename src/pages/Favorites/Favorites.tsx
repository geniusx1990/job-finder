import Header from '../../components/Header/Header';
import VaccanciesFavorite from '../../components/VaccanciesFavorite/VaccanciesFavorite';
import './favorites.css';

function Favorites() {
  return (
    <>
    <Header />
    <VaccanciesFavorite accessToken={null} />
    </>
  );
}

export default Favorites;
