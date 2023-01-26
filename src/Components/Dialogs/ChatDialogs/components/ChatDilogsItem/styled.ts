import styled, { css } from 'styled-components';

type StyledChatDialogsType = {
  owner: boolean
}

const ownerDialogsItemStyles = css`
  flex-direction: row-reverse;
  padding-right: 20px;
`

const ownerDialogsMessageStyles = css`
  left: auto;
  right: 0;
  transform: translate(100%, 0);
  border-width: 7.5px 0 7.5px 20px;
  border-color: transparent transparent transparent #ffffff;
`

export const StyledChatDialogsItem = styled.div<StyledChatDialogsType>`
  display: flex;
  column-gap: 50px;
  ${({owner}) => (owner ? ownerDialogsItemStyles : '')};
`

export const StyledStyledChatDialogsUser = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: 50px;
    font-weight: bold;
    color: #61dbfb;
    font-size: 12px;
    transition: all 0.3s;
    text-align: center;

    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #61dbfb;
    }

    &:hover {
      color: #b9ecff;
    }
  }

`

export const StyledStyledChatDialogsMessage = styled.div<StyledChatDialogsType>`
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
    ${({owner}) => (owner ? ownerDialogsMessageStyles : '')};
  }
`