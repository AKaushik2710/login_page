export default function Button(props) {
    const { cn, text, type, onClick } = props;
    return <button className={cn} type={type} onClick={onClick}>{text}</button>
}