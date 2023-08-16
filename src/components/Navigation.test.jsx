import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Navigation from './Navigation'; 

useSWR.mockReturnValue({
    data: [
      { id: 1, title: "Art Piece 1" },
      { id: 2, title: "Art Piece 2" },
      // ... other art pieces
    ],
    isLoading: false,
    error: false
  });
  

describe('Navigation component', () => {
  it('displays spotlight and art piece navigation links', () => {
    render(<Navigation />);

    const spotlightLink = screen.getByText('Spotlight');
    const artPiecesLink = screen.getByText('Art Pieces');
   

    expect(spotlightLink).toBeInTheDocument();
    expect(artPiecesLink).toBeInTheDocument();
    
  });
});
