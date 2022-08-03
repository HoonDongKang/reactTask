import { useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from './../../apis/setting'
import Community from './Community'

const Writing = () => {
    const [commentValue, setCommentValue] = useState('')
    const handleClick = (e) => {
        setCommentValue(e.currentTarget.value)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await apiInstance
            .post('/writing', { content: commentValue })
            .then(() => {
                toast.success('post success')
            })
            .catch(() => {
                toast.error('post fail')
            })
    }

    return (
        <div>
            <p>Replies</p>
            <hr />
            <Community />
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '500px', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder='코멘트 작성해주세요'
                />
                <br />
                <button
                    style={{ width: '20%', height: '52px' }}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Writing
