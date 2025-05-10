import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import TestimonialsSection from "./testimonialsSection";
import { useModal } from "../components/pages/ModalContext";

const blogPosts = [
  {
    id: 1,
    title:
      "Rising Energy Costs Are Disrupting UK Business, Eden Helps You Take Back Control",
    sub_title: "Eden helps you take back control in a volatile energy market",
    content:
      "British companies now pay 46% higher industrial electricity prices than IEA average. Discover how Eden helps businesses maintain competitiveness.",
    longContent: `<p className="card-text mb-3">
  British companies are now paying some of the highest industrial electricity prices in the world — 46% above the average across other International Energy Agency (IEA) countries. According to <em>The Times</em> (April 2024), this cost disparity is forcing many large manufacturers and energy-intensive businesses to rethink their long-term plans in the UK.
</p>
<p className="card-text">
  Some, like CF Fertilisers, have shut down production lines entirely. Others are delaying investment, pausing growth, or looking abroad for more energy-competitive markets. Energy is no longer just a utility — it's a key strategic risk for large and medium-sized businesses.
</p>
<p className="card-text">
  Industrial leaders and trade groups like Make UK warn that additional policy and network charges unique to the UK are compounding the issue, leaving British firms less competitive. While government relief schemes such as the Energy Bills Discount Scheme exist, many businesses report that they fall short of what’s needed.
</p>
<p className="card-text">
  That’s where Eden comes in. At Eden, we help organisations take proactive control of their energy position. Whether you’re a large-scale manufacturer, a multi-site operator, or an organisation under pressure, we can support you with:
</p>

<h5 className="mt-4 fw-bold">Eden's Strategic Support:</h5>
<ul>
  <li>Bespoke procurement and risk management strategies</li>
  <li>Contract optimisation tailored to your usage and market conditions</li>
  <li>Supplier negotiation and invoice validation</li>
  <li>Planning and resilience support for future-proof energy strategies</li>
</ul>

<blockquote className="blockquote text-muted my-3 ps-3 border-start border-4">
  "Energy is no longer just a utility — it's a strategic risk requiring expert management."<br/>
  – Eden Energy Strategist
</blockquote>

<p className="card-text">
  We combine deep sector expertise with hands-on experience to help you protect what matters most — stability, cost control, and growth potential. If rising energy costs are affecting your operations or growth plans, get in touch with Eden. Speak directly with an energy expert who’ll help you build a smarter, more resilient strategy that works for your business — today and tomorrow.
</p>

<p className="text-muted small mt-4"><em>Source: The Times, “Rising energy costs undermine British companies’ growth plans”, April 2024.</em></p>`,
    image: images.post1,
    author: "Eden Insights",
    authorImage: images.profile,
    authorBio:
      "Source: The Times, “Rising energy costs undermine British companies’ growth plans”, April 2024.",
    date: "April 25, 2024",
    tag: "Blogs",
    tagColor: "bg-danger",
  },
  {
    id: 2,
    title:
      "AI's Growing Energy Demand: Why It Matters - And How Eden Helps You Stay Ahead",
    sub_title: "Navigating the hidden costs of AI infrastructure expansion",
    content:
      "Global data center electricity demand expected to double by 2030. Learn how Eden helps balance AI growth with sustainable energy strategies.",
    longContent: `<p className="card-text mb-3">
  The growth of Artificial Intelligence is reshaping industries — and with it, reshaping the energy landscape. Behind the headlines of breakthroughs and innovation lies a harder truth: AI consumes serious power. And as demand for data processing accelerates, so does pressure on already stretched energy infrastructure.
</p>

<p className="card-text">
  According to the International Energy Agency (IEA), global electricity use by data centres is expected to more than double by 2030, reaching an estimated 945 terawatt-hours (TWh) — more than the entire current electricity consumption of Japan.
</p>

<p className="card-text">
  In the UK, this shift is being felt sharply. As AI-driven infrastructure expands, data centres are placing unprecedented demands on the grid. Some developers are even turning to gas-fired generators to bypass grid delays, raising concerns about climate targets being sidelined to meet commercial urgency.
</p>

<p className="card-text">
  In fact, large-scale AI models — such as the one that powers platforms like ChatGPT — can require as much as 42 gigawatt-hours (GWh) just for training. That’s equivalent to the annual energy use of over 10,000 UK homes.
</p>

<h5 className="mt-4 fw-bold">UK Grid Capacity Is Being Tested — and So Are Business Strategies</h5>
<p className="card-text">
  The issue isn’t just the scale of energy demand — it’s the speed. In advanced economies, data centres are expected to account for over 20% of electricity demand growth by 2030. In the U.S., they could outpace the entire manufacturing sector in energy use within the decade.
</p>

<p className="card-text">
  Closer to home, the UK government’s ambition to increase AI computing capacity twentyfold by 2030 raises urgent questions:
</p>
<ul>
  <li>Can our grid infrastructure keep up with demand?</li>
  <li>Can AI growth remain aligned with net-zero targets?</li>
  <li>And where does this leave large and medium-sized enterprises competing for stable, sustainable energy supply?</li>
</ul>

<p className="card-text">
  The truth is, AI’s rise has made electricity a strategic asset. And as always, when the market shifts, businesses need to shift with it — quickly and intelligently.
</p>

<h5 className="mt-4 fw-bold">How Eden Helps Businesses Navigate This New Reality</h5>
<p className="card-text">
  At Eden, we recognise that energy strategy is no longer just about rates and renewals. It’s about resilience, foresight, and smart, agile decisions in a volatile environment.
</p>

<p className="card-text fw-bold">1. Strategic Energy Procurement</p>
<p className="card-text">
  We source contracts tailored to your actual usage, future requirements, and sustainability objectives — ensuring you're never overpaying or underprepared.
</p>

<p className="card-text fw-bold">2. Infrastructure Planning & Grid Support</p>
<p className="card-text">
  Whether you're expanding operations or developing high-load facilities, we work alongside you to navigate grid connections, supplier capacity, and timelines.
</p>

<p className="card-text fw-bold">3. Sustainable Integration</p>
<p className="card-text">
  We help you integrate renewables into your supply strategy — supporting power generation, waste-to-energy solutions, and carbon reporting for enterprise ESG targets.
</p>

<p className="card-text fw-bold">4. Risk Management & Forecasting</p>
<p className="card-text">
  Our insights and modelling tools help you forecast demand, price trends, and operational exposure — giving you data you can act on, not just react to.
</p>

<h5 className="mt-4 fw-bold">Get Ahead of the Curve — Before Demand Gets Ahead of You</h5>
<p className="card-text">
  Electricity is no longer just an operational cost — it’s a growth constraint, a boardroom concern, and a competitive differentiator.
</p>

<p className="card-text">
  Whether you're managing a multi-site business, scaling into data-heavy services, or simply trying to secure your energy future in an AI-driven world, Eden is here to help.
</p>

<p className="card-text">
  Let’s talk. Schedule a call with one of our experts, and we’ll help you shape a strategy that keeps your business ahead — efficient, sustainable, and resilient.
</p>

<p className="text-muted small mt-4"><em>Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register.</em></p>`,
    image: images.post2,
    author: "Eden Insights",
    authorBio:
      "Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register.",
    authorImage: images.profile,
    date: "April 22, 2024",
    tag: "Events",
    tagColor: "bg-primary",
  },
  {
    id: 3,
    title: "The Grid Is Changing And So Must Your Energy Strategy",
    sub_title: "Navigating the £35 billion infrastructure transformation",
    content:
      "With 200+ billion in renewable projects stuck in grid queues, discover how Eden ensures energy continuity during transition.",
    longContent: `
<p className="card-text">
  According to the International Energy Agency (IEA), global electricity use by data centres is expected to more than double by 2030, reaching an estimated 945 terawatt-hours (TWh) — more than the entire current electricity consumption of Japan.
</p>

<p className="card-text">
  In the UK, this shift is being felt sharply. As AI-driven infrastructure expands, data centres are placing unprecedented demands on the grid. Some developers are even turning to gas-fired generators to bypass grid delays, raising concerns about climate targets being sidelined to meet commercial urgency.
</p>

<p className="card-text">
  In fact, large-scale AI models — such as the one that powers platforms like ChatGPT — can require as much as 42 gigawatt-hours (GWh) just for training. That’s equivalent to the annual energy use of over 10,000 UK homes.
</p>

<h5 className="mt-4 fw-bold">UK Grid Capacity Is Being Tested — and So Are Business Strategies</h5>
<p className="card-text">
  The issue isn’t just the scale of energy demand — it’s the speed. In advanced economies, data centres are expected to account for over 20% of electricity demand growth by 2030. In the U.S., they could outpace the entire manufacturing sector in energy use within the decade.
</p>

<p className="card-text">
  Closer to home, the UK government’s ambition to increase AI computing capacity twentyfold by 2030 raises urgent questions:
</p>
<ul>
  <li>Can our grid infrastructure keep up with demand?</li>
  <li>Can AI growth remain aligned with net-zero targets?</li>
  <li>And where does this leave large and medium-sized enterprises competing for stable, sustainable energy supply?</li>
</ul>

<p className="card-text">
  The truth is, AI’s rise has made electricity a strategic asset. And as always, when the market shifts, businesses need to shift with it — quickly and intelligently.
</p>

<h5 className="mt-4 fw-bold">The UK Grid Is Getting a Massive Upgrade</h5>
<p className="card-text">
  The UK’s electricity grid is undergoing the most significant upgrade in generations. Behind the shift lies a simple fact: the energy demands of the future will not be met with the infrastructure of the past.
</p>

<p className="card-text">
  Between the rapid growth in renewable energy, the surge in electricity consumption from sectors like AI and data centres, and the transition to electric vehicles and heat pumps, pressure on the national grid has never been higher.
</p>

<p className="card-text">
  In response, the National Grid has launched a record £35 billion investment programme known as the Great Grid Upgrade — a comprehensive initiative that will double the UK's transmission capacity by 2035. This includes 17 major new infrastructure projects, grid reinforcements, and system enhancements designed to support the transition to net zero <span className="text-muted">[National Grid, 2024]</span>.
</p>

<h6 className="fw-bold mt-4">Big Plans — and Even Bigger Challenges</h6>
<p className="card-text">
  Among the flagship projects is the Eastern Green Link: a £4.3 billion subsea cable that will run between Scotland and England. Once live in 2029, it’s expected to transmit enough green electricity to power over two million homes. It’s an essential piece of the UK’s renewable strategy — moving wind-generated electricity from the north of the country to where demand is highest in the south and midlands <span className="text-muted">[The Guardian, Aug 2024]</span>.
</p>

<p className="card-text">
  But the infrastructure rollout hasn’t been without issues. According to recent industry analysis, there is currently over £200 billion worth of renewable energy projects stuck in a grid connection queue. For businesses planning new facilities, electrification programmes, or net-zero transitions, this creates uncertainty — and delay.
</p>

<p className="card-text">
  The UK government has acknowledged the bottleneck and responded with a strategic energy infrastructure plan to 2050, focusing on grid flexibility, smart systems, offshore wind, and hydrogen readiness. It’s ambitious, but implementation is key <span className="text-muted">[Energy News, 2024]</span>.
</p>

<h5 className="mt-4 fw-bold">What This Means for Businesses</h5>
<p className="card-text">
  This grid overhaul will directly affect large and medium-sized enterprises — particularly those with high energy consumption, growing data and infrastructure needs, or aggressive sustainability goals.
</p>

<p className="card-text">
  For many, questions are starting to surface:
</p>
<ul>
  <li>Will my business have access to enough power — at the right time and price?</li>
  <li>Should we wait for connection upgrades, or act now with onsite or distributed energy?</li>
  <li>How do I plan energy procurement when infrastructure and policy are both in flux?</li>
</ul>

<h5 className="mt-4 fw-bold">How Eden Helps Businesses Navigate This New Reality</h5>
<p className="card-text">
  At Eden, we recognise that energy strategy is no longer just about rates and renewals. It’s about resilience, foresight, and smart, agile decisions in a volatile environment.
</p>

<p className="card-text fw-bold">1. Strategic Energy Procurement</p>
<p className="card-text">
  We source contracts tailored to your actual usage, future requirements, and sustainability objectives — ensuring you're never overpaying or underprepared.
</p>

<p className="card-text fw-bold">2. Infrastructure Planning & Grid Support</p>
<p className="card-text">
  Whether you're expanding operations or developing high-load facilities, we work alongside you to navigate grid connections, supplier capacity, and timelines.
</p>

<p className="card-text fw-bold">3. Sustainable Integration</p>
<p className="card-text">
  We help you integrate renewables into your supply strategy — supporting power generation, waste-to-energy solutions, and carbon reporting for enterprise ESG targets.
</p>

<p className="card-text fw-bold">4. Risk Management & Forecasting</p>
<p className="card-text">
  Our insights and modelling tools help you forecast demand, price trends, and operational exposure — giving you data you can act on, not just react to.
</p>

<h5 className="mt-4 fw-bold">Get Ahead of the Curve — Before Demand Gets Ahead of You</h5>
<p className="card-text">
  Electricity is no longer just an operational cost — it’s a growth constraint, a boardroom concern, and a competitive differentiator.
</p>

<p className="card-text">
  Whether you're managing a multi-site business, scaling into data-heavy services, or simply trying to secure your energy future in an AI-driven world, Eden is here to help.
</p>

<p className="card-text">
  Let’s talk. Schedule a call with one of our experts, and we’ll help you shape a strategy that keeps your business ahead — efficient, sustainable, and resilient.
</p>

<p className="text-muted small mt-4"><em></em></p>`,
    image: images.post3,
    author: "Eden Insights",
    authorImage: images.profile,
    authorBio:
      "Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register, National Grid, The Guardian, Energy News",
    date: "April 20, 2024",
    tag: "Explainer",
    tagColor: "bg-secondary",
  },
  {
    id: 4,
    title: "Decarbonization and Net-Zero Commitments",
    sub_title: "Navigating the Path to a Sustainable Future",
    content:
      "Advanced metering insights drive 18-22% efficiency gains. Learn to transform raw data into actionable strategies.",
    longContent: `<h5 className="mt-4 fw-bold">UK Net-Zero Commitments Are Shaping the Energy Agenda</h5>
<p className="card-text">
  The UK's commitment to achieving net-zero greenhouse gas emissions by 2050 is a legally binding target under the Climate Change Act 2008, with interim goals of a 68% reduction by 2030 and 78% by 2035, based on 1990 levels. Recent policy updates have further increased the 2035 target to an ambitious 81% reduction.
</p>

<p className="card-text">
  To support these goals, the government has introduced measures such as mandating solar panels on all new-build homes in England by 2027, aiming to reduce homeowners' annual energy bills and advance net-zero emissions.
</p>

<p className="card-text">
  Eden assists businesses in aligning with these commitments by offering strategic energy procurement, infrastructure planning, sustainability integration, and risk management services. Our expertise ensures that your organization can navigate the complexities of decarbonization while maintaining operational efficiency and resilience.
</p>

<h5 className="mt-4 fw-bold">Get Ahead of the Curve — Before Demand Gets Ahead of You</h5>
<p className="card-text">
  Electricity is no longer just an operational cost — it’s a growth constraint, a boardroom concern, and a competitive differentiator.
</p>

<p className="card-text">
  Whether you're managing a multi-site business, scaling into data-heavy services, or simply trying to secure your energy future in an AI-driven world, Eden is here to help.
</p>

<p className="card-text">
  Let’s talk. Schedule a call with one of our experts, and we’ll help you shape a strategy that keeps your business ahead — efficient, sustainable, and resilient.
</p>

<p className="text-muted small mt-4"><em></em></p>`,
    image: images.post4,
    authorBio:
      "Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register, National Grid, The Guardian, Energy News, UK Government Policy Documents",
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 18, 2024",
    tag: "Guides",
    tagColor: "bg-success",
  },
  {
    id: 5,
    title:
      "Advanced Metering and Energy Management: Empowering Businesses with Data-Driven Insights",
    sub_title:
      "Building cyber-resilient energy systems in high-risk environments",
    content:
      "With 68% of UK energy firms reporting increased attacks, discover Eden's layered defense approach.",
    longContent: `<p className="card-text mb-3">
  The growth of Artificial Intelligence is reshaping industries — and with it, reshaping the energy landscape...
</p>

<!-- [Earlier content preserved and previously added sections in place] -->

<h5 className="mt-4 fw-bold">Modernising Energy Monitoring with Smart Metering</h5>
<p className="card-text">
  The UK's energy landscape is evolving, with advanced metering infrastructure (AMI) playing a pivotal role in modernizing energy consumption monitoring. As of 2024, 66% of all meters in Great Britain are smart or advanced meters, with 34 million operating in smart mode.
</p>

<p className="card-text">
  Smart meters provide real-time data, enabling businesses to monitor energy usage more effectively and make informed decisions to optimise consumption. However, a significant number of outdated Radio Teleswitch Service (RTS) meters remain in use, posing risks of increased energy bills and service disruptions.
</p>

<p className="card-text">
  Eden supports businesses in transitioning to advanced metering solutions, ensuring seamless integration and maximising the benefits of real-time energy data. Our services include strategic energy procurement, infrastructure planning, sustainability integration, and risk management, tailored to your organisation's unique needs.
</p>

<h5 className="mt-4 fw-bold">Get Ahead of the Curve — Before Demand Gets Ahead of You</h5>
<p className="card-text">
  Electricity is no longer just an operational cost — it’s a growth constraint, a boardroom concern, and a competitive differentiator.
</p>

<p className="card-text">
  Whether you're managing a multi-site business, scaling into data-heavy services, or simply trying to secure your energy future in an AI-driven world, Eden is here to help.
</p>

<p className="card-text">
  Let’s talk. Schedule a call with one of our experts, and we’ll help you shape a strategy that keeps your business ahead — efficient, sustainable, and resilient.
</p>

<p className="text-muted small mt-4"><em>Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register, National Grid, The Guardian, Energy News, UK Government Policy Documents, BEIS 2024 Smart Meter Statistics</em></p>`,
    image: images.post5,
    authorBio:
      "Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register, National Grid, The Guardian, Energy News, UK Government Policy Documents, BEIS 2024 Smart Meter Statistics",
    author: "Eden Insights",
    authorImage: images.profile,
    date: "April 16, 2024",
    tag: "Interviews",
    tagColor: "bg-info",
  },
  {
    id: 6,
    title:
      "Cybersecurity and Resilience: Safeguarding the UK's Energy Infrastructure",
    sub_title:
      "Meeting 2035's 81% emission reduction target without compromising operations",
    content:
      "  The growth of Artificial Intelligence is reshaping industries and with it, reshaping the energy landscape.",
    longContent: `<p className="card-text mb-3">
  The growth of Artificial Intelligence is reshaping industries and with it, reshaping the energy landscape...
</p>

<!-- [All previous content sections remain in place, including grid upgrades, net zero goals, smart metering, etc.] -->

<h5 className="mt-4 fw-bold">Cybersecurity: A Growing Priority in the Energy Sector</h5>
<p className="card-text">
  The UK's energy sector faces increasing cyber threats, prompting the government to introduce the Cyber Security and Resilience Bill, aimed at strengthening cyber defenses and building resilience in essential services. Recent incidents, such as the widespread blackout in Spain and Portugal, highlight the vulnerability of modern societies to infrastructure failures and the need for robust cybersecurity measures.
</p>

<p className="card-text">
  Eden prioritises cybersecurity and resilience in our services, offering strategic energy procurement, infrastructure planning, sustainability integration, and risk management. We work closely with clients to develop and implement comprehensive cybersecurity strategies, ensuring the protection of critical energy infrastructure and the continuity of operations.
</p>

<h5 className="mt-4 fw-bold">Get Ahead of the Curve — Before Demand Gets Ahead of You</h5>
<p className="card-text">
  Electricity is no longer just an operational cost — it’s a growth constraint, a boardroom concern, and a competitive differentiator.
</p>

<p className="card-text">
  Whether you're managing a multi-site business, scaling into data-heavy services, or simply trying to secure your energy future in an AI-driven world, Eden is here to help.
</p>

<p className="card-text">
  Let’s talk. Schedule a call with one of our experts, and we’ll help you shape a strategy that keeps your business ahead — efficient, sustainable, and resilient.
</p>

<p className="text-muted small mt-4"><em></em></p>`,
    image: images.post6,
    author: "Eden Insights",
    authorBio:
      "Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register, National Grid, The Guardian, Energy News, UK Government Policy Documents, BEIS 2024 Smart Meter Statistics.",
    authorImage: images.profile,
    date: "April 14, 2024",
    tag: "News",
    tagColor: "bg-dark",
  },
  {
    id: 7,
    title:
      "Regulatory Compliance 2024: Navigating ESOS Phase 3 and New RIGs Requirements",
    sub_title: "Staying ahead in evolving energy compliance landscape",
    content:
      "With June 2024 deadlines passed, ensure ongoing compliance with Eden's expert guidance.",
    longContent: `<p className="card-text mb-3">
  The UK's energy sector is subject to a complex regulatory framework, with recent updates including modifications to the Regulatory Financial Performance Reporting (RFPR) template and Regulatory Instructions and Guidance (RIGs) effective from June 28, 2024. Additionally, the Energy Savings Opportunity Scheme (ESOS) Phase 3 compliance deadline was June 5, 2024, requiring businesses to report on energy efficiency measures.
</p>
<p className="card-text mb-3">
  Eden assists businesses in navigating these regulatory requirements by providing strategic energy procurement, infrastructure planning, sustainability integration, and risk management services. Our expertise ensures that your organization remains compliant with evolving regulations while optimizing energy performance and achieving sustainability goals.
</p>`,
    image: images.post7,
    author: "Eden Insights",
    authorBio:
      "Sources: International Energy Agency (IEA), Sky News, The Times, Loughborough University, The Register, National Grid, The Guardian, Energy News, UK Government Policy Documents, BEIS 2024 Smart Meter Statistics.",
    authorImage: images.profile,
    date: "April 12, 2024",
    tag: "Videos",
    tagColor: "bg-warning text-dark",
  },
];

const SideblogPosts = [
  {
    id: 1,
    title:
      "Rising Energy Costs - “When Energy Becomes a Boardroom Issue: How to Protect Growth in a Volatile Market” ",
    content:
      "Meeting global hydrogen demand requires innovative zero-carbon processes and sustainable market strategies.",
    image: images.post1,
  },
  {
    id: 2,
    title:
      "Electricity Demand from AI & Data Centres - “AI’s Hidden Cost: Why the Smart Revolution Needs Smarter Energy Strategy”",
    content:
      "Exploring the expanding opportunities and challenges in renewable energy industries worldwide.",
    image: images.post2,
  },
  {
    id: 3,
    title:
      "Grid Modernisation & Infrastructure Investment - “The Great Grid Shift: What Businesses Must Know About the UK's Energy Overhaul” ",
    content:
      "Technology-driven smart cities are reshaping urban landscapes with AI and IoT solutions.",
    image: images.post3,
  },
  {
    id: 4,
    title:
      "Decarbonisation & Net-Zero Commitments  - “The Race to Net Zero: Turning Policy into Practical Progress for Your Business”",
    content:
      "New eco-friendly construction techniques are helping reduce the carbon footprint of cities.",
    image: images.post4,
  },
  {
    id: 5,
    title:
      "Advanced Metering & Energy Management - “From Data to Decisions: How Smart Metering Transforms Business Energy Use” ",
    content:
      "Hydrogen energy is becoming a leading solution in the pursuit of zero-emission transportation.",
    image: images.post5,
  },
  {
    id: 6,
    title:
      "Cybersecurity & Resilience - “More Than a Power Cut: Building Cyber-Resilient Energy Systems”",
    content:
      "Artificial intelligence continues to transform industries from healthcare to automotive sectors rapidly.",
    image: images.post3,
  },
  {
    id: 7,
    title:
      "Regulatory Compliance & Reporting - “Keeping Up with Compliance: How to Stay Ahead in an Evolving Regulatory Landscape” ",
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

const Insights = () => {
  const { openContactModal } = useModal();
  const navigate = useNavigate();

  const [activeTag, setActiveTag] = useState("All");

  // Collect all unique tags from blogPosts
  const tags = [
    "All",
    ...Array.from(new Set(blogPosts.map((p) => p.tag).filter(Boolean))),
  ];

  console.log("tags ==> ", tags);

  // Filter posts based on active tag
  const filteredPosts =
    activeTag === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tag === activeTag);

  console.log("filteredPosts ==> ", filteredPosts);

  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <div className="px-2 px-md-5 mt-5">
        <h1 className="fw-bold text-capitalize mb-4 title-insight">Insights</h1>
        <p className="long-content text-dark fs-5">
          Keep up with the latest company updates, opinion pieces, and news from
          the world of business energy.
        </p>
      </div>

      <div className="container-fluid p-md-5 mb-5">
        <div className="row py-5 py-sm-0">
          {/* Left Side - Blogs */}
          <div className="col-lg-8">
            {/* top blogs posts */}
            <div className="row g-4 mb-5">
              {/* First Row: One large, two small */}
              <div className="col-lg-7">
                <div
                  className="position-relative text-white blog-grid-item-lg"
                  style={{ height: "100%" }}
                >
                  <img
                    src={blogPosts[0].image}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ filter: "brightness(0.4)" }}
                  />
                  <div className="position-absolute top-0 start-0 p-4">
                    <small className="badge text-white tag-date-style p-0">
                      {blogPosts[0].tag} <span className="dot">•</span>
                      {blogPosts[0].date}
                    </small>
                  </div>
                  <div className="position-absolute bottom-0 p-4">
                    <h4 className="blog-grid-title">{blogPosts[0].title}</h4>
                    <p>{blogPosts[0].content}</p>
                    <div
                      onClick={() => {
                        navigate("/insight-details", {
                          state: { post: blogPosts[0] },
                        });
                      }}
                      className="text-link"
                    >
                      {blogPosts[0].title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row g-4">
                  {[blogPosts[1], blogPosts[2]].map((post) => (
                    <div className="col-12" key={post.id}>
                      <div
                        className="position-relative text-white blog-grid-item"
                        style={{ height: "100%" }}
                      >
                        <img
                          src={post.image}
                          alt=""
                          className="img-fluid w-100 h-100 object-fit-cover"
                          style={{ filter: "brightness(0.4)" }}
                        />
                        <div className="position-absolute top-0 start-0 p-3">
                          <small className="badge text-white tag-date-style p-0">
                            {post.tag} <span className="dot">•</span>
                            {post.date}
                          </small>
                        </div>
                        <div className="position-absolute bottom-0 p-3">
                          <h4 className="blog-grid-title">{post.title}</h4>
                          <div
                            onClick={() => {
                              navigate("/insight-details", {
                                state: { post },
                              });
                            }}
                            className="text-link"
                          >
                            {post.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Row: Three equally spaced */}
              {[blogPosts[3], blogPosts[4], blogPosts[5]].map((post) => (
                <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                  <div
                    className="position-relative text-white blog-grid-item"
                    style={{ height: "100%" }}
                  >
                    <img
                      src={post.image}
                      alt=""
                      className="img-fluid w-100 h-100 object-fit-cover"
                      style={{ filter: "brightness(0.4)" }}
                    />
                    <div className="position-absolute top-0 start-0 p-3">
                      <small className="badge text-white tag-date-style p-0">
                        {post.tag} <span className="dot">•</span>
                        {post.date}
                      </small>
                    </div>
                    <div className="position-absolute bottom-0 p-3">
                      <h4 className="blog-grid-title">{post.title}</h4>
                      <div
                        onClick={() => {
                          navigate("/insight-details", {
                            state: { post },
                          });
                        }}
                        className="text-link"
                      >
                        {post.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="d-flex flex-wrap gap-4 my-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`cursor-pointer fs-4 ${
                    activeTag === tag ? "fw-bold text-black" : "text-muted"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Grid of Filtered Posts */}
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div className="col-lg-4 mb-4" key={post.id}>
                  <div className="blog-card h-100 border shadow-sm rounded overflow-hidden bg-white">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <div className="d-flex justify-content-between align-items-center p-3 text-muted small">
                      <small
                        className={`badge ${post.tagColor} tag-date-style p-1 me-2`}
                      >
                        {post.tag}
                      </small>
                      <span>
                        {post.date}
                        {/* <span className="dot mx-1">•</span>{" "}
                        {post.author} */}
                      </span>
                    </div>

                    <div className="px-3 pb-3">
                      <h5 className="fw-bold text-dark">{post.title}</h5>
                      <p className="text-muted small">{post.sub_title}</p>
                      <div
                        onClick={() => {
                          navigate("/insight-details", { state: { post } });
                        }}
                        className="text-dark text-link text-decoration-underline fw-semibold"
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
            {/* <h4 className="mt-5 mb-4 mx-5 mx-lg-3">Latest Articles</h4>
            <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3 latestArticles">
              {LatestblogPosts?.map((post) => (
                <div key={post.id} className="mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded mb-3"
                  />

                  <h6 className="fw-bold">{post.title}</h6>

                  <p className="text-muted small">{post.content}</p>

                  <div className="text-end">
                    <button className="btn btn-primary btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* <TestimonialsSection /> */}

      <section className="contact-us-section container-fluid px-3 px-sm-4 px-xxl-5">
        <div className="row align-items-center justify-content-between">
          <div className="contact-text-section col-12 col-md-8">
            <h1 className="contact-heading mb-0 fs-2 lh-base lh-md-1.2 lh-lg-1.5">
              Speak with our team to see how Eden’s expertise can streamline
              your energy strategy, reduce waste, and support your wider
              sustainability goals.
            </h1>
          </div>

          <div className="contact-button-section col-12 col-md-4 d-flex justify-content-center">
            <Btn
              rightIcon
              background={"#fff"}
              iconbackground={"#2f98d0"}
              color={"#555"}
              className="no-hover"
              style={{
                padding: "1rem 2rem",
                borderRadius: "2rem",
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                minWidth: "12rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              rightIconChildren={
                <img
                  className="img-fluid"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                  src={images.icon_top_white}
                  alt="contact icon"
                />
              }
              onClick={openContactModal}
            >
              <span className="text-nowrap">Contact Us</span>
            </Btn>
          </div>
        </div>
      </section>

      {/* <Brands style={{ padding: "15rem 0 0" }} /> */}
      <Footer />
    </div>
  );
};

export default Insights;
