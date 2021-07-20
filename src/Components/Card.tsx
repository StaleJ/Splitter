import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import Amount from "./Amount";

function Card() {
    return (
        <div className="Card">
            <Bill/>
            <Tip/>
            <People/>
            <Amount/>
        </div>
    );
}

export default Card;