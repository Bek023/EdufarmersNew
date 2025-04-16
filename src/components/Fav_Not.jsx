import style from "./style/Fav_Not.module.css";

export default function Fav_Not({icon , title }) {
    return (
        <>
            <div className={style.block}>
                <span style={style.text}>{icon}{title}</span>
            </div>
        </>
    )
}