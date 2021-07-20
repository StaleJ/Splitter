import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";

function Card() {
    return (
        <div className="Card">
            <Bill/>
            <Tip/>
            <People/>
        </div>
    );
}

export default Card;