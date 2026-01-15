import styled from "styled-components";
import { Link } from "react-router-dom";

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  // min-width: 1200px;
  // min-height: 800px;
  border-radius: 10px;
`;

export const NavList = styled.ul`
  padding: 4px;
  background: #cccccc;
  list-style-type: none;
`;

export const NavListItem = styled.li`
  margin: 2px 5px;
  background: #eeeeee;
  display: inline-block;
`;

export const StyledLink = styled(Link)`
  padding: 2px 5px;
  color: #000000;
`;

// Use Title and Wrapper like any other React component – except they're styled!
// render(
//   <Wrapper>
//     <Title>
//       Hello World!
//     </Title>
//   </Wrapper>
// );
