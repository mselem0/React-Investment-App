export default function ({children, onChange, inputVal}) { 

    return (
        <div style={{marginBottom: '20px'}}>
            <label>
                {children}
            </label>
            <input type="number" onChange={onChange} value={inputVal}/>
        </div>
    );
}