import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import HandSelection from './HandSelection';
import { FaRegHandPaper } from 'react-icons/fa';
import userEvent from '@testing-library/user-event';
import { OptionsProvider } from '../context/optionsContext';

vi.mock('./HandSelection.module.css', () => {
  return {
    default: {
      choiceButton: 'choiceBtn',
      activeChoice: 'activeChoice',
    },
  };
});

describe('Hand Selection', () => {
  it('should render the hand selection component with the right props', () => {
    render(
      <HandSelection
        name='paper'
        icon={<FaRegHandPaper data-testid='paper' />}
        handChoiceIndex={2}
      />
    );

    const hand = screen.getByText(/paper/i);
    const icon = screen.getByTestId('paper');

    expect(hand).toBeInTheDocument();
    expect(icon).toBeVisible();
  });

  it('should display active css class after clicking', async () => {
    const user = userEvent.setup();

    render(
      <OptionsProvider>
        <HandSelection
          name='paper'
          icon={<FaRegHandPaper data-testid='paper' />}
          handChoiceIndex={2}
        />
      </OptionsProvider>
    );

    const hand = screen.getByText(/paper/i);

    await user.click(hand);

    expect(hand).toHaveClass('activeChoice');
  });
});
