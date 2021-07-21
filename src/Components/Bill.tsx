import IconDollar from '../Static/icon-dollar.svg'
import React from "react";



class Bill extends React.Component {




    render() {
        return (
            <div className="Bill">
                <h3 className="Bill-Text">Bill</h3>
                <div className="Bill-Input-Field">
                    <img src={IconDollar} alt="Dollar icon" className="Dollar-Icon"/>
                    <input id="number" type="number" placeholder="0" className="Bill-Input"
                           />
                </div>
            </div>
        );
    }
}

export default Bill;