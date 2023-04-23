export enum HandOption {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
}

export interface Ioptions {
  name: HandOption;
  icon: JSX.Element;
}

export interface IoptionsContext {
  options: Ioptions[];
}

export interface Props {
  children: React.ReactNode;
}
