import "./home-pricing.css"
function Homepricing(){
      const pricingPlans = [
    {
      title: 'Starter',
      subtitle: 'Perfect for small businesses getting started',
      price: '$1,500',
      period: '/month',
      features: [
        'SEO Optimization',
        'Google Ads Management',
        'Social Media Setup',
        'Monthly Reporting',
        'Email Support',
      ],
      button: 'Get Started',
    },
    {
      title: 'Growth',
      subtitle: 'Ideal for growing businesses',
      price: '$3,500',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Everything in Starter',
        'Social Media Management',
        'Content Marketing',
        'Email Marketing',
        'Conversion Optimization',
        'Dedicated Account Manager',
      ],
      button: 'Get Started',
    },
    {
      title: 'Enterprise',
      subtitle: 'For established businesses seeking maximum growth',
      price: '$7,500',
      period: '/month',
      features: [
        'Everything in Growth',
        'Advanced Analytics',
        'Custom Integrations',
        'Priority Support',
        'Quarterly Strategy Reviews',
      ],
      button: 'Contact Sales',
    },
  ];

    return(
       <section style={{ backgroundColor: '#ffffff', padding: '4rem 1rem' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Simple, Transparent Pricing
                </h2>
                <p
                  style={{
                    fontSize: '1.1rem',
                    color: '#555',
                    marginBottom: '3rem',
                    padding: '0 1rem',
                    maxWidth: '700px',
                    marginInline: 'auto',
                  }}
                >
                  Choose the plan that fits your business needs. No hidden fees, no long-term contracts, just results-driven marketing solutions.
                </p>
 
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr', 
                    gap: '2rem',
                    textAlign: 'left',
                  }}
                >
                  {/* Responsive override for larger screens */}
                  <style>
                    {`
                      @media (min-width: 640px) {
                        div[data-grid="pricing"] {
                          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        }
                      }
                    `}
                  </style>
 
                  <div data-grid="pricing" style={{ display: 'grid', gap: '2rem' }}>
                    {pricingPlans.map((plan, index) => (
                      <div
                        key={index}
                        style={{
                          border: plan.badge ? '2px solid #2563eb' : '1px solid #e5e7eb',
                          borderRadius: '16px',
                          padding: '2.5rem 2rem 2rem',
                          boxShadow: plan.badge
                            ? '0 6px 16px rgba(37, 99, 235, 0.15)'
                            : '0 4px 12px rgba(0, 0, 0, 0.04)',
                          backgroundColor: '#fff',
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transform: plan.badge ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.3s ease',
                          minWidth: 0,
                        }}
                        onMouseOver={(e) => {
                          const card = e.currentTarget;
                          card.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.25)';
                          card.style.borderColor = '#2563eb';
                        }}
                        onMouseOut={(e) => {
                          const card = e.currentTarget;
                          card.style.boxShadow = plan.badge
                            ? '0 6px 16px rgba(37, 99, 235, 0.15)'
                            : '0 4px 12px rgba(0, 0, 0, 0.04)';
                          card.style.borderColor = plan.badge ? '#2563eb' : '#e5e7eb';
                        }}
                      >
                        {plan.badge && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '-12px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              backgroundColor: '#2563eb',
                              color: '#fff',
                              fontSize: '0.75rem',
                              padding: '0.35rem 1rem',
                              borderRadius: '999px',
                              fontWeight: 600,
                              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            }}
                          >
                            {plan.badge}
                          </div>
                        )}
 
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: 'normal',
                            marginBottom: '0rem',
                            textAlign: 'center',
                          }}
                        >
                          {plan.title}
                        </h3>
                        <p style={{ color: '#666', marginBottom: '0.75rem', textAlign: 'center' }}>
                          {plan.subtitle}
                        </p>
 
                        <div
                          style={{
                            fontSize: '2rem',
                            fontWeight: '600',
                            marginBottom: '0.25rem',
                            textAlign: 'center',
                          }}
                        >
                          {plan.price}
                          <span style={{ fontSize: '1rem', fontWeight: '500', color: '#777' }}>
                            {' '}
                            {plan.period}
                          </span>
                        </div>
 
                        <ul
                          style={{
                            paddingLeft: '0.75rem',
                            marginBottom: '1rem',
                            textAlign: 'left',
                            color: '#333',
                          }}
                        >
                          {plan.features.map((feature, i) => (
                            <li
                              key={i}
                              style={{
                                marginBottom: '0.8rem',
                                listStyle: 'none',
                                display: 'flex',
                                alignItems: 'left',
                                fontSize: '16px',
                              }}
                            >
                              <i
                                className="bi bi-check"
                                style={{
                                  color: '#5eff86ff',
                                  marginRight: '0.5rem',
                                  fontSize: '18px',
                                }}
                              ></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
 
                        <button
                          style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            border: '2px solid #2563eb',
                            backgroundColor: '#fff',
                            color: '#2563eb',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563eb';
                            e.currentTarget.style.color = '#fff';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            e.currentTarget.style.color = '#2563eb';
                          }}
                        >
                          {plan.button}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
 
                <div style={{ marginTop: '3rem', fontSize: '1rem', color: '#444' }}>
                  Need a custom solution?{' '}
                  <a
                    href="#contact"
                    style={{
                      color: '#2563eb',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      paddingLeft: '0.5rem',
                    }}
                  >
                    Contact us for custom pricing
                  </a>
                </div>
              </div>
            </section>
    )
}

export default Homepricing;