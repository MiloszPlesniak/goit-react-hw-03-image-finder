import css from "./Button.module.css"


const Button = ({loadMore}) => {
    return(<button onClick={loadMore} className={css.Button}>Load more</button>)
}


export default Button