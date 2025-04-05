export default function Div(props) {
    const { cn, children, onClick } = props;
    return <div className={cn} onClick={onClick}>{children}</div>
}