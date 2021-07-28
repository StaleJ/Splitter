import './index.css'
import IconDollar from "./Static/icon-dollar.svg";
import IconPerson from "./Static/icon-person.svg";
import React, {useState} from "react";


type Tip = {
    bill: number;
    selectTip: number;
    numberOfPeople: number;
    tipAmount: number;
    total: number;
}


const defaultTip: Tip = {
    bill: 0,
    selectTip: 5,
    numberOfPeople: 1,
    tipAmount: 0,
    total: 0
}

function App() {
    const [tip, setTip] = useState(defaultTip);

    const onChangeTip = <P extends keyof Tip>(prop: P, value: Tip[P]) => {
        setTip({...tip, [prop]: value});
    };

    function handleBill(event: React.ChangeEvent<HTMLInputElement>) {
        tip.bill = parseFloat(event.currentTarget.value);
        if (isNaN(tip.bill)) {
            tip.bill = 0;
        }
        handleTipAmount()
    }

    function handleNumberOfPeople(event: React.ChangeEvent<HTMLInputElement>) {
        tip.numberOfPeople = parseInt(event.currentTarget.value);
        if (isNaN(tip.numberOfPeople)) {
            tip.numberOfPeople = 1;
        }
        handleTipAmount();

    }

    function handleSelectTip(event: React.ChangeEvent<HTMLInputElement>) {
        tip.selectTip = parseFloat(event.currentTarget.value);
    }

    function handleTipAmount() {
        let value = ((tip.selectTip * tip.bill) / 100) / tip.numberOfPeople;
        onChangeTip("tipAmount", value)
    }

    function handleReset() {
        setTip(defaultTip);
    }

    return (
        <div className="App min-h-screen">
            <div className="text-center pt-32 uppercase Title text-2xl tracking-widest">
                <h1>Spli</h1>
                <h1>tter</h1>
            </div>
            <div className="Card">
                <div className="Bill">
                    <h3 className="Bill-Text">Bill</h3>
                    <div className="Bill-Input-Field">
                        <img src={IconDollar} alt="Dollar icon" className="Dollar-Icon"/>
                        <input id="number" type="number" placeholder="0" className="Bill-Input"
                               onChange={handleBill}
                        />
                    </div>
                </div>
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
                <div className="Bill">
                    <h3 className="Bill-Text">Number of People</h3>
                    <div className="Bill-Input-Field">
                        <img src={IconPerson} alt="Person icon" className="Person-Icon"/>
                        <input id="number" type="number" placeholder="0" className="Bill-Input"
                               onChange={handleNumberOfPeople}/>
                    </div>
                </div>
                <div className="Amount">
                    <h3 className="Tip-h3">Tip Amount</h3>
                    <h4 className="Tip-h4">/ person</h4>
                    <h1 className="Tip-h1">${tip.tipAmount}</h1>
                    <h3 className="Total-h3">Total</h3>
                    <h4 className="Total-h4">/ person</h4>
                    <h1 className="Total-h1">${tip.total}</h1>
                    <button className="Amount-Reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )

}

export default App;
