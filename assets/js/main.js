
const blocks = document.querySelectorAll(".block");
const resetDuration = 500;

blocks.forEach((block) => {
    let timeoutId;

    block.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);

        block.classList.add("active");

        timeoutId = setTimeout(() => {
            block.classList.remove("active");
        }, resetDuration);
    });
});















