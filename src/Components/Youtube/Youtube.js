import React, { useState, useEffect } from "react";

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [videoType, setVideoType] = useState("mostRecent");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_youTubeKey
  const CHANNEL_ID =process.env.REACT_APP_channelId
  console.log(API_KEY);
  // const API_KEY = "AIzaSyCy7fzFJmrs0wEMXchZuFGHGD17QKm2Ye4";
  // const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";

  const VIDEO_TYPES = {
    mostRecent: {
      name: "Most Recent",
      params: "order=date&type=video", // Added type=video
    },
    mostViewed: {
      name: "Most Viewed",
      params: "order=viewCount&type=video", // Added type=video
    },
    trending: {
      name: "Trending",
      params: "chart=mostPopular&regionCode=US",
      // Note: Trending can't be filtered by channel
    },
  };

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        let url;
        if (videoType === "trending") {
          url = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&${VIDEO_TYPES[videoType].params}&maxResults=6`;
        } else {
          url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&${VIDEO_TYPES[videoType].params}&maxResults=6`;
        }
     
        const response = await fetch(url);
        const data = await response.json();

        // Transform response data based on endpoint
        if (videoType === "trending") {
          setVideos(data.items || []);
        } else {
          // Filter out any non-video results and transform items
          const videoItems = data.items
            .filter((item) => item.id.kind === "youtube#video")
            .map((item) => ({
              id: { videoId: item.id.videoId },
              snippet: item.snippet,
            }));
          setVideos(videoItems);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoType]);

  const handleVideoTypeChange = (e) => {
    setVideoType(e.target.value);
  };

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="video-type-selector">
              <h3>Choose Video Category</h3>
              <select
                id="videoType"
                value={videoType}
                onChange={handleVideoTypeChange}
              >
                {Object.entries(VIDEO_TYPES)?.map(([key, type]) => (
                  <option key={key} value={key}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="title-wraper bold video-title-wrapper">
              {VIDEO_TYPES[videoType].name} Videos
            </div>
          </div>

          {isLoading ? (
            <div className="col-12">Loading videos...</div>
          ) : videos?.length === 0 ? (
            <div className="col-12">No videos found. Try another category.</div>
          ) : (
            videos?.map((singleVideo) => {
              const vidId =
                videoType === "trending"
                  ? singleVideo.id
                  : singleVideo.id.videoId;
              const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

              return (
                <div key={vidId} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt={`Thumbnail for ${singleVideo.snippet.title}`}
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
