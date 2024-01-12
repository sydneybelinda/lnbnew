import Link from "next/link";
import React, { useState } from "react";
import Img from "../Img"
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { deleteSiteLink } from "../../utils/Queries"


const SiteLink = (props) => {

    const link = props.link

    const delLink = async(e) => {
      const result = await deleteSiteLink(e.target.value)

      props.getlinks()
    }

  return (
    <div className="col-sm-12">
<div className="dlink">
<Card>
<Card.Body> <div className="linkname">
        {link.link}
    </div>

<div className="link-actions">
<ButtonGroup aria-label="Actions">
<Button className="edit" size="sm" variant="secondary" value={link.id}>edit</Button>
<Button className="delete" variant="danger" size="sm" value={link.id} onClick={delLink}>delete</Button>
</ButtonGroup>
</div>

    </Card.Body>
</Card>
</div>

      {/* <div className="agencyescort">
          <div className="image">
          <Img username={e.username} file={e.profpic} />

          </div>
          <div className="escortdetails">
         <span className="name"> {e.firstName} {e.lastName && e.lastName}</span>
          </div>
           
          <div className="escortviews p-15">
         <span className="views"> <FontAwesomeIcon icon={faEye} /> {e.views}</span>
          </div>

          <div className="actions">
            <Link href={`/dashboard/editescort/${e.username}`}>
            <Button className="edit">edit</Button>
            </Link>
        </div>
    
    </div> */}
    </div>
  );
};

export default SiteLink;
