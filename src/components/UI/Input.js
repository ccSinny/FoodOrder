import classes from './Input.module.css';

const Input = props => {
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <Input {...props.input}/>
    </div>
}

export default Input;