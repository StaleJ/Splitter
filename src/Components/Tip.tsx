function Tip() {
    return (
        <div className="Tip">
            <h3 className="Bill-Text">Select Tip %</h3>
            <div className="Tip-Grid">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>20%</button>
                <button>25%</button>
                <input id="number" type="number" placeholder="Custom" className="Custom-Tip"/>
            </div>
        </div>
    );
}

export default Tip;