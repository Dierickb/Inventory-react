export const HandleRedirects = (history) => {

    const handleRedirectToAdmin = () => {
        console.log("SADSD")
        history.push("/dashboard/admin");
    }
    const handleRedirectToHome = () => {
        history.push("/dashboard")
    }

    const handleRedirectToOperation = () => {
        history.push("/dashboard/operation")
    }

    const handleRedirectToGraph = () => {
        history.push("/dashboard/graph")
    }

    return {handleRedirectToAdmin, handleRedirectToHome, handleRedirectToOperation, handleRedirectToGraph}
}
