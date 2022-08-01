import { CommunityDivContainer } from './Writing.style'
const Community = () => {
    const title = 'test Title'
    const content = 'test Content'

    return (
        <CommunityDivContainer>
            <p>title:{title}</p>
            <p>content:{content}</p>
        </CommunityDivContainer>
    )
}

export default Community
