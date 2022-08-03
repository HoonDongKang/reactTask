import { CommunityUlContainer } from './Writing.style'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
const Community = () => {
    const [writing, setWriting] = useState([])
    useEffect(() => {
        const getRequest = async () => {
            const response = await apiInstance.get('/writing')
            setWriting(response.data)
        }
        getRequest()
    }, [])

    const [isShown, setIsShown] = useState(true)

    const comment = (e) => {
        setIsShown((isShown) => !isShown)
    }
    let toggleClassCheck = isShown ? 'active' : null
    return (
        <>
            {writing.map((writeObj) => (
                <CommunityUlContainer key={writeObj.idx}>
                    <li>{writeObj.title}</li>
                    <li>{writeObj.content}</li>
                    <div>
                        <a
                            href='#'
                            onClick={comment}
                            className={`btn${toggleClassCheck}`}
                        >
                            댓글 달기
                        </a>
                        <li>
                            <textarea />
                            <a href='#'>취소</a>
                            <a href='#'>등록</a>
                        </li>
                    </div>
                </CommunityUlContainer>
            ))}
        </>
    )
}

export default Community
