export const Var = {
    titles: (duration, ease, valueY) => ({
        initial: { opacity: 0, y: valueY },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: duration, ease: ease },
        },
    }),
    parent: (duration, ease, stagger) => ({
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: duration, ease: ease, staggerChildren: stagger },
        },
    }),
    child: (duration, ease, valueX) => ({
        initial: { opacity: 0, x: valueX },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: duration, ease: ease },
        },
    }),
    image: (duration, ease) => ({
        initial: { opacity: 0, borderRadius: '100px' },
        animate: {
            opacity: 1,
            borderRadius: '30px',
            transition: { duration: duration, ease: ease },
        },
    }),
    skill: (duration, ease) => ({
        initial: { opacity: 0, borderRadius: '100px' },
        animate: {
            opacity: 1,
            borderRadius: '30px',
            transition: { duration: duration, ease: ease },
        },
    }),
    scale: (duration, ease, scaleX) => ({
        initial: { opacity: 0, scaleX: scaleX },
        animate: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: duration, ease: ease },
        },
    }),
}