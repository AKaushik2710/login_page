// Button component
// This component is responsible for rendering a button and handling its click event
export default function Button(props) {
    const { cn, children, type, onClick } = props;
    return <button className={cn} type={type} onClick={onClick}>{children}</button>
}