import components from "../../Components/components"
import Login_Page from "./login_page";
import Signup from "../signup/signup";
// Login Page Component
// This component is responsible for rendering the login form and handling user input
export default function Login (){
    const {Div} = components();
    return (
        <>
            <Div cn="container-fluid bg-dark ">
                <Div cn="row vh-100">
                    <Login_Page />
                    <Signup />
                </Div>
            </Div>
        </>
    )
}
