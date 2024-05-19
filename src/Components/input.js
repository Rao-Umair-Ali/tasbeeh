function Input(props){
return(
<div className="input">
    <label for={props.name}>{props.label}</label>
    <input type={props.name} id={props.name}></input>
</div>


);


}
export default Input