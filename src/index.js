import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

const SocialMedia = [
  {
    icon: "fa-brands fa-facebook",
    link: "https://facebook.com"
  },
  {
    icon: "fa-brands fa-twitter",
    link: "https://twitter.com"
  },
  {
    icon: "fa-brands fa-whatsapp",
    link: "https://whatsapp.com"
  },
  {
    icon: "fa-brands fa-github",
    link: "https://github.com"
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://linkedin.com"
  }
];

const App = () => {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identitas />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
};



const SocialButtons = (props) => {
  return (
    <button onClick={() => window.open(props.link, "_blank")}>
      <i className={props.icon}></i>
    </button>
  );
};

const Header = () => {

  // mengambi data dari array sosial media di atas
  const index = Math.floor(Math.random() * SocialMedia.length);
  const sosmedKiri = SocialMedia.slice(0, index);
  const sosmedKanan = SocialMedia.slice(index);
  return (
    <>
      <div className="social-buttons">
        {sosmedKiri.map((sosmed) => (
          <SocialButtons key={sosmed.icon} icon={sosmed.icon} link={sosmed.link} />
        ))}
      </div>
      <div className="social-buttons right">
        {sosmedKanan.map((sosmed) => (
          <SocialButtons key={sosmed.icon} icon={sosmed.icon} link={sosmed.link} />
        ))}
      </div>
    </>
  );
};

const Identitas = () => {
  const nama = "Vita Alvia";
  return (
    <>
      <div className="text">
        <div className="name-wrapper">
          <div className="name">{nama}</div>
        </div>
        <div className="title">Penyanyi Dangdut</div>
      </div>
    </>
  );
};

const Biodata = () => {
  return (
    <>
      <div className="desc">
        <p>
          <b>Vita Alvia</b> adalah seorang penyanyi dangdut Indonesia yang aktif
          di dunia musik.
        </p>
        <p>
          Dia Lahir di Surakarta, Jawa Tengah, Indonesia dan dilahirkan pada
          tanggal 25 September 2001.
        </p>
      </div>
    </>
  );
};

const Badge = ({text}) => {
  return <button className="height">{text}</button>;
};

const Highlight = () => {
  return (
    <div className="buttons">
      <Badge text="klik" />
      <Badge text="klik lagi" />
      <Badge text="klik sekali lagi" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
