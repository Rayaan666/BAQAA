import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CTA from '../components/CTA';
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Mail,
  MapPin,
  Phone,
  Send
} from 'lucide-react';
import './Contact.css';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2a9.84 9.84 0 0 0-8.5 14.78L2 22l5.36-1.5A9.98 9.98 0 1 0 12.04 2Zm0 17.95a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.18.89.85-3.1-.2-.32a8.04 8.04 0 1 1 6.96 3.84Zm4.42-6.04c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.2 7.2 0 0 1-1.34-1.67c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
};

const formSteps = [
  {
    title: 'Personal Information',
    subtitle: 'Begin with the details that allow our team to understand who we are designing for.',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text' },
      { name: 'partnerName', label: 'Partner Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone', label: 'Phone', type: 'tel' },
      { name: 'whatsapp', label: 'WhatsApp', type: 'tel' },
      { name: 'preferredContactMethod', label: 'Preferred Contact Method', type: 'options', options: ['Email', 'Phone', 'WhatsApp'] },
      { name: 'countryOfResidence', label: 'Country of Residence', type: 'text' }
    ]
  },
  {
    title: 'Event Details',
    subtitle: 'Tell us the nature, rhythm, and scale of the celebration you are imagining.',
    fields: [
      { name: 'celebrationType', label: 'Event Type', type: 'options', options: ['Wedding', 'Engagement', 'Anniversary', 'Corporate Event', 'Private Celebration', 'Other'] },
      { name: 'eventDate', label: 'Event Date', type: 'date' },
      { name: 'alternativeDate', label: 'Alternative Date', type: 'date' },
      { name: 'guestCount', label: 'Guest Count', type: 'number' },
      { name: 'eventStartTime', label: 'Event Start Time', type: 'time' },
      { name: 'eventEndTime', label: 'Event End Time', type: 'time' }
    ]
  },
  {
    title: 'Destination & Venue',
    subtitle: 'Share the places already chosen, or the destinations still living beautifully in your imagination.',
    fields: [
      { name: 'preferredDestination', label: 'Preferred Destination', type: 'text' },
      { name: 'venueBooked', label: 'Venue Booked?', type: 'options', options: ['Yes', 'No', 'In Progress'] },
      { name: 'venueAssistanceRequired', label: 'Venue Assistance Required?', type: 'options', options: ['Yes', 'No', 'Maybe'] }
    ]
  },
  {
    title: 'Design Vision',
    subtitle: 'This is where atmosphere, tradition, color, florals, and emotion begin to take shape.',
    fields: [
      { name: 'weddingTheme', label: 'Wedding Theme', type: 'text' },
      { name: 'colorPalette', label: 'Color Palette', type: 'text' },
      { name: 'moodBoardLink', label: 'Pinterest / Mood Board Link', type: 'url' },
      { name: 'culturalTraditions', label: 'Special Cultural/Religious Traditions', type: 'textarea' },
      { name: 'dreamCelebration', label: 'Describe Your Dream Celebration', type: 'textarea' }
    ]
  },
  {
    title: 'Budget & Financials',
    subtitle: 'Share your overall event budget, approximate allocations, and preferred payment structure.',
    fields: [
      { name: 'overallEventBudget', label: 'Overall Budget for the Event ($)', type: 'number' },
      { name: 'venueBudgetPercentage', label: 'Venue Budget (%)', type: 'number' },
      { name: 'cateringBudgetPercentage', label: 'Catering Budget (%)', type: 'number' },
      { name: 'decorBudgetPercentage', label: 'Decor Budget (%)', type: 'number' },
      { name: 'photoVideoBudgetPercentage', label: 'Photography/Videography Budget (%)', type: 'number' },
      { name: 'entertainmentBudgetPercentage', label: 'Entertainment Budget (%)', type: 'number' },
      { name: 'miscellaneousBudgetPercentage', label: 'Miscellaneous Budget (%)', type: 'number' },
      { name: 'paymentPreferences', label: 'Payment Preferences (Deposit Structure, Financing Options, etc.)', type: 'textarea' }
    ]
  },
  {
    title: 'Services Required',
    subtitle: 'Check all that apply and provide details as needed.',
    fields: [
      {
        name: 'planningRequirements',
        label: 'Services Required',
        type: 'checkboxGrid',
        options: [
          'Full-Service Wedding/Event Planning',
          'Partial Planning / Day-of Coordination',
          'Venue Sourcing & Management',
          'Catering Coordination',
          'Decor & Floral Design',
          'Photography & Videography',
          'Entertainment & Music',
          'Transportation',
          'Other'
        ]
      }
    ]
  },
  {
    title: 'Vendor Preferences',
    subtitle: 'Tell us about any pre-selected vendors and whether you are open to BAQAA recommendations.',
    fields: [
      { name: 'hasPreselectedVendors', label: 'Do You Have Any Pre-Selected Vendors?', type: 'options', options: ['Yes (Please List Below)', 'No'] },
      { name: 'vendorOne', label: 'Vendor 1 Name & Service', type: 'text' },
      { name: 'vendorTwo', label: 'Vendor 2 Name & Service', type: 'text' },
      { name: 'vendorThree', label: 'Vendor 3 Name & Service', type: 'text' },
      { name: 'openToVendorRecommendations', label: 'Are You Open to Vendor Recommendations?', type: 'options', options: ['Yes', 'No'] }
    ]
  },
  {
    title: 'Timeline & Milestones',
    subtitle: 'Share your planning timeline and any important milestone dates already established.',
    fields: [
      { name: 'hasPlanningTimeline', label: 'Have You Established a Planning Timeline?', type: 'options', options: ['Yes (Please Attach or Outline Key Dates)', 'No'] },
      { name: 'engagementMilestone', label: 'Engagement Date', type: 'date' },
      { name: 'venueBookingDeadline', label: 'Venue Booking Deadline', type: 'date' },
      { name: 'finalGuestCountDeadline', label: 'Final Guest Count Deadline', type: 'date' },
      { name: 'otherMilestone', label: 'Other Milestone', type: 'text' }
    ]
  },
  {
    title: 'Next Steps',
    subtitle: 'Tell us how you found BAQAA and your preferred time for an initial consultation.',
    fields: [
      { name: 'referralSource', label: 'How Did You Hear About Us?', type: 'options', options: ['Website', 'Social Media', 'Referral', 'Event/Expo', 'Other'] },
      { name: 'otherReferralSource', label: 'Other Referral Source', type: 'text' },
      { name: 'initialConsultationDate', label: 'Preferred Initial Consultation Date', type: 'date' },
      { name: 'initialConsultationTime', label: 'Preferred Initial Consultation Time', type: 'time' },
      { name: 'clientSignature', label: 'Client Signature', type: 'text' },
      { name: 'clientSignatureDate', label: 'Signature Date', type: 'date' }
    ]
  },
  {
    title: 'Global Destination or UAE Wedding Projects',
    subtitle: 'Complete the project details that apply to your destination or UAE-based wedding.',
    fields: [
      { name: 'weddingNumberOfDays', label: 'Number of Days', type: 'number' },
      { name: 'weddingDates', label: 'Dates of the Wedding', type: 'text' },
      { name: 'weddingNumberOfEvents', label: 'Number of Events', type: 'number' },
      { name: 'guestsPerEvent', label: 'Number of Guests per Event', type: 'textarea' },
      { name: 'roomsRequired', label: 'Number of Rooms, if Required', type: 'number' },
      { name: 'decorFloralVisionPerEvent', label: 'Decor and Floral Vision per Event', type: 'textarea' },
      { name: 'entertainmentPreferences', label: 'Entertainment Preferences and Events', type: 'textarea' },
      { name: 'flowerPreferences', label: 'Flower Preference', type: 'options', options: ['Silk Flowers', 'Real Flowers', 'Smart Mix to Control Costs'] },
      { name: 'afterParties', label: 'After Parties', type: 'textarea' },
      { name: 'preWeddingEvents', label: 'Pre-Wedding Events', type: 'textarea' },
      { name: 'traditionalCustomsSpaces', label: 'Traditional Customs or Wedding Spaces to Be Arranged', type: 'textarea' },
      { name: 'guestTransfers', label: 'Guest Transfers', type: 'textarea' },
      { name: 'makeupArtists', label: 'Makeup Artists', type: 'textarea' },
      { name: 'guestSalon', label: 'Salon for Guests', type: 'textarea' },
      { name: 'photographyWeddingFilm', label: 'Photography and Wedding Film', type: 'textarea' },
      { name: 'destinationSpecialRequests', label: 'Special Requests', type: 'textarea' },
      { name: 'limousinesVintageCars', label: 'Limousines or Vintage Cars', type: 'textarea' },
      { name: 'welcomeHampers', label: 'Welcome Hampers', type: 'textarea' },
      { name: 'thankYouGifts', label: 'Thank You Gifts', type: 'textarea' },
      { name: 'cateringRequirements', label: 'Particular Catering Requirements', type: 'textarea' },
      { name: 'alcoholRequirements', label: 'Alcohol Requirements, Events, Selection, and Quantity', type: 'textarea' },
      { name: 'dietaryBreakdownPerEvent', label: 'Vegetarian and Non-Vegetarian Breakdown per Event', type: 'textarea' }
    ]
  },
  {
    title: 'Additional Details',
    subtitle: 'Share your vision, must-haves, concerns, and any questions for the BAQAA planning team.',
    fields: [
      { name: 'detailedVision', label: 'Describe Your Vision in Detail (Include Any Ideas, Must-Haves, and Overall Expectations)', type: 'textarea' },
      { name: 'specialRequestsOrConcerns', label: 'Special Requests or Concerns', type: 'textarea' },
      { name: 'plannerQuestions', label: 'Additional Information/Questions for the Planner', type: 'textarea' }
    ]
  }
];

const pageUrl = 'https://www.baqaawdc.com/contact';
const pageTitle = 'Contact BAQAA | Luxury Destination Wedding Planners & Event Designers Dubai';
const pageDescription = "Connect with BAQAA to begin planning your luxury destination wedding, bespoke celebration, or corporate event. Schedule a private consultation with Dubai's trusted wedding and event specialists.";
const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=BAQAA%20Glamour%20Weddings%20%26%20Events%2C%20Al%20manana%20warehouse%2C%20Street%20%236A%2C%20Warehouse%205%2C%20Al%20Quoz%2C%20Dubai%2C%20United%20Arab%20Emirates';

const Contact = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (selector, attributes) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        document.head.appendChild(meta);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
    };

    setMeta('meta[name="description"]', { name: 'description', content: pageDescription });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: pageUrl });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'BAQAA' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'index, follow');

    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === 'checkbox') {
      setFormData((current) => {
        const values = current[name] || [];
        return {
          ...current,
          [name]: checked ? [...values, value] : values.filter((item) => item !== value)
        };
      });
      return;
    }

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 950);
  };

  const goNext = () => setActiveStep((step) => Math.min(step + 1, formSteps.length - 1));
  const goBack = () => setActiveStep((step) => Math.max(step - 1, 0));

  const currentStep = formSteps[activeStep];
  const progress = ((activeStep + 1) / formSteps.length) * 100;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${pageUrl}#contactpage`,
        url: pageUrl,
        name: pageTitle,
        headline: 'Contact BAQAA Luxury Wedding Planners in Dubai',
        description: pageDescription,
        inLanguage: 'en',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.baqaawdc.com/#website',
          name: 'BAQAA',
          url: 'https://www.baqaawdc.com/'
        },
        mainEntity: {
          '@id': 'https://www.baqaawdc.com/#localbusiness'
        },
        potentialAction: {
          '@type': 'ContactAction',
          name: 'Send a luxury wedding planning inquiry to BAQAA',
          target: `${pageUrl}#client-inquiry`
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.baqaawdc.com/#localbusiness',
        name: 'BAQAA',
        url: 'https://www.baqaawdc.com/',
        image: 'https://www.baqaawdc.com/CTA/CTA2.png',
        description: 'BAQAA is a Dubai luxury wedding and event planning company specializing in destination weddings, bespoke celebrations, floral design, decor, hospitality, and turnkey event execution.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '30, 6A Street, Warehouse 5, Al Quoz',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 25.1326271,
          longitude: 55.2174138
        },
        areaServed: [
          'Dubai',
          'United Arab Emirates',
          'Middle East',
          'Europe',
          'India',
          'Thailand',
          'Bali',
          'Maldives'
        ],
        email: ['info@baqaawdc.com', 'rachna@baqaawdc.com'],
        telephone: '+971554968810',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+971554968810',
          email: ['info@baqaawdc.com', 'rachna@baqaawdc.com'],
          contactType: 'customer service',
          areaServed: 'AE',
          availableLanguage: ['English']
        },
        potentialAction: {
          '@type': 'ReserveAction',
          name: 'Request a BAQAA luxury wedding planning consultation',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${pageUrl}#client-inquiry`,
            actionPlatform: [
              'https://schema.org/DesktopWebPlatform',
              'https://schema.org/MobileWebPlatform'
            ]
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.baqaawdc.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact',
            item: pageUrl
          }
        ]
      }
    ]
  };

  return (
    <main className="contact-page">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <section className="contact-lux-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero-bg" style={{ backgroundImage: "url('/contact/3.jpg')" }}>
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="contact-hero-content">
          <motion.div
            className="contact-hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 id="contact-hero-title">Contact BAQAA | Luxury Destination Wedding Planners & Event Designers Dubai</h1>
            <p>
              Connect with BAQAA to begin planning your luxury destination wedding, bespoke celebration, or corporate event. Schedule a private consultation with Dubai's trusted wedding and event specialists.
            </p>
            <div className="contact-hero-buttons">
              <a href="#client-inquiry">Send Your Inquiry</a>
              <a href="https://wa.me/971554968810" target="_blank" rel="noopener noreferrer">Speak With BAQAA</a>
            </div>
          </motion.div>
        </div>

        <div className="contact-hero-particles" aria-hidden="true">
          {[...Array(20)].map((_, index) => (
            <span key={index} className={`contact-particle contact-particle-${index}`}></span>
          ))}
        </div>

      </section>

      <section className="client-form-section section" id="client-inquiry" aria-labelledby="client-form-heading">
        <motion.div className="form-heading-panel" {...fadeUp}>
          <div className="contact-form-divider" aria-hidden="true"></div>
          <h2 id="client-form-heading">A Bespoke Client Inquiry</h2>
          <p>
            Move through each step at your own pace. Every detail helps BAQAA understand the celebration, destination, design direction, and guest experience you want to create.
          </p>
        </motion.div>

        <motion.form className="luxury-inquiry-shell" onSubmit={handleSubmit} {...fadeUp} transition={{ delay: 0.18, duration: 0.9 }}>
          <aside className="form-progress-panel" aria-label="Inquiry progress">
            <div className="form-progress-top">
              <span>Step {String(activeStep + 1).padStart(2, '0')}</span>
              <strong>{currentStep.title}</strong>
            </div>
            <div className="progress-track">
              <motion.div className="progress-fill" style={{ width: `${progress}%` }}></motion.div>
            </div>
            <div className="form-step-nav">
              {formSteps.map((step, index) => (
                <button
                  type="button"
                  key={step.title}
                  className={`step-nav-button ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {step.title}
                </button>
              ))}
            </div>
          </aside>

          <div className="form-step-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="form-step-content"
              >
                <div className="form-step-heading">
                  <span>Step {String(activeStep + 1).padStart(2, '0')}</span>
                  <h3>{currentStep.title}</h3>
                  <p>{currentStep.subtitle}</p>
                </div>

                <div className="premium-field-grid">
                  {currentStep.fields.map((field) => {
                    if (field.type === 'textarea') {
                      return (
                        <label className="premium-field field-wide" key={field.name}>
                          <span>{field.label}</span>
                          <textarea name={field.name} value={formData[field.name] || ''} onChange={handleChange} rows="5"></textarea>
                        </label>
                      );
                    }

                    if (field.type === 'options') {
                      return (
                        <div className="premium-field field-wide" key={field.name}>
                          <span>{field.label}</span>
                          <div className="option-card-grid">
                            {field.options.map((option) => (
                              <label className="option-card" key={option}>
                                <input
                                  type="radio"
                                  name={field.name}
                                  value={option}
                                  checked={formData[field.name] === option}
                                  onChange={handleChange}
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    if (field.type === 'checkboxGrid') {
                      return (
                        <div className="premium-field field-wide" key={field.name}>
                          <span>{field.label}</span>
                          <div className="requirement-grid">
                            {field.options.map((option) => (
                              <label className="requirement-card" key={option}>
                                <input
                                  type="checkbox"
                                  name={field.name}
                                  value={option}
                                  checked={(formData[field.name] || []).includes(option)}
                                  onChange={handleChange}
                                />
                                <Check size={14} strokeWidth={1.5} aria-hidden="true" />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <label className="premium-field" key={field.name}>
                        <span>{field.label}</span>
                        <input type={field.type} name={field.name} value={formData[field.name] || ''} onChange={handleChange} />
                      </label>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {submitted && (
              <motion.div className="form-success-note" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                Your consultation details have been prepared. Please connect directly with BAQAA to complete the submission.
              </motion.div>
            )}

            <div className="form-actions">
              <button type="button" className="form-nav-btn ghost" onClick={goBack} disabled={activeStep === 0}>
                <ChevronLeft size={16} strokeWidth={1.4} aria-hidden="true" />
                Back
              </button>

              {activeStep < formSteps.length - 1 ? (
                <button type="button" className="form-nav-btn" onClick={goNext}>
                  Continue
                  <ChevronRight size={16} strokeWidth={1.4} aria-hidden="true" />
                </button>
              ) : (
                <button type="submit" className="form-nav-btn submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Preparing Consultation...' : 'Submit Inquiry'}
                  <Send size={16} strokeWidth={1.4} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </motion.form>

        <motion.aside className="inquiry-closing-note" aria-labelledby="inquiry-closing-heading" {...fadeUp}>
          <h3 id="inquiry-closing-heading">Thank You for Taking the Time to Share All the Information</h3>
          <strong>Please Note</strong>
          <ol>
            <li>
              This form is designed to collect comprehensive information that will help tailor our design, services, and deliverables to your specific event needs. Once completed, please return it via email.
            </li>
            <li>
              We will guide you step by step through the planning and creative process. All deliverables will be discussed once a signed contract and deposit payment, as mutually agreed between BAQAA and the client, are aligned.
            </li>
            <li>
              We take pride in the fact that each project is personally curated by our founder, turnkey designer, and planner, Rachna Chadha, who has earned globally recognised status with over 38 years of experience and industry knowledge as a pioneer of both industries in the region.
            </li>
          </ol>
        </motion.aside>
      </section>

      <section className="direct-contact section" aria-labelledby="direct-contact-heading">
        <motion.div className="direct-contact-card" {...fadeUp}>
          <span className="contact-section-label">Direct Contact</span>
          <h2 id="direct-contact-heading">Speak With BAQAA</h2>

          <div className="contact-detail-list">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <MapPin size={18} strokeWidth={1.4} aria-hidden="true" />
              <span>30, 6A Street, Warehouse 5, Al Quoz, Dubai</span>
            </a>
            <a href="mailto:info@baqaawdc.com" className="contact-detail-item">
              <Mail size={18} strokeWidth={1.4} aria-hidden="true" />
              <span>info@baqaawdc.com</span>
            </a>
            <a href="mailto:rachna@baqaawdc.com" className="contact-detail-item">
              <Mail size={18} strokeWidth={1.4} aria-hidden="true" />
              <span>rachna@baqaawdc.com</span>
            </a>
            <a href="tel:+971554968810" className="contact-detail-item">
              <Phone size={18} strokeWidth={1.4} aria-hidden="true" />
              <span>+971 55 496 8810</span>
            </a>
          </div>

          <div className="direct-cta-grid">
            <a href="https://wa.me/971554968810" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={17} />
              WhatsApp CTA
            </a>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={16} strokeWidth={1.4} aria-hidden="true" />
              Google Maps CTA
            </a>
            <a href="#client-inquiry">
              <CalendarDays size={16} strokeWidth={1.4} aria-hidden="true" />
              Luxury Consultation CTA
            </a>
          </div>
        </motion.div>

        <motion.div className="direct-contact-image" {...fadeUp} transition={{ delay: 0.15, duration: 0.9 }}>
          <img src="/contact/1.jpg" alt="BAQAA luxury wedding and event design" />
          <div className="image-caption-lux">
            <Compass size={16} strokeWidth={1.4} aria-hidden="true" />
            Bespoke destination guidance from first call to final celebration.
          </div>
        </motion.div>
      </section>

      <CTA
        bgImage="/contact/2.jpg"
        title="Plan Your Luxury Destination Wedding or Event With BAQAA"
        description="Partner with BAQAA's expert wedding planners and event designers to create bespoke destination weddings, luxury celebrations, and immersive event experiences across Dubai and worldwide."
        buttonText="Send Your Inquiry"
        buttonHref="#client-inquiry"
      />

      <a
        href="https://wa.me/971554968810"
        className="contact-whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BAQAA on WhatsApp"
        title="Chat with BAQAA on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </main>
  );
};

export default Contact;
