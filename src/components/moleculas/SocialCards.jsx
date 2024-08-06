import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";
export function SocialCard() {
  return (
    <Container>
      <div className="content">
        <a href="https://www.tiktok.com/@codigo369.com" target="_blank">
          <Icon icon="fa-brands:tiktok" />
        </a>
        <a href="https://www.youtube.com/@Codigo369" target="_blank">
          <Icon icon="openmoji:youtube" />
        </a>
        <a href="https://www.facebook.com/codigo369oficial/" target="_blank">
          <Icon icon="openmoji:facebook" />
        </a>
        <a href="https://www.instagram.com/codigo369/" target="_blank">
          <Icon icon="skill-icons:instagram" />
        </a>
        <a href="https://discord.gg/Tk5EJudmKU" target="_blank">
          <Icon icon="skill-icons:discord" />
        </a>
      </div>
    </Container>
  );
}
const Container = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: relative;
  top: 10px;
  left: 50px;

  .content {
    a:link,
    a:visited,
    a:active {
      text-decoration: none;
      color: #fff;
    }

    gap: 10px;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
