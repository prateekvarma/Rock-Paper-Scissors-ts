import { render, screen } from '@testing-library/react';
import { useEffect, useReducer } from 'react';
import { describe, expect, it, vi } from 'vitest';
import scoreReducer from './scoreReducer';
import { initialState } from '../context/initialContextValues';
import { OptionActionKind } from './scoreReducerTypes';
import { ActionTypes } from './scoreReducerTypes';

vi.mock('../context/initialContextValues', () => {
  return {
    initialState: {
      playerHand: 2,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      results: {
        winner: '',
        message: '',
      },
    },
  };
});

interface Iprops {
  myaction: ActionTypes;
}

const TestingComponent = (props: Iprops) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    dispatch(props.myaction);
  }, []);

  return (
    <>
      <p>playerhand: {state.playerHand}</p>
    </>
  );
};

describe('scoreReducer', () => {
  it('should update the scoreReducer with the correct player hand', () => {
    render(
      <TestingComponent
        myaction={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }}
      />
    );
    expect(screen.getByText(/playerhand: 0/i)).toBeInTheDocument();
  });
});
