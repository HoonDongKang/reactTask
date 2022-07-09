const NameInput = (props) => (
    <div>
        <label>Name</label>
        <input
            name='name'
            type='text'
            value={props.value}
            onChange={props.onChange}
        ></input>
    </div>
)

export default NameInput
