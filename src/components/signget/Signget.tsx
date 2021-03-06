import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { DivContainer, InfoListDivContainer } from './Signget.style'

const Signget = () => {
    const [message, setMessage] = useState([])
    useEffect(() => {
        const getRequest = async () => {
            const response = await apiInstance.get('/users')
            setMessage(response.data)
        }
        getRequest()
    }, [])
    //
    return (
        <InfoListDivContainer>
            {message.map((messageObj) => (
                <DivContainer key={messageObj.idx}>
                    <p>idx: {messageObj.idx}</p>
                    <p>id: {messageObj.id}</p>
                    <p>pw: {messageObj.pw}</p>
                    <p>name: {messageObj.name}</p>
                    <p>age: {messageObj.age}</p>
                    <p>country: {messageObj.country}</p>
                </DivContainer>
            ))}
        </InfoListDivContainer>
    )
}

export default Signget
