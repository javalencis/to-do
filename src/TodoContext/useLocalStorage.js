import { useEffect, useState } from 'react'
export function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }

        }, 1000)
    }, [])

    const saveItems = (newItems) => {
        try {
            const stringifiedItems = JSON.stringify(newItems);
            localStorage.setItem(itemName, stringifiedItems);
            setItem(newItems)
        } catch (error) {
            setError(error)
        }


    }
    return { item, saveItems, loading, error }
}

