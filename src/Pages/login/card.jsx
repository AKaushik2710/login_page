import components from "../../Components/components";

export default function Card(props){
    const {Div, Button, Input, Label} = components();
    const {visibility, handleInput, handlePass} = props;
    return <>
    <Div cn="card shadow w-50 h-50 p-3">
                                        <Div cn="d-flex flex-column justify-content-evenly p-3 h-100">
                                            <Div cn=" p-2">
                                                <Div cn={visibility[0].parent}>
                                                    <Label htmlFor="log_name" cn={visibility[0].log}>{"Name"}</Label>
                                                    <Input
                                                        cn="form-control"
                                                        type="text"
                                                        id="log_name"
                                                        onFocus={() => handleInput(["log", true])}
                                                        onBlur={() => handleInput(["log", false])}
                                                        placeholder="Enter your name"
                                                    />
                                                    {visibility[0].float ? <Label htmlFor="log_name" cn="form-label">{"Name"}</Label> : null}
                                                </Div>
                                            </Div>
                                            <Div cn="p-2 ">
                                                <Div cn={visibility[1].parent}>
                                                    <Label htmlFor="log_pass" cn={visibility[1].pass}>{"Password"}</Label>
                                                    <Div cn="input-group">
                                                        {visibility[1].float ? <Label htmlFor="log_pass" cn="input-group-text">{"Password"}</Label> : null}
                                                        <Input
                                                            cn="form-control"
                                                            type={visibility[1].type}
                                                            id="log_pass"
                                                            onFocus={() => handleInput(["pass", true])}
                                                            onBlur={() => handleInput(["pass", false])}
                                                            placeholder="Password"
                                                        />
                                                        <Button cn="btn btn-outline-secondary" onClick={handlePass} type="button" id="button-addon2">{"Show"}</Button>
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