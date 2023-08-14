import styled from "styled-components";
import Link from "next/link";

// Define a styled component for the navigation container
export const NavigationContainer = styled.nav`
    position: fixed;
    align-items: center;
    bottom: 0px;
    width: 450px;
   
    height: 60px;
    display: flex;
`;

export const NavigationLink = styled(Link)`
  text-align: center;
  background-color: rgb(42, 158, 0);
  height: 60px;
  width: 150px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: normal;
`;

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationLink href="/">Spotlight</NavigationLink>
      <NavigationLink href="/art-pieces">Art Pieces</NavigationLink>
      <NavigationLink href="/favourites">Favourites</NavigationLink>
    </NavigationContainer>
  );
}