import { BannerContainer, BannerInfo, BannerTitle, BannerWrapper, BannerList, Circle } from './styles';
import banner from '../../../../assets/banner.png';
import { Package, Timer, Coffee, ShoppingCart } from 'phosphor-react';

export function Banner() {
  return (
    <BannerContainer>
        <BannerWrapper>
          <BannerInfo>
              <BannerTitle>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              </BannerTitle>
              <BannerList>
                <li>
                  <Circle variant='yellow-dark'>
                    <ShoppingCart color="#ffffff" size={16} weight="fill"/>
                  </Circle> 
                  Compra simples e segura
                </li>
                <li>
                  <Circle variant='base-text'>
                    <Package color="#ffffff" size={16} weight="fill" />
                  </Circle> 
                  Embalagem mantém o café intacto
                </li>
                <li>
                  <Circle variant='yellow'>
                    <Timer color="#ffffff" size={16} weight="fill" />
                  </Circle>
                  Entrega rápida e rastreada
                </li>
                <li>
                  <Circle variant='purple'>
                    <Coffee color="#ffffff" size={16} weight="fill" />
                  </Circle>
                  O café chega fresquinho até você
                </li>
              </BannerList>
          </BannerInfo>
          <img src={banner} alt="Copo  de café" />
        </BannerWrapper>
    </BannerContainer>
  )
}
