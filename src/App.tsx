import './index.css'
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
    selectTip: 0,
    numberOfPeople: 0,
    tipAmount: 0,
    total: 0
}

function App() {
    const [tip, setTip] = useState(defaultTip);

    const onChangeTip = <P extends keyof Tip>(prop: P, value: Tip[P]) => {
        setTip({...tip, [prop]: value});
    };

    function handleBill(event: React.ChangeEvent<HTMLInputElement>) {
        let bill = parseFloat(event.currentTarget.value);
        if (isNaN(bill)) {
            tip.bill = 0;
        } else tip.bill = bill;
        handleTipAmount();
        handleTotal();
    }

    function handleNumberOfPeople(event: React.ChangeEvent<HTMLInputElement>) {
        let numberOfPeople = parseInt(event.currentTarget.value);
        if (isNaN(numberOfPeople)) {
            tip.numberOfPeople = 1;
        } else {
            tip.numberOfPeople = numberOfPeople;
        }
        handleTipAmount();
        handleTotal();
    }

    function handleSelectTip(num: number) {
        tip.selectTip = num;
        handleTipAmount();
        handleTotal();
    }

    function handleCustomSelectTip(event: React.ChangeEvent<HTMLInputElement>) {
        tip.selectTip = parseFloat(event.currentTarget.value);
        handleTipAmount();
        handleTotal();
    }

    function handleTipAmount() {
        if (tip.selectTip !== 0 && tip.numberOfPeople !== 0) {
            let value = ((tip.selectTip * tip.bill) / 100) / tip.numberOfPeople;
            tip.tipAmount = value;
            onChangeTip("tipAmount", value);
        }

    }

    function handleTotal() {
        if (tip.selectTip !== 0 && tip.numberOfPeople !== 0) {
            let tipValue = (tip.selectTip * tip.bill) / 100;
            let total = tipValue + tip.bill;
            tip.total = total;
            onChangeTip("total", total);
        }
    }

    function handleReset() {
        tip.total = 0;
        tip.tipAmount = 0;
        onChangeTip("total", 0);
        onChangeTip("tipAmount", 0);
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
                        <div className="Dollar-Icon">NOK</div>
                        <input id="number" type="number" placeholder="0" className="Bill-Input"
                               onChange={handleBill} autoComplete="off"
                        />
                    </div>
                </div>
                <div className="Tip">
                    <h3 className="Bill-Text">Select Tip %</h3>
                    <div className="Tip-Grid">
                        <button onClick={() => handleSelectTip(5)}>5%</button>
                        <button onClick={() => handleSelectTip(10)}>10%</button>
                        <button onClick={() => handleSelectTip(15)}>15%</button>
                        <button onClick={() => handleSelectTip(20)}>20%</button>
                        <button onClick={() => handleSelectTip(25)}>25%</button>
                        <input id="number" autoComplete='off' type="number" placeholder="Custom" className="Custom-Tip"
                               onChange={handleCustomSelectTip}/>
                    </div>
                </div>
                <div className="Bill">
                    <h3 className="Bill-Text">Number of People</h3>
                    <div className="Bill-Input-Field">
                        <img src={IconPerson} alt="Person icon" className="Person-Icon"/>
                        <input id="number" autoComplete='off' type="number" placeholder="0" className="Bill-Input"
                               onChange={handleNumberOfPeople}/>
                    </div>
                </div>
                <div className="Amount">
                    <h3 className="Tip-h3">Tip Amount</h3>
                    <h4 className="Tip-h4">/ person</h4>
                    <h1 className="Tip-h1">{tip.tipAmount}</h1>
                    <h3 className="Total-h3">Total</h3>
                    <h4 className="Total-h4">/ person</h4>
                    <h1 className="Total-h1">{tip.total}</h1>
                    <button className="Amount-Reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )

}

export default App;
