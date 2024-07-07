import React from 'react';
import Gallery from './Gallery';
import styles from "./Galleries.module.scss";

const Galleries = props => {
  const projects = props.value;
  return <div id={props.name} style={{paddingTop: '5rem'}}>
        <h1 className={styles.name}>{props.name}</h1>
        <div className={styles.main}>
        {projects.map(project => <Gallery key={project.name} project={project}/>)}
        </div>
    </div>
}

export default Galleries;
