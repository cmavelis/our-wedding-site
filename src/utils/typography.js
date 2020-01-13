import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    googleFonts: [
        {
            name: 'Cormorant Upright',
            styles: ['700',],
        },
        {
            name: 'Roboto',
            styles: ['400',],
        }
    ],
    headerFontFamily: [
        "Cormorant Upright",
        "serif",
    ],
    bodyFontFamily: [
        "Cormorant Upright",
        "serif",
    ],
});

export default typography
