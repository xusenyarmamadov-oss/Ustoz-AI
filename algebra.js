
const videos = [
    { title: "Algebra dars #1", id: "UQ1X2XsmfuA" },
    { title: "Algebra dars #2", id: "GCHUpUvIAIU" },
    { title: "Algebra dars #3", id: "JdHjnSE9ERk" },
    { title: "Algebra dars #4", id: "m-rMhMJRRfU" },
    { title: "Algebra dars #5", id: "hgoTLKy9gho" },
    { title: "Algebra dars #6", id: "ur8ndodIPcU" }
];

const container = document.getElementById("algebraVideos");

videos.forEach((video) => {
    container.innerHTML += `
        <div class="card">
            <h3>📘 ${video.title}</h3>

            <iframe
                src="https://www.youtube.com/embed/${video.id}"
                title="${video.title}"
                allowfullscreen>
            </iframe>
        </div>
    `;
});
