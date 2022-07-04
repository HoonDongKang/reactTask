import useInput from '../hooks/useInput'
import { Formcontainer, PageDivcontainer } from './Signup.style'
import { toast } from 'react-toastify'


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
    return (
        <>
            <PageDivcontainer>
                <div className='imgDiv'></div>
                <div className='signUpDiv'>
                    <Formcontainer>
                        <div>
                            <p>Sign Up</p>
                        </div>
                        <div>
                            <label>ID:</label>
                            <input
                                name='id'
                                type='text'
                                placeholder='ID'
                                value={input.id}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                name='pw'
                                type='password'
                                placeholder='PW'
                                value={input.pw}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label>Name:</label>
                            <input
                                name='name'
                                type='text'
                                placeholder='Name'
                                value={input.name}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <label>Age:</label>
                            <input
                                name='age'
                                type='number'
                                placeholder='Age'
                                value={input.age}
                                onChange={setInputs}
                            ></input>
                        </div>
                        <div>
                            <input type='submit' onClick={submit}></input>
                        </div>
                    </Formcontainer>
                </div>
            </PageDivcontainer>
        </>
    )
}

export default Signup
