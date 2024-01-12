import React from "react";
//import "../upload.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FileUpload from "../components/FileUpload";

function App() {

    const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const folder = generateString("8").trim();

  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>bezkoder.com</h3>
        <h4>React Hooks Multiple Files Upload</h4>
      </div>

      <FileUpload folder={folder} />
    </div>
  );
}

export default App;
