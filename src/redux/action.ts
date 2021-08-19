import nightwind from "nightwind/helper"


export const type ={
    TOGGLE_DARK: "TOGGLE_DARK"
}

export const toggleDark = (dark: boolean) => {
    nightwind.toggle();
    return {
        type: type.TOGGLE_DARK,
        dark
    }
}