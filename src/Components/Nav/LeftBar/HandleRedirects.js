import {useCallback} from "react";

export const HandleRedirects = (history) => {

    const handleRedirectToAdmin = useCallback(() => {
        history.push("/dashboard/admin");
    },[history])
    const handleRedirectToHome = useCallback(() => {
        history.push("/dashboard")
    }, [history])

    const handleRedirectToOperation = useCallback(() => {
        history.push("/dashboard/internOperation")
    },[history])

    const handleRedirectToGraph = useCallback(() => {
        history.push("/dashboard/graph")
    },[history])

    return {handleRedirectToAdmin, handleRedirectToHome, handleRedirectToOperation, handleRedirectToGraph}
}
