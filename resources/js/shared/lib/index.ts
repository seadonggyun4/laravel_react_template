// change num to price
import {apiClient} from "@/shared/api";

export const setPrice = (num:number)=> {
    return num.toLocaleString("en-US");
}

// cut url to YouTube key
export const cutYoutubeKey = (url: string): string => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : '';
};

// load JSON file
export const loadJSON = async (url: string) => {
    try {
        const { data } = await apiClient(url);
        return data;
    } catch (error) {
        console.error(`Error loading json from "${url}":`, error);
        return {};
    }
}
