import styled from 'styled-components';

export const StyledChatDialogsItem = styled.div`
  display: flex;
  column-gap: 40px;
`

export const StyledStyledChatDialogsUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  row-gap: 5px;
  font-weight: bold;
  color: #61dbfb;
  font-size: 12px;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #61dbfb;
  }
`

export const StyledStyledChatDialogsMessage = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 500px;
  font-size: 14px;
  line-height: 16px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  -webkit-box-shadow: 6px 6px 11px -6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 6px 6px 11px -6px rgba(34, 60, 80, 0.2);
  box-shadow: 6px 6px 11px -6px rgba(34, 60, 80, 0.2);
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    transform: translate(-100%, 0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7.5px 20px 7.5px 0;
    border-color: transparent #ffffff transparent transparent;
  }
`