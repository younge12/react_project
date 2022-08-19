import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ImgHome } from "../../assets/images/home.svg";
import { ReactComponent as ImgNewPost } from "../../assets/images/new-post.svg";
import ModalNewPost from "./ModalNewPost";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container>
        <Main>
          <LogoWrapper>
            <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Search>
            <Input placeholder="검색" />
          </Search>
          <Nav>
            <Icon>
              <ImgHome />
            </Icon>
            <Icon
              onClick={() => {
                setShow(true);
              }}
            >
              <ImgNewPost />
            </Icon>
          </Nav>
        </Main>
      </Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
      {show && <ModalNewPost onClose={() => setShow(false)} />}
    </>
  );
};

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const Main = styled.div`
  max-width: 975px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;
const ImgLogo = styled.img`
  width: 103px;
`;
const Search = styled.div`
  flex: 1;
`;
const Input = styled.input`
  width: 100%;
  background: #efefef;
  border: none;
  border-radius: 10px;
  height: 36px;
  padding-left: 20px;
  box-sizing: border-box;
`;
const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.div`
  cursor: pointer;
  margin: 0 10px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  background: #fafafa;
  min-height: calc(100vh - 60px);
`;

export default Header;
