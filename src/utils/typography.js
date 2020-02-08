import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.6,
    googleFonts: [
        {
            name: 'Cormorant Upright',
            styles: ['700',],
        },
        // {
        //     name: 'Roboto',
        //     styles: ['400',],
        // },
        {
            name: 'Lobster',
            styles: ['400',],
        },
        // {
        //     name: 'Cinzel',
        //     styles: ['400',],
        // },
        {
            name: 'Playfair Display SC',
            styles: ['700',],
        },
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
