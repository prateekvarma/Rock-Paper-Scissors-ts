import { useOptions } from '../context/optionsContext';
import styles from './ChooseAndPlay.module.css';
import HandSelection from './HandSelection';

import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();

  const handOptionsArray = optionsContext.options.map((item) => {
    return <HandSelection name={item.name} icon={item.icon} />;
  });

  return (
    <>
      <div className={styles.choiceBtnCtn}>{handOptionsArray}</div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
