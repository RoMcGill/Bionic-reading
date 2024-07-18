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
}
