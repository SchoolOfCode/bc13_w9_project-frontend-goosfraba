import Links from './links';
import { test, expect } from '@jest/globals';
import { screen, render } from '@testing-library/react';

// Testing the seven images for the quick links are rendered correctly:
describe('seven images are rendered on the Goosfraba home page', () => {
  test('react image', () => {
    render(<Links />);
    const react = screen.getByAltText('react');
    expect(react).toBeInTheDocument();
  });

  test('W3schools image', () => {
    render(<Links />);
    const w3schools = screen.getByAltText('w3schools');
    expect(w3schools).toBeInTheDocument();
  });

  test('codewars image', () => {
    render(<Links />);
    const codewars = screen.getByAltText('codewars');
    expect(codewars).toBeInTheDocument();
  });

  test('npm image', () => {
    render(<Links />);
    const npm = screen.getByAltText('npm');
    expect(npm).toBeInTheDocument();
  });

  test('freecodecamp image', () => {
    render(<Links />);
    const freecodecamp = screen.getByAltText('freecodecamp');
    expect(freecodecamp).toBeInTheDocument();
  });

  test('github image', () => {
    render(<Links />);
    const github = screen.getByAltText('github');
    expect(github).toBeInTheDocument();
  });

  test('soc image', () => {
    render(<Links />);
    const soc = screen.getByAltText('soc');
    expect(soc).toBeInTheDocument();
  });
});

// Testing the seven images for the quick links are linked to the correct href:
describe('images are linked with the correct href', () => {
  test('react image is linked with https://reactjs.org/', () => {
    render(<Links />);
    const react = screen.getByTestId('react-link');
    expect(react).toHaveAttribute('href', 'https://reactjs.org/');
  });

  test('react image is linked with https://www.w3schools.com/', () => {
    render(<Links />);
    const w3Schools = screen.getByTestId('w3-link');
    expect(w3Schools).toHaveAttribute('href', 'https://www.w3schools.com/');
  });

  test('react image is linked with https://www.codewars.com/dashboard', () => {
    render(<Links />);
    const codewars = screen.getByTestId('codeWars-link');
    expect(codewars).toHaveAttribute(
      'href',
      'https://www.codewars.com/dashboard'
    );
  });

  test('react image is linked with https://www.npmjs.com/', () => {
    render(<Links />);
    const npm = screen.getByTestId('npm-link');
    expect(npm).toHaveAttribute('href', 'https://www.npmjs.com/');
  });

  test('react image is linked with https://www.freecodecamp.org/', () => {
    render(<Links />);
    const freeCodeCamp = screen.getByTestId('freeCodeCamp-link');
    expect(freeCodeCamp).toHaveAttribute(
      'href',
      'https://www.freecodecamp.org/'
    );
  });

  test('react image is linked with https://github.com/', () => {
    render(<Links />);
    const gitHub = screen.getByTestId('gitHub-link');
    expect(gitHub).toHaveAttribute('href', 'https://github.com/');
  });

  test('react image is linked with https://www.schoolofcode.com/', () => {
    render(<Links />);
    const SoC = screen.getByTestId('SoC-link');
    expect(SoC).toHaveAttribute('href', 'https://www.schoolofcode.com/');
  });
});
