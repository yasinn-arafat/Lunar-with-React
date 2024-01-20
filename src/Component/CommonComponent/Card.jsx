import React from "react";

const Card = ({
  className,
  card__title,
  card__details,
  children,
  cardTitle,
  cardDetails,
}) => {
  return (
    <>
      <div className={className}>
        <h3 className={card__title}>
          {cardTitle ? cardTitle : `Top 5 SaaS Businesses – August 2021`}
        </h3>
        <p className={card__details}>
          {cardDetails
            ? cardDetails
            : `Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS`}
        </p>
        {children}
      </div>
    </>
  );
};

export default Card;
