import { BannerContainer, BannerInfo, BannerTitle, BannerImage, BannerWrapper } from './styles'
import banner from '../../assets/banner.png';
import { GlobalContainer } from '../../styles/global';

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
          </BannerInfo>
          <BannerImage>
            <img src={banner} alt="Copo  de café" />
          </BannerImage>
        </BannerWrapper>
      </GlobalContainer>
    </BannerContainer>
  )
}
