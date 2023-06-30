import ProfileImage from '../../assets/images/vini_img.jpg';
import { StyledAnchor, AnchorContainer, StyledImage, StyledHeader } from '../../Styles';
import backgroundImage from '../../assets/images/img_cv.jpg';


export const Header = () => {
  return (
    <StyledHeader url={backgroundImage}>
      <StyledImage>
        <img src={ProfileImage} alt="foto de perfil" />
      </StyledImage>
      <div>
        <nav>
          <AnchorContainer>
            <StyledAnchor>
              <a href="#projetos">Projetos</a>
            </StyledAnchor>
            <StyledAnchor>
              <a href="#experiencias">Experiências</a>
            </StyledAnchor>
            <StyledAnchor>
              <a href="#redes_socias">Redes Sociais</a>
            </StyledAnchor>
          </AnchorContainer>

        </nav>
      </div>
    </StyledHeader >

  );
}

