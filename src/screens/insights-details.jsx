import React from "react";
import Header from "../components/other/header";
import Footer from "../components/other/footer";
import Brands from "../components/pages/brands";
import { FaShareAlt, FaFacebookF, FaTwitter } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "../insights.css";
import images from "../components/theme/imagesPath";
import Btn from "../components/other/btn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import TestimonialsSection from "./testimonialsSection";
import { useModal } from "../components/pages/ModalContext";

const blogPosts = [
  {
    id: 1,
    title: "Rising Energy Costs Are Disrupting UK Business  Eden Helps You Take Back Control ",
    sub_title: "Eden helps you take back control in a volatile energy market.",
    content:
      "British companies are now paying some of the highest industrial electricity prices in the world  46% above the average across other International Energy Agency (IEA) countries. According to The Times (April 2024), this cost disparity is forcing many large manufacturers and energy-intensive businesses to rethink their long-term plans in the UK. ",
    image: images.post1,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 25, 2025",
  },
  {
    id: 2,
    title: "AI’s Growing Energy Demand: Why It Matters",
    sub_title: "How Eden helps businesses stay ahead of accelerating power needs.",
    content:
      "With AI infrastructure placing immense strain on energy systems, Eden helps organisations navigate procurement, grid planning, and sustainability to maintain control in a high-demand environment.",
    image: images.post2,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 22, 2025",
  },
  {
    id: 3,
    title: "The Grid Is Changing  And So Must Your Strategy",
    sub_title: "Why the Great Grid Upgrade means new rules for business energy planning.",
    content:
      "The UK’s £35B grid upgrade promises major improvements but brings uncertainty. Eden helps businesses manage connection delays and evolving infrastructure with proactive planning and smart procurement.",
    image: images.post3,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 20, 2025",
  },
  {
    id: 4,
    title: "Decarbonization and Net-Zero Commitments",
    sub_title: "Navigating the path to a sustainable future with Eden.",
    content:
      "With net-zero legally binding and interim goals rising, Eden supports businesses with tailored energy strategies, infrastructure planning, and compliance to meet evolving targets without sacrificing performance.",
    image: images.post4,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 18, 2025",
  },
  {
    id: 5,
    title: "Advanced Metering Empowers Energy Efficiency",
    sub_title: "Real-time data insights are reshaping energy decisions.",
    content:
      "With 66% of UK meters now smart, Eden helps businesses maximise value from advanced metering by integrating usage data into broader procurement and risk strategies.",
    image: images.post5,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 16, 2025",
  },
  {
    id: 6,
    title: "Cybersecurity and Energy Resilience",
    sub_title: "Safeguarding infrastructure in an age of rising threats.",
    content:
      "As cyber threats rise, Eden provides strategies that integrate cybersecurity with energy planning, helping organisations maintain operational continuity and safeguard critical assets.",
    image: images.post6,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 14, 2025",
  },
  {
    id: 7,
    title: "Navigating Energy Compliance and Reporting",
    sub_title: "Adapting to regulatory shifts with confidence.",
    content:
      "From ESOS to RIGs updates, Eden helps businesses stay ahead of compliance requirements with expert guidance on energy reporting, procurement, and sustainability integration.",
    image: images.post7,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 12, 2025",
  },
];

const singlePost = {
  id: 1,
  title: "Rising Energy Costs Are Disrupting UK Business  Eden Helps You Take Back Control ",
  sub_title: "Eden helps you take back control in a volatile energy market.",
  content:
    "British companies are now paying some of the highest industrial electricity prices in the world  46% above the average across other International Energy Agency (IEA) countries. According to The Times (April 2024), this cost disparity is forcing many large manufacturers and energy-intensive businesses to rethink their long-term plans in the UK. ",
  image: images.post1,
  author: "Eden Insights",
  authorImage: images.profile,
  date: "April 25, 2025",
}

const SideblogPosts = [
  {
    id: 1,
    title: "Rising Energy Costs - “When Energy Becomes a Boardroom Issue: How to Protect Growth in a Volatile Market” ",
    content:
      "Meeting global hydrogen demand requires innovative zero-carbon processes and sustainable market strategies.",
    image: images.post1,
  },
  {
    id: 2,
    title: "Electricity Demand from AI & Data Centres - “AI’s Hidden Cost: Why the Smart Revolution Needs Smarter Energy Strategy”",
    content:
      "Exploring the expanding opportunities and challenges in renewable energy industries worldwide.",
    image: images.post2,
  },
  {
    id: 3,
    title: "Grid Modernisation & Infrastructure Investment - “The Great Grid Shift: What Businesses Must Know About the UK's Energy Overhaul” ",
    content:
      "Technology-driven smart cities are reshaping urban landscapes with AI and IoT solutions.",
    image: images.post3,
  },
  {
    id: 4,
    title: "Decarbonisation & Net-Zero Commitments  - “The Race to Net Zero: Turning Policy into Practical Progress for Your Business”",
    content:
      "New eco-friendly construction techniques are helping reduce the carbon footprint of cities.",
    image: images.post4,
  },
  {
    id: 5,
    title: "Advanced Metering & Energy Management - “From Data to Decisions: How Smart Metering Transforms Business Energy Use” ",
    content:
      "Hydrogen energy is becoming a leading solution in the pursuit of zero-emission transportation.",
    image: images.post5,
  },
  {
    id: 6,
    title: "Cybersecurity & Resilience - “More Than a Power Cut: Building Cyber-Resilient Energy Systems”",
    content:
      "Artificial intelligence continues to transform industries from healthcare to automotive sectors rapidly.",
    image: images.post3,
  },
  {
    id: 7,
    title: "Regulatory Compliance & Reporting - “Keeping Up with Compliance: How to Stay Ahead in an Evolving Regulatory Landscape” ",
    content:
      "Businesses worldwide are adapting their strategies to address urgent climate change realities.",
    image: images.post4,
  },

];

const LatestblogPosts = [
  {
    id: 1,
    title: "Rising Energy Costs Are Disrupting UK Business  Eden Helps You Take Back Control ",
    sub_title: "Eden helps you take back control in a volatile energy market.",
    content:
      "British companies are now paying some of the highest industrial electricity prices in the world  46% above the average across other International Energy Agency (IEA) countries. According to The Times (April 2024), this cost disparity is forcing many large manufacturers and energy-intensive businesses to rethink their long-term plans in the UK. ",
    image: images.post1,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 25, 2025",
  },
  {
    id: 2,
    title: "AI’s Growing Energy Demand: Why It Matters",
    sub_title: "How Eden helps businesses stay ahead of accelerating power needs.",
    content:
      "With AI infrastructure placing immense strain on energy systems, Eden helps organisations navigate procurement, grid planning, and sustainability to maintain control in a high-demand environment.",
    image: images.post2,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 22, 2025",
  },
  {
    id: 3,
    title: "The Grid Is Changing  And So Must Your Strategy",
    sub_title: "Why the Great Grid Upgrade means new rules for business energy planning.",
    content:
      "The UK’s £35B grid upgrade promises major improvements but brings uncertainty. Eden helps businesses manage connection delays and evolving infrastructure with proactive planning and smart procurement.",
    image: images.post3,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 20, 2025",
  },
  {
    id: 4,
    title: "Decarbonization and Net-Zero Commitments",
    sub_title: "Navigating the path to a sustainable future with Eden.",
    content:
      "With net-zero legally binding and interim goals rising, Eden supports businesses with tailored energy strategies, infrastructure planning, and compliance to meet evolving targets without sacrificing performance.",
    image: images.post4,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 18, 2025",
  },
  {
    id: 5,
    title: "Advanced Metering Empowers Energy Efficiency",
    sub_title: "Real-time data insights are reshaping energy decisions.",
    content:
      "With 66% of UK meters now smart, Eden helps businesses maximise value from advanced metering by integrating usage data into broader procurement and risk strategies.",
    image: images.post5,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 16, 2025",
  },
  {
    id: 6,
    title: "Cybersecurity and Energy Resilience",
    sub_title: "Safeguarding infrastructure in an age of rising threats.",
    content:
      "As cyber threats rise, Eden provides strategies that integrate cybersecurity with energy planning, helping organisations maintain operational continuity and safeguard critical assets.",
    image: images.post6,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 14, 2025",
  },
  {
    id: 7,
    title: "Navigating Energy Compliance and Reporting",
    sub_title: "Adapting to regulatory shifts with confidence.",
    content:
      "From ESOS to RIGs updates, Eden helps businesses stay ahead of compliance requirements with expert guidance on energy reporting, procurement, and sustainability integration.",
    image: images.post7,
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 12, 2025",
  },

];

const InsightsDetails = () => {
  const { openContactModal } = useModal();
  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <section id="hero-blog" className="img-fluid">
        <div className="top-curve">
          <svg
            viewBox="0 0 1440 1200"
            xmlns="http://www.w3.org/2000/svg"
            className="top-curve-svg"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0, 50 C500, 1000 1000, 300 1440, 1200 L1440, 0 L0, 0 Z"
            />
          </svg>

          <div className="px-md-5 d-flex flex-column justify-content-center align-items-end h-70vh m-5">
            <div id="edenText" className="text-center text-md-end p-0">
              <h1 className="edenText-title">
                <span className="w-wrapper">
                  <span className="w-letter">W</span>e{" "}
                  <span className="a-wrapper">
                    <span className="a-letter">a</span>re
                  </span>
                  <span className="eden-highlight">
                    <span className="d-wrapper">
                      {" "}
                      E<span className="d-letter">d</span>en.
                    </span>
                  </span>
                </span>
              </h1>
              <p className="edenText-subtext me-4">
                LOWER COST - MORE EFFICIENT - BETTER INFORMED
              </p>
            </div>
            <div className="me-4 mt-3 btn-hero">
              <Btn onClick={openContactModal} rightIcon>Talk to an Expert</Btn>
            </div>
          </div>
        </div>

        <div className="hero-insight">
          <div id="about-title">
            EXPLORE THE<br></br>
            EXPERT INSIGHTS
          </div>
          <p className="long-content mb-4 mb-md-3">PROTECTING FUTURE..</p>

          <img className="img-fluid tree-insight" src={images.tree_insight} />
          <div id="swiper-insights">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {blogPosts?.map((item) => {
                return (
                  <SwiperSlide
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="hero-insights-content p-4 p-md-2"
                    key={item.id}
                  >
                    <div className="box-content">
                      <h3 className={"box-title"}>{item.title}</h3>
                      <p className="long-content">{item.content}</p>
                      {/* Small Read More link */}
                      <Link to="/insight-details" className="read-more-link">
                        Read More...
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      {/* <div className="p-5"></div> */}

      <div className="container-fluid p-md-5">
        <div className="row py-5 py-sm-0">

          {/* Left Side - Single Blog Detail */}
          <div className="col-lg-8">
            <div className="card mb-4 pb-4 border-bottom">
              {/* Title and Subtitle */}
              <div className="card-header bg-transparent border-0 p-0 mb-3">
                <h2 className="text-uppercase fw-bold text-black mb-1">
                  Rising Energy Costs Are Reshaping the Future for UK Businesses. Eden Can Help You Navigate What's Next
                </h2>
                <h6 className="text-muted small mb-2">Published April 2024 | Source: The Times</h6>
              </div>

              {/* Optional Main Image */}
              <img
                src={singlePost.image}
                className="img-fluid rounded mb-3"
                alt={singlePost.title}
              />

              {/* Content */}
              <div className="card-body p-0">
                <p className="card-text mb-3">
                  The UK is facing a growing competitiveness problem  and at the heart of it is energy. According to The Times (April 2024), British companies are now paying industrial electricity prices that are 46% higher than the average across countries in the International Energy Agency (IEA). That figure is not just a statistic; it represents a major threat to growth, productivity, and investment across the country.
                </p>
                <p>
                  Manufacturers are feeling the pressure acutely. CF Fertilisers shut down its ammonia plant in Billingham due to unsustainable energy costs. Large industrial groups like Tata Steel and Ineos are publicly questioning their long-term presence in the UK. These aren’t isolated incidents  they’re symptoms of a deeper issue.
                </p>
                <p>
                  A report published by Make UK and the Centre for Progressive Policy outlines how rising energy costs are now one of the primary factors preventing British companies from expanding or investing further. The concern is particularly high among manufacturers, where 70% say energy is affecting their decisions on future growth and location.
                </p>
                {/* Small Image Grid */}
                <div className="row my-4 g-3">
                  <div className="col-4">
                    <img src={images.post1} className="img-fluid rounded" alt="Energy Impact 1" />
                  </div>
                  <div className="col-4">
                    <img src={images.post2} className="img-fluid rounded" alt="Energy Impact 2" />
                  </div>
                  <div className="col-4">
                    <img src={images.post3} className="img-fluid rounded" alt="Energy Impact 3" />
                  </div>
                </div>

                <p>
                  The problem isn’t just the cost of energy itself  it’s the structure. UK firms face disproportionately high network charges and green levies compared to competitors overseas. That structural disadvantage is making British businesses less attractive for future investment, even among UK-based firms.
                </p>
                <blockquote className="blockquote text-muted my-3 ps-3 border-start border-4">
                  "The UK is a great place to invest, but the cost of energy is becoming a real block to that growth."  Stephen Phipson, Chief Executive of Make UK
                </blockquote>
                <p>
                  Government interventions, such as the Energy Bills Discount Scheme, are helping to a degree, but they’re not enough to offset the broader pricing disadvantage. As energy markets remain volatile and global competition sharpens, businesses need more than discounts  they need strategy.
                </p>

                <h5 className="mt-4 fw-bold">How Eden Supports UK Businesses Facing Energy Pressures</h5>
                <p>
                  At Eden, we understand that energy is now a critical lever in operational resilience and growth planning. Rising costs and complex market structures make it harder for large and medium-sized businesses to make confident decisions  that’s where we step in.
                </p>
                <ul>
                  <li>Design procurement strategies that adapt to market volatility</li>
                  <li>Audit and optimise contracts to eliminate unnecessary costs</li>
                  <li>Negotiate directly with suppliers to secure better terms</li>
                  <li>Analyse risk exposure and usage patterns to improve efficiency</li>
                  <li>Support long-term planning with real-time market intelligence and forecasting</li>
                </ul>
                <p>
                  Whether you're managing a multi-site operation or scaling in an energy-intensive industry, our team helps you protect performance  without compromising on sustainability or control.
                </p>

                <h5 className="mt-4 fw-bold">Don’t Let Energy Costs Undermine Your Future</h5>
                <p>
                  If rising electricity prices are slowing your growth or forcing difficult choices, you're not alone  but you don’t have to face it without support.
                </p>
                <p>
                  <strong>Speak with an Eden expert today.</strong> We’ll help you make sense of your energy position and build a strategy that keeps your business moving forward  no matter how the market shifts.
                </p>



                {/* Author and Share section */}
                <div className="d-flex justify-content-between align-items-center mt-3 gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={singlePost.authorImage}
                      alt={singlePost.author}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <small className="text-muted d-block">
                        By {singlePost.author}
                      </small>
                      <small className="text-muted">{singlePost.date}</small>
                    </div>
                  </div>
                  <div className="d-flex gap-1 gap-sm-3">
                    {/* Share */}
                    <div
                      className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm"
                      style={{ borderColor: "#ddd" }}
                    >
                      <div
                        className="pe-2 me-2 border-end d-none d-sm-block"
                        style={{ borderColor: "#ddd" }}
                      >
                        <FaShareAlt />
                      </div>
                      <div className="d-sm-none">
                        <FaShareAlt />
                      </div>
                      <span className="d-none d-sm-inline">Share</span>
                    </div>

                    {/* Facebook */}
                    <div
                      className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm"
                      style={{ borderColor: "#ddd" }}
                    >
                      <div
                        className="pe-2 me-2 border-end d-none d-sm-block"
                        style={{ borderColor: "#ddd" }}
                      >
                        <FaFacebookF />
                      </div>
                      <div className="d-sm-none">
                        <FaFacebookF />
                      </div>
                      <span className="d-none d-sm-inline">Facebook</span>
                    </div>

                    {/* Twitter */}
                    <div
                      className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm"
                      style={{ borderColor: "#ddd" }}
                    >
                      <div
                        className="pe-2 me-2 border-end d-none d-sm-block"
                        style={{ borderColor: "#ddd" }}
                      >
                        <FaTwitter />
                      </div>
                      <div className="d-sm-none">
                        <FaTwitter />
                      </div>
                      <span className="d-none d-sm-inline">Twitter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Blog List */}
          <div className="col-lg-4 px-md-5 px-lg-2 sideBar">
            {/* ---- CTA Section ---- */}
            <div
              className="card text-white mb-4 mx-5 mx-lg-3"
              style={{
                background: "linear-gradient(135deg, #007BFF, #00AEEF)",
                borderRadius: "12px",
              }}
            >
              <div className="card-body text-center py-4">
                <h5 className="mb-0">Speak with an Eden expert today.</h5>
              </div>
            </div>

            {/* ---- New Blog List Section ---- */}
            <h4 className="mb-4 mx-5 mx-lg-3">Latest Articles</h4>
            <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3 latestArticles">
              {LatestblogPosts?.map((post) => (
                <div key={post.id} className="mb-5">
                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded mb-3"
                  />

                  {/* Title */}
                  <h6 className="fw-bold">{post.title}</h6>

                  {/* Content */}
                  <p className="text-muted small">{post.content}</p>

                  {/* Read More Button */}
                  <div className="text-end">
                    <button className="btn btn-primary btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-sm-4 px-md-5 py-4 py-md-5">
        <div className="row g-4">
          {/* Left Side Image */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={images.blog_single}
              alt="Take Action"
              className="img-fluid rounded w-100"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-8 px-2 px-lg-5 px-sm-3 py-2 py-sm-3 px-md-2 d-flex flex-column justify-content-between right-side-content">
            <div>
              {/* Main Title */}
              <h1 className="fw-bold text-uppercase mb-4 mb-lg-5 mb-md-3 fs-1 fs-md-2 fs-lg-1">
                TAKE ACTION FOR A SUSTAINABLE TOMORROW
              </h1>

              {/* Grid of 4 Points */}
              <div className="row g-md-4 g-lg-5 g-md-3">
                {/* Point 1 */}
                <div className="col-sm-12 col-md-6">
                  <h5 className="fw-bold text-secondary">Pollution of Soil</h5>
                  <p className="text-muted small">
                    Waste can leak hazardous chemicals into the soil and from
                    there into our food.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="col-sm-12 col-md-6">
                  <h5 className="fw-bold text-secondary">
                    Water Contamination
                  </h5>
                  <p className="text-muted small">
                    Dumped waste materials often seep into water bodies, harming
                    marine life and ecosystems.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="col-sm-12 col-md-6">
                  <h5 className="fw-bold text-secondary">
                    Air Quality Degradation
                  </h5>
                  <p className="text-muted small">
                    Burning of waste releases harmful pollutants that degrade
                    air quality and public health.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="col-sm-12 col-md-6">
                  <h5 className="fw-bold text-secondary">Wildlife Threats</h5>
                  <p className="text-muted small">
                    Improper waste management disrupts wildlife habitats,
                    leading to biodiversity loss.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-4 d-flex flex-wrap align-items-center gap-2">
              <Btn rightIcon onClick={openContactModal}>Talk to an Expert</Btn>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsSection />

      <Brands style={{ padding: "15rem 0 0" }} />
      <Footer />
    </div>
  );
};

export default InsightsDetails;

