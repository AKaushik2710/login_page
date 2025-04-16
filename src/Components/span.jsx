
export default function Span(props){
    const {cn, children, onClick} = props;
    return <span className={cn} onClick={onClick}>{children}</span>
}