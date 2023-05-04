import React from 'react';
import SlotCard from './SlotCard';
import styles from './SlotList.module.css';

const SlotList = ({ slots }) => {
  return (
    <div className={styles.slotList}>
      {slots.map((slot) => (
        <SlotCard key={slot.id} slot={slot} />
      ))}
    </div>
  );
};

export default SlotList;