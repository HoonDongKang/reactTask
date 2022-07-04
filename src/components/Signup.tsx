import useInput from '../hooks/useInput'
import { Formcontainer, PageDivcontainer } from './Signup.style'
import { toast } from 'react-toastify'
import Link from 'next/link'
import dog from '../img/dog.jpg'

const Signup = () => {
    //useInput module
    const [input, setInputs] = useInput({
        id: '',
        pw: '',
        name: '',
        age: '',
    })

    const submit = (e) => {
        e.preventDefault()
        if (
            input.name != '' &&
            input.id != '' &&
            input.pw != '' &&
            input.age != ''
        ) {
            toast.success(`Login Succeed`)
            toast(`Welcome ${input.name} ~!`)
        } else {
            toast.error('Please fill all blanks')
        }
    }
    const nationArr = [
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

    // const inputArr = [
    //     { name: 'ID', type: 'text', value: input.id },
    //     {
    //         name: 'Password',
    //         type: 'password',
    //         value: input.pw,
    //     },
    //     { name: 'Name', type: 'text', value: input.name },
    //     { name: 'Age', type: 'number', value: input.age },
    // ]

    return (
        <>
            <PageDivcontainer>
                <div className='imgDiv'>
                    <img src='dog.jpg' alt='dog'></img>
                </div>
                <div className='signUpDiv'>
                    <Formcontainer>
                        <div>
                            <p>Sign Up</p>
                            <span>
                                Already have an accout?{' '}
                                <Link className='aTag' href='/'>
                                    Sign in
                                </Link>
                            </span>
                        </div>
                        {/* map을 통해서 사용하면 onChange가 작동하지 않음,,("?")
                        {inputArr.map((inputObj) => {
                            return (
                                <div
                                    key={inputObj.name}
                                    style={{ margin: '10px' }}
                                >
                                    <label htmlFor={inputObj.name}>
                                        {inputObj.name}
                                    </label>
                                    <input
                                        type={inputObj.type}
                                        name={inputObj.name}
                                        value={inputObj.value}
                                        onChange={setInputs}
                                    ></input>
                                </div>
                            )
                        })} */}
                        <div>
                            <label>ID</label>
                            <input
                                name='id'
                                type='text'
                                value={input.id}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                name='pw'
                                type='password'
                                value={input.pw}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label>Name</label>
                            <input
                                name='name'
                                type='text'
                                value={input.name}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label>Age</label>
                            <input
                                name='age'
                                type='number'
                                value={input.age}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='country'>Country</label>
                            <select id='country'>
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
                        <span className='policyTag'>
                            <input type='checkbox' id='agree'></input>
                            <label htmlFor='agree'>
                                I have read and agree to the Terms of Service
                            </label>
                        </span>
                        <span className='signUpTag'>
                            <input
                                type='submit'
                                onClick={submit}
                                value='Sign up'
                            ></input>
                            <button>
                                <svg
                                    width='32'
                                    height='20px'
                                    viewBox='0 0 32 32'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z'
                                        fill='currentColor'
                                    ></path>
                                </svg>
                                Continue with GitHub
                            </button>
                        </span>
                    </Formcontainer>
                </div>
            </PageDivcontainer>
        </>
    )
}

export default Signup
