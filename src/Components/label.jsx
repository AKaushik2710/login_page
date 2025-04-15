// Label component
// This component is responsible for rendering a label for an input field
export default function Label(props) {
    const { cn, children, htmlFor } = props;
    return <label className={cn} htmlFor={htmlFor}>{children}</label>
}