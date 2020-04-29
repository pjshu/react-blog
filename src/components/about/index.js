import React, {useContext} from 'react';
import About from "./About";
import {Context} from "../../context";

function AboutWrapper() {
  const [{about}] = useContext(Context);
  return (
    <About {...{about}}/>
  );
}

export default React.memo(AboutWrapper);
