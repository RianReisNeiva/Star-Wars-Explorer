import Unfold from '../assets/unfold.png'
import '../styles/components.css'
function UnfoldButton({onClick}){
    return(
        <button className='unfold-button' type='button' onClick={onClick}>
            <img className='unfold-img' src={Unfold} alt="ver mais" />
        </button>
    )
}
export default UnfoldButton;