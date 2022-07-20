import axios from 'axios'
import { useState } from 'react'
import { apiInstance } from './../apis/setting'
import { toast } from 'react-toastify'

const EmailVerify = () => {
    const [email, setEmail] = useState('')
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const submit = async (e) => {
        e.preventDefault()
        const emailValue = e.target.emailValue.value
        await apiInstance
            .post('/mail', {
                email: emailValue,
            })
            .then(() => {
                toast('please Check your email')
            })
            .catch(() => {
                toast('Fail to post Address')
            })
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
