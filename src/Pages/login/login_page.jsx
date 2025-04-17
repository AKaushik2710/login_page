import { createContext } from "react";
import Card from "./card";
import Login_State from "./login_func"
import "./login.css";
import components from "../../Components/components";

export default function Login_Page(){
        const {Div} = components();
        return <>
            <Div cn="col-6 p-0 bg-primary">
                <Div cn="h-100 d-flex flex-column">
                    <Div cn="h-10 change"></Div>
                        <Div cn="h-90 d-flex justify-content-center align-items-center">
                            <Div></Div>
                            <Card />
                        </Div>
                    <Div cn="h-10 change-y"></Div>
                </Div>
            </Div>
        </>
}