import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircProgress() {
  return (
    <div style={styles.root}>
      <CircularProgress />
    </div>
  );
}

const styles = {
  root : {
    display: 'flex',
    width: "100%",
    height: "100%",
    justifyContent : "center",
    alignItems: "center",
    position: "absolute",
    top:0,
    left:0
  }
}