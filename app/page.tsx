"use client";

import { useState } from 'react';
import { FaBitcoin, FaEthereum, FaUsers, FaMapMarkerAlt, FaLightbulb, FaRobot, FaHandshake } from 'react-icons/fa';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Call our API route to connect to Supabase
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSuccessMessage(data.message || 'You have been added to the waitlist!');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(39, 39, 42, 0.5)'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              AfriCrypt.space
            </span>
          </div>
          <nav>
            <ul style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <li><a href="#about" style={{ color: '#d4d4d8', transition: '0.2s' }}>About</a></li>
              <li><a href="#vision" style={{ color: '#d4d4d8', transition: '0.2s' }}>Vision</a></li>
              <li><a href="#features" style={{ color: '#d4d4d8', transition: '0.2s' }}>Features</a></li>
              <li>
                <a href="#join" className="btn" style={{ padding: '0.5rem 1rem' }}>
                  Join Waitlist
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section">
          <div className="africa-map"></div>

          <div className="blur-purple" style={{ top: '20%', right: '10%' }}></div>
          <div className="blur-cyan" style={{ bottom: '10%', left: '5%' }}></div>

          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
              <h1 className="gradient-text animate-float" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Africa&apos;s Premier Crypto Community
              </h1>
              <p style={{ fontSize: '1.5rem', color: '#d1d5db', marginBottom: '2rem' }}>
                Connect, learn, and build the future of finance and AI across the continent
              </p>
              <a href="#join" className="btn">
                Join the Waitlist
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <div className="blur-purple" style={{ top: '-100px', right: '-100px' }}></div>
          <div className="blur-cyan" style={{ bottom: '-100px', left: '-100px' }}></div>

          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
                Building Africa&apos;s Crypto Future
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="card" style={{ borderRadius: '1rem' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <FaUsers style={{ color: '#a78bfa', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Inclusive Community</h3>
                  <p style={{ color: '#d1d5db' }}>From crypto skeptics to experienced enthusiasts, AfriCrypt.space welcomes everyone on their journey to understanding and utilizing digital assets.</p>
                </div>

                <div className="card" style={{ borderRadius: '1rem' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <FaMapMarkerAlt style={{ color: '#22d3ee', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Pan-African Focus</h3>
                  <p style={{ color: '#d1d5db' }}>Connect with like-minded individuals across the continent, building both digital and physical communities to strengthen Africa&apos;s presence in the global crypto space.</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div className="card" style={{ borderRadius: '1rem' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <FaLightbulb style={{ color: '#a78bfa', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Knowledge Exchange</h3>
                  <p style={{ color: '#d1d5db' }}>Access educational resources, engage in forums, and share strategies to navigate the evolving cryptocurrency landscape.</p>
                </div>

                <div className="card" style={{ borderRadius: '1rem' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <FaRobot style={{ color: '#22d3ee', fontSize: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>AI & Crypto Nexus</h3>
                  <p style={{ color: '#d1d5db' }}>Explore the powerful intersection of artificial intelligence and blockchain technology, unlocking new opportunities for innovation across Africa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section with image */}
        <section id="vision" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <div className="blur-purple" style={{ top: '10%', left: '10%' }}></div>
          <div className="blur-cyan" style={{ bottom: '10%', right: '10%' }}></div>

          <div className="container">
            <div style={{
              maxWidth: '1000px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div>
                <h2 className="gradient-text" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Our Vision for The Crypt
                </h2>

                <p style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem', textAlign: 'center' }}>
                  AfriCrypt.space is more than just an online community. We&apos;re building a movement to empower Africans through cryptocurrency and blockchain technology.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ marginTop: '0.25rem', color: '#a78bfa', minWidth: '20px' }}><FaBitcoin size={18} /></div>
                    <p style={{ color: '#d1d5db', margin: 0 }}>From online discussions to physical meetups across major African cities</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ marginTop: '0.25rem', color: '#a78bfa', minWidth: '20px' }}><FaEthereum size={18} /></div>
                    <p style={{ color: '#d1d5db', margin: 0 }}>Creating co-working spaces with high-speed internet and AI resources</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ marginTop: '0.25rem', color: '#a78bfa', minWidth: '20px' }}><FaHandshake size={18} /></div>
                    <p style={{ color: '#d1d5db', margin: 0 }}>Building a network of crypto-enthusiasts and professionals across the continent</p>
                  </div>
                </div>

                <p style={{ fontSize: '1.125rem', color: '#d1d5db', textAlign: 'center' }}>
                  Our ultimate goal: establishing &quot;The Crypt&quot; - physical hubs in key African cities with access to next-generation computing resources.
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                  {/* Image placeholder with fixed dimensions */}
                  <div style={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, #4c1d95, #164e63)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    padding: '1rem',
                    textAlign: 'center'
                  }}>
                    The Crypt - Future Physical Space
                  </div>

                  {/* Glass effect decorative elements */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(139, 92, 246, 0.2)',
                    borderRadius: '9999px',
                    filter: 'blur(20px)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(6, 182, 212, 0.2)',
                    borderRadius: '9999px',
                    filter: 'blur(20px)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section">
          <div className="blur-purple" style={{ top: '30%', left: '5%' }}></div>
          <div className="blur-cyan" style={{ bottom: '20%', right: '5%' }}></div>

          <div className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
              Platform Features
            </h2>

            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {/* Feature 1 */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(76, 29, 149, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg style={{ width: '1.75rem', height: '1.75rem', color: '#a78bfa' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Discussion Forums</h3>
                <p style={{ color: '#d1d5db' }}>Engage in thoughtful discussions with crypto enthusiasts across Africa, from beginner questions to advanced trading strategies and regional topics.</p>
              </div>

              {/* Feature 2 */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(22, 78, 99, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg style={{ width: '1.75rem', height: '1.75rem', color: '#22d3ee' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Resource Library</h3>
                <p style={{ color: '#d1d5db' }}>Access curated educational content, guides, and links to trusted exchanges, Web3 platforms, and DeFi services tailored for African users.</p>
              </div>

              {/* Feature 3 */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(76, 29, 149, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg style={{ width: '1.75rem', height: '1.75rem', color: '#a78bfa' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Market Data</h3>
                <p style={{ color: '#d1d5db' }}>Stay updated with real-time cryptocurrency prices, market trends, and sentiment analysis through integrated API feeds.</p>
              </div>

              {/* Feature 4 */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(22, 78, 99, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg style={{ width: '1.75rem', height: '1.75rem', color: '#22d3ee' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Meetup Organization</h3>
                <p style={{ color: '#d1d5db' }}>Find and organize crypto meetups in your city, connecting online discussions with real-world community building across Africa.</p>
              </div>

              {/* Feature 5 */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(76, 29, 149, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg style={{ width: '1.75rem', height: '1.75rem', color: '#a78bfa' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Web3 Authentication</h3>
                <p style={{ color: '#d1d5db' }}>Connect with traditional login methods or Web3 wallets, embracing both accessibility and cutting-edge blockchain identity solutions.</p>
              </div>

              {/* Feature 6 */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: 'rgba(22, 78, 99, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg style={{ width: '1.75rem', height: '1.75rem', color: '#22d3ee' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>AI Integration</h3>
                <p style={{ color: '#d1d5db' }}>Explore the frontier where cryptocurrency meets artificial intelligence, with resources and discussions on this transformative technological combination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="join" className="section">
          <div className="blur-purple" style={{ top: '20%', right: '10%' }}></div>
          <div className="blur-cyan" style={{ bottom: '10%', left: '10%' }}></div>

          <div className="container">
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                  Join the Waitlist
                </h2>
                <p style={{ color: '#d1d5db', textAlign: 'center', marginBottom: '2rem' }}>
                  Be among the first to experience AfriCrypt.space when we launch. Sign up now to receive updates and early access.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', marginBottom: '0.5rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        placeholder="your@email.com"
                        required
                        style={{ padding: '0.75rem 1rem' }}
                      />
                    </div>

                    {error && <p style={{ color: '#f87171', fontSize: '0.875rem' }}>{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn"
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {loading ? 'Please wait...' : 'Join Waitlist'}
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{
                      width: '5rem',
                      height: '5rem',
                      borderRadius: '9999px',
                      background: 'linear-gradient(to right, #8b5cf6, #06b6d4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto'
                    }}>
                      <svg style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Thank You!</h3>
                    <p style={{ color: '#d1d5db' }}>{successMessage || "You've been added to our waitlist. We'll notify you when AfriCrypt.space is ready to launch."}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <div className="blur-purple" style={{ top: '30%', left: '10%' }}></div>
          <div className="blur-cyan" style={{ bottom: '20%', right: '10%' }}></div>

          <div className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card" style={{ borderRadius: '0.75rem', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', textAlign: 'center' }}>When will AfriCrypt.space launch?</h3>
                <p style={{ color: '#d1d5db', textAlign: 'center' }}>We&apos;re currently in the development phase and aiming for a beta launch in the coming months. Join our waitlist to be the first to know!</p>
              </div>

              <div className="card" style={{ borderRadius: '0.75rem', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', textAlign: 'center' }}>Is AfriCrypt.space only for experienced crypto users?</h3>
                <p style={{ color: '#d1d5db', textAlign: 'center' }}>Not at all! We welcome everyone from skeptics to experts. Our platform will have resources for beginners and advanced users alike, creating an inclusive space for all levels of crypto experience.</p>
              </div>

              <div className="card" style={{ borderRadius: '0.75rem', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', textAlign: 'center' }}>How will physical meetups work?</h3>
                <p style={{ color: '#d1d5db', textAlign: 'center' }}>Our platform will facilitate connections between members in the same geographical areas, making it easy to organize and discover local crypto events. In the future, we plan to establish permanent physical spaces called &quot;The Crypt&quot; in key African cities.</p>
              </div>

              <div className="card" style={{ borderRadius: '0.75rem', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', textAlign: 'center' }}>What&apos;s the connection between crypto and AI?</h3>
                <p style={{ color: '#d1d5db', textAlign: 'center' }}>Both technologies represent frontier innovations that are reshaping our digital future. AfriCrypt.space explores this powerful intersection, with future plans to provide access to advanced computing resources for AI development alongside crypto education.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderTop: '1px solid rgba(63, 63, 70, 0.5)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                AfriCrypt.space
              </span>
              <p style={{ color: '#a1a1aa', fontSize: '1rem' }}>Africa&apos;s Premier Crypto Community</p>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: '#a1a1aa', transition: '0.2s' }}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Twitter</span>
                <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>

              <a href="#" style={{ color: '#a1a1aa', transition: '0.2s' }}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>GitHub</span>
                <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>

              <a href="#" style={{ color: '#a1a1aa', transition: '0.2s' }}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Discord</span>
                <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8837-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.955-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.955-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                </svg>
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem', color: '#71717a', fontSize: '0.875rem' }}>
              © 2025 AfriCrypt.space. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}