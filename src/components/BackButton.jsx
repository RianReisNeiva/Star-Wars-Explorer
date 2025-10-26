import Back from "../assets/back.png";
import "../styles/components.css";
function BackButton({onClick}) {
  return (
    <button type="button" className="back-button" onClick={onClick}>
      <img src={Back} alt="voltar" className="back-img" />
      <span>voltar</span>
    </button>
  );
}
export default BackButton;
