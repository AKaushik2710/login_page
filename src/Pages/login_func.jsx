import { useState } from "react";

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
        let trial = [...visibility]
        visibility[1].type === "password" ? setVisibility([trial[0], {parent : "col", pass : "form-label", float : false, type : "text"}]) : setVisibility([trial[0], {parent : "col", pass : "form-label", float : false, type : "password"}]);
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