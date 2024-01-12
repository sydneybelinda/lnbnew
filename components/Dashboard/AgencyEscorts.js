import Link from "next/link";
import React, { useState } from "react";
import Img from "../Img"
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {enableEscort, disableEscort, deleteEscort, getAllAgencyEscorts} from "../../utils/Queries"

const Escort = (props) => {
  const e = props.e;


  var name = e.firstName;
  e.lastname ? (name += e.lastname) : "";


  const enable = async(e) => {

    const data = {username: e.target.value}

    const result = await enableEscort(data)

    props.getall()

  }

  const disable = async(e) => {


    const data = {username: e.target.value}

    const result = await disableEscort(data)

    props.getall()

  }

  const deleteE = async(e) => {

    const data = {username: e.target.value}

    const result = await deleteEscort(data)

    props.getall()


  }

  return (
    <div className="col-sm-12" key={e.id}>
      <div className="agencyescort">
          <div className="image">
          <Img username={e.username} file={e.profpic} />

          </div>
          <div className="escortdetails">
         <span className="name"> {e.firstName} {e.lastName && e.lastName}</span>
          </div>
           
          <div className="escortviews p-15">
          {e.enabled == "True" && <span className="views">Position: <br /> {e.position}</span>} 
          </div>

          <div className="actions">
            <Link href={`/dashboard/editescort/${e.username}`}>
            <Button className="edit" variant="outline-primary" size="sm">edit</Button>
            </Link>
           { e.enabled == "True"  ? <Button className="disable" variant="success" size="sm" value={e.username} onClick={disable}>disable</Button> :
            <Button className="disable" variant="secondary" size="sm" value={e.username} onClick={enable}>enable</Button> }
            <Button className="delete" variant="danger" size="sm" value={e.username} onClick={deleteE}>delete</Button> 
        </div>
    
    </div>
    </div>
  );
};

export default Escort;
