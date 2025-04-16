import style from './style/Header.module.css';
import logo from "../image/logo.png";
import { AiOutlineHeart , AiOutlineBell } from "react-icons/ai";
import Fav_Not from './Fav_Not';

export default function Header({ }) {
    return (
        <>
            <header>
                <div className={style.block}>
                    <img src={logo} alt='Edufarmers' />
                    <div className={style.profile}>
                        <Fav_Not icon={<AiOutlineHeart/>} title={'Favorites'}/>  
                        <Fav_Not icon={<AiOutlineBell/>} title={'Notification'}/>  
                    </div>
                </div>
            </header>
        </>
    )
}