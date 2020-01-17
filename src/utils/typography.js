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
        },
        {
            name: 'Lobster',
            styles: ['400',],
        }
    ],
    headerFontFamily: [
        "Cormorant Upright",
        "serif",
    ],
    //font-family: 'Lobster', cursive;
    bodyFontFamily: [
        // 'Copperplate Light', 'Copperplate Gothic Light', 'serif'
        "Cormorant Upright",
        "serif",
    ],
});

export default typography
