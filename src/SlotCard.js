import React from 'react';
import QRCode from 'qrcode.react';
import styles from './SlotCard.module.css';

const SlotCard = ({ slot }) => {
  const { id, marca, modelo, numeroDeSerie } = slot;

  return (
    <div className={styles.slotCard}>
      <div className={styles.qrCodeWrapper}>
        <QRCode value={`${id}_${marca}_${modelo}_${numeroDeSerie}`} size={80} />
      </div>
      <div className={styles.slotInfo}>
        <p className={styles.slotId}>N° slot {id}</p>
        <p className={styles.brandAndModel}>
          {marca} {modelo}
        </p>
        <p>N° serie {numeroDeSerie}</p>
      </div>
    </div>
  );
};

export default SlotCard;
