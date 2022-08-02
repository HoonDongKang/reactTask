import { CommunityDivContainer } from './Writing.style'
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
    const [isShown,setIsShown]=useState(true)

    const comment=()=>{
        setIsShown(current=>!current)
    }

    return (
        <>
            {writing.map((writeObj) => (
                <CommunityDivContainer key={writeObj.title}>
                    <p>{writeObj.title}</p>
                    <p>{writeObj.content}</p>
                    <button onClick={comment}>댓글 달기</button>
                    <input type="text" style={{display: isShown?'block':'none'}}/>
                </CommunityDivContainer>
            ))}
        </>
    )
}

export default Community
