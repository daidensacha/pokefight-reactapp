import PokemonList from '../components/PokemonList';

const Home = ({ pokemon }) => {
  return (
    <div className='container'>
      <h1 className='text-center'>Home</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default Home;
