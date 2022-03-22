import classes from "./Section.module.css"

const Section = (props) => {
    return <div className={classes.div}>{props.children}</div>
}

export default Section