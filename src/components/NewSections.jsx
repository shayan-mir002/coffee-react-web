import React from 'react'
import { motion } from 'framer-motion'

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

/* ── Seasonal Specials ── */
export const SeasonalSection = () => {
    const specials = [
        {
            img: '/special_1.jpg',
            name: 'Cherry Blossom Matcha',
            desc: 'Ceremonial matcha infused with sakura syrup, oat foam, pink salt — a fleeting bloom in a cup.',
            price: '$10.50',
        },
        {
            img: '/special_2.jpg',
            name: 'Midnight Espresso Tonic',
            desc: 'Cold-pressed espresso, elderflower tonic, yuzu zest, and obsidian ice. Dark and electric.',
            price: '$11.00',
        },
        {
            img: '/special_3.jpg',
            name: 'Autumn Hojicha Latte',
            desc: 'Roasted hojicha, steamed oat milk, a kiss of smoked caramel. Warm as the last light of fall.',
            price: '$9.50',
        },
    ]

    return (
        <section id="specials" className="section">
            <div className="section-inner">
                <FadeUp>
                    <span className="section-eyebrow">Limited Time</span>
                    <h2 className="section-title">SEASONAL<br /><span className="accent">SPECIALS.</span></h2>
                    <p className="section-desc">Available while the seasons last. Once they're gone, they're gone.</p>
                </FadeUp>

                <div className="specials-grid">
                    {specials.map((item, i) => (
                        <FadeUp key={item.name} delay={i * 0.1}>
                            <div className="special-card">
                                <div className="special-img-wrap">
                                    <img src={item.img} alt={item.name} className="special-img" />
                                    <div className="special-badge">Limited Time</div>
                                </div>
                                <div className="special-body">
                                    <div className="special-top">
                                        <h3 className="special-name">{item.name}</h3>
                                        <span className="special-price">{item.price}</span>
                                    </div>
                                    <p className="special-desc">{item.desc}</p>
                                    <button className="special-btn">Order Now</button>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ── Interactive Coffee Menu ── */
const ALL_ITEMS = [
    { name: 'The Original', temp: 'cold', milk: true, caffeine: 'high', price: '$8.50', desc: 'Ceremonial matcha, oat foam, double espresso, crystal ice.' },
    { name: 'Orbital Dark', temp: 'cold', milk: true, caffeine: 'high', price: '$9.50', desc: 'Cold brew, matcha swirl, charcoal ice, coconut foam.' },
    { name: 'Zero Gravity', temp: 'cold', milk: false, caffeine: 'high', price: '$10.00', desc: 'Sparkling matcha, yuzu, nitrogen espresso.' },
    { name: 'Solstice', temp: 'hot', milk: true, caffeine: 'low', price: '$9.00', desc: 'Hojicha, hazelnut milk, single-origin espresso, smoked ice.' },
    { name: 'Vantablack', temp: 'hot', milk: true, caffeine: 'high', price: '$11.00', desc: 'Quad-shot espresso, matcha ash, black sesame cream.' },
    { name: 'Pure Origin', temp: 'hot', milk: false, caffeine: 'low', price: '$7.50', desc: 'Ceremonial matcha, spring water — pure.' },
    { name: 'Kinetic Chill', temp: 'cold', milk: true, caffeine: 'high', price: '$10.50', desc: 'Double espresso, crystal ice, layered matcha, oat milk cloud.' },
    { name: 'Cherry Blossom', temp: 'cold', milk: true, caffeine: 'low', price: '$10.50', desc: 'Sakura matcha, oat foam, pink salt, crushed ice.' },
    { name: 'Autumn Hojicha', temp: 'hot', milk: true, caffeine: 'low', price: '$9.50', desc: 'Roasted hojicha, oat milk, smoked caramel.' },
]

export const InteractiveMenuSection = () => {
    const [filters, setFilters] = React.useState({ temp: 'all', milk: 'all', caffeine: 'all' })

    const toggle = (key, val) =>
        setFilters(f => ({ ...f, [key]: f[key] === val ? 'all' : val }))

    const items = ALL_ITEMS.filter(item => {
        if (filters.temp !== 'all' && item.temp !== filters.temp) return false
        if (filters.milk === 'milk' && !item.milk) return false
        if (filters.milk === 'nomilk' && item.milk) return false
        if (filters.caffeine !== 'all' && item.caffeine !== filters.caffeine) return false
        return true
    })

    const FilterBtn = ({ label, active, onClick }) => (
        <button className={`filter-btn${active ? ' active' : ''}`} onClick={onClick}>{label}</button>
    )

    return (
        <section id="coffee-menu" className="section">
            <div className="section-inner">
                <FadeUp>
                    <span className="section-eyebrow">Interactive Menu</span>
                    <h2 className="section-title">FIND YOUR<br /><span className="accent">PERFECT CUP.</span></h2>
                </FadeUp>

                {/* Filters */}
                <div className="filter-bar">
                    <div className="filter-group">
                        <span className="filter-label">Temp</span>
                        <FilterBtn label="☀ Hot" active={filters.temp === 'hot'} onClick={() => toggle('temp', 'hot')} />
                        <FilterBtn label="❄ Cold" active={filters.temp === 'cold'} onClick={() => toggle('temp', 'cold')} />
                    </div>
                    <div className="filter-group">
                        <span className="filter-label">Milk</span>
                        <FilterBtn label="With Milk" active={filters.milk === 'milk'} onClick={() => toggle('milk', 'milk')} />
                        <FilterBtn label="No Milk" active={filters.milk === 'nomilk'} onClick={() => toggle('milk', 'nomilk')} />
                    </div>
                    <div className="filter-group">
                        <span className="filter-label">Caffeine</span>
                        <FilterBtn label="High" active={filters.caffeine === 'high'} onClick={() => toggle('caffeine', 'high')} />
                        <FilterBtn label="Low" active={filters.caffeine === 'low'} onClick={() => toggle('caffeine', 'low')} />
                    </div>
                </div>

                {/* Grid */}
                <motion.div className="interactive-menu-grid" layout>
                    {items.length === 0 ? (
                        <p className="no-results">No items match your filters. Try different combinations.</p>
                    ) : (
                        items.map((item, i) => (
                            <motion.div
                                key={item.name}
                                className="im-card"
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, delay: i * 0.04 }}
                            >
                                <div className="im-tags">
                                    <span className="im-tag">{item.temp === 'hot' ? '☀ Hot' : '❄ Cold'}</span>
                                    <span className="im-tag">{item.milk ? 'Milk' : 'No Milk'}</span>
                                    <span className={`im-tag ${item.caffeine === 'high' ? 'tag-high' : 'tag-low'}`}>
                                        {item.caffeine === 'high' ? '⚡ High Caffeine' : '◌ Low Caffeine'}
                                    </span>
                                </div>
                                <div className="im-name">{item.name}</div>
                                <div className="im-desc">{item.desc}</div>
                                <div className="im-footer">
                                    <span className="im-price">{item.price}</span>
                                    <button className="im-btn">Add</button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    )
}

/* ── Customer Reviews ── */
const REVIEWS = [
    { name: 'Yuki T.', rating: 5, role: 'Regular, Tokyo Lab', text: 'The Zero Gravity completely rewired what I thought coffee could be. The nitrogen charge is unlike anything I\'ve had. A must every morning.' },
    { name: 'Marcus D.', rating: 5, role: 'First-timer, NY Lab', text: 'I walked in skeptical — I don\'t even drink matcha. I walked out a convert. The Original is perfectly balanced. Not too sweet, not too bitter.' },
    { name: 'Priya K.', rating: 5, role: 'Weekly visitor, London', text: 'The Autumn Hojicha Latte is my ritual. The smoked caramel note is so subtle and perfect. The space feels like the future of coffee.' },
    { name: 'James W.', rating: 4, role: 'Coffee enthusiast, NY', text: 'Vantablack is intense — quad shot is no joke. The matcha ash adds a visual drama that matches the flavor complexity. Exceptional.' },
    { name: 'Aiko M.', rating: 5, role: 'Matcha lover, Tokyo', text: 'Finally, a place that treats matcha with the same respect as espresso. The layering technique on The Original is art in a cup.' },
    { name: 'Ravi A.', rating: 5, role: 'Tech worker, London', text: 'The Cold Kinetic Chill saved my presentation morning. Smooth, powerful, beautiful. This is what I want my coffee to look like.' },
]

const Stars = ({ count }) => (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map(n => (
            <span key={n} className={n <= count ? 'star filled' : 'star empty'}>★</span>
        ))}
    </div>
)

export const ReviewsSection = () => (
    <section id="reviews" className="section">
        <div className="section-inner">
            <FadeUp>
                <span className="section-eyebrow">What People Say</span>
                <h2 className="section-title">REAL VOICES.<br /><span className="accent">REAL EXPERIENCES.</span></h2>
            </FadeUp>

            <div className="reviews-grid">
                {REVIEWS.map((r, i) => (
                    <FadeUp key={r.name} delay={i * 0.08}>
                        <div className="review-card">
                            <Stars count={r.rating} />
                            <p className="review-text">"{r.text}"</p>
                            <div className="review-footer">
                                <div className="review-avatar">{r.name[0]}</div>
                                <div>
                                    <div className="review-name">{r.name}</div>
                                    <div className="review-role">{r.role}</div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </div>
    </section>
)

/* ── Meet the Baristas ── */
const BARISTAS = [
    {
        img: '/barista_1.jpg',
        name: 'Hana Yoshida',
        role: 'Head Development Barista',
        bio: 'Formally trained in ceremony-grade matcha preparation in Uji, Japan. Hana designed the original layering technique that defines every Perfect Fusion cup.',
    },
    {
        img: '/barista_2.jpg',
        name: 'Dev Okafor',
        role: 'Espresso Systems Lead',
        bio: 'With a decade at single-origin roasters across Lagos and New York, Dev obsesses over extraction variables down to 0.1°C. He pulled the first Vantablack shot.',
        fallback: '/barista_1.jpg',
    },
    {
        img: '/barista_1.jpg',
        name: 'Zara Patel',
        role: 'Seasonal Menu Director',
        bio: 'Zara\'s background in culinary arts and food science gives her an uncanny ability to build flavors that are bold yet balanced. All our seasonal specials are her vision.',
    },
]

export const BaristasSection = () => (
    <section id="baristas" className="section">
        <div className="section-inner">
            <FadeUp>
                <span className="section-eyebrow">The Team</span>
                <h2 className="section-title">MEET THE<br /><span className="accent">BARISTAS.</span></h2>
                <p className="section-desc">The craft behind every cup. The minds behind the magic.</p>
            </FadeUp>

            <div className="baristas-grid">
                {BARISTAS.map((b, i) => (
                    <FadeUp key={b.name} delay={i * 0.12}>
                        <div className="barista-card">
                            <div className="barista-img-wrap">
                                <img src={b.img} alt={b.name} className="barista-img" />
                                <div className="barista-img-overlay" />
                            </div>
                            <div className="barista-body">
                                <div className="barista-role">{b.role}</div>
                                <h3 className="barista-name">{b.name}</h3>
                                <p className="barista-bio">{b.bio}</p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </div>
    </section>
)
