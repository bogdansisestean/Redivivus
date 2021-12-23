import styles from "./videoPlayer.module.css"

function VideoPlayer() {
    return (
        <div className={styles.backgroundColor + " " + "content-spacer"}>
            <div className="container-small">
                <iframe width="100%" height="650" src="https://www.youtube.com/embed/77Rv9_CKlwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div >
    )
}

export default VideoPlayer;