'use strict';

// Import images to ensure they're processed by the bundler
import borderImage from './assets/border.png';

function createMainContent() {
    const mainDiv = document.createElement('div');
    mainDiv.id = 'main';

    // Static HTML content
    mainDiv.innerHTML = `
        <img id="top-img" src="${borderImage}" alt="top-border" />
        <div class="referral">
            <h1>Mangiacake Restaurant</h1>
            <p>
                Mangiacake butchers Italian cuisine with overcooked pasta, bland sauces, and a complete disregard for tradition. Every bite feels like an insult to Nonna's cooking, making it the last place any true Italian food lover should eat.
            </p>
            <span id="referral-person">-A Baccala</span>
        </div>
        <div class="hours">
            <h1>Hours</h1>
            <ul>
                <li>Monday: 10am - 10pm</li>
                <li>Tuesday: 10am - 10pm</li>
                <li>Wednesday: 10am - 10pm</li>
                <li>Thursday: 10am - 10pm</li>
                <li>Friday: 10am - 10pm</li>
                <li>Saturday: 10am - 11pm</li>
                <li>Sunday: Closed <em><strong>Vaffanculo!</strong></em></li>
            </ul>
        </div>
        <div class="location">
            <h2>Location</h2>
            <p>328 Front St. W, Toronto, ON M5V 3W7</p>
        </div>
        <img id="bottom-img" src="${borderImage}" alt="bottom-border" />
    `;

    return mainDiv;
}

function loadHome(contentDiv) {
    // Clear existing content
    contentDiv.innerHTML = '';

    // Create left column
    const leftDiv = document.createElement('div');
    leftDiv.id = 'left';

    // Create main content
    const mainContent = createMainContent();

    // Create right column
    const rightDiv = document.createElement('div');
    rightDiv.id = 'right';

    // Append all columns to content div
    contentDiv.appendChild(leftDiv);
    contentDiv.appendChild(mainContent);
    contentDiv.appendChild(rightDiv);
}

export { loadHome };
