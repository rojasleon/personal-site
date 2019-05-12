import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 10px;
  transition: 0.2s;
  position: relative;
  grid-row-end: ${props => props.spans && `span ${props.spans}`};
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  padding: 0;
  grid-row-end: 2;
  border-radius: 10px;
`;
export const Content = styled.div`
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;