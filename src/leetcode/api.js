import {useState,useEffect} from 'react'
import axios from 'axios';

const Leetcode = () => {
    const [profile, setProfile]=useState([]);
    useEffect(()=>{
        const getProfile = async()=>{
            const res = await axios.get('http://localhost:3000/api/routes/leetcode').then((res)=>{
                setProfile(res.data);
                console.log(res.data);     
            });
        }
        getProfile();
    },[]);
    return (
        <div style={{color:`white`}}>{JSON.stringify(profile)}</div>
    )
}

export default Leetcode