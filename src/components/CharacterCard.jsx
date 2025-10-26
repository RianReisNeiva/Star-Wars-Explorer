import { useEffect, useState } from "react";
import "../styles/global.css";
import UnfoldButton from "./UnfoldButton";
import { useNavigate } from "react-router-dom";

function CharacterCard({ character }) {
  const [films, setFilms] = useState([]);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [homeworldName, setHomeworldName] = useState("");
  const [loadingPlanet, setLoadingPlanet] = useState(true);
  const navigate = useNavigate()

  function passFilm(film){
    const urlParts = film.url.split("/");
    const filmId = urlParts[urlParts.length - 2];
    navigate(`/films/${filmId}`);
  }

  useEffect(() => {
    async function fetchFilms() {
      setLoadingFilms(true);
      setFilms([]);
      
      try {
        const filmsPromises = character.films.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const filmsData = await Promise.all(filmsPromises);
        setFilms(filmsData);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoadingFilms(false);
      }
    }
    
    if (character.films && character.films.length > 0) {
      fetchFilms();
    } else {
      setLoadingFilms(false);
    }
  }, [character.films]);

  useEffect(() => {
    async function fetchHomeworld() {
      if (!character.homeworld) {
         setLoadingPlanet(false);
         setHomeworldName("Desconhecido");
         return;
      }
      
      setLoadingPlanet(true);
      try {
        const res = await fetch(character.homeworld);
        const data = await res.json();
        setHomeworldName(data.name);
      } catch (error) {
        console.error("Erro ao buscar planeta:", error);
        setHomeworldName("Erro");
      } finally {
        setLoadingPlanet(false);
      }
    }

    fetchHomeworld();
  }, [character.homeworld]);

  return (
    <div className="container-card">
      <div className="character-information">
        <h3 className="title">{character.name}</h3>
        <div className="information">
          <div>
            <p>Altura:</p>
            <p>Peso:</p>
            <p>Cor do cabelo:</p>
            <p>Cor da pele:</p>
            <p>Cor do olho:</p>
            <p>Ano de Nascimento:</p>
            <p>Gênero:</p>
            <p>Planeta Natal:</p>
          </div>
          <div>
            <p>{character.height} cm</p>
            <p>{character.mass} kg</p>
            <p>{character.hair_color}</p>
            <p>{character.skin_color}</p>
            <p>{character.eye_color}</p>
            <p>{character.birth_year}</p>
            <p>{character.gender}</p>
            <p>{loadingPlanet ? "..." : homeworldName}</p>
          </div>
        </div>
      </div>

      <div className="character-information">
        <h3 className="title">Filmes</h3>
        <div className="list-character">
        {loadingFilms ? (
          <p>Carregando filmes...</p>
        ) : (
          films.map((film) => (
            <div className="films-character" key={film.url}>
              <p>{film.title}</p>
              <UnfoldButton onClick={() => passFilm(film)}/>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}
export default CharacterCard;