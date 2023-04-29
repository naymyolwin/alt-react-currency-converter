import React, { Component } from "react";
import Card from "../common/Card";

class Recommanded extends Component {
  render() {
    return (
      <div id="recommanded">
        <div className="my-32 w-full bg-ccGray">
          <div className="text-center text-ccOrange font-bold text-2xl pt-10">
            Recommended by 55,000+ verified customers
          </div>
          <div className="container mx-auto flex flex-col xl:flex-row items-center gap-5 md:justify-around mt-10 p-10">
            <Card
              title="Straightforward and pricise"
              text="The process is straightforward and quick and the exchange rate is very good and constantly updated so you can send the amount you intend easily. The transfer took several days but was completed well before the guaranteed date. Highly recommended."
              name="Carolyn"
              time="10 hours ago"
            />
            <Card
              title="Execellent Service"
              text="Excellent service, I will not hesitate to use XE for currency exchange."
              name="Trevor"
              time="20 hours ago"
            />
            <Card
              title="USD to CAD"
              text="TheI needed to convert from USD to CAD. Since I used xe a few years back, I trusted the business. It took some time to go through the transaction because of the compliance audit, but overall, the funds were received and I am satisfied. Recommend!"
              name="Frank"
              time="1 day ago"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Recommanded;
