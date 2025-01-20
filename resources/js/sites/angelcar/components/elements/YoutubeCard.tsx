import styled from 'styled-components';

const YoutubeCard = ({ youTubeKey }: { youTubeKey: string }) => {
    return (
        <VideoCard>
            <iframe
                src={`https://www.youtube.com/embed/${youTubeKey}?autoplay=1&controls=1&mute=1&loop=1&playlist=${youTubeKey}&modestbranding=1&rel=0&cc_load_policy=0&hl=ko&cc_lang_pref=&vq=hd1080`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </VideoCard>
    );
};

export default YoutubeCard;

const VideoCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--bg-secondary-color);
    overflow: hidden;
    border-radius: var(--card-border-radius);

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
`;

