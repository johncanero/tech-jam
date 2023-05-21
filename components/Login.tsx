import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {};


const Login: React.FC<Props> = ({ }) => {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                // Render Google image instead of the CgProfile icon
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    onClick={(() => signOut())}
                    src={session.user?.image!}
                    alt='user-avatar'
                    className='w-9 h-9 mx-auto lg:mt-2 mb-2 lg:mr-3 mr-3 md:mr-5 rounded-full cursor-pointer 2xl:h-12 2xl:w-12 hover:opacity-50'
                />
            ) : (
                // Render the login button
                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                }}>
                    <CgProfile size={32} className="lg:mr-3 lg:mt-3 md:mr-4 mr-3" />
                </button>
            )}
        </div>
    )
}

export default Login
