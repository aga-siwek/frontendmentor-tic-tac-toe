import styles from "./Logo.module.css"
import { ReactSVG } from 'react-svg'
import logoIcon from "../../../assets/logo.svg"

function Logo() {
    return (
        <div className={styles.logo_container}>
            <ReactSVG src={logoIcon} alt="logo" />
        </div>)
}

export default Logo