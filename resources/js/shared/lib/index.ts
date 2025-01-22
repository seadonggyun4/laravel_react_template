// change num to price
export const setPrice = (num:number)=> {
    return num.toLocaleString("en-US");
}

// cut url to YouTube key
export const cutYoutubeKey = (url: string): string => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : '';
};
