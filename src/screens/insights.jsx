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
import { Link, useNavigate } from "react-router-dom";
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


const SideblogPostsHighlights = [
  {
    id: 1,
    title: "Eden Utilities Becomes Back-of-Shirt Partner for Crawley Town FC",
    content:
      "Eden Utilities has expanded its partnership with Crawley Town Football Club by becoming the new back-of-shirt sponsor. This collaboration underscores Eden's commitment to supporting local sports and community initiatives.X (formerly Twitter)+2Log in or sign up to view+2X (formerly Twitter)+2 Source: Crawley Town FC, July 2024. .",
    image: images.h1,
  },
  {
    id: 2,
    title: "Eden Utilities Partners with Manor Royal Business District ",
    content:
      "Eden Utilities has announced a landmark partnership with the Manor Royal Business Improvement District (BID). This collaboration aims to provide businesses within the district with energy cost risk management services and promote sustainable energy solutions. Source: Eleven Sports Media. ",
    image: images.h2,
  },
  {
    id: 3,
    title: "Eden Utilities Empowers Businesses to Turn Waste into Electricity",
    content:
      "Through its Eden Infinity initiative, Eden Utilities is helping organizations convert waste into electricity, thereby reducing environmental impact and promoting sustainability. By partnering with businesses to generate power from waste, Eden Utilities ensures that this energy is allocated directly to the participating organizations' accounts, supporting their journey towards a greener footprint. Source: Eleven Sports Media.",
    image: images.h3,
  },
  {
    id: 4,
    title: "Eden Utilities Supports The Olive Tree Cancer Support Centre",
    content:
      "Eden Utilities has demonstrated its commitment to community support by contributing £577.49 to The Olive Tree Cancer Support Centre. This donation was raised through the auctioning of signed Crawley Town FC training tops, highlighting Eden's dedication to charitable causes.olivetreecancersupport.org.uk.Source: Olive Tree Cancer Support Centre. ",
    image: images.h4,
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

const Insights = () => {
  const { openContactModal } = useModal();
  const navigate = useNavigate();

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
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {blogPosts?.map((item) => {
                return (
                  <SwiperSlide
                    className="hero-insights-content p-4 p-md-2"
                    key={item.id}
                  >
                    <div className="box-content">
                      <h3 className={"box-title"}>{item.title}</h3>
                      <p className="long-content">{item.content}</p>
                      {/* Small Read More link */}
                      <Link to="" className="read-more-link">
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
          {/* Left Side - Blogs */}
          <div className="col-lg-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="card mb-4 pb-4 border-bottom">
                {/* Title and Subtitle */}
                <div className="card-header bg-transparent border-0 p-0 mb-3">
                  <h2 style={{ cursor: "pointer" }} 
                  
                  // onClick={() => {
                  //   navigate("/insight-details")
                  // }} 
                  
                  className="text-uppercase fw-bold text-black mb-1">
                    {post.title}
                  </h2>
                  <h6 className="text-muted small mb-2">{post.sub_title}</h6>
                </div>

                {/* Content */}
                <div className="card-body p-0">
                  <p className="card-text mb-3">{post.content}</p>

                  {/* Image */}
                  <img
                    src={post.image}
                    className="img-fluid rounded mb-3"
                    alt={post.title}
                  />

                  {/* Bottom Section */}
                  <div className="d-flex  justify-content-between align-items-center mt-3 gap-3">
                    {/* Author Details */}
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <small className="text-muted d-block">
                          By {post.author}
                        </small>
                        <small className="text-muted">{post.date}</small>
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
            ))}
          </div>

          {/* Right Side - Blog List */}
          <div className="col-lg-4 px-md-5 px-lg-2 sideBar">

            {/* Clean Energy Section */}
            <section className="cleanEnergy mb-4">
              <h4 className="mb-4 mx-5 mx-lg-3">Highlights</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPostsHighlights?.map((post) => (
                  <div key={post.id} className="mb-5">
                    {/* Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid rounded mb-3"
                    />

                    {/* Title */}
                    <h6 className="fw-bold text-blue">{post.title}</h6>

                    {/* Content */}
                    <p className="text-muted small">{post.content}</p>

                    {/* Read More Button */}

                  </div>
                ))}
              </div>
            </section>

            {/* Clean Energy Section */}
            <section className="cleanEnergy">
              <h4 className="mb-4 mx-5 mx-lg-3">Clean Energy</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPosts?.map((post) => (
                  <div key={post.id} className="d-flex mb-4">
                    <div className="flex-grow-1 pe-3">
                      <p className="mb-0">{post.title}</p>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-small-image"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* ---- New Blog List Section ---- */}
            <h4 className="mt-5 mb-4 mx-5 mx-lg-3">Latest Articles</h4>
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

export default Insights;
