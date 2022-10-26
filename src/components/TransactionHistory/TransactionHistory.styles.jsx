import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
  text-align: center;
`;

export const Title = styled.th`
  padding: 15px 5px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  outline: 2px solid ${p => p.theme.colors.muted};
`;

export const Row = styled.tr`
  font-weight: 400;
  font-size: 16px;
  color: ${p => p.theme.colors.text};

  &:nth-child(2n) {
    background-color: #ddf2f6;
  }
`;

export const Data = styled.td`
  outline: 2px solid ${p => p.theme.colors.muted};
  padding: 15px 5px;
`;
