import React from "react";
import RoadmapTwoItem from "./RoadmapTwoItem";

const RoadmapTwo = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Concept",
      info: <>EVM support for parachains SubQuery Academy Proof of indexing</>,
    },
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "App beta test",
      info: (
        <>
          {" "}
          Public testnet launch <br />
          SubQuery Network Explorer and dApp <br />
          Point-in-time indexing
        </>
      ),
    },
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Alpha Test",
      info: (
        <>
          Launch of the SubQuery Foundation Finalise research for other Layer-1
          chains Liquidity mining program
        </>
      ),
    },
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Operational",
      info: <>SubQuery launches its own parachainSubQuery Foundation</>,
    },
  ];

  return (
    <section id="roadmap" className="roadmap-area-two pt-130 pb-100">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title section-title-two text-center mb-65">
              <span className="sub-title">roadmap</span>
              <h2 className="title">
                Bigtech Strategy and <br />
                Project Plan
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="roadmap-wrap-two">
              {roadmap_items.map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>

            <div className="roadmap-wrap-two bottom">
              {roadmap_items.map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
