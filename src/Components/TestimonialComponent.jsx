import React from "react";
export default function Testimonial(props) {
  return (
    <div className={"testimonial-wrapper"}>
      {props.items.map((item, idx) => (
        <div className={"testimonial-content"} key={`${item.country}${idx}`}>
          <p className={"desc"}>{item.desc}</p>
          <p className={"author"}>{item.name || "Tim"}</p>
          <p className={"designation"}>{item.role || "Head of Sales"}</p>
        </div>
      ))}
    </div>
  );
}
