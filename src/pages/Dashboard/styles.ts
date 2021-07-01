import styled from 'styled-components'

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -8rem;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`