import "../../styles/skeleton.css";

function FilmCardSkeleton() {
  return (
    <div className="container-card" aria-label="Carregando dados do filme...">
      <div className="character-information">
        <h3
          className="title skeleton skeleton-title"
          style={{ width: "50%" }}
        ></h3>

        <div className="information">
          <div>
            <p>Data de lançamento:</p>
            <p>Episódio:</p>
            <p>Diretor:</p>
            <p>Produtor:</p>
          </div>
          <div>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "100px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "40px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "140px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "200px" }}
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div className="character-information">
        <h3 className="title">Personagens</h3>

        <div className="list-character">
          {[...Array(5)].map((_, index) => (
            <div className="films-character" key={index}>
              <p style={{ width: "100%" }}>
                <span
                  className="skeleton skeleton-line"
                  style={{ width: "70%" }}
                ></span>
              </p>
              <div
                className="skeleton"
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmCardSkeleton;
