import styled from "@emotion/styled";
import { rem } from "polished";

const Footer = ({ isDark }) => {
  return (
    <FooterStyled isDark={isDark}>
      <div className="container menu-container">
        <ul className="menu">
          <li>
            <a href="https://www.linkedin.com/in/johnstringerm/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/jhnstrngr">GitHub</a>
          </li>
        </ul>
        <div className="copyright">© 2020 John Stringer</div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  padding: 20px;
  font-size: ${rem(18)};
  li {
    display: inline;
    margin-right: ${rem(25)};
  }
  .copyright {
    margin-left: auto;
  }
  .menu-container {
    display: flex;
  }
`;

export default Footer;
