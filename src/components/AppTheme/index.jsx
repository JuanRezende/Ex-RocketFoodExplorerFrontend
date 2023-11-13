import { useState } from 'react';

import { MenuMob } from '../MenuMob';
import { Header } from '../Header';
import { Footer } from '../Footer';

import {  MainControl, ContentControl, Wrapper } from './styles';

export function AppTheme({ search, children }){
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Wrapper>
      <MenuMob
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        search={search}
      />
      <Header search={search} setMenuIsVisible={setMenuIsVisible} />
      <ContentControl>
        <MainControl>
          {children}
        </MainControl>
        <Footer/>
      </ContentControl>
    </Wrapper>
  );
}