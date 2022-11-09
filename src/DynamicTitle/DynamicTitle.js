import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - FoodMart`;
    }, [title])
}

export default useTitle;