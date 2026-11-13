
const videos = [
    { title: "Geometriya dars #1", id: "oqd2sasTnBU" },
    { title: "Geometriya dars #2", id: "hUSfGGrryxg" },
    { title: "Geometriya dars #3", id: "P4tdOwK5tj8" },
    { title: "Geometriya dars #4", id: "4SfYxy1tqt0" }
];

const container = document.getElementById("geometryVideos");

videos.forEach((video) => {
    container.innerHTML += `
        <div class="card">
            <h3>📐 ${video.title}</h3>
            <iframe
                src="https://www.youtube.com/embed/${video.id}"
                title="${video.title}"
                allowfullscreen>
            </iframe>
        </div>
    `;
});
