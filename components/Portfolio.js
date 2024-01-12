import Link from "next/link";
import Escort from "./Escort";

const Portfolio = (props) => {
  const escorts = props.escorts.rows;

  return (
    <>
      <div className="portfolio-area no-space">

          <div className="row">
            { escorts ? escorts.map((escort) => (
              <Escort e={escort} key={escort.id} />
            )) : ''}
          </div>
      </div>
    </>
  );
};

export default Portfolio;
