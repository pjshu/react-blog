import {Grid} from "@material-ui/core";
import React from "react";

const randomColor = (id) => {
  const color = [
    '#8DC5FA, #7ABFF6',
    '#7ABFF6, #726EE2',
    "#F2DAFF, #BE84D7",
    "#BE84D7, #8376ED",
  ];
  id = (id - 1) % color.length;
  return `linear-gradient(135deg, ${color[id]})`;
};


export default function ColorTag(item) {
  return <div
    style={{
      fontWeight: 'bold',
      boxSizing: 'border-box',
      paddingLeft: 10,
      fontSize: 17,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 5,
      height: 50,
      width: 200,
      background: randomColor(item.id),
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px',
    }}>
    {item.name}({item.count})
  </div>;
}
