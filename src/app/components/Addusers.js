"use client"


import { useState } from "react"
import { addUser } from "../Redux-toolkit/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";



export default function Addusers(){
    const [name, setname]=useState("");
    const dispatch = useDispatch();
    // console.log(name);
    const useDispatchfunc=()=>{
        dispatch(addUser(name))
    }
    // console.log(name);
    return(
        <div className="add-user">
            <input onChange={(e)=>{setname(e.target.value)}} placeholder="ENTER PRODUCT NAME"/>
            <button onClick={useDispatchfunc}>Add Products</button>
            <Link href="/removeitems">Remove Page</Link>
        </div>
    )
}