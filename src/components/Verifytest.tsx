import { useRouter } from 'next/router'

const Verifytest = () => {
    const router = useRouter()
    const { pid, test } = router.query // pid : path  test: query

    return (
        <>
            <p>post: {pid}</p>
            <p>test: {test}</p>
        </>
    )
}

export default Verifytest
