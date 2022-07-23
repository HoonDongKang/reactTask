import { useRouter } from 'next/router'

const Verifytest = () => {
    const router = useRouter()
    const { test } = router.query

    return (
        <>
            <p>post: </p>
            <p>test: {test}</p>
        </>
    )
}

export default Verifytest
