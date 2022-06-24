


const lightColors = {
    colors: {
        primary: '#6E919F',
        secondary: '#8CBEC3',
        toggleBorder: '#4C3D2B',
        background: '#D8BA8A',
    }
}
const darkColors = {
    colors: {
        primary: '#FFF',
        secondary: '#363537',
        toggleBorder: '#FFF',
        background: '#363537',
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
