export const setPrice = (num:number)=> {
    return num.toLocaleString("en-US");
}


export const cutYoutubeKey = (url: string): string => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : '';
};
