import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(<LoadingSpinner className="custom-class" />);
    const spinnerContainer = screen.getByRole('status');
    expect(spinnerContainer).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(<LoadingSpinner />);
    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveAttribute('aria-live', 'polite');
    expect(statusElement).toHaveAttribute('aria-busy', 'true');
    expect(statusElement).toHaveTextContent('Loading...');
  });

  it('displays custom label when provided', () => {
    render(<LoadingSpinner label="Custom loading text" />);
    expect(screen.getByText('Custom loading text')).toBeInTheDocument();
  });
});
