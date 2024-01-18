import React from "react";
import Card from "../CommonComponent/Card";
import Button from "../CommonComponent/Button";
import "./BusinessCard.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const BusinessCard = () => {
  return (
    <>
      <div className="business">
        <div className="container">
          <div className="businessWrapper">
            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>

            <Card
              className="card"
              cardTitle="Top 5 SaaS Businesses – August 2021"
              cardDetails="Are you currently using one of the top SaaS businesses, according to
            the team at Lunar Strategy? Check out this list of our top SaaS"
            >
              <Button btnStyle="business__btn">
                Read More <MdKeyboardArrowRight className="read__btn" />
              </Button>
            </Card>
          </div>
          <div className="businessBottom">
            <ul className="bottom__num">
              <li className="num__list">Previous</li>
              <li className="num__list">1</li>
              <li className="num__list">2</li>
              <li className="num__list">3</li>
              <li className="num__list">4</li>
              <li className="num__list">5</li>
              <li className="num__list num--next">Next</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
