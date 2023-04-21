import styles from './HandSelection.module.css';

interface Props {
  name: string;
}

const HandSelection: React.FC<Props> = ({ name }) => {
  return (
    <>
      <button className={styles.choiceBtn}>{name}</button>
    </>
  );
};

export default HandSelection;
