import classes from './Button.module.css'

const Button = (props) => {
    return <button className={classes.button} onClick={props.onClick} type={props.type}>{props.children}</button>
}

export default Button