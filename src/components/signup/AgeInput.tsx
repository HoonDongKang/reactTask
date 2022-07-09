const AgeInput = (props) => (
    <div>
        <label>Age</label>
        <input
            name='age'
            type='number'
            value={props.value}
            onChange={props.onChange}
        ></input>
    </div>
)

export default AgeInput
