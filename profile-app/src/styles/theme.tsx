

const lightColors = {
    colors: {
        primary: '#6E919F',
        secondary: '#8CBEC3',
        toggleBorder: '#4C3D2B',
        background: '#D8BA8A',
        label:  '#828282',
        text: '#333',
        textLight: '#7C8DB0',
    }
}
const darkColors = {
    colors: {
        primary: '#FFF',
        secondary: '#363537',
        toggleBorder: '#FFF',
        background: '#121212',
        label:  '#828282',
        text: '#777',
        textLight: '#7C8DB0',
    }
}

const global = {
    breakpoints: {
        xs: "372px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
    }
};



export const lightTheme = {
    ...lightColors,
    ...global,

}
export const darkTheme = {
    ...darkColors,
    ...global,
}
