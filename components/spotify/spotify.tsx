import Link from "next/link";
import PlayingAnimation from "@/components/spotify/playing-animation";

async function fetchSpotifySong() {
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/`;
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  const authOptions = {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=refresh_token&refresh_token=" + refresh_token,
  };

  try {
    const tokenResponse = await fetch(TOKEN_ENDPOINT, authOptions);
    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    const nowPlayingOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const nowPlayingResponse = await fetch(
      NOW_PLAYING_ENDPOINT,
      nowPlayingOptions
    );
    const song = await nowPlayingResponse.json();

    return {
      album: song.item.album.images[2].url,
      artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
      title: song.item.name,
      songURL: song.item.external_urls.spotify,
      isPlaying: song.is_playing,
    };
  } catch (e) {
    // Return a default song in case of error
    return {
      album: "https://i.scdn.co/image/ab67616d00004851c6e0948bbb0681ff29cdbae8",
      artist: "J. Cole",
      title: "January 28th",
      songURL: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG",
      isPlaying: false,
    };
  }
}

export default async function SpotifyCurrentSong() {
  const { album, artist, title, songURL, isPlaying } = await fetchSpotifySong();

  return (
    <div className="flex items-center gap-4 text-white rounded-md max-w-md">
      <img
        src={album}
        width={48}
        height={48}
        alt="Album cover"
        className="rounded-md"
      />

      <div className="flex flex-col min-w-0">
        <Link
          href={songURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-white transition-colors font-light"
        >
          {title}
        </Link>
        <span className="text-muted-foreground font-light text-sm truncate">
          {artist}
        </span>
      </div>

      <div className="ml-2 pb-5">
        <PlayingAnimation />
      </div>
    </div>
  );
}
