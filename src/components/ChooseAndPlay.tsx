import styles from './ChooseAndPlay.module.css' 
import HandSelection from './HandSelection';

const ChooseAndPlay = () => {
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        <HandSelection name="Rock" />
        <HandSelection name="Paper" />
        <HandSelection name="Scissors" />
      </div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
