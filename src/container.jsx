import style from"./container.module.css"

const Container=({ children })=> {
  return <div className={style.cont}>{children}</div>;
}
export default Container;
