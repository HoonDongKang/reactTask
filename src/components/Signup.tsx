import useInput from '../hooks/useInput'
import { Formcontainer } from './Signup.style'
import { toast } from 'react-toastify'
const Signup = () => {
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
            <Formcontainer>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label>
                        ID:
                        <input
                            name='id'
                            type='text'
                            placeholder='ID'
                            value={input.id}
                            onChange={setInputs}
                        ></input>
                    </label>

                    <label>
                        Password:
                        <input
                            name='pw'
                            type='password'
                            placeholder='PW'
                            value={input.pw}
                            onChange={setInputs}
                        ></input>
                    </label>

                    <label>
                        Name:
                        <input
                            name='name'
                            type='text'
                            placeholder='Name'
                            value={input.name}
                            onChange={setInputs}
                        ></input>
                    </label>

                    <label>
                        Age:
                        <input
                            name='age'
                            type='number'
                            placeholder='Age'
                            value={input.age}
                            onChange={setInputs}
                        ></input>
                    </label>

                    <input type='submit' onClick={submit}></input>
                </fieldset>
            </Formcontainer>
        </>
    )
}

export default Signup
