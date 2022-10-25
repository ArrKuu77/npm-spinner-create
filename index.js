export function showSpinner() {
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader");
    loaderDiv.innerHTML = `
    <div class=" vh-100 d-flex justify-content-center align-items-center fixed-top">
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
    </div>
    `;
    document.body.append(loaderDiv);
} 

export function hideSpinner() {
    const loader = document.querySelector(".loader");
    loader.remove();
}

export function progress() {
    const spinnerDiv = document.createElement("div");
    spinnerDiv.classList.add("spinner");
    spinnerDiv.innerHTML = `
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
    </div>
    `;
    document.body.append(spinnerDiv);
}

export function hideProgerss() {
    const spinner = document.querySelector(".spinner");
    spinner.remove();
}