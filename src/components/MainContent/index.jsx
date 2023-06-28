import "./MainContent.css";

import IMGMOCKUPS from "../../assets/image-mockups.png";
import IMGBGINTRO from "../../assets/bg-intro-desktop.svg";

import Button from "../Button";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="text-content">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>Request Invite</Button>
      </div>

      <div className="image-content">
        <img
          className="bg-intro"
          src={IMGBGINTRO}
          alt="imagem de fundo da propaganda dos serviços"
        />
        <img
          className="bg-mockup"
          src={IMGMOCKUPS}
          alt=" imagem principal com propaganda dos serviços"
        />
      </div>
    </div>
  );
};

export default MainContent;
