import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {};

const Login: React.FC<Props> = ({ }) => {
    return (
        <div>
            {/* Login Button (Next Auth) */}
            <button onClick={(e) => {
                e.preventDefault()
                signIn()
            }} >
                <CgProfile size={34} className="mr-6 mt-3" />
            </button>
        </div>
    )
}

export default Login


