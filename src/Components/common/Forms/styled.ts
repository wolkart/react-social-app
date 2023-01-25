import styled from 'styled-components';

interface StyledProps {
  error: boolean
}

export const StyledFormField = styled.div<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  
  input, textarea {
    padding-left: 10px;
    padding-top: 4px;
    border-radius: 10px;
    width: 100%;
    
    border-color: ${({error}) => (error ? 'orangered' : 'inherit')};
  }
  
  span {
    position: absolute;
    left: 10px;
    bottom: -3px;
    transform: translate(0, 100%);
    color: orangered;
    font-size: 12px;
  }
`