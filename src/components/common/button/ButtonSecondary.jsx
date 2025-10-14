import styles from "./ButtonSecondary.module.css"

function ButtonSecondary({text = "CLICK ME", color = "silver", onClick=null}) {
    const colorPicker = () => {
        return styles[color]
    }
    return (
        <button
            className={`${styles.button_container} ${colorPicker()}`}
            onClick={(e) => onClick(e)}>
            {text}
        </button>)
}

export default ButtonSecondary