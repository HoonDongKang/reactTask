const CountryInput = (props) => {
    // Country options list
    const nationArr = [
        '============ Country List ============',
        'Algeria',
        'Angola',
        'Austria',
        'Australia ',
        'Bermuda ',
        'Bosnia ',
        'China ',
        'Cook ',
        'Czech Republic',
        'Dominica ',
        'France ',
        'Hong Kong',
        'Japan ',
        'Korea North',
        'Korea South',
        'New Zealand',
    ]

    return (
        <div>
            <label htmlFor='country'>Country</label>
            <select id='country' onChange={props.onChange} value={props.value}>
                Country
                {nationArr.map((nation) => {
                    return (
                        <option value={nation} key={nation}>
                            {nation}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default CountryInput
