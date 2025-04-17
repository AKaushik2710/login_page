// Div Component
// This component is responsible for rendering a div element and handling its state
export default function Div(props) {
    const { cn, children, onClick, hover } = props;

    return (
        <div
            className={cn}
            onClick={onClick}
            onMouseOver={hover ? hover : undefined} // Call hover only if it's defined
            onMouseOut={hover ? () => hover(true) : undefined} // Call hover only if it's defined
        >
            {children}
        </div>
    );
}
