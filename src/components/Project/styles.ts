import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`
export const Button = styled.a`
  color: ${(props) => props.theme.background};
  font-size: 14px;
  background-color: ${(props) => props.theme.backgroundButtom};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
