import { useParams } from "react-router-dom";
import fetchItems from "../../services/ProductServices";
import Iframe from 'react-iframe'
import ReactPlayer from "react-player"
const WatchPage = () => {
    const { id } = useParams();
    const { slug } = useParams();
    const { data } = fetchItems('https://phimapi.com/phim/khi-anh-chay-ve-phia-em')
    // console.log(data);
    return (<div className=" absolute w-full grid grid-cols-8 mt-32 px-12">
        <h1 className="text-white col-span-8">{id}</h1>
        <h2 className="text-white col-span-8">{slug}</h2>
        <Iframe url="https://player.phimapi.com/player/?url=https://s2.phim1280.tv/20230907/S7BVCpM0/index.m3u8"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
        
        {/* <ReactPlayer
            url="http://www.youtube.com/embed/xDMP3i36naA"
            controls
        /> */}

        {/* <video width="750" height="500" controls>
  <source src="htps://player.phimapi.com/player/?url=https://s2.phim1280.tv/20230907/S7BVCpM0/index.m3u8" type="video/m3u8" />
</video> */}t

    </div>);
}

export default WatchPage;