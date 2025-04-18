import { createContext } from "react";
import Card from "./card";
import Login_State from "./login_func"
import "./login.css";
import components from "../../Components/components";
import Button from "../../Components/button";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Login_Page(){
        const {Div} = components();
        return <>
            <Div cn="col-6 p-0 bg-primary">
                <Div cn="h-100 d-flex flex-column">
                    <Div cn="h-10 change"></Div>
                        <Div cn="h-90 d-flex justify-content-center align-items-center position-relative">
                            <Div cn="position-absolute top-25 end-25">
                                <Button cn="btn btn-warning" type="button" id="button-addon2">{"Signup     "}<i class="bi bi-arrow-left-right"></i></Button>
                            </Div>
                            <Card />
                        </Div>
                    <Div cn="h-10 change-y"></Div>
                </Div>
            </Div>
        </>
}