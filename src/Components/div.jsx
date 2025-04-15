// Div Component
// This component is responsible for rendering a div element and handling its state
export default function Div(props) {
    const { cn, children, onClick } = props;
    return <div className={cn} onClick={onClick}>{children}</div>
}