// import Pokemon from 'pokemon-images';
import './PokemonList.scss';

import Card from './Card';

const PokemonList = ({
  pokemon,
  changePerPage,
  currentPage,
  totalPages,
  changeCurrentPage,
}) => {
  const pImages = process.env.REACT_APP_POKEMON_IMAGES_URL;

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  return (
    <div className='pokemonList'>
      <h1 className='text-center'>Pokemon List</h1>

      {/* Pokemon per page select */}
      <select name='perPage' id='perPage' onChange={changePerPage}>
        <option value='18' defaultValue>
          18 per page
        </option>
        <option value='36'>36 per page</option>
        <option value='54'>54 per page</option>
        <option value='72'>72 per page</option>
        <option value='90'>90 per page</option>
        <option value='108'>108 per page</option>
        <option value='126'>126 per page</option>
      </select>

      {/* page number select */}
      <select
        name='currentPage'
        id='currentPage'
        value={currentPage}
        onChange={changeCurrentPage}>
        {pages.map(pageNum => {
          return (
            <option key={pageNum} value={pageNum}>
              Page {pageNum}
            </option>
          );
        })}
      </select>
      <span className='pages'>of {totalPages} pages</span>

      <div className='cards'>
        {pokemon?.map(
          ({
            id,
            name: { english },
            type,
            base: {
              HP,
              Attack,
              Defense,
              'Sp. Attack': SpAttack,
              'Sp. Defense': SpDefense,
              Speed,
            },
          }) => (
            <Card
              key={id}
              id={id}
              english={english}
              type={type}
              pImages={pImages}
              HP={HP}
              Attack={Attack}
              Defense={Defense}
              SpAttack={SpAttack}
              SpDefense={SpDefense}
              Speed={Speed}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default PokemonList;
