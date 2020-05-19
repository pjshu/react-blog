import Footer from "./Footer";

import React, {useContext} from 'react';
import {Context} from "../../context";

function Index() {
  const [{userInfo: {nickname, icp}}] = useContext(Context);
  return (
    <Footer {...{nickname, icp}}/>
  );
}

export default Index;
