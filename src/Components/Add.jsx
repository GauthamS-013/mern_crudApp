import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addEmpApi } from "../services/allApi";
import { addResponseContext } from "../context/ContextApi";

function Add() {
  const [show, setShow] = useState(false);
  const [emp,setEmp]=useState({
    name:"",department:"",salary:"",phone:""
  })

  const {setAddResponse}=useContext(addResponseContext)

  const handleAdd=async()=>{
    console.log(emp)
    const {name,department,salary,phone}=emp
    if(!name || !department || !salary || !phone){
      alert("Enter Valid Input")
    }
    else{
      const result=await addEmpApi(emp)
      if(result.status==200){
        alert("New Employee Added.")
        handleClose()
        setEmp({name:"",department:"",salary:"",phone:""})
        setAddResponse(result)
      }
      else{
        alert("Something Went Wrong.")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-success mb-3" onClick={handleShow}>Add Employee</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="text" className="form-control mb-3" placeholder="Employee Name" onChange={(e)=>setEmp({...emp,name:e.target.value})} />
            <input type="number" className="form-control mb-3" placeholder="Salary" onChange={(e)=>setEmp({...emp,salary:e.target.value})} />
            <input type="tel" className="form-control mb-3" placeholder="Phone Number" onChange={(e)=>setEmp({...emp,phone:e.target.value})} />
            <select name="department" id="" className="form-control" onChange={(e)=>setEmp({...emp,department:e.target.value})}>
                <option value="" disabled selected>Department</option>
                <option value="Accounts">Accounts</option>
                <option value="IT">IT</option>
                <option value="Business Development">Business Development</option>
                <option value="HR">HR</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
