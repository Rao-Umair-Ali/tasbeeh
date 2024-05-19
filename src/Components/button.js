import './button.css'
function Mybutton(props){
return(
<div >

    <button className='button' type= {props.types} onClick={props.click}>{props.name}</button>
</div>


)


}
export default Mybutton;