<<<<<<< HEAD
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
=======
document.addEventListener("DOMContentLoaded", function() {
  // ---------- Name Validation ----------
  const nameInput = document.getElementById("nameInput");
  const nameBtn = document.getElementById("nameBtn");
  const nameMsg = document.getElementById("nameMsg");

  nameBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let name = nameInput.value.trim();

  
    if (name === "") {
      nameMsg.textContent = "Name cannot be empty.";
      return;
    }

    let words = name.split(" ").filter(Boolean);
    if (words.length < 2) {
      nameMsg.textContent = "Name must contain at least two words.";
      return;
    }

    
    let allowed = true;
    for (let i = 0; i < name.length; i++) {
      let ch = name[i];
      if (
        !(
          (ch >= "A" && ch <= "Z") ||
          (ch >= "a" && ch <= "z") ||
          ch === "." ||
          ch === "-" ||
          ch === " "
        )
      ) {
        allowed = false;
        break;
      }
    }
    if (!allowed) {
      nameMsg.textContent = "Name can only have letters, dots, dashes, and spaces.";
      return;
    }

    let first = name[0];
    if (!((first >= "A" && first <= "Z") || (first >= "a" && first <= "z"))) {
      nameMsg.textContent = "Name must start with a letter.";
      return;
    }

    nameMsg.textContent = "Name is valid!";
  });

  // ---------- Email Validation ----------
  const emailInput = document.getElementById("emailInput");
  const hintBtn = document.getElementById("hintBtn");
  const emailBtn = document.getElementById("emailBtn");
  const emailMsg = document.getElementById("emailMsg");

  hintBtn.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Hint: sample@example.com");
  });

  emailBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let email = emailInput.value.trim();

    
    if (email === "") {
      emailMsg.textContent = "Email cannot be empty.";
      return;
    }

    
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");

    if (
      atPos < 1 ||                    
      dotPos < atPos + 2 ||            
      dotPos === email.length - 1     
    ) {
      emailMsg.textContent = "Email must be valid (e.g., something@example.com).";
      return;
    }

    emailMsg.textContent = "Email is valid!";
  });
});

 // ---------- Gender ----------

document.addEventListener("DOMContentLoaded", function() {
  const genderBtn = document.getElementById("genderBtn");
  const genderMsg = document.getElementById("genderMsg");

  genderBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const genders = document.getElementsByName("gender");
    let selected = false;

    for (let i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        selected = true;
        break;
      }
    }

    if (!selected) {
      genderMsg.textContent = "Please select at least one gender.";
    } else {
      genderMsg.textContent = "Gender selected!";
    }
  });
});

// ------Date of Birth Validation---------
function validateDOB() {
  let d = Number.parseInt(document.getElementById("day").value);
  let m = Number.parseInt(document.getElementById("month").value);
  let y = Number.parseInt(document.getElementById("year").value);
  let msg = document.getElementById("dobMsg");

  if (!Number.isFinite(d) || !Number.isFinite(m) || !Number.isFinite(y)) {
    msg.innerHTML = "All fields must be numbers.";
    msg.style.color = "red";
    return false;
  }

  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2016) {
    msg.innerHTML = "Invalid date. (dd:1-31, mm:1-12, yyyy:1900-2016)";
    msg.style.color = "red";
    return false;
  }

  msg.innerHTML = "Valid Date of Birth ";
  msg.style.color = "green";
  return false;
}

// -------Degree Validation---------
function validateDegree() {
  let ssc = document.getElementById("ssc").checked;
  let hsc = document.getElementById("hsc").checked;
  let bsc = document.getElementById("bsc").checked;
  let msg = document.getElementById("degMsg");

  if (!ssc && !hsc && !bsc) {
    msg.innerHTML = "Select at least one degree.";
    msg.style.color = "red";
    return false;
  }

  msg.innerHTML = "Degree selected ";
  msg.style.color = "green";
  return false;
}

// -------------Blood Group Validation---------
function validateBlood() {
  let blood = document.getElementById("blood").value;
  let msg = document.getElementById("bloodMsg");

  if (blood === "") {
    msg.innerHTML = "Please select your blood group.";
    msg.style.color = "red";
    return false;
  }

  msg.innerHTML = "Blood group selected ";
  msg.style.color = "green";
  return false;
}

// -----Profile Picture Validation-------
function validateProfile() {
  let userId = document.getElementById("userId").value;
  let pic = document.getElementById("picture").value;
  let msg = document.getElementById("profileMsg");

  if (userId === "" || pic === "") {
    msg.innerHTML = "User Id and Picture must be provided.";
    msg.style.color = "red";
    return false;
  }

  msg.innerHTML = "Profile info valid ";
  msg.style.color = "green";
  return false;
}


// -----ASSIGNMENT-------

function validateProfileForm() {
  let msg = document.getElementById("msg");
  msg.style.color = "red";

 
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    msg.innerHTML = "Name cannot be empty.";
    return false;
  }

  
  let email = document.getElementById("email").value.trim();
  if (email === "") {
    msg.innerHTML = "Email cannot be empty.";
    return false;
  }

  
  let genders = document.getElementsByName("gender");
  let genderSelected = false;
  for (let g of genders) {
    if (g.checked) genderSelected = true;
  }
  if (!genderSelected) {
    msg.innerHTML = "Please select a gender.";
    return false;
  }

  let d = Number.parseInt(document.getElementById("day").value);
  let m = Number.parseInt(document.getElementById("month").value);
  let y = Number.parseInt(document.getElementById("year").value);

  if (!Number.isFinite(d) || !Number.isFinite(m) || !Number.isFinite(y)) {
    msg.innerHTML = "Date fields must be numbers.";
    return false;
  }
  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2016) {
    msg.innerHTML = "Invalid Date of Birth (dd:1–31, mm:1–12, yyyy:1900–2016).";
    return false;
  }

  
  let blood = document.getElementById("blood").value;
  if (blood === "") {
    msg.innerHTML = "Please select a blood group.";
    return false;
  }

  
  let ssc = document.getElementById("ssc").checked;
  let hsc = document.getElementById("hsc").checked;
  let bsc = document.getElementById("bsc").checked;
  let msc = document.getElementById("msc").checked;

  if (!ssc && !hsc && !bsc && !msc) {
    msg.innerHTML = "Select at least one degree.";
    return false;
  }

  
  let photo = document.getElementById("photo").value;
  if (photo === "") {
    msg.innerHTML = "Please upload a photo.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "inputs are valid";
  return false; 
}

function resetMsg() {
  document.getElementById("msg").innerHTML = "";
}



>>>>>>> 9804a196112e95dd222ee274cedfeeb78680f79d

