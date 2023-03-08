// Define an object with trait information
var strengths = {
    'ESTJ': 'Extravert | Sensing | Thinking | Judging.<br><br>You are a type ESTJ, aka The Supervisor. You tend to be logical and assertive above all else. You should consider a job in leadership or law.',
    'ISTJ': 'ISTJs (Introverted, Sensing, Thinking, Judging) are often known for their strong sense of responsibility and their dependable, practical nature. Here are some of the key strengths of ISTJs:<br><br> Dependability: ISTJs are known for their sense of duty and responsibility, and they are often highly dependable individuals who follow through on their commitments. They are reliable and trustworthy, making them valuable assets in both personal and professional relationships.<br><br>Organization: ISTJs are often highly organized and efficient, and they excel at creating and maintaining systems and structures that help them achieve their goals. They are meticulous in their attention to detail and are often excellent problem-solvers.<br><br>Practicality: ISTJs make decisions based on logic and common sense, and they are highly practical in their approach to life. They are not easily swayed by emotions or abstract ideas, and they focus on finding practical solutions to problems.<br><br>Traditional values: ISTJs often value stability and tradition, and they have a strong connection to their family and cultural heritage. They are often respected for their stability and dependability, and they bring a sense of order and structure to the people and environments around them.<br><br>Strong work ethic: ISTJs are hard-working and dedicated, and they take their responsibilities seriously. They are often drawn to careers in fields such as law enforcement, accounting, and management, where they can use their sense of duty and responsibility to make a positive impact.<br><br>Overall, ISTJs are valued for their dependability, organization, and practicality. They bring stability and order to their families, friends, and communities, and they are often respected for their strong sense of responsibility and their ability to get things done.',
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

var weaknesses = {
    'ISTJ': 'Like all personality types, ISTJs (Introverted, Sensing, Thinking, Judging) have certain inherent weaknesses that can sometimes limit their effectiveness and impact in certain situations. Here are some of the key weaknesses of ISTJs:<br>Rigidity: ISTJs may have a tendency to be overly rigid in their thinking and approach to life, and they may struggle with change and new ideas. They may be resistant to trying new things and may have trouble adapting to new or unconventional ways of doing things.<br>Lack of flexibility: ISTJs are often highly organized and efficient, and they may struggle to adapt to unexpected changes or shifting priorities. They may have trouble adapting to new situations or changing their plans on the fly, and they may become frustrated when things do not go as expected.<br>Difficulty expressing emotions: ISTJs are often logical and practical in their approach to life, and they may struggle to express their emotions effectively. They may come across as cold or aloof, and they may have trouble connecting with others on an emotional level.<br>Over-reliance on tradition: ISTJs often value tradition and stability, and they may be resistant to new ideas and innovative solutions. They may be slow to embrace new technologies or ways of doing things, and they may struggle to keep up with changes in their field or industry.<br> Lack of creativity: ISTJs are often highly practical and logical in their thinking, and they may struggle with creative or imaginative tasks. They may have difficulty generating new ideas or thinking outside of the box, and they may become frustrated when faced with tasks that require creative thinking.<br>Overall, ISTJs strengths in dependability, organization, and practicality can sometimes be balanced by their weaknesses in flexibility, emotional expression, and creativity. However, by working on these areas and developing new skills, ISTJs can become more well-rounded and effective individuals.',
}

// Function to show trait info
function showInfo(optionName) {
    tName = document.getElementById('trait-name').textContent;
    console.log(tName)
    // Store the selected trait name in local storage
    localStorage.setItem('selectedOption', optionName);
    localStorage.setItem('selectedTrait', tName);
    // Redirect to the trait-info.html page
    location.href = 'more-Info.html';
}

// Function to retrieve trait info
function getOptionInfo(tName) {
    // Return the trait information from the traitInfo object
    return strengths[tName];
}

// Code to execute on the trait-info.html page
if (location.href.indexOf('more-Info.html') !== -1) {
    // Get the selected trait name from local storage
    var optionName = localStorage.getItem('selectedOption');
    // Set the trait name as the page header
    document.getElementById('option-name').innerHTML = optionName;
    // Get the trait info using the selected trait name
    var tName = localStorage.getItem('selectedTrait')
    var optionInfo = getOptionInfo(tName);
    // Update the trait-info div with the retrieved trait info
    document.getElementById('option-info').innerHTML = optionInfo;
}