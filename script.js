const uploadInput = document.getElementById("upload");
const postIts = document.querySelectorAll(".post-it img");

uploadInput.addEventListener("change", (event) => {
    const files = Array.from(event.target.files);

    files.slice(0, 10).forEach((file, index) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            postIts[index].src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
});