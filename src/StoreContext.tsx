import React from "react";
import {storeType} from "./redux/store";

const StoreContext = React.createContext({} as storeType)

export type ProviderType = {
    store: storeType,
    children:React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;