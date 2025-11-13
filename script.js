"use strict";

const input1 = document.getElementById('input1');
const input2 = document.getElementById('output1');
const input2A = document.getElementById('input2A');
const input2B = document.getElementById('input2B');
const output2A = document.getElementById('output2A');
const input3A = document.getElementById('input3A');
const input3B = document.getElementById('input3B');
const output3 = document.getElementById('output3');
const input4A = document.getElementById('input4A');
const input4B = document.getElementById('input4B');
const output4 = document.getElementById('output4');
const input5A = document.getElementById('input5A');
const input5B = document.getElementById('input5B');
const output5 = document.getElementById('output5');
const input6A = document.getElementById('input6A');
const input6B = document.getElementById('input6B');
const output6 = document.getElementById('output6');
const input7A = document.getElementById('input7A');
const input7B = document.getElementById('input7B');
const output7 = document.getElementById('output7');

input1.checked = false;
output1.checked = true;
input2.checked = true;
output4.checked = true;
output5.checked = true;
output7.checked = true;

input1.addEventListener('change', () => {
  output1.checked = !input1.checked;
});

output1.addEventListener('change', () => {
  input1.checked = !output1.checked;
});



input2A.addEventListener('change', () => {
  if (input2A.checked && input2B.checked) {
    output2A.checked = true;
  } else {
    output2A.checked = false;
  }
});

input2B.addEventListener('change', () => {
  if (input2A.checked && input2B.checked) {
    output2A.checked = true;
  } else {
    output2A.checked = false;
  }
});

input3A.addEventListener('change', () => {
  output3.checked = input3A.checked || input3B.checked;
});

input3B.addEventListener('change', () => {
  output3.checked = input3A.checked || input3B.checked;
});

input4A.addEventListener('change', () => {
  output4.checked = !(input4A.checked || input4B.checked);
});

input4B.addEventListener('change', () => {
  output4.checked = !(input4A.checked || input4B.checked);
});

// NAND Gate
input5A.addEventListener('change', () => {
  if (input5A.checked && input5B.checked) {
    output5.checked = false;
  } else {
    output5.checked = true;
  }
});
input5B.addEventListener('change', () => {
  if (input5A.checked && input5B.checked) {
    output5.checked = false;
  } else {
    output5.checked = true;
  }
});

// XOR Gate
input6A.addEventListener('change', () => {
  if (input6A.checked != input6B.checked) {
    output6.checked = true;
  } else {
    output6.checked = false;
  }
});
input6B.addEventListener('change', () => {
  if (input6A.checked != input6B.checked) {
    output6.checked = true;
  } else {
    output6.checked = false;
  }
});

// XNOR Gate
input7A.addEventListener('change', () => {
  if (input7A.checked == input7B.checked) {
    output7.checked = true;
  } else {
    output7.checked = false;
  }
});
input7B.addEventListener('change', () => {
  if (input7A.checked == input7B.checked) {
    output7.checked = true;
  } else {
    output7.checked = false;
  }
});
