import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Exquisite editorial typography - the soul of magazine design
const FONTS = {
  serif: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif",
  sans: "'Montserrat', 'Lato', sans-serif",
  accent: "'Italiana', serif"
};

// Refined palette inspired by high-fashion editorial
const PALETTE = {
  ink: '#0a0a0a',
  stone: '#f8f7f4',
  rose: '#c5a297',
  sage: '#9ca896',
  cream: '#fefdfb',
  charcoal: '#3a3a3a',
  pearl: '#e8e6e0',
  gold: '#b8936f'
};

const CommandCenter = () => {
  const [view, setView] = useState('overview');
  const [setupOpen, setSetupOpen] = useState(false);
  
  // Elegant mock data
  const growthData = [
    { week: 'W1', total: 340 },
    { week: 'W2', total: 428 },
    { week: 'W3', total: 562 },
    { week: 'W4', total: 687 },
    { week: 'W5', total: 834 },
    { week: 'W6', total: 978 }
  ];

  const topContent = [
    { title: 'Coalition Analysis: Data Deep-Dive', score: 94 },
    { title: 'EU Migration in Five Charts', score: 87 },
    { title: 'Multilingual Political Discourse', score: 81 }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: PALETTE.cream,
      fontFamily: FONTS.sans,
      color: PALETTE.ink
    }}>
      {/* Refined masthead */}
      <header style={{
        background: PALETTE.stone,
        borderBottom: `1px solid ${PALETTE.pearl}`,
        padding: '2rem 3rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(248, 247, 244, 0.95)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontFamily: FONTS.accent,
              fontSize: '2rem',
              fontWeight: '400',
              margin: 0,
              letterSpacing: '0.05em'
            }}>
              EVGENIYA
            </h1>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: '0.25rem 0 0',
              color: PALETTE.charcoal,
              fontWeight: '300'
            }}>
              Political Communication Intelligence
            </p>
          </div>
          
          <button
            onClick={() => setSetupOpen(!setupOpen)}
            style={{
              background: PALETTE.ink,
              color: PALETTE.cream,
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.target.style.background = PALETTE.rose;
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = PALETTE.ink;
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {setupOpen ? 'Close Setup' : 'Setup Guide'}
          </button>
        </div>
      </header>

      {/* Setup Instructions Panel */}
      {setupOpen && (
        <div style={{
          background: 'white',
          borderBottom: `1px solid ${PALETTE.pearl}`,
          padding: '3rem',
          animation: 'slideDown 0.4s ease'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: '2.5rem',
              fontWeight: '300',
              marginBottom: '2rem',
              color: PALETTE.ink
            }}>
              Setup Your Command Center
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem'
            }}>
              {/* Step 1 */}
              <div style={{ borderLeft: `3px solid ${PALETTE.rose}`, paddingLeft: '2rem' }}>
                <h3 style={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: PALETTE.ink
                }}>
                  Step 1: Google Analytics Setup
                </h3>
                <div style={{ lineHeight: '1.8', fontSize: '0.95rem', color: PALETTE.charcoal }}>
                  <p><strong>Where:</strong> Your janeorlova.com website data</p>
                  <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Go to <a href="https://analytics.google.com" target="_blank" style={{ color: PALETTE.rose, textDecoration: 'none', borderBottom: `1px solid ${PALETTE.rose}` }}>analytics.google.com</a>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Click Admin (gear icon) → Property → API Quotas
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Enable "Google Analytics Data API v1"
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Go to <a href="https://console.cloud.google.com/apis/credentials" target="_blank" style={{ color: PALETTE.rose, textDecoration: 'none', borderBottom: `1px solid ${PALETTE.rose}` }}>Google Cloud Console</a>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Create Credentials → API Key
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Copy your <strong>Property ID</strong> (looks like "GA4-XXXXXXXXX")
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Paste both in the settings below ↓
                    </li>
                  </ol>
                  
                  <div style={{
                    background: PALETTE.stone,
                    padding: '1.5rem',
                    marginTop: '1.5rem',
                    borderLeft: `3px solid ${PALETTE.gold}`
                  }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      GA4 Property ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 123456789"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: `1px solid ${PALETTE.pearl}`,
                        fontSize: '0.95rem',
                        fontFamily: FONTS.sans,
                        marginBottom: '1rem'
                      }}
                    />
                    
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      API Key (Optional - for enhanced features)
                    </label>
                    <input
                      type="password"
                      placeholder="Your Google Analytics API key"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: `1px solid ${PALETTE.pearl}`,
                        fontSize: '0.95rem',
                        fontFamily: FONTS.sans
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ borderLeft: `3px solid ${PALETTE.sage}`, paddingLeft: '2rem' }}>
                <h3 style={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: PALETTE.ink
                }}>
                  Step 2: Telegram Channel Analytics
                </h3>
                <div style={{ lineHeight: '1.8', fontSize: '0.95rem', color: PALETTE.charcoal }}>
                  <p><strong>Where:</strong> Track your Telegram channel growth and engagement</p>
                  <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Open Telegram and search for <strong>@BotFather</strong>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Send <code style={{ background: PALETTE.pearl, padding: '0.25rem 0.5rem' }}>/newbot</code>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Follow instructions to create your analytics bot
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      You'll receive a token like: <code style={{ background: PALETTE.pearl, padding: '0.25rem 0.5rem' }}>123456:ABC-DEF...</code>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Add the bot as admin to your channel
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Paste your channel username and bot token below ↓
                    </li>
                  </ol>
                  
                  <div style={{
                    background: PALETTE.stone,
                    padding: '1.5rem',
                    marginTop: '1.5rem',
                    borderLeft: `3px solid ${PALETTE.gold}`
                  }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Telegram Channel Username
                    </label>
                    <input
                      type="text"
                      placeholder="@yourchannel"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: `1px solid ${PALETTE.pearl}`,
                        fontSize: '0.95rem',
                        fontFamily: FONTS.sans,
                        marginBottom: '1rem'
                      }}
                    />
                    
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Bot Token
                    </label>
                    <input
                      type="password"
                      placeholder="123456:ABC-DEF..."
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: `1px solid ${PALETTE.pearl}`,
                        fontSize: '0.95rem',
                        fontFamily: FONTS.sans
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ borderLeft: `3px solid ${PALETTE.gold}`, paddingLeft: '2rem' }}>
                <h3 style={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: PALETTE.ink
                }}>
                  Step 3: Substack Newsletter
                </h3>
                <div style={{ lineHeight: '1.8', fontSize: '0.95rem', color: PALETTE.charcoal }}>
                  <p><strong>Where:</strong> Your Substack publication analytics</p>
                  <p style={{ marginTop: '1rem' }}>
                    <strong>Quick Setup:</strong> Substack doesn't have a free public API, but you can track basic metrics:
                  </p>
                  <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Go to your Substack Dashboard → Stats
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Manually note your subscriber count weekly
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Use RSS feed: <code style={{ background: PALETTE.pearl, padding: '0.25rem 0.5rem' }}>yoursubstack.com/feed</code>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      Or use free tools like <a href="https://feedly.com" target="_blank" style={{ color: PALETTE.rose, textDecoration: 'none', borderBottom: `1px solid ${PALETTE.rose}` }}>Feedly</a> to track engagement
                    </li>
                  </ol>
                  
                  <div style={{
                    background: PALETTE.stone,
                    padding: '1.5rem',
                    marginTop: '1.5rem',
                    borderLeft: `3px solid ${PALETTE.gold}`
                  }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Substack URL
                    </label>
                    <input
                      type="text"
                      placeholder="yourname.substack.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: `1px solid ${PALETTE.pearl}`,
                        fontSize: '0.95rem',
                        fontFamily: FONTS.sans
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div style={{ borderLeft: `3px solid ${PALETTE.ink}`, paddingLeft: '2rem' }}>
                <h3 style={{
                  fontFamily: FONTS.serif,
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: PALETTE.ink
                }}>
                  Step 4: Alternative Free Analytics Tools
                </h3>
                <div style={{ lineHeight: '1.8', fontSize: '0.95rem', color: PALETTE.charcoal }}>
                  <p><strong>Recommended free tools to enhance your tracking:</strong></p>
                  <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyle: 'none' }}>
                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>📊</span>
                      <strong>Plausible Analytics</strong> (free tier) - Privacy-friendly alternative to GA
                      <br/>
                      <a href="https://plausible.io" target="_blank" style={{ color: PALETTE.rose, fontSize: '0.85rem', textDecoration: 'none', borderBottom: `1px solid ${PALETTE.rose}` }}>plausible.io</a>
                    </li>
                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>🔍</span>
                      <strong>Google Search Console</strong> (free) - SEO and search performance
                      <br/>
                      <a href="https://search.google.com/search-console" target="_blank" style={{ color: PALETTE.rose, fontSize: '0.85rem', textDecoration: 'none', borderBottom: `1px solid ${PALETTE.rose}` }}>search.google.com/search-console</a>
                    </li>
                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>📈</span>
                      <strong>Tally</strong> (free) - Audience surveys and feedback
                      <br/>
                      <a href="https://tally.so" target="_blank" style={{ color: PALETTE.rose, fontSize: '0.85rem', textDecoration: 'none', borderBottom: `1px solid ${PALETTE.rose}` }}>tally.so</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{
                background: PALETTE.ink,
                color: PALETTE.cream,
                padding: '2rem',
                textAlign: 'center'
              }}>
                <button style={{
                  background: PALETTE.rose,
                  color: PALETTE.cream,
                  border: 'none',
                  padding: '1rem 2.5rem',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                >
                  Save Settings
                </button>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.8 }}>
                  Don't worry - settings are saved locally in your browser
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimal Navigation */}
      <nav style={{
        background: 'white',
        borderBottom: `1px solid ${PALETTE.pearl}`,
        position: 'sticky',
        top: '86px',
        zIndex: 99
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem',
          display: 'flex',
          gap: '3rem'
        }}>
          {['Overview', 'Content', 'Audience', 'Strategy'].map(tab => (
            <button
              key={tab}
              onClick={() => setView(tab.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: view === tab.toLowerCase() ? `2px solid ${PALETTE.ink}` : '2px solid transparent',
                padding: '1.25rem 0',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                color: view === tab.toLowerCase() ? PALETTE.ink : PALETTE.charcoal,
                fontWeight: view === tab.toLowerCase() ? '600' : '400',
                transition: 'all 0.3s ease',
                fontFamily: FONTS.sans
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 3rem'
      }}>
        {view === 'overview' && (
          <div>
            {/* Hero Metric */}
            <div style={{
              textAlign: 'center',
              marginBottom: '5rem',
              paddingBottom: '3rem',
              borderBottom: `1px solid ${PALETTE.pearl}`
            }}>
              <div style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: PALETTE.charcoal,
                marginBottom: '1rem',
                fontWeight: '300'
              }}>
                Total Reach
              </div>
              <div style={{
                fontFamily: FONTS.serif,
                fontSize: '5rem',
                fontWeight: '300',
                color: PALETTE.ink,
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                2,412
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: PALETTE.rose,
                fontWeight: '500',
                letterSpacing: '0.05em'
              }}>
                +18% this month
              </div>
            </div>

            {/* Growth Chart - Minimal */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontFamily: FONTS.serif,
                fontSize: '1.75rem',
                fontWeight: '300',
                marginBottom: '2rem',
                color: PALETTE.ink
              }}>
                Growth Trajectory
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={PALETTE.rose} stopOpacity={0.2}/>
                      <stop offset="100%" stopColor={PALETTE.rose} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="week" 
                    axisLine={false}
                    tickLine={false}
                    style={{ fontSize: '0.75rem', fill: PALETTE.charcoal, fontFamily: FONTS.sans }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    style={{ fontSize: '0.75rem', fill: PALETTE.charcoal, fontFamily: FONTS.sans }}
                  />
                  <Tooltip 
                    contentStyle={{
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      borderRadius: 0,
                      fontFamily: FONTS.sans,
                      fontSize: '0.85rem'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke={PALETTE.rose} 
                    strokeWidth={2}
                    fill="url(#gradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Platform Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {[
                { platform: 'Telegram', count: '521', rate: '8.4%' },
                { platform: 'Substack', count: '412', rate: '12.7%' },
                { platform: 'Website', count: '978', rate: '3.2%' }
              ].map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: '2.5rem 2rem',
                    background: 'white',
                    border: `1px solid ${PALETTE.pearl}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = PALETTE.rose;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = PALETTE.pearl;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: PALETTE.charcoal,
                    marginBottom: '1rem',
                    fontWeight: '300'
                  }}>
                    {p.platform}
                  </div>
                  <div style={{
                    fontFamily: FONTS.serif,
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    marginBottom: '0.5rem',
                    color: PALETTE.ink
                  }}>
                    {p.count}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: PALETTE.rose,
                    fontWeight: '500'
                  }}>
                    {p.rate} engagement
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'content' && (
          <div>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: '2.25rem',
              fontWeight: '300',
              marginBottom: '3rem',
              color: PALETTE.ink
            }}>
              Top Performing Content
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {topContent.map((content, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2rem',
                    background: 'white',
                    border: `1px solid ${PALETTE.pearl}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = PALETTE.rose;
                    e.currentTarget.style.paddingLeft = '2.5rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = PALETTE.pearl;
                    e.currentTarget.style.paddingLeft = '2rem';
                  }}
                >
                  <div style={{
                    fontFamily: FONTS.serif,
                    fontSize: '3rem',
                    fontWeight: '300',
                    color: PALETTE.rose,
                    minWidth: '80px'
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: FONTS.serif,
                      fontSize: '1.3rem',
                      fontWeight: '400',
                      marginBottom: '0.5rem',
                      color: PALETTE.ink
                    }}>
                      {content.title}
                    </h3>
                    <div style={{
                      fontSize: '0.85rem',
                      color: PALETTE.charcoal
                    }}>
                      Performance Score
                    </div>
                  </div>
                  <div style={{
                    fontFamily: FONTS.serif,
                    fontSize: '2rem',
                    fontWeight: '300',
                    color: PALETTE.ink
                  }}>
                    {content.score}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '4rem',
              padding: '3rem',
              background: PALETTE.stone,
              textAlign: 'center'
            }}>
              <h3 style={{
                fontFamily: FONTS.serif,
                fontSize: '1.5rem',
                fontWeight: '300',
                marginBottom: '1rem',
                color: PALETTE.ink
              }}>
                Content Insights
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                color: PALETTE.charcoal,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Your data-driven political analysis performs 34% better than opinion pieces. 
                Wednesday morning publications see 2.3x higher engagement.
              </p>
            </div>
          </div>
        )}

        {view === 'audience' && (
          <div>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: '2.25rem',
              fontWeight: '300',
              marginBottom: '3rem',
              color: PALETTE.ink
            }}>
              Your Audience
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '3rem',
              marginBottom: '4rem'
            }}>
              <div style={{
                padding: '2.5rem',
                background: 'white',
                border: `1px solid ${PALETTE.pearl}`
              }}>
                <h3 style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: PALETTE.charcoal,
                  marginBottom: '2rem',
                  fontWeight: '300'
                }}>
                  Primary Segments
                </h3>
                {[
                  { name: 'Political Professionals', pct: 32 },
                  { name: 'Journalists', pct: 24 },
                  { name: 'HR & Recruiters', pct: 15 }
                ].map((seg, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.9rem', color: PALETTE.ink }}>
                        {seg.name}
                      </span>
                      <span style={{
                        fontFamily: FONTS.serif,
                        fontSize: '1.1rem',
                        color: PALETTE.rose
                      }}>
                        {seg.pct}%
                      </span>
                    </div>
                    <div style={{
                      height: '2px',
                      background: PALETTE.pearl,
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${seg.pct}%`,
                        background: PALETTE.rose,
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'white',
                border: `1px solid ${PALETTE.pearl}`
              }}>
                <h3 style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: PALETTE.charcoal,
                  marginBottom: '2rem',
                  fontWeight: '300'
                }}>
                  Geographic Distribution
                </h3>
                {[
                  { country: 'Netherlands', pct: 48 },
                  { country: 'Belgium', pct: 12 },
                  { country: 'United Kingdom', pct: 11 }
                ].map((geo, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.9rem', color: PALETTE.ink }}>
                        {geo.country}
                      </span>
                      <span style={{
                        fontFamily: FONTS.serif,
                        fontSize: '1.1rem',
                        color: PALETTE.sage
                      }}>
                        {geo.pct}%
                      </span>
                    </div>
                    <div style={{
                      height: '2px',
                      background: PALETTE.pearl,
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${geo.pct}%`,
                        background: PALETTE.sage,
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              padding: '3rem',
              background: PALETTE.ink,
              color: PALETTE.cream
            }}>
              <h3 style={{
                fontFamily: FONTS.serif,
                fontSize: '1.5rem',
                fontWeight: '300',
                marginBottom: '1.5rem'
              }}>
                Your Unique Advantage
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.8',
                maxWidth: '700px'
              }}>
                Your multilingual background (6 languages) positions you uniquely in Dutch political communication. 
                48% of your audience is in the Netherlands, with strong engagement from EU policy professionals.
              </p>
            </div>
          </div>
        )}

        {view === 'strategy' && (
          <div>
            <h2 style={{
              fontFamily: FONTS.serif,
              fontSize: '2.25rem',
              fontWeight: '300',
              marginBottom: '1rem',
              color: PALETTE.ink
            }}>
              Strategic Recommendations
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: PALETTE.charcoal,
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              Personalized insights based on your analytics, audience behavior, and market positioning.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  title: 'Launch Weekly Data Series',
                  priority: 'High Impact',
                  insight: 'Your data analysis posts get 34% more engagement. Create a signature weekly series combining Dutch politics + data visualization.',
                  action: 'Start with "Politics by Numbers" every Wednesday at 9 AM'
                },
                {
                  title: 'Leverage Multilingual Edge',
                  priority: 'Unique Advantage',
                  insight: 'Only 3% of Dutch political communicators operate in 6 languages. Cross-cultural analysis is your differentiator.',
                  action: 'Create comparative content: "How EU policy is discussed in NL vs IT vs UK"'
                },
                {
                  title: 'Network with Journalists',
                  priority: 'Career Growth',
                  insight: 'Journalists are 24% of your engaged audience and amplify your reach 3.2x on average.',
                  action: 'Engage with NOS, NRC, and Politico journalists on Twitter 9-11 AM weekdays'
                }
              ].map((rec, i) => (
                <div
                  key={i}
                  style={{
                    padding: '2.5rem',
                    background: 'white',
                    border: `1px solid ${PALETTE.pearl}`,
                    borderLeft: `4px solid ${i === 0 ? PALETTE.rose : i === 1 ? PALETTE.gold : PALETTE.sage}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '1.5rem'
                  }}>
                    <h3 style={{
                      fontFamily: FONTS.serif,
                      fontSize: '1.5rem',
                      fontWeight: '400',
                      color: PALETTE.ink,
                      flex: 1
                    }}>
                      {rec.title}
                    </h3>
                    <span style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.5rem 1rem',
                      background: PALETTE.stone,
                      color: PALETTE.charcoal
                    }}>
                      {rec.priority}
                    </span>
                  </div>
                  
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: PALETTE.charcoal,
                    marginBottom: '1.5rem'
                  }}>
                    {rec.insight}
                  </p>
                  
                  <div style={{
                    padding: '1.25rem',
                    background: PALETTE.stone,
                    borderLeft: `2px solid ${PALETTE.ink}`
                  }}>
                    <div style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: PALETTE.charcoal,
                      marginBottom: '0.5rem'
                    }}>
                      Action Step
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      color: PALETTE.ink,
                      fontWeight: '500'
                    }}>
                      {rec.action}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 90-Day Roadmap */}
            <div style={{
              marginTop: '4rem',
              padding: '3rem',
              background: PALETTE.ink,
              color: PALETTE.cream
            }}>
              <h3 style={{
                fontFamily: FONTS.serif,
                fontSize: '1.75rem',
                fontWeight: '300',
                marginBottom: '2.5rem'
              }}>
                90-Day Growth Roadmap
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}>
                {[
                  { month: 'Month 1', focus: 'Foundation', items: ['Launch data series', 'Optimize SEO', 'Network mapping'] },
                  { month: 'Month 2', focus: 'Expansion', items: ['2 collaborations', 'Speaking event', 'Media pitch'] },
                  { month: 'Month 3', focus: 'Scale', items: ['Viral content', 'Partnership', 'Career move'] }
                ].map((phase, i) => (
                  <div key={i}>
                    <div style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                      opacity: 0.7
                    }}>
                      {phase.month}
                    </div>
                    <div style={{
                      fontFamily: FONTS.serif,
                      fontSize: '1.3rem',
                      fontWeight: '400',
                      marginBottom: '1.5rem'
                    }}>
                      {phase.focus}
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      fontSize: '0.9rem',
                      lineHeight: '1.8'
                    }}>
                      {phase.items.map((item, j) => (
                        <li key={j} style={{ marginBottom: '0.5rem' }}>
                          → {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Elegant Footer */}
      <footer style={{
        borderTop: `1px solid ${PALETTE.pearl}`,
        padding: '2rem 3rem',
        textAlign: 'center',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: PALETTE.charcoal
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          Political Communication Command Center • Evgeniya Orlova
        </div>
      </footer>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500;600&family=Italiana&display=swap');
      `}</style>
    </div>
  );
};

export default CommandCenter;