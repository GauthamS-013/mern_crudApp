import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateEmpApi } from "../services/allApi";
import { editResponseContext } from "../context/ContextApi";

function Edit({emp}) {
  const [show, setShow] = useState(false);
  const [editEmp,setEditEmp]=useState({
    name:"",department:"",salary:"",phone:""
  })
  const {setEditResponse}=useContext(editResponseContext)

  useEffect(()=>{
    setEditEmp({...emp})
  },[])

  const handleEdit=async()=>{
    console.log(editEmp)
    const {name,department,salary,phone}=editEmp
    if(!name || !department || !salary || !phone){
      alert("Enter valid input")
    }
    else{
      const result=await updateEmpApi(emp._id,editEmp)
      if(result.status==200){
        alert("Project Updated")
        handleClose()
        setEditResponse(result)
      }
      else{
        alert("Something went wrong")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-warning me-3" onClick={handleShow}>
        <i className="fa-solid fa-user-pen"></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Employee Name"
              onChange={(e)=>setEditEmp({...editEmp,name:e.target.value})}
              defaultValue={editEmp.name}
            />
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Salary"
              defaultValue={editEmp.salary}
              onChange={(e)=>setEditEmp({...editEmp,salary:e.target.value})}
            />
            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
              defaultValue={editEmp.phone}
              onChange={(e)=>setEditEmp({...editEmp,phone:e.target.value})}
            />
            <select name="department" id="" defaultValue={editEmp.department} className="form-control" onChange={(e)=>setEditEmp({...editEmp,department:e.target.value})}>
              <option value="" disabled selected>
                Department
              </option>
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
          <Button variant="warning" onClick={handleEdit}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
