import styled from "styled-components"

export const Container = styled.div`
  background: var(--background-card);
  border-radius: 0.5rem;;
  
  header {
    padding: 1rem; 
    background: var(--background-header-card);
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 1.875rem;

    h2 {
      color: #3d3d4d;
      font-weight: 400;
      font-size: 1.2rem;
    }
    p {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #3d3d4d;
    }
    .price {
      font-size: 1.5rem;
      font-style: normal;
      line-height: 2.125;
      color: var(--background-button);

      b {
        font-weight: 600;
      }
    }
  }
  

  section.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.875rem 1.250rem;
    background: #e4e4eb;
  }
  
`