import React, { useRef } from 'react'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import CanvasSequence from './components/CanvasSequence'
import TextOverlay from './components/TextOverlay'
import Sections from './components/Sections'

function App() {
    const sequenceRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sequenceRef,
        offset: ['start start', 'end end'],
    })

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 184])
    const smoothFrame = useSpring(frameIndex, {
        stiffness: 120,
        damping: 35,
        restDelta: 0.001,
    })

    return (
        <div style={{ background: '#050505' }}>
            {/* Cinematic grain */}
            <div className="grain" />

            {/* Navbar */}
            <nav className="nav">
                <div className="nav-logo">MATCHA<span>FUSION</span></div>
                <ul className="nav-links">
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#craft">Craft</a></li>
                    <li><a href="#specials">Specials</a></li>
                    <li><a href="#coffee-menu">Menu</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#baristas">Team</a></li>
                    <li><a href="#locations">Locations</a></li>
                </ul>
            </nav>

            {/* ── Scrollytelling Section ── */}
            <div ref={sequenceRef} id="experience" className="sequence-section">
                <div className="sequence-sticky">
                    <CanvasSequence progress={smoothFrame} />
                    <TextOverlay scrollProgress={scrollYProgress} />

                    {/* Bottom progress bar */}
                    <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress, width: '100%' }}
                    />

                    {/* Scroll hint */}
                    <motion.div
                        className="scroll-hint"
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]) }}
                    >
                        <span>Scroll to discover</span>
                        <div className="scroll-line" />
                    </motion.div>
                </div>
            </div>

            {/* ── Below-fold Sections ── */}
            <Sections />
        </div>
    )
}

export default App
