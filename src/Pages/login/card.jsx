import components from "../../Components/components";
import Login_State from "./login_func";
import "./login.css";
export default function Card(){
    const {Div, Button, Input, Label} = components();
    const {visibility, handleFields, handleHover, handlePass} = Login_State();
    return <>
    <Div cn={visibility.parent} handleHover={handleHover}>
        <Div cn="d-flex flex-column justify-content-evenly p-3 h-100">
            <Div cn=" p-2">
                <Div cn="col">
                    <Label htmlFor="log_name" cn={visibility.fields.log[0]}>{"Name"}</Label>
                    <Input
                        cn={visibility.fields.log[1]}
                        type="text"
                        id="log_name"
                        // onFocus={() => handleFields(["log", true])}
                        // onBlur={() => handleFields(["log", false])}
                        placeholder="Enter your name"
                    />
                </Div>
            </Div>
            <Div cn="p-2 ">
                <Div cn="col">
                    <Label htmlFor="log_pass" cn={visibility.fields.pass[0]}> {"Password"}</Label>
                    <Div cn="input-group">
                        <Input
                            cn={visibility.fields.pass[1]}
                            type={visibility.fields.pass[2]}
                            id="log_pass"
                            // onFocus={() => handleFields(["pass", true])}
                            // onBlur={() => handleFields(["pass", false])}
                            placeholder="Password"
                        />
                        <Button cn={visibility.fields.log[2]} onClick={handlePass} type="button" id="button-addon2">{"Show"}</Button>
                    </Div>
                </Div>
            </Div>
            <Div cn="p-2">
                <Div cn="col d-flex justify-content-center align-items-center">
                    <Button cn="btn btn-primary" type="submit">{"Login"}</Button>
                </Div>
            </Div>
        </Div>
    </Div>
    </>
}