import Agreement from '../components/indexAgree'
import Head from 'next/head'
import Link from 'next/link'

const index = () => (
    <>
        <Head>
            <meta charSet='utf-8' />
        </Head>
        <Link className='aTag' href='/signup'>
            Sign Up
        </Link>
    </>
)

export default index
