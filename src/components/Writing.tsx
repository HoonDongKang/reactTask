import { useState } from 'react'
const Writing = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
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
            <input id='content' type='text' />
            <input type='submit' value={content} onChange={contentHandler} />
        </form>
    )
}

export default Writing
