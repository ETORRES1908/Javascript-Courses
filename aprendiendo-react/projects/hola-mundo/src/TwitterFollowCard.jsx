import { useState } from "react"
export function TwitterFollowCard({children ,userName, name, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const followStatus = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing
    ? 'tw-followCard-button tw-is-following'
    : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUsername">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-status">{followStatus}</span>
                <span className="tw-followCard-unfollow">Dejar de Seguir</span>
            </button>
        </aside>
    </article>
    )
}