import axios from "axios";

const API_BASE=process.env.NEXT_PUBLIC_API;

export const getAllProducts=async ()=>{
    const res =await axios.get(`${API_BASE}/products`);
    return res.data;
}