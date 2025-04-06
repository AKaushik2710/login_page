import components from "../Components/components"
import Login_State from "./login_func"

export default function Login (){
    const {Div, Button, Input, Label} = components();
    const {visibility, handleInput} = Login_State();
    return (
        <>
            <Div cn="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
                <Div cn="card shadow w-50 h-50 p-3">
                <Div cn=" container p-3">
                    <Div cn="row p-2">
                        <Div cn={visibility[0].parent}>
                            <Label htmlFor="log_name" cn={visibility[0].log}>{"Name"}</Label>
                            <Input cn="form-control" type="text" id="log_name" onFocus={()=>handleInput(["log", false])} onBlur={()=> handleInput(["log", true])} placeholder="Enter your name" />
                            {visibility[0].float ? <Label htmlFor="log_name" cn="form-label">{"Name"}</Label> : null}
                        </Div>
                    </Div>
                    <Div cn="row p-2">
                        <Div cn={visibility[1].parent}>
                            <Label htmlFor="log_pass" cn={visibility[1].pass}>{"Password"}</Label>
                            <Input cn="form-control" type="password" id="Log_pass" onFocus={()=>handleInput([pass, false])} onBlur={()=> handleInput([pass, true])}  placeholder="Password"></Input>
                            {visibility[1].float ? <Label htmlFor="log_pass" cn="form-label">{"Password"}</Label> : null}
                        </Div>
                    </Div>
                    <Div cn="row p-2 justify-content-center">
                        <Div cn="col-auto">
                            <Button cn="btn btn-primary" type="submit">{"Login"}</Button>
                        </Div>  
                    </Div>
                </Div>
                </Div>
            </Div>
        </>
    )
}