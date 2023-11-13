import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --swiper-navigation-color: white;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* Scroll bar style */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background-color: rgba(255, 255, 255, 0);

      @media (max-width: 1200px) {
        width: 10px;
        height: 10px;
      }
    }

    ::-webkit-scrollbar-track {
      background: #d3d3d3;
      border-radius: 2.5px;

      @media (max-width: 1200px) {
        border-radius: 5px;
      }
    }

    ::-webkit-scrollbar-thumb {
      background: #747474;
      border-radius: 2.5px;

      @media (max-width: 1200px) {
        border-radius: 5px;
      }
    }
  }

  body{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    outline: none;
  }

  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  a{
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  a:-webkit-any-link {
    color: inherit;
  }

  button, a, svg {
    cursor: pointer;
    transition: background 200ms;
  }

  button:hover, a:hover, svg {
    filter: brightness(0.9);
  }
`;
