import "../../styles/components.css";
import "../../styles/skeleton.css";

function CardNeonSkeleton() {
  return (
    <div className="neon-card" aria-label="Carregando filme...">
      <h3
        className="skeleton skeleton-title"
        style={{ width: "60%", marginBottom: "20px" }}
      ></h3>

      <div className="information">
        <div>
          <p>
            {" "}
            <span
              className="skeleton skeleton-text"
              style={{ width: "100px" }}
            ></span>
          </p>
          <p>
            {" "}
            <span
              className="skeleton skeleton-text"
              style={{ width: "100px" }}
            ></span>
          </p>
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
              style={{ width: "50px" }}
            ></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardNeonSkeleton;
