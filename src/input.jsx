import style from "./input.module.css"
const Input=({initialInput})=>{
    return(
    <input value={initialInput} type="text" readOnly className={style.inputCont} placeholder="Calculate Your No"/>
    )
}
export default Input