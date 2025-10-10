import style from "./buttons.module.css"
const Button=({CalButtons,handleOnClick})=>{
    return(
        CalButtons.map((btn,index)=>{
            return( <button onClick={handleOnClick} key={index} type="button" className={`btn btn-secondary ${style.btn}`}>{btn}</button>)
        })
    )
}

export default Button