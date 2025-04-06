export default function Label(props) {
    const { cn, children, htmlFor } = props;
    return <label className={cn} htmlFor={htmlFor}>{children}</label>
}