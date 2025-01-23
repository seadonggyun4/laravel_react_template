import {useState} from 'react';

const useYoutube = () => {
    const [key, setKey] = useState<string>('5FOxW39B74g');

    return { key, setKey };
}


export default useYoutube;
