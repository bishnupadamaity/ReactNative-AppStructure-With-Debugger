import { getFromStore } from "~/utils/AsyncStorage";
import { KeyConstants } from "~/utils/AsyncStorage/keys";

export const isUserLoggedIn: () => Promise<boolean> = async() => {
    try {
        const isLoggedIn = await getFromStore(KeyConstants.LOGGED_IN);
        return isLoggedIn === 'true';
    } catch (error) {
        console.error("Error checking login status", error);
    }
    return false;
}