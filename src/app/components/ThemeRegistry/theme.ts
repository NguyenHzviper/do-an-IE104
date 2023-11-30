import { createTheme } from "@mui/material/styles"
import { Manrope } from "next/font/google"
const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
})
const lightModeTheme = createTheme({
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
            variants: [
                {
                    props: { variant: "contained", color: "primary" },
                    style: {
                        color: "#FFFFFF",
                        backgroundColor: "#060640",
                        "&:hover": {
                            backgroundColor: "blue",
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "primary" },
                    style: {
                        color: "#060640",
                        borderColor: "#060640",
                        "&:hover": {
                            borderColor: "#060640",
                        },
                    },
                },
                {
                    props: { variant: "text", color: "primary" },
                    style: {
                        "&.MuiButton-text": {
                            color: "#00E5CC",
                        },
                        "&:hover": {
                            color: "red",
                        },
                    },
                },
            ],
        },
    },
})

const darkModeTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#BB86FC", // Adjust the color for dark mode
        },
        secondary: {
            main: "#CFD8DC", // Adjust the color for dark mode
        },
    },
    typography: {
        fontFamily: manrope.style.fontFamily,
        h3: {
            color: "#BB86FC", // Adjust the color for dark mode
            fontWeight: "50px",
        },
        body1: {
            color: "#BB86FC", // Adjust the color for dark mode
        },
        body2: {
            color: "#CFD8DC", // Adjust the color for dark mode
        },
        h5: {
            color: "#BB86FC", // Adjust the color for dark mode
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
            variants: [
                {
                    props: { variant: "contained", color: "primary" },
                    style: {
                        color: "#FFFFFF",
                        backgroundColor: "#BB86FC", // Adjust the color for dark mode
                        "&:hover": {
                            backgroundColor: "red",
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "primary" },
                    style: {
                        color: "#BB86FC", // Adjust the color for dark mode
                        borderColor: "#BB86FC", // Adjust the color for dark mode
                        "&:hover": {
                            borderColor: "#BB86FC", // Adjust the color for dark mode
                        },
                    },
                },
                {
                    props: { variant: "text", color: "primary" },
                    style: {
                        "&.MuiButton-text": {
                            color: "red",
                        },
                        "&:hover": {
                            color: "white",
                        },
                    },
                },
            ],
        },
    },
})

export { lightModeTheme, darkModeTheme }
