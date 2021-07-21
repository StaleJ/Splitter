import React from "react";


class Amount extends React.Component {
    render() {
        return (
            <div className="Amount">
                <h3 className="Tip-h3">Tip Amount</h3>
                <h4 className="Tip-h4">/ person</h4>
                <h1 className="Tip-h1">$0.0</h1>
                <h3 className="Total-h3">Total</h3>
                <h4 className="Total-h4">/ person</h4>
                <h1 className="Total-h1">$0.0</h1>
                <button className="Amount-Reset">Reset</button>
            </div>
        );
    }
}

export default Amount;