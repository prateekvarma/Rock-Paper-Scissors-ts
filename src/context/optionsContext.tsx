import { createContext, useContext, useReducer } from 'react';
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
import scoreReducer from '../reducers/scoreReducer';

const options: Ioptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
  state: initialState,
  dispatch: () => {}
});

export function OptionsProvider(props: Props) {
  const [state, dispatch] = useReducer(scoreReducer, initialState)

  const contextValue = {
    options,
    state,
    dispatch
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
