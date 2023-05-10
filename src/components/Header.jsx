import Styles from './Header.module.css'
import IgniteLogo from '../assets/Ignite-logo.svg'

export function Header () {
    return (
        <header className={Styles.header}>
            <a href='#home'><img src={IgniteLogo} alt="Logo do Ignite Feed"/></a>
            <span>Ignite Feed</span>
        </header>
    )
}