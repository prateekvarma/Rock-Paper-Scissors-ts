import { createContext, useContext } from 'react';
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa';
import {
  HandOption,
  Ioptions,
  IoptionsContext,
  Props,
} from './optionsContextTypes';
import { initialState } from './initialContextValues';

const options: Ioptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
  state: initialState
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

export function useOptions() {
  const context = useContext(OptionsContext);
  return context;
}
