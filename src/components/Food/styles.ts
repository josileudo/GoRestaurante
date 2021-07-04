import styled, { css } from "styled-components"

interface Props {
  availability?: boolean;
}

export const Container = styled.div<Props>`
  background: var(--background-card);
  border-radius: 0.5rem;;


  header {
    background: var(--background-header-card);
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
    height: 12rem;
    overflow: hidden;

    
  ${props => 
    !props.availability && 
    css`
      opacity: 0.3;
    `}
    
    transition: opacity 0.3s;
    
    img {
      pointer-events: none;
      user-select: none;
    }   
  }

  section.body {
    padding: 1.875rem;

    h2 {
      color: #3d3d4d;
    }

    p {
      margin-top: 1rem;
      color: #3d3d4d;
    }

    .price {
      font-size: 1.5rem;
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

    padding: 1.250rem 1.850rem;
    background: #e4e4eb;
    border-radius: 0 0 0.5rem 0.5rem;

    .icon-container {
     display: flex;

     .icon {
       background: #fff;
       padding:0.65rem;
       border: none;
       display: flex;
       border-radius: 0.5rem;
       margin: auto 0.2rem;
     }
     svg {
       color: #3d3d4d;
     }
     & + button {
       margin-left: 0.5rem;
     }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 5.5rem;
        height: 2rem;
        margin-left: 0.75rem;

        & input {
          opacity: 0;
          height: 0;
          width: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 1rem;

          &:before {
            position: absolute;
            content: '';
            height: 1.250rem;
            width: 2.5rem;
            left: 0.5rem;
            bottom: 0.45rem;
            background-color: #fff;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 0.625rem;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(2rem);
          -ms-transform: translateX(2rem);
          transform: translateX(2rem);
        }

      }
    }
  }
  
`