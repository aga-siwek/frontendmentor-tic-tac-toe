import styles from "./ButtonPrimary.module.css"

function ButtonPrimary({text = "CLICK ME", color = "blue", clickFunction, arg = ""}) {
    const colorPicker = () => {
        return styles[color]
    }

    return (
        <button className={`
        ${styles.button_container} 
        ${colorPicker()}`}
                onClick={() => clickFunction(arg)}>
            {text}
        </button>
    )
}

export default ButtonPrimary