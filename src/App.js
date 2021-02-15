import React, { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Testimonial from "./Components/TestimonialComponent";
import "./style.scss";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isABUser, setABUser] = useState(false);
  const [name, setName] = useState("");
  const data = [
    {
      country: "INDIA",
      items: [
        {
          title: "testimonial",
          desc:
            "XYZ's work was productive and highly critical for the client's success. The team communicated regularly with the client, allowing them to provide their feedback about the progress. They've met the company's expectations and they were always willing to help the client.",
          name: "Smith",
          role: "NYTimes, Designer",
        },
        {
          title: "testimonial",
          desc:
            "XYZ’s work has helped reduce app bugs. Thanks to them, the quality of the client’s software releases has significantly improved. The remote team excels at communication, as they’re able to overcome geographical and cultural barriers. They’ll continue to be a trusted partner.",
          name: "Mart",
          role: "TOI, Head of sales",
        },
        {
          title: "testimonial",
          desc:
            "After working with numerous companies around the world and resulting in differing experiences for our holding, we came across XYZ and started to work with them on a single project and limited resources. Thanks to very professional technical strategy, well-managed approach.",
          name: "Carl",
          role: "Flipkart, Developer",
        },
        {
          title: "testimonial",
          desc:
            "Our development experience with XYZ Software has been fantastic. They have adapted to each of our projects. When we decide to take a project in a different direction they efficiently change direction with us and provide guidance and new milestones",
          name: "Hannah",
          role: "OLX, Manager",
        },
        {
          title: "testimonial",
          desc:
            "Our cooperation with XYZ  has a long history, multiple projects, dating back to early 2005. Compared to other companies, XYZ team provides top notch quality of testing services. They widely and, what is important, correctly applied automated testing throughout our projects.",
          name: "Rick",
          role: "Dunzo, Head of marketing",
        },
      ],
    },
    {
      country: "US",
      items: [
        {
          title: "testimonial",
          desc:
            "XYZ has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.",
          name: "Ursella",
          role: "McDonalds, Head of Sales",
        },
        {
          title: "testimonial",
          desc:
            "During the past 4 years, XYZ has proven to be an excellent company and a great asset by providing exemplary Quality Assurance services for all Dashlane platforms (Windows, Mac, iOS, Android, Web).",
          name: "Camilo",
          role: "Dashlane, Designer",
        },
        {
          title: "testimonial",
          desc:
            "XYZ has been a great asset in helping us securing the quality of our Toolbars. When we needed quick help they were there for us and gave us access to a full team of testers within a matter of a few days.",
          name: "Cenedella",
          role: "TestDrive, Head of marketing",
        },
        {
          title: "testimonial",
          desc:
            "During the past year XYZ has become one of our trusted development partners for Windows Phone 7 and I have no hesitation recommending them as an excellent company and software development provider to do business with.",
          name: "Zilberg",
          role: "Microsoft, CTO",
        },
        {
          title: "testimonial",
          desc:
            "We have been working with XYZ Software for almost three years and our relationship with them has been great. We would highly recommend XY Software for every type of project - simple or complex!",
          name: "Ross",
          role: "Amazon, COO",
        },
      ],
    },
  ];
  const handleLogin = ({ isABUser = false, name = "" }) => {
    setABUser(isABUser);
    setIsLoggedIn(true);
    setName(name);
  };
  return (
    <div>
      {!isLoggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Dashboard data={data} isABUser={isABUser} name={name} />
      )}
    </div>
  );
}
