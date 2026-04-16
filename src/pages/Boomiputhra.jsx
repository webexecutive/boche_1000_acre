import VideoPlayer from '../components/VideoPlayer';

const Boomiputhra = () => {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <VideoPlayer 
        src="/videos/boomiputhra/index.m3u8" 
        type="hls" 
        poster="/videos/boomiputhra/poster.webp"
        blurPoster="/videos/boomiputhra/poster-blur.webp"
      />
    </section>
  )
}
export default Boomiputhra;
