const lastUpdate = document.querySelector('#lastUpdate')
lastUpdate.textContent = `Last Updated: ${document.lastModified}`;

const currentYear = document.querySelector("#currentYear")
currentYear.innerHTML = new Date().getFullYear();