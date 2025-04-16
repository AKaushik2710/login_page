import components from "../../Components/components";
import "./signup.css"

export default function Signup(){
    const {Div, Button, Input, Label} = components();
    return (
    <>
        <Div cn="col-6 p-0 bg-warning">
            <Div cn="h-100 d-flex flex-column">
                <Div cn="h-10 change"></Div>
                <Div cn="h-90"></Div>
                <Div cn="h-10 change-y"></Div>
            </Div>
        </Div>
    </>
    )
}