// Define an object with trait information
var traitInfo = {
  'ESTJ': 'Extravert | Sensing | Thinking | Judging.<br><br>You are a type ESTJ, aka The Supervisor. You tend to be logical and assertive above all else. You should consider a job in leadership or law.',
  'ISTJ': 'Introvert | Sensing | Thinking | Judging.<br><br>You are a type ISTJ, aka The Inspector. You tend to be practical and logical above all else. You should consider a job in accounting or engineering.',
  'ESFJ': 'Extravert | Sensing | Feeling | Judging.<br><br>You are a type ESFJ, aka The Provider. You tend to be sociable and caring above all else. You should consider a job in childcare or healthcare.',
  'ISFJ': 'Introvert | Sensing | Feeling | Judging.<br><br>You are a type ISFJ, aka The Protector. You tend to be sympathetic and organized above all else. You should consider a job in childcare or bookkeeping.',
  'ESTP': 'Extravert | Sensing | Thinking | Perceiving.<br><br>You are a type ESTP, aka The Promoter. You tend to be energetic and realistic above all else. You should consider a job in sales or forestry.',
  'ESFP': 'Extravert | Sensing | Feeling | Perceiving.<br><br>You are a type ESFP, aka The Performer.You tend to be caring and resourceful above all else. You should consider a job in hospitality or health care.',
  'ISTP': 'Introvert | Sensing | Thinking | Perceiving.<br><br>You are a type ISTP, aka The Operator. You tend to be analytical and practical above all else. You should consider a job in computer technology or farming.',
  'ISFP': 'Introvert | Sensing | Feeling | Perceiving.<br><br>You are a type ISFP, aka The Composer. You tend to be loyal and adaptable above all else. You should consider a job in teaching or nursing.',
  'ENTJ': 'Extravert | Intuitive | Thinking | Judging.<br><br>You are a type ENTJ, aka The Field Marshall. You tend to be organized and logical above all else. You should consider a job in law or engineering.',
  'ENFJ': 'Extravert | Intuitive | Feeling | Judging.<br><br>You are a type ENFJ, aka The Teacher. You tend to be passionate and imaginative above all else. You should consider a job in teaching or the arts.',
  'INTJ': 'Introvert | Intuitive | Thinking | Judging.<br><br>You are a type INTJ, aka The Mastermind. You tend to be decisive and insightful above all else. You should consider a job in architecture or engineering.',
  'INFJ': 'Introvert | Intuitive | Feeling | Judging.<br><br>You are a type INFJ, aka The Counselor. You tend to be sensitive and creative above all else. You should consider a job in education or the arts.',
  'ENTP': 'Extravert | Intuitive | Thinking | Perceiving.<br><br>You are a type ENTP, aka The Inventor. You tend to be enthusiastic and theoretical above all else. You should consider a job in business or sports.',
  'ENFP': 'Extravert | Intuitive | Feeling | Perceiving.<br><br>You are a type ENFP, aka The Champion. You tend to be imaginative and insightful above all else. You should consider a job in therapy or acting.',
  'INTP': 'Introvert | Intuitive | Thinking | Perceiving.<br><br>You are a type INTP, aka The Architect. You tend to be curious and analytical above all else. You should consider a job in architecture or construction.',
  'INFP': 'Introvert | Intuitive | Feeling | Perceiving.<br><br>You are a type INFP, aka The Healer. You tend to be empathetic and inquisitive above all else. You should consider a job in writing or graphic design.',
};

// Function to show trait info
function showTraitInfo(traitName) {
  // Store the selected trait name in local storage
  localStorage.setItem('selectedTrait', traitName);
  // Redirect to the trait-info.html page
  location.href = 'trait-info.html';
}

// Function to retrieve trait info
function getTraitInfo(traitName) {
  // Return the trait information from the traitInfo object
  return traitInfo[traitName];
}

// Code to execute on the trait-info.html page
if (location.href.indexOf('trait-info.html') !== -1) {
  // Get the selected trait name from local storage
  var traitName = localStorage.getItem('selectedTrait');
  // Set the trait name as the page header
  document.getElementById('trait-name').innerHTML = traitName;
  // Get the trait info using the selected trait name
  var traitInfo = getTraitInfo(traitName);
  // Update the trait-info div with the retrieved trait info
  document.getElementById('trait-info').innerHTML = traitInfo;
}
