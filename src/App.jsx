import Icon from './Icon';

export default function App() {
  return (
    <>
      <header className="header">
        <img src="/images/logo.svg" alt="" className="header__logo" />
      </header>
      <img
        src="/images/illustration-mockups.svg"
        alt=""
        className="illustration"
      />
      <div className="register">
        <h2 className="register__heading">
          Build The Community Your Fans Will Love
        </h2>
        <p className="register__sub-heading">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a className="register__link" href="">
          Register
        </a>
      </div>
      <footer className="footer">
        <Icon>
          {/* eslint-disable-next-line */}
          <i class="bx bxl-facebook"></i>
        </Icon>
        <Icon>
          {/* eslint-disable-next-line */}
          <i class="bx bxl-twitter"></i>
        </Icon>
        <Icon>
          {/* eslint-disable-next-line */}
          <i class="bx bxl-instagram"></i>
        </Icon>
      </footer>
    </>
  );
}
