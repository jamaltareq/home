import { createContext, useState } from "react";

export let ThemeDark = createContext()

export default function ThemeContextProvider(props) {
    let [darkthemfun, setdarkthemfun] = useState(false)
    let changeTheme = () => {
        darkthemfun ? setdarkthemfun(false) : setdarkthemfun(true)
    }
    return <>
        <ThemeDark.Provider value={{ darkthemfun, setdarkthemfun, changeTheme }}>
            {props.children}
        </ThemeDark.Provider>
    </>
}