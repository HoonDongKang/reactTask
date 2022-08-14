import useKaKaoScript from '../../hooks/use-kakao-script'
import KaKaoTest from './KaKaoTest'

const KaKaoLayout = () => {
    useKaKaoScript(`https://developers.kakao.com/sdk/js/kakao.js`)
    return (
        <div>
            <KaKaoTest />
        </div>
    )
}

export default KaKaoLayout
