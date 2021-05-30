import {auth} from '../firebase/config';
import React,{useState,useEffect} from "react";

 export const useAuth=()=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            const unsub=auth.onAuthStateChanged(user=>{
                setUser(user)
                setLoading(false)
                return unsub
            })
        }, []);
    return {user,loading,setLoading}
    }
