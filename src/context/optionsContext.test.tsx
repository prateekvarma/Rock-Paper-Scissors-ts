import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { useOptions, OptionsProvider } from './optionsContext';

vi.mock('./initialContextValues', () => {
    return {
      initialState: {
        playerHand: 1,
        computerHand: 2,
        runTimer: false,
        score: {
          player: 0,
          computer: 0,
        },
        results: {
          winner: 'Player 1',
          message: '',
        },
      },
    };
  });

const TestingComponent = () => {
    const optionsContext = useOptions()

    return (
        <>
            <p>pylayerHand: {optionsContext.state.playerHand}</p>
            <p>computerHand: {optionsContext.state.computerHand}</p>
            <p>Winner: {optionsContext.state.results.winner}</p>
        </>
    )
}


describe('Options context', () => {
  it('should render the component with the context initial values', () => {
    render(
        <OptionsProvider>
            <TestingComponent />
        </OptionsProvider>
    );
  });

  expect(screen.getByText(/Playerhand: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Computerhand: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Winner: Player 1/i)).toBeInTheDocument();
});
