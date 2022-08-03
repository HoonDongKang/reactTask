import { CommunityUlContainer } from './Writing.style'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { toast } from 'react-toastify'
const Community = () => {
    const [openReply, setOpenReply] = useState(false)
    const [commentValue, setCommentValue] = useState('')
    const [comments, setComments] = useState([])
    const onClickReplyOpen = () => {
        setOpenReply(!openReply)
    }
    const onHandleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }
    useEffect(() => {
        const getRequest = async () => {
            const response = await apiInstance.get('/writing')
            setComments(response.data)
        }
        getRequest()
    }, [])
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
            {comments.map((commentObj) => {
                return (
                    <div key={commentObj.idx}>
                        <p>{commentObj.content}</p>{' '}
                        <span
                            onClick={onClickReplyOpen}
                            key='comment-basic-reply-to'
                        >
                            Reply to
                        </span>
                    </div>
                )
            })}

            {openReply && (
                <form style={{ display: 'flex' }}>
                    <textarea
                        style={{ width: '500px', borderRadius: '5px' }}
                        placeholder='코멘트 작성해주세요'
                        value={commentValue}
                        onChange={onHandleChange}
                    />
                    <br />
                    <button style={{ width: '20%', height: '52px' }}>
                        Submit
                    </button>
                </form>
            )}
        </div>
    )
    // const [writing, setWriting] = useState([])
    // const [reply, setReply] = useState('')
    // const [replyList, setReplyList] = useState([])
    // const [isShown, setIsShown] = useState(true)
    // const comment = (e) => {
    //     setIsShown((isShown) => !isShown)
    // }
    // const replyHandler = (e) => {
    //     e.preventDefault()
    //     setReply(e.target.value)
    // }
    // useEffect(() => {
    //     const getRequest = async () => {
    //         const response = await apiInstance.get('/writing')
    //         setWriting(response.data)
    //     }
    //     getRequest()
    // }, [])
    // return (
    //     <>
    //         {writing.map((writeObj) => (
    //             <CommunityUlContainer key={writeObj.idx}>
    //                 <li>{writeObj.title}</li>
    //                 <li>{writeObj.content}</li>
    //                 <div>
    //                     <a href='#' onClick={comment}>
    //                         댓글 달기
    //                     </a>
    //                     <li>
    //                         <textarea value={reply} onChange={replyHandler} />
    //                         <a href='#'>취소</a>
    //                         <a href='#'>등록</a>
    //                     </li>
    //                 </div>
    //             </CommunityUlContainer>
    //         ))}
    //     </>
    //)
}

export default Community
