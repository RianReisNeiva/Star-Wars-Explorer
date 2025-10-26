import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UnfoldButton from "./UnfoldButton";

function FilmCard({ film }) {
  const [characters, setCharacters] = useState([]);
  const [loadingChars, setLoadingChars] = useState(true);
  const navigate = useNavigate()
  
  function passCharacter(char){
    const urlParts = char.url.split("/");
    const characterId = urlParts[urlParts.length - 2];
    navigate(`/people/${characterId}`);
  }


  useEffect(() => {
    async function fetchCharacters() {
      try {
        const characterPromises = film.characters.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const charactersData = await Promise.all(characterPromises);
        setCharacters(charactersData);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      } finally {
        setLoadingChars(false);
      }
    }

    fetchCharacters();
  }, [film.characters]);

  return (
    <div className="container-card">
      <div className="character-information">
        <h3 className="title">{film.title}</h3>
        <div className="information">
          <div>
            <p>Data de lançamento:</p>
            <p>Episódio:</p>
            <p>Diretor:</p>
            <p>Produtor:</p>
          </div>
          <div>
            <p>{film.release_date}</p>
            <p>{film.episode_id}</p>
            <p>{film.director}</p>
            <p>{film.producer}</p>
          </div>
        </div>
      </div>

      <div className="character-information">
        <h3 className="title">Personagens</h3>
        <div className="list-character">
          {loadingChars ? (
            <p>Carregando personagens...</p>
          ) : (
            characters.map((char) => (
              <div className="films-character" key={char.url}>
                <p>{char.name}</p>
                <UnfoldButton onClick={() => passCharacter(char)} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
