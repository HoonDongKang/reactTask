import Link from 'next/link'

const TitleInput = () => (
    <>
        <div>
            <p>Sign Up</p>
            <span>
                Already have an accout?{' '}
                <Link className='aTag' href='/'>
                    Sign in
                </Link>
            </span>
        </div>
    </>
)

export default TitleInput
