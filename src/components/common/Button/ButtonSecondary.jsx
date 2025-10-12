import styles from "./ButtonSecondary.module.css"

function ButtonSecondary({text = "CLICK ME", color = "silver", clickFunction}) {
    const colorPicker = () => {
        return styles[color]
    }
    return (
        <button
            className={`${styles.button_container} ${colorPicker()}`}
            onClick={() => clickFunction()}>
            {text}
        </button>)
}

export default ButtonSecondary