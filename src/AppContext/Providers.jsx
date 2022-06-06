import AppContext from './Context';
import React, { useCallback, useState } from 'react';

const defaultCategory = {
    details: {},
}

const AppProvider = ({ children }) => {
    const [category, setCategory] = useState(defaultCategory)

    const setDetails = useCallback((category) => {
        setCategory({
            details: {
                category
            }
        })
    }, [category])

    return (
        <AppContext.Provider value={{ category: category, setDetails }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;