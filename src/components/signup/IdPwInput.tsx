export const IdInput = (props) => (
    <div>
        <label>ID</label>
        <input
            name='id'
            type='text'
            value={props.value}
            onChange={props.onChange}
        />
    </div>
)

export const PwInput = (props) => (
    <div>
        <label>Password</label>
        <input
            name='pw'
            type='password'
            value={props.value}
            onChange={props.onChange}
        ></input>
    </div>
)
