import BeatLoader from 'react-spinners/BeatLoader';
import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';

const Home = ({
  pokemon,
  loading,
  gotoNextPage,
  gotoPrevPage,
  currentPage,
  totalPages,
  changePerPage,
  changeCurrentPage,
}) => {
  return (
    <div className='container'>
      <BeatLoader
        className='beatloader'
        loading={loading}
        color='#de8e22'
        size={20}
      />

      <PokemonList
        pokemon={pokemon}
        changePerPage={changePerPage}
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </div>
  );
};

export default Home;
