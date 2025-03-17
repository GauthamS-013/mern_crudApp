import base_url from "./base_url"
import commonApi from "./commonApi"

export const addEmpApi=async(data)=>{
    return await commonApi(`${base_url}/addemp`,'POST',"",data)
}

export const getEmpApi=async()=>{
    return await commonApi(`${base_url}/emplist`,'GET',"","")
}

export const deleteEmpApi=async(id)=>{
    return await commonApi(`${base_url}/deleteemp/${id}`,'DELETE',"",{})
}

export const updateEmpApi=async(id,data)=>{
    return await commonApi(`${base_url}/updateemp/${id}`,'PUT',"",data)
}