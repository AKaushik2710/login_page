import { useState } from "react";

export default function Login_State(){
    const [visibility, setVisibility] = useState([{
        parent : "col",
        log : "form-label",
        float : false
    },{
            parent : "col",
            pass : "form-label",
            float : false
        }]);

    function handleInput(e){
        switch (e[0]){
            case "log":
                e[1] ? setVisibility([...visibility,{parent : "col",log : "form-label", float : false}]) : setVisibility([...visibility, {parent : "col form-floating", log : "form-label visually-hidden", float : true}]);
                console.log("ged");
                break;
            case "pass":
                e[1] ? setVisibility([...visibility,{parent : "col",pass : "form-label", float : false}]) : setVisibility([...visibility, {parent : "col form-floating", pass : "form-label visually-hidden", float : true}]);
                break;
            default:
                break;
        }
    }
    return {visibility, handleInput}
}