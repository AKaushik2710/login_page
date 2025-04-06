export default function Button(props) {
    const { cn, children, type, onClick } = props;
    return <button className={cn} type={type} onClick={onClick}>{children}</button>
}