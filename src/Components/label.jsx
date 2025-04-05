export default function Label(props) {
    const { cn, text, htmlFor } = props;
    return <label className={cn} htmlFor={htmlFor}>{text}</label>
}