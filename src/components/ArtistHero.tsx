import { useEffect, useState } from "react";

export function ArtistHero(props: any) {
  const data = props.artistSearchResult
  const followerCount = data.tracker_count as number;
  const upcomingEvents = data.upcoming_event_count;
  const [isFollowing, setFollowing] = useState(false);

  useEffect(() => {
    console.log(props)
    setFollowing(false);
  }, [data])


  return <div className="hero">
    <div className="hero-body">
      <div className="blurred-image" style={{ backgroundImage: `url(${data.image_url})` }}></div>
    </div>

    <div className="artist-information">

      <div className="avatar">
        <img className="avatar-thumb" src={data.thumb_url}></img>
        <div className="artist-name-followers ">
          <h1 className="artist-name">{data.name}</h1>
          <div className="artist-followers">{followerCount.toLocaleString()} Followers {upcomingEvents > 0 ? '  • ' + upcomingEvents + ' Upcoming Shows' : ''}</div>
        </div>

      </div>
      <button onClick={(e) => { setFollowing(!isFollowing) }}> {!isFollowing ? 'Follow' : 'Unfollow'} </button>

    </div>
  </div>
}
