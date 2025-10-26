import "../styles/components.css";
import { useNavigate } from "react-router-dom";

function CardNeon({ film }) {
  const navigate = useNavigate();

  function click() {
    const urlParts = film.url.split("/");
    const filmId = urlParts[urlParts.length - 2];
    
    navigate(`/films/${filmId}`);
  }

  return (
      <div className="neon-card" onClick={click}>
        <h3>{film.title}</h3>
        <div className="information">
          <div>
            <p>Data de Lançamento:</p>
            <p>Episódio:</p>
          </div>
          <div>
            <p>{film.release_date}</p>
            <p>{film.episode_id}</p>
          </div>
        </div>
      </div>
  
  );
}
export default CardNeon;