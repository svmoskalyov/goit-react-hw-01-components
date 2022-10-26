import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0;
  background-color: ${p => p.theme.colors.white};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Avatar = styled.img`
  max-width: 45%;
  margin-bottom: 20px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 50%;
  box-shadow: 0 0 4px ${p => p.theme.colors.muted};
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.muted};
`;

export const Location = styled.p`
  margin-bottom: 20px;
  color: ${p => p.theme.colors.muted};
`;

export const Stats = styled.ul`
  display: flex;
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

export const Item = styled.li`
  width: calc(100% / 3);
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${p => p.theme.colors.primary};
  border-right: 1px solid rgb(225, 220, 220);

  &:first-child {
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-right: none;
    border-bottom-right-radius: 4px;
  }
`;

export const Label = styled.span`
  padding-bottom: 4px;
  display: block;
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
