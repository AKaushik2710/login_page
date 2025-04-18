// Div Component
// This component is responsible for rendering a div element and handling its state
export default function Div(props) {
    const { cn, children, onClick, handleHover } = props;

    console.log("handleHover in Div:", handleHover); // Debugging

    return (
        <div
            className={cn}
            onClick={onClick}
            onMouseOver={() => handleHover && handleHover()} // Call handleHover(false) if defined
            onMouseOut={() => handleHover && handleHover(true)}  // Call handleHover(true) if defined
        >
            {children}
        </div>
    );
}
