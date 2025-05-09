import Header from "../components/other/header";
import Footer from "../components/other/footer";
import Brands from "../components/pages/brands";
import { FaShareAlt, FaFacebookF, FaTwitter } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "../insights.css";
import images from "../components/theme/imagesPath";
import Btn from "../components/other/btn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link, useLocation } from "react-router-dom";
import TestimonialsSection from "./testimonialsSection";
import { useModal } from "../components/pages/ModalContext";

const SideblogPostsHighlights = [
  {
    id: 1,
    title: "Eden Utilities Becomes Back-of-Shirt Partner for Crawley Town FC",
    content:
      "Eden Utilities has expanded its partnership with Crawley Town Football Club by becoming the new back-of-shirt sponsor. This collaboration underscores Eden's commitment to supporting local sports and community initiatives. Source: Crawley Town FC, July 2024.",
    image: images.h1,
    tag: "Partnership",
    date: "July 2024",
    tagColor: "bg-primary", // Directly adding color
  },
  {
    id: 2,
    title: "Eden Utilities Partners with Manor Royal Business District",
    content:
      "Eden Utilities has announced a landmark partnership with the Manor Royal Business Improvement District (BID). This collaboration aims to provide businesses within the district with energy cost risk management services and promote sustainable energy solutions. Source: Eleven Sports Media.",
    image: images.h2,
    tag: "Business",
    date: "June 2024",
    tagColor: "bg-success", // Directly adding color
  },
  {
    id: 3,
    title: "Eden Utilities Empowers Businesses to Turn Waste into Electricity",
    content:
      "Through its Eden Infinity initiative, Eden Utilities is helping organizations convert waste into electricity, thereby reducing environmental impact and promoting sustainability. Source: Eleven Sports Media.",
    image: images.h3,
    tag: "Sustainability",
    date: "May 2024",
    tagColor: "bg-warning", // Directly adding color
  },
  {
    id: 4,
    title: "Eden Utilities Supports The Olive Tree Cancer Support Centre",
    content:
      "Eden Utilities has demonstrated its commitment to community support by contributing £577.49 to The Olive Tree Cancer Support Centre. This donation was raised through the auctioning of signed Crawley Town FC training tops. Source: Olive Tree Cancer Support Centre.",
    image: images.h4,
    tag: "Charity",
    date: "April 2024",
    tagColor: "bg-danger", // Directly adding color
  },
];

const LatestblogPosts = [
  {
    id: 1,
    title:
      "Rising Energy Costs Are Disrupting UK Business  Eden Helps You Take Back Control ",
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
    sub_title:
      "How Eden helps businesses stay ahead of accelerating power needs.",
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
    sub_title:
      "Why the Great Grid Upgrade means new rules for business energy planning.",
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
  const { state } = useLocation();
  const singlePost = state?.singlePost;

  console.log("single post ==> ", singlePost);

  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <div className="container-fluid p-md-5">
        <div className="row py-5 py-sm-0">
          {/* Left Side - Single Blog Detail */}
          <div className="col-lg-8">
            <div className="card mb-4 pb-4 border-bottom">
              {/* Title and Subtitle */}
              <div className="card-header bg-transparent border-0 p-0 mb-3">
                <h6 className="text-muted small mb-2">
                  Published April 2024 | Source: The Times
                </h6>
                <h3 className="text-uppercase fw-bold text-black mb-1">
                  {singlePost.title}
                </h3>
                <p className="long-content text-dark fs-5">
                  {singlePost.content}
                </p>
              </div>

              {/* Optional Main Image */}
              <img
                src={singlePost.image}
                className="img-fluid rounded mb-3"
                alt={singlePost.title}
              />

              {/* Content */}
              <div className="card-body p-0">
                <div  dangerouslySetInnerHTML={{ __html: description }}>{singlePost.longContent}</div>

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
            {/* Clean Energy Section */}
            <section className="cleanEnergy mb-4">
              <h4 className="mb-4 mx-5 mx-lg-3 text-black">Highlights</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPostsHighlights?.map((post) => (
                  <div className="mb-4" key={post.id}>
                    <div className="blog-card h-100 border shadow-sm rounded overflow-hidden bg-white">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="img-fluid w-100"
                        style={{ objectFit: "cover" }}
                      />

                      <div className="d-flex justify-content-between align-items-center p-3 text-muted small">
                        <small
                          className={`badge ${post.tagColor} tag-date-style p-1 me-2`}
                        >
                          {post.tag}
                        </small>
                        <span>{post.date}</span>
                      </div>

                      <div className="px-3 pb-3">
                        <h5 className="fw-bold text-dark">{post.title}</h5>
                        <p className="text-muted small">{post.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

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
              <Btn rightIcon onClick={openContactModal}>
                Talk to an Expert
              </Btn>
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
