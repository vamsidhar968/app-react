import React from 'react';

export function Colorbox({ clrname }) {
  const styles1 = {
    backgroundColor: clrname,
    height: "70px",
    width: "500px",
    marginTop: "10px"
  };
  return (
    <div style={styles1}>
    </div>
  );
}
