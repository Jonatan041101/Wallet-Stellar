import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import expect from '../../setupTests';
import Keys from '@/components/GenerateKeys/Keys';
test('It should create the public key and the secret key correctly', () => {
  render(<Keys handleClose={() => {}} />);
  const publicKey = screen.getByText(/^G[A-Za-z0-9]{55}$/i);
  const secretKey = screen.getByText(/^S[A-Za-z0-9]{55}$/i);

  expect(publicKey).toBeInTheDocument();
  expect(secretKey).toBeInTheDocument();
});
