import styles from "./ButtonPrimary.module.css"

function ButtonPrimary({text = "CLICK ME", color = "blue", onClick = null}) {

    const colorPicker = () => {
        return styles[color]
    }

    return (
        <button className={`
        ${styles.button_container} 
        ${colorPicker()}`}
                onClick={(e) => onClick(e)}>
            {text}
        </button>
    )
}

export default ButtonPrimary