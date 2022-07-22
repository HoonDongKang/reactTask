import { useRouter } from 'next/router'

const Verifytest = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
            <p>post: {pid}</p>
        </>
    )
}

export default Verifytest
