import { createContext } from 'react';
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa';
import { HandOption, Ioptions, IoptionsContext, Props } from './optionsContextTypes';

const options: Ioptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
});

export function OptionsProvider(props: Props) {
  const contextValue = {
    options,
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  );
}