import DescriptionArticles from "../DescriptionArticles";
import CardLatest from "./CardLatest";
import "./LatestArticles.css";

import IMGCURRENCY from "../../assets/image-currency.jpg";
import IMGRESTAURANT from "../../assets/image-restaurant.jpg";
import IMGPLANE from "../../assets/image-plane.jpg";
import IMGCONFETTI from "../../assets/image-confetti.jpg";

const data = [
  {
    img: IMGCURRENCY,
    madeBy: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    img: IMGRESTAURANT,
    madeBy: " By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    img: IMGPLANE,
    madeBy: "By Wilson Hutton ",
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    img: IMGCONFETTI,
    madeBy: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const LatestArticles = () => {
  return (
    <div>
      <DescriptionArticles title={"Latest Articles"} />
      <div className="latest-cards">
        {data.map((item) => (
          <CardLatest
            image={item.img}
            madeBy={item.madeBy}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
