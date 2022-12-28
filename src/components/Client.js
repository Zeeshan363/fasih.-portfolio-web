import React, { Component } from "react";
import "./Client.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Client extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
      >
        <div id="client">
          <img src="./pictures/client1.jpg" />
          <div className="myCarousel">
            <h3>Kamran A.</h3>
            <h4>Entrepreneur</h4>
            <p>
              Fasih is  a standup guy with an honest and mature mindset. He played an interesting role that led to better making of Islamic Finance for me and my colleagues.
            </p>
          </div>
        </div>

        <div>
          <img src="./pictures/client2.jpg" />
          <div className="myCarousel">
            <h3>John Doe</h3>
            <h4>Lead Organization Developer in Naveena Group</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="./pictures/client3.jpg" />
          <div className="myCarousel">
            <h3>Syed Yousaf Hussain</h3>
            <h4>SAP Business One</h4>
            <p>
              IFasih is an amazing professional, who brings all of the skills and expertise in Application and Web Development. It was indeed a wonderful experience to work with him during several project deployments, consultancy services.
            </p>
          </div>
        </div>

        <div>
          <img src="./pictures/client4.jpg" />
          <div className="myCarousel">
            <h3>Faisal Hussain</h3>
            <h4>Director Research & Development</h4>
            <p>
            Mr. Fasih Ur Rehman is a dedicated resource who was instrumental in the collaboration of IBP and CIE. He has always been prompt in his responses and a through professional in all his dealings. I would welcome an opportunity of working with him in future.
            </p>
          </div>
        </div>

        <div>
          <img src="./pictures/client5.jpg" />
          <div className="myCarousel">
            <h3>Faisal Islam</h3>
            <h4>Product Developer</h4>
            <p>
            Thorough professional. Dedicated, hardworking and sharp learner. Keeping a positive attitude. Problem solver. Keep it up buddy.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
