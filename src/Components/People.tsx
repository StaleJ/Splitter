import IconPerson from '../Static/icon-person.svg'

function People() {
    return (
        <div className="Bill">
            <h3 className="Bill-Text">Number of People</h3>
            <div className="Bill-Input-Field">
                <img src={IconPerson} alt="Person icon" className="Person-Icon"/>
                <input id="number" type="number" placeholder="0" className="Bill-Input"/>
            </div>
        </div>
    );
}

export default People;