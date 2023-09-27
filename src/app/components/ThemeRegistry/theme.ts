import { createTheme } from "@mui/material/styles"
import { Manrope } from "next/font/google"
const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
})
const theme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: manrope.style.fontFamily,
        h3: {
            color: "#060640",
            fontWeight: "50px",
        },
        body1: {
            color: "#060640",
        },
        body2: {
            color: "#9090A7",
        },
        h5: {
            color: "#060640",
            fontWeight: "bold",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
})

export default theme
