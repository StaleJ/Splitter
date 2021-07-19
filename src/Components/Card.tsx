import Bill from "./Bill";
import Tip from "./Tip";

function Card() {
    return (
        <div className="Card">
            <Bill/>
            <Tip/>
        </div>
    );
}

export default Card;