import { useState } from 'react'
import useInput from '../hooks/useInput'

const Banana = (props) => {
    //props
    const { color, fruit } = props

    // declare variables
    const [values, setValues] = useInput({
        id: '',
        pw: '',
        email: '',
    })

    // event handler
    const login = (e) => {
        e.preventDefault()
        alert('login')
    }

    // const changeId = (e) => {
    //     e.preventDefault()
    //     setId(e.target.value)
    // }
    // const changePw = (e) => {
    //     e.preventDefault()
    //     setPw(e.target.value)
    // }
    return (
        <>
            <form onSubmit={login}>
                <label>
                    <input
                        name='id'
                        type='text'
                        value={values.id}
                        onChange={setValues}
                        placeholder='testID'
                    ></input>
                </label>
                <label>
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={setValues}
                        placeholder='testEmail'
                    ></input>
                </label>
                <label>
                    <input
                        name='pw'
                        type='password'
                        value={values.pw}
                        onChange={setValues}
                        placeholder='testPW'
                    ></input>
                </label>
                <input type='submit'></input>
            </form>
        </>
    )
}

export default Banana
