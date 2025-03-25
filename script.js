const companies = [
    'Solguruz', 'Aurora AI', 'Weaviate', 'Neudesic', 'Liminal',
    'Noesis', 'NoCode', 'Welocalize', 'The Prompt Engineer', 'CloudFactory',
    'Zinc AI', 'Relativity', 'PromptLoop AI', 'BigML', 'PlayHT',
    'Palm AI', 'Fynd AI', 'Fancy AI', 'Compute AI', 'Fluent AI',
    'Leap AI', 'Intercom', 'Solving AI', 'Logical AI', 'Chime',
    'Terakeet', 'Value AI', 'Pangaea AI', 'Agolo', 'Native Instruments',
    'Prism'
];

let lastCompany = '';

function replaceCompanyName() {
    let randomCompany;
    do {
        randomCompany = companies[Math.floor(Math.random() * companies.length)];
    } while (randomCompany === lastCompany && companies.length > 1);
    
    lastCompany = randomCompany;

    // Update all elements with the placeholder class
    document.querySelectorAll('.company-placeholder').forEach(element => {
        element.textContent = randomCompany;
    });
}

// Start the rotation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    replaceCompanyName();
    setInterval(replaceCompanyName, 3000);
});
