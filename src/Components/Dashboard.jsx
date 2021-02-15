import React, { useEffect, useState } from "react";
import AddCountryExp from "./AddCountryExp";
import Testimonial from "./TestimonialComponent";
export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newCountry, setNewCountry] = useState("");
  useEffect(() => {
    const clone = JSON.parse(JSON.stringify(props.data));
    setSelectedCountry(clone[0].country);
    setData(clone);
  }, []);
  const handleChangeCountry = (e) => {
    console.log(e.target.value);
    if (e.target.value === "add-country") {
      setShowModal(true);
    } else {
      setSelectedCountry(e.target.value);
    }
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
    setNewCountry("");
  };
  const addCountry = (e) => {
    e.stopPropagation();
    if (newCountry !== "") {
      const cloneFirstItem = JSON.parse(JSON.stringify(data.slice(0, 1)[0]));
      cloneFirstItem.country = newCountry;
      setData([...data, cloneFirstItem]);
      setSelectedCountry(newCountry);
    }
    setShowModal(false);
  };
  const findTestimonial = data.find((d) => d.country === selectedCountry);
  const testimonialData = (findTestimonial && findTestimonial.items) || [];
  return (
    <div>
      <header>
        <span>XYZ Company</span>
        <select
          value={selectedCountry}
          onChange={handleChangeCountry}
          className={"country-dropdown"}
        >
          {data.map((opt, idx) => (
            <option value={opt.country} key={idx}>
              {opt.country}
            </option>
          ))}
          <AddCountryExp abUser={props.isABUser} />
        </select>
      </header>

      <div className={"box"}>
        <p className={"username"}>
          Hi, <b>{props.name || "Guest"}</b>
        </p>
        <p className={"testimonial-header"}>Testimonials</p>
        <Testimonial items={testimonialData} />
      </div>
      {showModal ? (
        <div className={"modal-container"} onClick={(e) => closeModal(e)}>
          <div className={"modal-popup"} onClick={(e) => e.stopPropagation()}>
            <input
              placeHolder={"Enter Country"}
              value={newCountry}
              onChange={(e) => {
                e.stopPropagation();
                setNewCountry(e.target.value);
              }}
            />
            <button onClick={addCountry}>Add Country</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
