function applyBionicReading(text) {
    return text.split(' ').map(word => {
        let len = word.length;
        let boldPart = Math.ceil(len / 2);
        return `<b>${word.slice(0, boldPart)}</b>${word.slice(boldPart)}`;
    }).join(' ');
}

function convertText() {
    const inputText = document.getElementById('inputText').value;
    const bionicText = applyBionicReading(inputText);
    document.getElementById('outputText').innerHTML = bionicText;
    document.getElementById('downloadButton').style.display = 'block';
}

function downloadText() {
    const outputText = document.getElementById('outputText').innerHTML;
    const element = document.createElement('a');
    const file = new Blob([outputText], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = 'bionic-reading.html';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}
