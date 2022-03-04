const generateTable = (confirmTableOfContents, confirmInstallation) => {
    if (!confirmTableOfContents) {
        return '';
    }

    if (!confirmInstallation) {
        return `
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        `;
    } else {
        return `
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        `;
    }
};

module.exports = generateTable;