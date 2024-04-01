document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".col");
    const lines = document.querySelectorAll(".line");


    cells.forEach((cell, indx) => {
        let cellRect = cell.getBoundingClientRect();
        console.log(cellRect.x);
        cell.dataset.currPos = cellRect.x;
        lines.forEach(line => {
            line.style.left = `--left-pos: ${cell.dataset.currPos}px`;
        });
    });




    window.addEventListener("resize", () => {
        cells.forEach((cell, indx) => {
            let cellRect = cell.getBoundingClientRect();
            console.log(cellRect.x, indx);
            cell.dataset.currPos = cellRect.x;
            lines.forEach(line => {
                line[indx].style.left = `--left-pos: ${cell.dataset.currPos}px`;
            });
        });
    });
});