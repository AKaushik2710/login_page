import components from "../Components/components"

export default function Login (){
    const {Div, Button, Input, Label} = components();
    return (
        <>
            <Div cn="container">
                <Div cn="row">
                    <Div cn="col col-12">
                        <Label htmlFor="log_name" cn="form-label">{"Name"}</Label>
                        <Input cn="form-control" type="text" id="log_name" placeholder="Enter your name" />
                    </Div>
                </Div>
                <Div cn="row">
                    <Div cn="col">
                        <Label htmlFor="log_pass" cn="form-label">{"Password"}</Label>
                        <Input cn="form-control" type="password" id="Log_pass" placeholder="Password"></Input>
                    </Div>
                </Div>
            </Div>
        </>
    )
}