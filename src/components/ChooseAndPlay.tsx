import styles from './ChooseAndPlay.module.css';
import HandSelection from './HandSelection';

import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa';

const ChooseAndPlay = () => {
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        <HandSelection name='Rock' icon={<FaRegHandRock size={60} />} />
        <HandSelection name='Paper' icon={<FaRegHandPaper size={60} />} />
        <HandSelection name='Scissors' icon={<FaRegHandScissors size={60} />} />
      </div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
