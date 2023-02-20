const { Grid, Box, Modal, IconButton, Icon } = window['MaterialUI'];
const { useState, useCallback } = React;
const videos = ([
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 0,
  },
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 1,
  },
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 2,
  },
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 3,
  },
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 4,
  },
  {
    thumbnail: '../rsc/Rotoscope Animation.jpg',
    thumbnailHover: '../rsc/Rotoscope Animation.gif',
    vimeoId: '637579439',
    order: 5,
  },
]).sort((video1, video2) => video1.order - video2.order);

const Portfolio = () => {
  // Allows for selection of a particular video to display
  const [videoId, setVideoId] = useState(null);
  // Keeps track of mouse hover for video thumbnails
  const [hoverItem, setHoverItem] = useState(null);
  const openModal = (newVideoId) => {
    if (!videoId)
      setVideoId(newVideoId);
  };
  const closeModal = () => setVideoId(null);
  const getHoverClass = useCallback((videoIndex) => (videoIndex === hoverItem) ? " hover" : "", [hoverItem]);

  return (
    <div class="portfolio-wrapper">
      {/* Video Player Modal */}
      <Modal className="video-modal" open={!!videoId} fullScreen>
        <Box className="modal-content-wrapper">
          <Box className="modal-content">
            <IconButton className="close-icon" size="small" onClick={() => closeModal()}>
              <i className="fa-sharp fa-solid fa-xmark"></i>
            </IconButton>
            <iframe class="video-frame" src={`https://player.vimeo.com/video/${videoId}?autoplay=1&color=612d2d`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Box>
      </Modal>
      
      {/* Video Selection Grid */}
      <Grid className="thumbnails" container direction="row" justifyContent="center" alignItems="center">
        {videos.map((video, index) => {
          const imgSrc = (index === hoverItem) ? video.thumbnailHover : video.thumbnail;
          return (
            <Grid key={index} onClick={() => openModal(video.vimeoId)} onMouseEnter={() => setHoverItem(index)} onMouseLeave={() => setHoverItem(null)} sx={{ m: 3, zIndex: 3 }}>
              <Box className="thumbnail-container">
                <i class={"fa-solid fa-play" + getHoverClass(index)}></i>
                <img class="thumbnail" src={imgSrc} key={imgSrc} />
                <img class="thumbnail-bg" src={video.thumbnail} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}