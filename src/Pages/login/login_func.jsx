import { useState } from "react";

// Login_State Component
// This component is responsible for managing the state of the login form
export default function Login_State(){
    const [visibility, setVisibility] = useState({
        parent : "card shadow w-50 h-50 p-3 bg-warning",
        fields : {
            log : ["form-label text-dark", "form-control bg-dark text-white"],
            pass : ["form-label text-dark", "form-control bg-dark text-white","password"]
        }
    })

    function handleFields(item){
        if(item[0] === "log"){
            setVisibility((prevVisibility)=>{
                return {...prevVisibility, fields : {
                    ...prevVisibility.fields,
                    log : prevVisibility.fields.log.map((items, index)=>{
                        if(index === 1){
                            return item[1] ? "form-control bg-warning text-dark" : "form-control bg-dark text-white";
                        }
                        else{
                            return items;
                        }
                    })
                }
                }
            }
            )
        }
        else{
            setVisibility((prevVisibility)=>{
                return {...prevVisibility, fields : {
                    ...prevVisibility.fields,
                    pass : prevVisibility.fields.pass.map((items, index)=>{
                        if(index === 1){
                            return item[1] ? "form-control bg-warning text-dark" : "form-control bg-dark text-white";
                        }
                        else{
                            return items;
                        }
                    })
                }
                }
            }
            )
        }
    }

    function handleHover(out=false){
        if(out){
            setVisibility((prevVisibility)=>{
                return {...prevVisibility,
                    parent : "card-shadow w-50 h-50 p-3 bg-warning",
                    fields : {
                        log : prevVisibility.fields.log.map((items, index)=>{
                            if(index === 0){
                                return "form-label text-dark";
                            }
                            else{
                                return items;
                            }
                        }),
                        pass : prevVisibility.fields.pass.map((items, index)=>{
                            if(index === 0){
                                return "form-label text-dark";
                            }
                            else{
                                return items;
                            }
                        })
                    }
                }
            })
        }
        else{
            setVisibility((prevVisibility)=>{
                return {...prevVisibility,
                    parent : "card shadow w-50 h-50 p-3 bg-dark",
                    fields : {
                        log : prevVisibility.fields.log.map((items, index)=>{
                            if(index === 0){
                                return "form-label text-warning";
                            }
                            else{
                                return items;
                            }
                        }),
                        pass : prevVisibility.fields.pass.map((items, index)=>{
                            if(index === 0){
                                return "form-label text-warning";
                            }
                            else{
                                return items;
                            }
                        })
                    }
                }

            })
        }
    }

    function handlePass(){
        setVisibility((prevVisibility)=>{
            return {...prevVisibility, fields : {
                ...prevVisibility.fields,
                pass : prevVisibility.fields.pass.map((items, index)=>{
                    if(index === 2){
                        return items === "password" ? "text" : "password";
                    }
                    else{
                        return items;
                    }
                })
            }
            }
        })
    }

    return {visibility, handleFields, handleHover, handlePass};
}