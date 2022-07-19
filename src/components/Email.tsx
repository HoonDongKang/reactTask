import { useState } from 'react'

const EmailVerify = () => {
    const [email, setEmail] = useState('')
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(e.target.emailValue.value)
    }

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type='email'
                    name='emailValue'
                    value={email}
                    onChange={emailHandler}
                ></input>
                <input type='submit'></input>
            </form>
        </>
    )
}

export default EmailVerify
