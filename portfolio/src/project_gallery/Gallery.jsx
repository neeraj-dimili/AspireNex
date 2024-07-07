import React from 'react';
import styles from "./Gallery.module.scss";
import { stackIconGetter } from '../global/utils';

const Gallery = props => {

  const project = props.project;

  return <div className={styles.main}>
    <h1>{project.name}</h1>
    <div className={styles.content}>
      <ul className={styles.points}>
        {project.points.map(point => <li key={point}>{point}</li>)}
      </ul>

      <ul className={styles.stack}>
        {project.techStack.map(stack => <li key={stack}>
          <img src={stackIconGetter(stack)} />
        </li>)}
      </ul>
    </div>
  </div>
}

export default Gallery;
