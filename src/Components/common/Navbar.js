import { Link/*, useMatch, useResolvedPath*/ } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "../../styles/common/navbar.css"


    function Navbar() {

    const { user } = UserAuth();

    return  <nav className="nav">
                <Link to="/" className="site-title">Skyr Studios</Link> 
                <ul className="nav-list">
                    <li className="link-container">
                        <CustomLink to="products" className='page-link'>Products</CustomLink>
                    </li>
                    <li className="link-container">
                        <CustomLink to="about" className='page-link'>About</CustomLink>
                    </li>
                    <li className="link-container">
                        {user?.displayName ? <ProfilePic/> : <LoginBtn/>}  
                    </li>
                </ul>
            </nav>
}

function CustomLink({ to, children, ...props }){
    // const resolvedPath = useResolvedPath(to);
    // const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    return(
            <Link to={to} {...props}>
                {children}
            </Link>
    )
}

const ProfilePic = () => {
    const {user} = UserAuth();

    return(
        <CustomLink to="account">
            <img src={user.photoURL} alt="prifle pic" className="profpic"/>
        </CustomLink>
    )
}

function LoginBtn(){
    return(
        <CustomLink to="login" className="loginBtn">Login</CustomLink>
    )
}

export default Navbar;



