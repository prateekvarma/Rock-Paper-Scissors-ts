import { useOptions } from '../context/optionsContext';
import styles from './ChooseAndPlay.module.css';
import HandSelection from './HandSelection';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();

  const handOptionsArray = optionsContext.options.map((hand, i) => {
    return (
      <HandSelection
        key={i}
        name={hand.name}
        icon={hand.icon}
        handChoiceIndex={i}
      />
    );
  });

  return (
    <>
      <div className={styles.choiceBtnCtn}>{handOptionsArray}</div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
