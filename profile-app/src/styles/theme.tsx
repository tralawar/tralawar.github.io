


const lightColors = {
    colors: {
        body: '#FFF',
        text: '#363537',
        toggleBorder: '#FFF',
        background: '#363537',
    }
}
const darkColors = {
    colors: {
        body: '#363537',
        text: '#FAFAFA',
        toggleBorder: '#6B8096',
        background: '#999',
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
