const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const base = document.querySelector("#base");

function handleBlur() {
    const q = this.dataset.sizing;
    document.documentElement.style.setProperty("--blur",this.value + q);
}

function handleSpacing() {
    const q = this.dataset.sizing;
    document.documentElement.style.setProperty("--spacing",this.value + q);
}

function handleBase() {
    document.documentElement.style.setProperty("--base",this.value);
}

blur.addEventListener("change",handleBlur);
blur.addEventListener("mousemove",handleBlur);
spacing.addEventListener("change",handleSpacing);
spacing.addEventListener("mousemove",handleSpacing);
base.addEventListener("change",handleBase);
base.addEventListener("mousemove",handleBase);