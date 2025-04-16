import { useState } from "react";

// Login_State Component
// This component is responsible for managing the state of the login form
export default function Login_State(){
    const [visibility, setVisibility] = useState([{
        parent : "col",
        log : "form-label",
        float : false
    },{
            parent : "col",
            pass : "form-label",
            float : false,
            type : "password"
        }]);

    function handlePass(e){
        // let trial = [...visibility]
        if(visibility[1].type === "password"){
            setVisibility((prevVisibility)=>{
                return prevVisibility.map((item, index)=>{
                    if(index === 1){
                        return {
                            ...item,
                            type : "text"
                        }
                    }
                    return item;
                })
            })
        }
        else{
            setVisibility((prevVisibility)=>{
                return prevVisibility.map((item, index)=>{
                    if(index === 1){
                        return {
                            ...item,
                            type : "password"
                        }
                    }
                    return item;
                })
            })
        }
    }

    function handleInput(e) {
        const [field, isFocused] = e;
    
        setVisibility((prevVisibility) =>
            prevVisibility.map((item, index) => {
                if ((field === "log" && index === 0) || (field === "pass" && index === 1)) {
                    return {
                        ...item,
                        parent: isFocused ? "col form-floating" : "col",
                        [field]: isFocused ? "form-label visually-hidden" : "form-label",
                        float: isFocused,
                    };
                }
                return item; // Return the unchanged object for other fields
            })
        );
    }
    return {visibility, handleInput, handlePass}
}