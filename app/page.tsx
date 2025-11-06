import { SlideDeck, type Slide } from "@/components/SlideDeck";
import {
  GlobeHemisphereEast,
  RocketLaunch,
  UsersThree,
  NavigationArrow,
  Megaphone
} from "@phosphor-icons/react/dist/ssr";

const VisionVisual = () => (
  <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 md:grid-cols-[auto,1fr]">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron/30 text-saffron">
      <GlobeHemisphereEast size={32} weight="fill" />
    </div>
    <div>
      <p className="font-heading text-lg text-white">Incredible India Platform</p>
      <p>
        Unified tourism OS powering personalized journeys across heritage, wellness, and adventure with sustainability
        at its core.
      </p>
    </div>
  </div>
);

const MarketVisual = () => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-saffron/20 via-transparent to-indiaGreen/20 p-4 text-sm text-white/75">
    <p className="font-heading text-lg text-white">Inbound Focus Corridors</p>
    <div className="mt-3 grid gap-2">
      {[
        { region: "Golden Triangle 2.0", growth: "+34%", detail: "Heritage + culinary fusion routes (Delhi-Jaipur-Agra)" },
        { region: "Himalayan Wellness Arc", growth: "+29%", detail: "Wellness, adventure, astro tourism states" },
        { region: "Coastal Blue Circuit", growth: "+25%", detail: "Lakshadweep, Andamans, Konkan luxury escapes" }
      ].map((item) => (
        <div key={item.region} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
          <div>
            <p className="font-semibold text-white">{item.region}</p>
            <p>{item.detail}</p>
          </div>
          <span className="font-heading text-xl text-saffron">{item.growth}</span>
        </div>
      ))}
    </div>
  </div>
);

const AudienceVisual = () => (
  <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
    {[
      { icon: UsersThree, title: "Segment Depth", detail: "AI-driven personas with 220+ behavioral datapoints" },
      { icon: NavigationArrow, title: "Journey Mapping", detail: "10,000+ geo-tagged experiences with feedback loops" },
      { icon: RocketLaunch, title: "Loyalty Engine", detail: "Cross-partner rewards to raise repeat visitation" }
    ].map(({ icon: Icon, title, detail }) => (
      <div key={title} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indiaGreen/30 text-indiaGreen">
          <Icon size={24} weight="fill" />
        </div>
        <div className="text-sm text-white/75">
          <p className="font-heading text-white">{title}</p>
          <p>{detail}</p>
        </div>
      </div>
    ))}
  </div>
);

const MarketingVisual = () => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deepBlue/40 text-saffron">
        <Megaphone size={28} weight="duotone" />
      </div>
      <div>
        <p className="font-heading text-lg text-white">Campaign Stack</p>
        <p>Full-funnel strategy: Inspire → Dream → Book → Share</p>
      </div>
    </div>
    <dl className="mt-4 grid gap-3">
      {[
        { label: "Cultural Drops", value: "Metaverse showcases + live festival simulcasts" },
        { label: "Conversion Pods", value: "Dynamic packaging + instant financing offers" },
        { label: "Advocacy Loop", value: "UGC co-creation + loyalty boosters" }
      ].map(({ label, value }) => (
        <div key={label} className="rounded-2xl bg-white/10 p-3">
          <dt className="font-heading text-white">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const slides: Slide[] = [
  {
    id: "vision",
    kicker: "Vision 2030",
    headline: "Position India as the World’s Most Immersive Journey",
    description:
      "Transform India into a hyper-connected, sustainable tourism powerhouse that delivers boundaryless cultural immersion and premium experiences at scale.",
    points: [
      "Elevate visitor experience via data-led personalization and seamless digital travel layers.",
      "Invest in sustainable infrastructure that protects heritage while unlocking new economic corridors.",
      "Activate partnerships across aviation, hospitality, and startups to orchestrate 360° journeys."
    ],
    footerNote:
      "India will outpace Asia-Pacific peers by packaging culture, nature, and innovation into one coherent platform.",
    visual: <VisionVisual />
  },
  {
    id: "market",
    kicker: "Global Demand",
    headline: "A $512B Tourism Opportunity by 2030",
    description:
      "India’s travel sector is set to triple in value as outbound and domestic demand surges, supported by rising disposable income and visa liberalization.",
    metricCards: [
      {
        label: "2023 Market Size",
        value: "$178B",
        detail: "9% YoY growth, 3.6% of GDP"
      },
      {
        label: "2030 Projection",
        value: "$512B",
        detail: "CAGR 16.8%, fastest in Asia-Pacific"
      },
      {
        label: "Traveler Mix",
        value: "58/42",
        detail: "Domestic vs. international spend composition by 2030"
      }
    ],
    points: [
      "UHNWI and premium FIT segments growing 2.4x thanks to luxury rail, wellness retreats, and heritage circuits.",
      "Immersive experiences (AR heritage walks, culinary trails) forecast to account for 35% of incremental spend."
    ],
    footerNote: "India’s tourism GDP share can rebound to pre-pandemic highs while creating 30M net new jobs.",
    visual: <MarketVisual />
  },
  {
    id: "audience",
    kicker: "Target Travelers",
    headline: "Three High-Value Archetypes Fueling Growth",
    description:
      "Focus on travelers who over-index on spend, social amplification, and repeat visitation to amplify lifetime value.",
    points: [
      "Conscious Explorers: Climate-aware millennials seeking sustainable stays and local impact experiences.",
      "Cultural Connoisseurs: Heritage-focused travelers booking curated art, architecture, and craft itineraries.",
      "Transformational Seekers: Wellness-driven guests investing in Ayurveda, yoga retreats, and spiritual journeys."
    ],
    metricCards: [
      {
        label: "Average Trip Spend",
        value: "$2.7K",
        detail: "Across focus segments vs. $1.1K market average"
      },
      {
        label: "Digital Influence",
        value: "63%",
        detail: "Trips inspired by social-first storytelling"
      }
    ],
    footerNote: "Data-led segmentation enables curated itineraries that can lift conversion by 22%.",
    visual: <AudienceVisual />
  },
  {
    id: "pillars",
    kicker: "Experience Pillars",
    headline: "Signature Journeys Across Four Hero Pillars",
    description:
      "Each pillar fuses iconic destinations with hidden gems, guided storytelling, and immersive tech to multiply engagement.",
    points: [
      "Heritage & Culture: Palace trails, UNESCO clusters, AR-driven forts, craft residencies.",
      "Nature & Adventure: Himalaya basecamps, tiger reserves, marine biosphere expeditions, sky trails.",
      "Wellness & Spirituality: Ayurveda sanctuaries, yoga routes, meditation monasteries, astro wellness pods.",
      "Gastronomy & Lifestyle: Culinary hackathons, spice circuits, festival passports, nocturnal markets."
    ],
    footerNote: "Modular itineraries unlock cross-selling and extend average length of stay to 9 nights."
  },
  {
    id: "infrastructure",
    kicker: "Connected India",
    headline: "Building a Frictionless Travel Backbone",
    description:
      "Investments in transport, digital identity, and smart hubs reduce friction and drive repeat visitation.",
    points: [
      "50+ smart visitor centers integrating multilingual AI concierges and AR navigation overlays.",
      "Unified Bharat Mobility Pass linking flights, Vande Bharat rail, and EV fleets for door-to-door coverage.",
      "Sustainable infrastructure: green hydrogen buses for fragile ecosystems, net-zero airport terminals."
    ],
    metricCards: [
      {
        label: "New Routes",
        value: "220",
        detail: "Regional air and semi-high-speed rail corridors by 2028"
      },
      {
        label: "Digital IDs",
        value: "45M",
        detail: "Projected adoption of travel super-app wallets"
      }
    ],
    footerNote: "Seamless multimodal mobility can improve traveler NPS by 18 points."
  },
  {
    id: "platform",
    kicker: "Technology Platform",
    headline: "India Tourism OS: Personalization at Scale",
    description:
      "A composable digital layer blending predictive analytics, immersive content, and partner APIs to orchestrate journeys.",
    points: [
      "Dynamic packaging with AI-driven upsells for multi-city itineraries and micro-experiences.",
      "Open data exchange with hospitality, fintech, and culture ministries ensures unified traveler profiles.",
      "Layered AR/VR storytelling with multilingual voice assistants, accessible via the tourism super-app."
    ],
    metricCards: [
      {
        label: "Conversion Lift",
        value: "+24%",
        detail: "Personalized bundles vs. static itineraries"
      },
      {
        label: "Partner APIs",
        value: "320+",
        detail: "Live integrations across mobility, events, and local artisans"
      }
    ],
    footerNote: "India Tourism OS enables a single source of truth for experience orchestration."
  },
  {
    id: "marketing",
    kicker: "Global Storytelling",
    headline: "Omnichannel Campaigns with Cultural Resonance",
    description:
      "Command share-of-voice with content ecosystems and influencer collectives tailored to priority markets.",
    points: [
      "Immersive storytelling with cinematic VR teasers and live holographic showcases in flagship cities.",
      "Creator residencies and diaspora ambassadors co-creating local narratives for authenticity.",
      "Always-on social commerce with instant booking and real-time itinerary co-planning."
    ],
    metricCards: [
      {
        label: "Priority Markets",
        value: "12",
        detail: "USA, UK, GCC, ASEAN, Nordics focus clusters"
      },
      {
        label: "Earned Reach",
        value: "1.3B",
        detail: "Projected impressions across campaigns 2025-2027"
      }
    ],
    footerNote: "Storytelling fused with conversion funnels shortens the decision cycle by 21%.",
    visual: <MarketingVisual />
  },
  {
    id: "partnerships",
    kicker: "Strategic Alliances",
    headline: "A Partnership Flywheel that Multiplies Impact",
    description: "Blend public-private collaborations to accelerate infrastructure, product, and market access.",
    points: [
      "Co-create climate-positive destinations with hospitality groups and regenerative developers.",
      "Joint marketing with airlines, cruise liners, and fintech apps for seamless loyalty integration.",
      "Empower SMEs and local communities through digital marketplaces and micro-financing."
    ],
    metricCards: [
      {
        label: "Investment Pipeline",
        value: "$22B",
        detail: "Tourism infra & experience innovation projects"
      },
      {
        label: "Community Impact",
        value: "1.5M",
        detail: "Direct beneficiaries through upskilling and micro grants"
      }
    ],
    footerNote: "Shared-value partnerships de-risk capital deployment while boosting regional equity."
  },
  {
    id: "financials",
    kicker: "Business Model",
    headline: "5-Year Financial Trajectory & Revenue Mix",
    description:
      "Diversified revenue anchored in destination management, digital monetization, and premium experiences.",
    points: [
      "Platform Fees: 3-5% take rate on bookings with tiered value-added services.",
      "Experiential Assets: Flagship routes, festivals, and wellness sanctuaries delivering 40% gross margin.",
      "Data & Media: Insight subscriptions, licensing, and co-branded campaigns."
    ],
    metricCards: [
      {
        label: "FY2025 Revenue",
        value: "$1.3B",
        detail: "Driven by domestic premium itineraries"
      },
      {
        label: "FY2030 EBITDA",
        value: "28%",
        detail: "Scaled through platform automation and asset-light operations"
      }
    ],
    footerNote: "Balanced revenue stack reduces cyclicality and sustains reinvestment capacity."
  },
  {
    id: "roadmap",
    kicker: "Rollout Roadmap",
    headline: "Guided Phases to Unlock Scale",
    description: "A pragmatic roadmap connects pilots to nationwide adoption over 36 months.",
    points: [
      "Phase 1 (0-12m): Launch India Tourism OS v1, pilot 6 hero circuits, onboard 40 anchor partners.",
      "Phase 2 (12-24m): Expand to 50 smart visitor hubs, activate premium loyalty coalition, deploy green transit.",
      "Phase 3 (24-36m): Scale immersive content studio, open 8 mega events, drive global co-investments."
    ],
    metricCards: [
      {
        label: "KPIs",
        value: "NPS>70",
        detail: "Target satisfaction by Year 3"
      },
      {
        label: "Repeat Rate",
        value: "38%",
        detail: "Boosted by personalized re-engagement"
      }
    ],
    footerNote: "Milestones align with G20 tourism roadmap and state-level policy reforms."
  },
  {
    id: "impact",
    kicker: "Sustainability & Impact",
    headline: "Tourism that Gives Back More Than It Takes",
    description:
      "Sustainable practices safeguard biodiversity, empower communities, and align with ESG mandates.",
    points: [
      "Regenerative Tourism: Coral restoration, mangrove guardianship, highlands rewilding with visitor participation.",
      "Circular Operations: Zero-plastic pilgrim experiences, smart waste valorization, green certification ladder.",
      "Inclusive Growth: 50% supplier diversity mandate, women-led guides network, digital literacy accelerators."
    ],
    metricCards: [
      {
        label: "Carbon Intensity",
        value: "-32%",
        detail: "Reduction target per trip vs. 2022 baseline"
      },
      {
        label: "Impact Fund",
        value: "$500M",
        detail: "Blended finance to scale local conservation"
      }
    ],
    footerNote: "Tourism becomes a catalyst for climate resilience and equitable prosperity."
  },
  {
    id: "cta",
    kicker: "Call to Action",
    headline: "Invest, Partner, and Co-create Incredible Journeys",
    description:
      "We invite strategic partners, investors, and innovators to build the next chapter of India’s tourism renaissance.",
    points: [
      "Deploy capital into sustainable infrastructure, digital platforms, and experiential assets.",
      "Co-design signature experiences that champion India’s cultural wealth and natural diversity.",
      "Activate global marketing and loyalty ecosystems that convert inspiration into bookings."
    ],
    metricCards: [
      {
        label: "Capital Ask",
        value: "$3.2B",
        detail: "Mix of equity, debt, and blended finance across priority projects"
      },
      {
        label: "ROI Horizon",
        value: "4.6x",
        detail: "Projected investor multiple over 7 years"
      }
    ],
    footerNote: "Together we unlock India’s full tourism potential and deliver transformative impact."
  }
];

export default function Page() {
  return <SlideDeck slides={slides} autoAdvanceMs={18000} />;
}
