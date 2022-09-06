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
  // if (loading) return <h1>Loading...</h1>;
  return (
    <div className='container'>
      {/* <h1 className='text-center'>Home</h1> */}
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
