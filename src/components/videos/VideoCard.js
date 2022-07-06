import YouTube from '@u-wave/react-youtube'
const VideoCard = ({value}) => {
    return ( 
    <>
            <YouTube
                video={value}
            />
    </> );
}
 
export default VideoCard;