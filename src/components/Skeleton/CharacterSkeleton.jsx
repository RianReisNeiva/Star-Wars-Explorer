import "../../styles/skeleton.css";

function CharacterCardSkeleton() {
  return (
    <div
      className="container-card"
      aria-label="Carregando dados do personagem..."
    >
      <div className="character-information">
        <h3
          className="title skeleton skeleton-title"
          style={{ width: "40%" }}
        ></h3>

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
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "80px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "60px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "100px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "120px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "70px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "90px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "110px" }}
              ></span>
            </p>
            <p>
              <span
                className="skeleton skeleton-text"
                style={{ width: "130px" }}
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div className="character-information">
        <h3 className="title">Filmes</h3>

        <div className="list-character">
          {[...Array(3)].map((_, index) => (
            <div className="films-character" key={index}>
              <p style={{ width: "100%" }}>
                <span
                  className="skeleton skeleton-line"
                  style={{ width: "80%" }}
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

export default CharacterCardSkeleton;
