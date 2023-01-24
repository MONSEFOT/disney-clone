import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { authentication, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/user_slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/components/Header.scss";

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    function setUser(user) {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }

    function handleAuth() {
        if (userName)
            return signOut(authentication, provider).then(() => {
                dispatch(setSignOutState({}));
                navigate('/');
            });
        signInWithPopup(authentication, provider).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            console.log(error.message);
        });
    }
    useEffect(() => {
        onAuthStateChanged(authentication, async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        });
    }, [userName]);

    return <header>
        {
            userName && <a className='nav-logo' href="/">
                <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_3840/v1656431462/web-images/logo-d-plus-horizontal.svg" alt="" />
            </a>
        }
        {userName ? <nav className='nav-menu'>
            <a href="/">
                <i className="fa-solid fa-house"></i>
                <span>HOME</span>
            </a>
            <a href="/">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>SEARCH</span>
            </a>
            <a href="/">
                <i className="fa-solid fa-plus"></i>
                <span>WATCHLIST</span>
            </a>
            <a href="/">
                <i className="fa-solid fa-star"></i>
                <span>ORIGINALS</span>
            </a>
            <a href="/">
                <i className="fa-solid fa-film"></i>
                <span>MOVIES</span>
            </a>
            <a href="/">
                <i className="fa-solid fa-tv"></i>
                <span>SERIES</span>
            </a>
        </nav>
            : <div></div>}
        {userName ?
            <div className='avatar'>
                <img src={userPhoto} alt={userName} />
                <div className='drop-down'>
                    <span onClick={handleAuth}>SignOut</span>
                </div>
            </div>
            : <button className='login-btn' onClick={handleAuth}>
                Log In
            </button>}
    </header>
}

export default Header;
