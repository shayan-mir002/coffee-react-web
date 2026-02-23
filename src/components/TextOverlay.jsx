import React from 'react'
import { motion, useTransform } from 'framer-motion'

const Beat = ({ children, scrollProgress, range }) => {
    const [start, end] = range
    const opacity = useTransform(
        scrollProgress,
        [start, start + 0.04, end - 0.04, end],
        [0, 1, 1, 0]
    )
    const y = useTransform(
        scrollProgress,
        [start, start + 0.04, end - 0.04, end],
        [50, 0, 0, -50]
    )

    return (
        <motion.div style={{ opacity, y }} className="beat-overlay">
            <div>
                {children}
            </div>
        </motion.div>
    )
}

const TextOverlay = ({ scrollProgress }) => (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>

        {/* Beat A: 0–18% */}
        <Beat scrollProgress={scrollProgress} range={[0, 0.18]}>
            <p className="beat-eyebrow">Origin Story</p>
            <h1 className="beat-title">
                BOLDLY<br /><span className="accent">BREWED.</span>
            </h1>
            <p className="beat-subtitle">
                The intersection of ceremonial matcha<br />and precision espresso.
            </p>
        </Beat>

        {/* Beat B: 27–45% */}
        <Beat scrollProgress={scrollProgress} range={[0.27, 0.45]}>
            <p className="beat-eyebrow">Temperature Science</p>
            <h1 className="beat-title">
                KINETIC<br /><span className="accent">CHILL.</span>
            </h1>
            <p className="beat-subtitle">
                Artisanal ice cubes, arrested in mid-air<br />for the perfect temperature.
            </p>
        </Beat>

        {/* Beat C: 52–70% */}
        <Beat scrollProgress={scrollProgress} range={[0.52, 0.70]}>
            <p className="beat-eyebrow">The Collision</p>
            <h1 className="beat-title">
                FLAVOR<br /><span className="accent">IN ORBIT.</span>
            </h1>
            <p className="beat-subtitle">
                Pure espresso shots and matcha ligaments<br />collide in a controlled explosion.
            </p>
        </Beat>

        {/* Beat D: 78–97% */}
        <Beat scrollProgress={scrollProgress} range={[0.78, 0.97]}>
            <p className="beat-eyebrow">The Invitation</p>
            <h1 className="beat-title">
                ORDER<br /><span className="accent">THE FUTURE.</span>
            </h1>
            <p className="beat-subtitle">
                Experience the fusion at your nearest lab.
            </p>
            <div className="beat-cta">
                <a href="#locations" className="btn-primary" style={{ pointerEvents: 'auto' }}>Find a Lab</a>
            </div>
        </Beat>

    </div>
)

export default TextOverlay
