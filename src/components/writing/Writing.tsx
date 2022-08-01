import { useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from './../../apis/setting'
const Writing = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const submit = async (e) => {
        e.preventDefault()
        await apiInstance
            .post('/writing', { title: title, content: content })
            .then(() => {
                toast.success('post success')
            })
            .catch(() => {
                toast.error('post fail')
            })
    }
    return (
        <form onSubmit={submit}>
            <label htmlFor='title'> 제목 : </label>
            <input
                id='title'
                type='text'
                value={title}
                onChange={titleHandler}
            />
            <label htmlFor='content'> 내용 : </label>
            <input
                id='content'
                type='text'
                value={content}
                onChange={contentHandler}
            />
            <input type='submit' />
        </form>
    )
}

export default Writing
