import { Link, useNavigate } from 'react-router-dom';
import './Card.scss';
const Card = ({
  id,
  HP,
  english,
  type,
  pImages,
  Attack,
  Defense,
  SpAttack,
  SpDefense,
  Speed,
}) => {

  const navigate = useNavigate();

  return (
    <div className='card' key={id}>
      <div className='cardInner'>
        <div className='cardContent cardFront'>
          <div className='cardHeader'>
            <h3>{english}</h3>
          </div>
          <div className='cardBody'>
            <img src={`${pImages}/${id}.png`} alt={english} />
            {/* <img src={Pokemon?.getSprite(english)} alt={english} /> */}
          </div>
        </div>

        <div className='cardContent cardBack'>
          <div className='cardHeader'>
            <h4>{type?.map(t => t + ' ')}</h4>
          </div>
          <div className='cardBody'>
            <p>
              <span className='base'>HP:</span> {HP}
              <br />
              <span className='base'>Attack:</span> {Attack}
              <br />
              <span className='base'>Defense:</span> {Defense}
              <br />
              <span className='base'>Sp. Attack:</span> {SpAttack}
              <br />
              <span className='base'>Sp. Defense:</span> {SpDefense}
              <br />
              <span className='base'>Speed:</span> {Speed}
              <br />
            </p>
            <button onClick={() => navigate(`/play/${id}`)}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
