import React from "react";
import Card from "../CommonComponent/Card";
import Button from "../CommonComponent/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Articles.css";

const Articles = () => {
  return (
    <>
      <div className="articles">
        <div className="container">
          <div className="articlesWraper">
            <div className="articles__text">
              <h3 className="articles__title">Digital Marketing Articles</h3>
            </div>

            <Card
              className="articles__box"
              card__title="articlesCard__title"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              card__details="articlesCard__details"
              cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="box__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="articles__box"
              card__title="articlesCard__title"
              cardTitle="12 Best SaaS WordPress Themes To Convert Lead"
              card__details="articlesCard__details"
              cardDetails="Lead conversion is an essential goal for any business. Be it converting site visitors into members, increasing their email subscription list, or converting members into"
            >
              <Button btnStyle="box__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
