import { BannerContainer, BannerInfo, BannerTitle, BannerImage, BannerWrapper, BannerList, BannerListItem } from './styles';
import banner from '../../../../assets/banner.png';
import { GlobalContainer } from '../../../../styles/global';
import { Package, Timer, Coffee, ShoppingCart } from 'phosphor-react';

export function Banner() {
  return (
    <BannerContainer>
      <GlobalContainer>
        <BannerWrapper>
          <BannerInfo>
              <BannerTitle>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              </BannerTitle>
              <BannerList>
                <BannerListItem variantBackground='yellow-dark'>
                  <ShoppingCart size={16} weight="fill" />
                  Compra simples e segura
                </BannerListItem>
                <BannerListItem variantBackground='base-text'>
                  <Package size={16} weight="fill" />
                  Embalagem mantém o café intacto
                </BannerListItem>
                <BannerListItem variantBackground='yellow'>
                  <Timer size={16} weight="fill" />
                  Entrega rápida e rastreada
                </BannerListItem>
                <BannerListItem variantBackground='purple'>
                  <Coffee size={16} weight="fill" />
                  O café chega fresquinho até você
                </BannerListItem>
              </BannerList>
          </BannerInfo>
          <BannerImage>
            <img src={banner} alt="Copo  de café" />
          </BannerImage>
        </BannerWrapper>
      </GlobalContainer>
    </BannerContainer>
  )
}
