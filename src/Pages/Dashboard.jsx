import React, { useContext } from "react";
import Add from "../Components/Add";
import Edit from "../Components/Edit";
import { useState, useEffect } from "react";
import { deleteEmpApi, getEmpApi } from "../services/allApi";
import { addResponseContext } from "../context/ContextApi";
import { editResponseContext } from "../context/ContextApi";

function Dashboard() {
  const [employee, setEmployee] = useState([]);
  const {addResponse}=useContext(addResponseContext)
  const {editResponse}=useContext(editResponseContext)

  useEffect(() => {
    getData();
  },[addResponse,editResponse]);

  const getData = async () => {
    const result = await getEmpApi();
    console.log(result);
    if (result.status == 200) {
      setEmployee(result.data);
    }
  };
  const deleteEmp=async(id)=>{
    const result=await deleteEmpApi(id)
    if(result.status==200){
      getData()
    }
    else{
      alert("Something went wrong")
      console.log(result)
    }
  }
  return (
    <>
      <div className="container-fluid bg-dark" style={{ minHeight: "100vh" }}>
        <h1 className="mb-3 text-light">Dashboard</h1>
        <Add />
        {employee.length > 0 ? (
          <table className="table table-info table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Phone Number</th>
                <th>Salary</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((item, index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.phone}</td>
                  <td>{item.salary}</td>
                  <td>
                    <Edit emp={item}/>
                    <button className="btn btn-danger" onClick={()=>{deleteEmp(item._id)}}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4 className="text-center text-danger display-4">
            No Employees Added
          </h4>
        )}
      </div>
    </>
  );
}

export default Dashboard;
