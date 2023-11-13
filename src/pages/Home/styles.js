import styled from "styled-components";

export const FadingContainer = styled.div`
  z-index: 1;
  pointer-events: none;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background: rgb(0, 10, 15);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 15, 1) 0%,
    rgba(0, 10, 15, 0) 10%,
    rgba(0, 10, 15, 0) 90%,
    rgba(0, 10, 15, 1) 100%
  );
`;

export const Container = styled.div`
  .swiper-slide {
    height: auto;
  }

  .swiper-button-prev.swiper-button-disabled{
    opacity: 0.2;
  }
`;