export default function Input(props){
    const { cn, type, placeholder, id, onChange } = props;
    return <input className={cn} placeholder={placeholder} id={id} type={type} onChange={onChange}></input>
}