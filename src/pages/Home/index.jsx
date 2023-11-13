import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { api } from "../../services/api";

import { AppTheme } from '../../components/AppTheme';
import { Section } from '../../components/Section';
import { MainBanner } from '../../components/MainBanner';
import { ProductCard } from '../../components/ProductCard';

import  { FadingContainer, Container } from './styles';

export function Home(){
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [slidesPerView, setSlidesPerView] = useState(3);
  
  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?title=${search}`);
      setProducts(response.data);
    }
    fetchProducts();

    function handleResize(){
      if(window.innerWidth <= 1200){
        setSlidesPerView(1);
      }else{
        setSlidesPerView(3);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
  }, [search]);

  return(
    <AppTheme search={setSearch}>
      <MainBanner />

      <Container>
        <Section title="Refeições">
          {products.filter((product) => product.category == "meals").length > 0 && (
            <Swiper
              modules={[ Navigation ]}
              navigation={true}
              grabCursor={true}
              slidesPerView={slidesPerView}
            >
              <FadingContainer />
              {products
                .filter((product) => product.category == "meals")
                .map((product) => (
                  <SwiperSlide key={String(product.id)}>
                    <ProductCard
                      data={product}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </Section>

        <Section title="Sobremesas">
          {products.filter((product) => product.category == "dessert").length > 0 && (
            <Swiper
              modules={[ Navigation ]}
              navigation={true}
              grabCursor={true}
              slidesPerView={slidesPerView}
            >
              <FadingContainer />
              {products
              .filter((product) => product.category == "dessert")
              .map((product) => (
                <SwiperSlide key={String(product.id)}>
                  <ProductCard
                    data={product}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Section>

        <Section title="Bebidas">
          {products.filter((product) => product.category == "drinks").length > 0 && (
            <Swiper
              modules={[ Navigation ]}
              navigation={true}
              grabCursor={true}
              slidesPerView={slidesPerView}
            >
              <FadingContainer />
              {products
              .filter((product) => product.category == "drinks")
              .map((product) => (
                <SwiperSlide key={String(product.id)}>
                  <ProductCard
                    data={product}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Section>
      </Container>
    </AppTheme>
  );
}