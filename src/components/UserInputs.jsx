import InputBox from './InputBox';

export default function UserInputs({ data, onInputChange }) {

    return (
        <section id="user-input">
            <div className="input-group" >
                <InputBox onChange={(event) => onInputChange('initialInvestment', event.target.value)} inputVal={data.initialInvestment}>Initial Investment</InputBox>
                <InputBox onChange={(event) => onInputChange('annualInvestment', event.target.value)} inputVal={data.annualInvestment}>Annual Investment</InputBox>
            </div>
            <div className="input-group">
                <InputBox onChange={(event) => onInputChange('expectedReturn', event.target.value)} inputVal={data.expectedReturn}>Expected Return</InputBox>
                <InputBox onChange={(event) => onInputChange('duration', event.target.value)} inputVal={data.duration}>Duration</InputBox>
            </div>

        </section>
    );
}