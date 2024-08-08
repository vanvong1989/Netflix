import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { useEffect, useRef, useState } from 'react'; 
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
    
    const [apiData, setApiaData] = useState([]);

   const cardsRef = useRef();

   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM4M2IwMjAxMjM0MzUxMTE5OTg4N2NiMmU2NjQ0YiIsIm5iZiI6MTcyMjkzOTA2My41NzMyNzUsInN1YiI6IjY2YjFmNDFlMzAzZjU0Y2E5OWZjMWU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zO86SnxW61rpnUvtSdGBjq3l8X8oKqHUDatvh-YOtlc'
    }
  };
  

   const handleWheel = (event) => {

     event.preventDefault();
     cardsRef.current.scrollLeft += event.deltaY;
   }

   useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiaData(response.results))
    .catch(err => console.error(err));

        const currentRef = cardsRef.current;
        currentRef.addEventListener('wheel', handleWheel);

        return () => {
            currentRef.removeEventListener('wheel', handleWheel);  // Xóa event listener khi component bị hủy
        };
   }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
         {apiData.map((card, index) => ( 
           <Link to={'/player/${card.id}'} className='card' key={index}>
                <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt='' />
                <p>{card.original_title}</p>
            </Link>
         ))}
      </div>
    </div>
  );
}

export default TitleCards;
