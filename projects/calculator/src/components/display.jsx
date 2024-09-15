import styles from "./display.module.css"
const Display = ({displayValue}) =>{
    return <div>
        <input className={styles.display} type="text" value={displayValue} readOnly></input>
    </div>
}
export default Display;