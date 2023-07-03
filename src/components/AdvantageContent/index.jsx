import DescriptionArticles from "../DescriptionArticles";
import "./AdvantageContent.css";
import ONLINEIMG from "../../assets/icon-online.svg";
import BUDGETINGIMG from "../../assets/icon-budgeting.svg";
import ONBOARDINGIMG from "../../assets/icon-onboarding.svg";
import APIOPENIMG from "../../assets/icon-api.svg";

import React from "react";
import CardAdvantage from "./CardAdvantage";

const data = [
  {
    img: ONLINEIMG,
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: BUDGETINGIMG,
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    img: ONBOARDINGIMG,
    title: " Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ",
  },
  {
    img: APIOPENIMG,
    title: " Open API ",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. ",
  },
];

const AdvantageContent = () => {
  return (
    <div className="advantage-content">
      <DescriptionArticles title={"Why choose Easybank?"} description>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </DescriptionArticles>
      <div className="cards">
        {data.map((item) => (
          <CardAdvantage image={item.img} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default AdvantageContent;
