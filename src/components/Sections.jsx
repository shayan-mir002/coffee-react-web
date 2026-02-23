import React from 'react'
import { motion } from 'framer-motion'
import { SeasonalSection, InteractiveMenuSection, ReviewsSection, BaristasSection } from './NewSections'

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.75, delay, ease: [0.23, 1, 0.32, 1] }
    })
}

const FadeUp = ({ children, delay = 0, style = {} }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        custom={delay}
        variants={fadeUp}
        style={style}
    >
        {children}
    </motion.div>
)

/* ── Craft ── */
const CraftSection = () => (
    <section id="craft" className="section">
        <div className="section-inner">
            <div className="craft-grid">
                <FadeUp>
                    <span className="section-eyebrow">The Craft</span>
                    <h2 className="section-title">
                        PRECISION<br />
                        <span className="accent">IN EVERY</span><br />
                        LAYER.
                    </h2>
                </FadeUp>
                <FadeUp delay={0.15}>
                    <div className="ingredients-list">
                        {[
                            { num: '01', title: 'Ceremonial Matcha', desc: 'Stone-ground, first-harvest matcha from Kyoto. Vivid green, full of umami.' },
                            { num: '02', title: 'Double Espresso', desc: 'A rich, concentrated pull from single-origin beans. The dark contrast to bright matcha.' },
                            { num: '03', title: 'Artisanal Ice', desc: 'Crystal-clear, slow-formed cubes that dilute at a controlled rate—keeping flavor locked.' },
                        ].map(item => (
                            <div key={item.num} className="ingredient-item">
                                <span className="ingredient-num">{item.num}</span>
                                <div>
                                    <div className="ingredient-name">{item.title}</div>
                                    <div className="ingredient-desc">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </div>
    </section>
)

/* ── Menu ── */
const MenuSection = () => (
    <section id="menu" className="section">
        <div className="section-inner">
            <FadeUp>
                <div className="menu-header">
                    <span className="section-eyebrow">Core Menu</span>
                    <h2 className="section-title">SIGNATURE<br /><span className="accent">FUSIONS.</span></h2>
                </div>
            </FadeUp>
            <div className="menu-grid">
                {[
                    { name: 'The Original', desc: 'Ceremonial matcha, oat milk foam, double espresso, crystal ice.', price: '$8.50', tag: 'Signature' },
                    { name: 'Orbital Dark', desc: 'Cold brew, matcha swirl, activated charcoal ice, coconut foam.', price: '$9.50', tag: 'Fan Favorite' },
                    { name: 'Zero Gravity', desc: 'Sparkling matcha, yuzu extract, nitrogen espresso, citrus zest.', price: '$10.00', tag: 'New' },
                    { name: 'Solstice', desc: 'Hojicha, hazelnut milk, single-origin espresso, smoked ice.', price: '$9.00', tag: 'Seasonal' },
                    { name: 'Vantablack', desc: 'Quad-shot espresso, matcha ash, black sesame cream, obsidian ice.', price: '$11.00', tag: 'Limited' },
                    { name: 'Pure Origin', desc: 'Ceremonial matcha, spring water — just the tea in its purest form.', price: '$7.50', tag: 'Classic' },
                ].map((item, i) => (
                    <FadeUp key={item.name} delay={i * 0.06}>
                        <div className="menu-card">
                            <div className="menu-card-top">
                                <span className="menu-tag">{item.tag}</span>
                                <span className="menu-price">{item.price}</span>
                            </div>
                            <div className="menu-name">{item.name}</div>
                            <div className="menu-desc">{item.desc}</div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </div>
    </section>
)

/* ── Stats ── */
const StatsSection = () => (
    <div className="stats-section">
        <div className="stats-grid">
            {[
                { value: '185', label: 'Animation Frames' },
                { value: '12°C', label: 'Optimal Serve Temp' },
                { value: '3', label: 'Core Ingredients' },
                { value: '0.1s', label: 'Flavor Collision' },
            ].map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.08}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                </FadeUp>
            ))}
        </div>
    </div>
)

/* ── Locations ── */
const LocationsSection = () => (
    <section id="locations" className="section">
        <div className="section-inner">
            <FadeUp>
                <span className="section-eyebrow">Find Us</span>
                <h2 className="section-title">THE <span className="accent">LABS.</span></h2>
            </FadeUp>
            <div className="locations-grid">
                {[
                    { city: 'Tokyo', address: 'Shibuya Crossing, 2F', hours: 'Mon–Sun  07:00–22:00' },
                    { city: 'New York', address: '140 W Broadway, Tribeca', hours: 'Mon–Fri  06:00–21:00' },
                    { city: 'London', address: 'Shoreditch High Street', hours: 'Tue–Sun  08:00–20:00' },
                ].map((loc, i) => (
                    <FadeUp key={loc.city} delay={i * 0.1}>
                        <div className="location-card">
                            <div className="location-bar" />
                            <div className="location-city">{loc.city}</div>
                            <div className="location-address">{loc.address}</div>
                            <div className="location-hours">{loc.hours}</div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </div>
    </section>
)

/* ── CTA ── */
const CTASection = () => (
    <div className="cta-section">
        <div className="cta-glow" />
        <FadeUp>
            <div className="cta-inner">
                <span className="section-eyebrow">The Future of Coffee</span>
                <h2 className="section-title">READY TO<br /><span className="accent">EXPERIENCE IT?</span></h2>
                <p className="cta-subtitle">
                    Join thousands who have already made the shift.<br />
                    Order online or visit your nearest lab.
                </p>
                <div className="cta-buttons">
                    <a href="#coffee-menu" className="btn-primary">Order Now</a>
                    <a href="#specials" className="btn-ghost">See Specials</a>
                </div>
            </div>
        </FadeUp>
    </div>
)

/* ── Footer ── */
const Footer = () => (
    <footer className="footer">
        <div className="footer-logo">MATCHA<span>FUSION</span></div>
        <p className="footer-copy">© 2026 MatchaFusion. The Future, Bottled.</p>
        <ul className="footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </footer>
)

const Sections = () => (
    <>
        <CraftSection />
        <MenuSection />
        <SeasonalSection />
        <StatsSection />
        <InteractiveMenuSection />
        <ReviewsSection />
        <BaristasSection />
        <LocationsSection />
        <CTASection />
        <Footer />
    </>
)

export default Sections
