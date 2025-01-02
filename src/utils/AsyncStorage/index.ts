import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyConstants } from "./keys";

export const setStore = async ({
    key, value
}: {
    key: KeyConstants;
    value: string;
}) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error("Failed to set async storage", error);
    }
}

export const getFromStore = async (
    key: KeyConstants
) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error("Failed to get async storage", error);
        return null;
    }
}

export const clearStore = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error("Failed to clear async storage", error);
    }
}