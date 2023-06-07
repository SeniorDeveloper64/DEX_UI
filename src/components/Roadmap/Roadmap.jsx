import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q2-2023",
      title: "Concept",
      info: [
        "MVP",
        "Funding",
        "Community Growth",
      ],
    },
    {
      roadmapTitle: "Q3-2023",
      title: "GO LIVE!",
      info: [
        "Development and Test",
        "V1 release",
        "IDO",
        "Public Launch",
      ],
    },

    {
      roadmapTitle: "Q4-2023",
      title: "Growth",
      info: [
        "Mass Marketing",
        "Governance Model Integration",
        "Community Growth",
      ],
    },

    {
      roadmapTitle: "Q1-2024",
      title: "Expand",
      info: [
        "New Blockchain Integration",
        "NFT Sale for Profit Sharing",
        "Profit Sharing Allocation",
        "V2 release",
      ],
    },
    {
      roadmapTitle: "Q2-2024",
      title: "Govern",
      info: [
        "DAO Implementation for decision making",
        "Major blockchain integrations",
      ],
    },
    {
      roadmapTitle: "Q3-2024",
      title: "Operation #1",
      info: [
        "Fully integrated multi-chain DEX",
        "Pre-seed investment platform",
      ],
    },
    // {
    //   roadmapTitle: "Mid of Q4 2021",
    //   title: "Operational",
    //   info: [
    //     <>
    //       SubQuery launches its <br /> own parthian
    //     </>,
    //     "SubQuery Foundation",
    //   ],
    // },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUr Roadmap</span>
              <h2 className="title">
                {/* Bigtech Strategy and <br /> Project <span>Plan</span> */}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
