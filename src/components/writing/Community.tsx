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

    return (
        <>
            {writing.map((writeObj) => (
                <CommunityDivContainer key={writeObj.title}>
                    <p>{writeObj.title}</p>
                    <p>{writeObj.content}</p>
                </CommunityDivContainer>
            ))}
        </>
    )
}

export default Community
