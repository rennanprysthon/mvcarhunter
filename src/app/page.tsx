'use client'

import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { LogoIndicator } from "./components/LogoIndicator";
import { MainContainer } from "./components/MainContainer";
import { RelativeContainer } from "./components/RelativeContainer";
import { useScreenScroll } from "./hooks/useScreenScroll";

export default function Home() {
  return (
    <MainContainer>
      <RelativeContainer>
        <LogoIndicator />
      </RelativeContainer>
      
      <Container>
        <Header />
      </Container>
    </MainContainer>
  );
}
