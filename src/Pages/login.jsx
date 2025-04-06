import components from "../Components/components"

export default function Login (){
    const {Div, Button, Input, Label} = components();
    return (
        <>
            <Div cn="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
                <Div cn="card shadow w-50 h-50 p-3">
                <Div cn=" container p-3">
                    <Div cn="row p-2">
                        <Div cn="col col-12">
                            <Label htmlFor="log_name" cn="form-label"  ariaHidden={"true"}>{"Name"}</Label>
                            <Input cn="form-control" type="text" id="log_name" placeholder="Enter your name" />
                        </Div>
                    </Div>
                    <Div cn="row p-2">
                        <Div cn="col">
                            <Label htmlFor="log_pass" cn="form-label text-lg">{"Password"}</Label>
                            <Input cn="form-control" type="password" id="Log_pass" placeholder="Password"></Input>
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