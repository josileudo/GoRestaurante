import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background-header);
  padding:1.875rem;

  header { 
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 0 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 0.5rem;
          border: 0;
          background: var(--background-button);
          color: var(--white);

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 1rem 1.5rem;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: var(--background-icon);
            border-radius: 0 0.5rem 0.5rem 0;
            margin: 0 auto;
          }

          transition: filter 0.3s ;

          &:hover {
            filter: brightness(0.9)
          }
          
        }
      }
    }
  }
`