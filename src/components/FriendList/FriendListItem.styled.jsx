import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px 0;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 0 4px ${p => p.theme.colors.muted};
`;

export const Status = styled.span`
  display: inline-block;
  margin: 0 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  ${props =>
    props.isOnline
      ? 'background-color: #2ac22f;'
      : 'background-color: #ee301f;'}
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
