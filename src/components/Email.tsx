import axios from 'axios'
import { useState } from 'react'
import { apiInstance } from './../apis/setting'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

const EmailVerify = () => {
    const tempValue = useSelector((state: RootState) => state.email.emailValue)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const submit = async (e) => {
        e.preventDefault()
        const emailValue: string = e.target.emailValue.value
        // dispatch(setEmail(emailValue))

        await apiInstance
            .post('/verify', {
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
