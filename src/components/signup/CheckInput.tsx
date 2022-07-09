import Link from 'next/link'

const CheckInput = (props) => (
    <span className='policyTag'>
        <input
            type='checkbox'
            id='agree'
            value={props.value}
            onChange={props.onChange}
        ></input>
        <label htmlFor='agree'>
            I have read and agree to the{' '}
            <Link className='aTag' href='/agreement'>
                Terms of Service
            </Link>
        </label>
    </span>
)

export default CheckInput
