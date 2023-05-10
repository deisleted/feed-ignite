import Styles from './Avatar.module.css'


export function Avatar({ hasBorder= true ,src}){

    return (
        <img
        className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
        src={src}
      />
    )
}