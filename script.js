let infoData = [];

const infoType = document.getElementById('infoType');
const inputContainer = document.getElementById('inputContainer');
const submitBtn = document.getElementById('submitBtn');
const addBtn = document.getElementById('addBtn');
const infoList = document.getElementById('infoList');

function createInput(type) {
    inputContainer.innerHTML = ''; // Clear previous input

    if(type === 'Gender') {
        const genders = ['Male', 'Female', 'Other'];
        genders.forEach(g => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'gender';
            radio.value = g;
            label.appendChild(radio);
            label.append(` ${g} `);
            inputContainer.appendChild(label);
        });
    } else if(type === 'Date of Birth') {
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'infoInput';
        inputContainer.appendChild(dateInput);
    } else {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.id = 'infoInput';
        textInput.placeholder = 'Enter info';
        inputContainer.appendChild(textInput);
    }
    updateButtonState();
}

// Get the value from the current input dynamically
function getInputValue() {
    if(infoType.value === 'Gender') {
        const selected = document.querySelector('input[name="gender"]:checked');
        return selected ? selected.value : '';
    } else {
        const input = document.getElementById('infoInput');
        return input ? input.value.trim() : '';
    }
}

// Enable/disable buttons based on input
function updateButtonState() {
    const value = getInputValue();
    const disabled = value === '';
    submitBtn.disabled = disabled;
    addBtn.disabled = disabled;
}

infoType.addEventListener('change', () => {
    createInput(infoType.value);
});

inputContainer.addEventListener('input', updateButtonState);
inputContainer.addEventListener('change', updateButtonState);

submitBtn.addEventListener('click', () => {
    const type = infoType.value;
    const value = getInputValue();
    if(value === '') return;

    const existingIndex = infoData.findIndex(item => item.type === type);
    if(existingIndex >= 0) {
        infoData[existingIndex].value = value;
    } else {
        infoData.push({ type, value });
    }

    renderInfo();
    createInput(type);
});

addBtn.addEventListener('click', () => {
    const type = infoType.value;
    const value = getInputValue();
    if(value === '') return;

    infoData.push({ type, value });
    renderInfo();
    createInput(type);
});

function renderInfo() {
    infoList.innerHTML = '';
    infoData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'info-item';
        div.textContent = `${item.type}: ${item.value}`;
        infoList.appendChild(div);
    });
}

// Initialize input for first type
createInput(infoType.value);

