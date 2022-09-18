import React from "react";
import "./Faq.css";

export default function App() {
  return (
    <div className="faq--cont">
      <div className="container">
        <h1 className="faq--heading">FAQ</h1>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <strong> Why join AGRIVERSE ?</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We are a solid company focused on the cryptocurrency
                <code> financial market </code> and <code>NFTs games</code>. In
                addition, we are also a serious and responsible company,
                concerned with the environment and its ecosystem, which is
                directly linked to our global agriculture business proposal with
                its satellite products and services. Come make money having fun,
                log in by connecting your cryptocurrency wallet and earn money
                with Agriverse. Due to the characteristics and advantages of
                owning<code> Agriverse NFT </code>that have already been
                highlighted, as well as our understanding of the true worth of
                agricultural products and the desire of the
                <code> Agriverse Community </code> to advance the project, it
                will be incredibly beneficial to possess Agriverse NFT. We hope
                that now that you have read and fully understood the idea behind
                this ground-breaking usage of the Agriverse to generate revenue
                while also supplying the globe with food and natural resources,
                you can understand the actual potential of this opportunity.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <strong>What benefit do you gain as a Participant ?</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    You can purchase your nft (seed or livestock) with any
                    Agriverse token as long as the
                    <p>valve is worth the price.</p>
                  </li>
                  <li>Real and Valuable Asset</li>
                  <li>
                    Create job opportunities for people such as farmers and
                    Harvester technicians for farm -equipment and, as a result,
                    reduce the high unemployment rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <strong> What benefit do you gain as a Farmer? </strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Lease land</li>
                  <li>Hired to maintain and protect the farm plantation.</li>
                  <li>
                    Get monthly income for the service rendered either as a
                    Farmer, Technician, or Harvester.
                  </li>
                  <li>Organic Farming system. </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <strong> What uniqueness in Agriverse NFT?</strong>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Agriverse comes with the mission of increasing and encouraging
                investment opportunity and research in agricultural businesses
                as a result of with the increase in consumption of crypto assets
                and the demand for safe and profitable investments. It's an
                ecosystem project that will reach a greater number of people
                because it is interactive, dynamic and interesting and big part
                of success of the economic indices of the world economy. We want
                to assure our investors and users that our focus is safe and
                profitable investment opportunity.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong> Why join AGRIVERSE ?</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                We are a solid company focused on the cryptocurrency
                <code>financial market </code> and <code>NFTs games</code>. In
                addition, we are also a serious and responsible company, concerned
                with the environment and its ecosystem, which is directly linked to
                our global agriculture business proposal with its satellite products
                and services. Come make money having fun, log in by connecting your
                cryptocurrency wallet and earn money with Agriverse. Due to the
                characteristics and advantages of owning<code> Agriverse NFT </code
                >that have already been highlighted, as well as our understanding of
                the true worth of agricultural products and the desire of the
                <code> Agriverse Community </code> to advance the project, it will be
                incredibly beneficial to possess Agriverse NFT. We hope that now
                that you have read and fully understood the idea behind this
                ground-breaking usage of the Agriverse to generate revenue while
                also supplying the globe with food and natural resources, you can
                understand the actual potential of this opportunity.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <strong>What benefit do you gain as a Participant ?</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <ul>
                  <li>
                    You can purchase your nft (seed or livestock) with any
                    Agriverse token as long as the
                    <li>valve is worth the price.</li>
                  </li>
                  <li>Real and Valuable Asset</li>
                  <li>
                    Create job opportunities for people such as farmers and
                    Harvester technicians for farm -equipment and, as a result,
                    reduce the high unemployment rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong> What benefit do you gain as a Farmer? </strong>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <ul>
                  <li>Lease land</li>
                  <li>Hired to maintain and protect the farm plantation.</li>
                  <li>Get monthly income for the service rendered either as a Farmer, Technician, or Harvester.</li>
                  <li>Organic Farming system. </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <strong>	What uniqueness in Agriverse NFT?</strong>
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Agriverse comes with the mission of increasing and encouraging investment opportunity and research in agricultural businesses as a result of with the increase in consumption of crypto assets and the demand for safe and profitable investments. It's an ecosystem project that will reach a greater number of people because it is interactive, dynamic and interesting and big part of success of the economic indices of the world economy.
                We want to assure our investors and users that our focus is safe and profitable investment opportunity.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
