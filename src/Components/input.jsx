// Input Component
// This component is responsible for rendering an input field and handling its state
export default function Input(props){
    const { cn, type, placeholder, id, onChange, onFocus, onBlur } = props;
    return <input className={cn} placeholder={placeholder} id={id} type={type} onChange={onChange} onFocus={onFocus} onBlur={onBlur}></input>
}