import { render, screen } from '@testing-library/react';
import App from './App';

describe('Goosfraba home contains all the elements', () => {
  test('renders Goosfraba home', () => {
    render(<App />);
    const title = screen.getByText(/G o o s f r a b a/i);
    expect(title).toBeInTheDocument();
  });

//   test('there are seven pictures present', () => {
//     render(<App />);
//     const logos = screen.getByTestId('links-logo');
//     expect(logos.length).toBe(7);
//   });
});
