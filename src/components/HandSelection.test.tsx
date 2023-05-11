import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import HandSelection from './HandSelection';
import { FaRegHandPaper } from 'react-icons/fa';

describe('Hand Selection', () => {
  it('should render the hand selection component with the right props', () => {
    render(
      <HandSelection
        name='paper'
        icon={<FaRegHandPaper />}
        handChoiceIndex={2}
      />
    );

    const hand = screen.getByText(/paper/i);

    expect(hand).toBeInTheDocument();
  });
});
