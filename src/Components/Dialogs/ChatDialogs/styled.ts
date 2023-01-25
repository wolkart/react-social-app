import styled from 'styled-components';

export const StyledChatDialogs = styled.div`
  height: 450px;
  border-radius: 20px;
  background-color: #f5f5f5;
  padding: 15px 25px;
`

export const StyledChatDialogsInner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: auto;
  background-color: #f5f5f5;
  padding-bottom: 10px;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f5f5f5;
    border-radius: 5px;
  }
  
  &:hover {
    ::-webkit-scrollbar-track {
      background: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #61dbfb;
    }
  }
`