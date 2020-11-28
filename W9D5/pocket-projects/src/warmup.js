const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // debugger;
    let paragraph = document.createElement("p");
    paragraph.textContent = string;
    htmlElement.replaceChildren();
    htmlElement.appendChild(paragraph);
    // debugger;
};

htmlGenerator('Party Time.', partyHeader);