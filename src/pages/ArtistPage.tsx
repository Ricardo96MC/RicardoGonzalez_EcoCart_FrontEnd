import { useEffect, useState } from "react";
import { ArtistHero } from "../components/ArtistHero";
import { SignUpForm } from "../components/SignUpForm";

export function ArtistPage(props: any) {

    const [searchResult, setSearchResult] = useState<any | null>({});
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setSearchResult(props);
            setLoading(false)
            if (Object.keys(props.artistSearchResult).length > 0) {
                localStorage.setItem("artistData", JSON.stringify(props))
                setSearchResult(JSON.parse(props));
            } else {
                const data = localStorage.getItem('artistData');
                setSearchResult(JSON.parse(data!))
            }
        }
        loadData();
    }, [props])

    return (<>
        {!isLoading ? <ArtistHero artistSearchResult={searchResult.artistSearchResult} isFollowing={isFollowing} setFollowing={setIsFollowing}></ArtistHero> : 'Loading...'}
        <SignUpForm loginIsShown={props.loginIsShown} handleLoginClick={props.handleLoginClick} />

    </>
    )
}