import { toast } from "react-toastify";

/**
 *   Documentation of this class methods
 *   @function setLogonUser => @param loginUser => @returns void
 *   @function isUserLogon =>  @returns bool
 *   @function updateLogonUser => @param key, @param value => @returns void
 *   @function resetLogonUser => void
 */

export const setLogonUser = (loginUser, sidebarItem, project) => {
    if (typeof loginUser !== "undefined" && loginUser !== null) {
        try {
            localStorage.setItem("userToken", true);
            localStorage.setItem("loginUser", JSON.stringify(loginUser));
            localStorage.setItem("sidebarItem", JSON.stringify(sidebarItem));
            localStorage.setItem("project", project)
            window.location.href = "/" + project + "/Main"
            window.location.reload(false);
            
        }
        catch (e) {
            toast.error("Error: 1101: Unable to set login status. Please contact your software warehouse.")
        }
    }
    else {
        toast.error("Error: 1101.1: Unable to set login status. Passing parameter is empty or undefined.")
    }
}

export const setSidebaritems = () => {
    return localStorage.setItem("sidebarItem")
}

export const getSidebaritems = () => {
    return localStorage.getItem("sidebarItem")
}

export const isUserLogon = () => {
    // if want to bypass the auth, then uncomment this
    // return true
    return localStorage.getItem("loginUser") === null ? false : true

    // else we will go for normal operation with the function below
    // return (typeof localStorage.getItem("userToken") !== "undefined" && localStorage.getItem("userToken") !== null) ? true : false
}

export const resetLogonUser = () => {
    localStorage.removeItem("userToken")
    localStorage.removeItem("loginUser")
    localStorage.removeItem("sidebarItem");
    window.location.href = "/Login"
}

export const updateLogonUser = (key, value) => {
    localStorage.setItem(key, value);
}