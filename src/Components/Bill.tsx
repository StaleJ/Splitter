// 48h and 379w
import IconDollar from '../Static/icon-dollar.svg'


function Bill() {


    return (
        <div className="Bill">
            <h3 className="Bill-Text">Bill</h3>
            <div className="Bill-Input-Field">
                <img src={IconDollar} alt="Dollar icon" className="Dollar-Icon"/>
                <input id="number" type="number" placeholder="0.0" className="Bill-Input"/>
            </div>
        </div>
    );
}

export default Bill;