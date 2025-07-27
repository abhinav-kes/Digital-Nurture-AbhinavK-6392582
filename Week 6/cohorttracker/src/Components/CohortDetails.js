import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, startDate, status, coach, trainer }) {
  const isOngoing = status.toLowerCase() === 'ongoing';

  const titleStyle = {
    color: isOngoing ? 'green' : 'blue',
    fontWeight: 'bold'
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>{name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>
        <dt>Current Status</dt>
        <dd>{status}</dd>
        <dt>Coach</dt>
        <dd>{coach}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
