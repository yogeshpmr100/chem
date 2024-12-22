// Complete script.js with all 50 questions from your chemistry test
const questions = [
    {
        question: "If n(g) = 0 for (g) n p c K K (RT), then",
        options: ["pcKK", "pcKK", "pcKK", "pcKK"],
        correctAnswer: 0,
        explanation: "When n(g) = 0, the equilibrium constant expression simplifies to pcKK."
    },
    {
        question: "For the reaction 3(s) → (s) + 2(g) CaCO CaO CO, what is the formula of equilibrium constant KP?",
        options: ["KP = PCO₂", "P CO₂ CaO K P P", "PCO₂·PCaO/PCaCO₃", "P CaO K P"],
        correctAnswer: 0
    },
    {
        question: "2SO2 + O2 → 2SO3 + heat. If temperature increases, what will be the effect on KC?",
        options: ["will increase", "will decrease", "will remain constant", "will be zero"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is not Lewis acid?",
        options: ["BF₃", "NH₃", "Ag⁺", "AlCl₃"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is not weak acid?",
        options: ["C₆H₅OH", "HCN", "HCl", "HCOOH"],
        correctAnswer: 2
    },
    {
        question: "What is the pOH of aqueous solution of Hydrazine?",
        options: ["> 7", "= 7", "< 7", "7"],
        correctAnswer: 0
    },
    {
        question: "Solution of which salt of the following is basic?",
        options: ["KCl", "NH₄Cl", "CH₃COONa", "KNO₃"],
        correctAnswer: 2
    },
    {
        question: "What is the relation between hydrolysis constant and ionization constant of base?",
        options: ["Kw/Kh/Kb", "Kh·Kw·Kb", "Kb·CO[OH]", "Kw/Kh/Ka"],
        correctAnswer: 0
    },
    {
        question: "Oxygen has an oxidation state of +2 in",
        options: ["H₂O₂", "H₂O", "OF₂", "SO₂"],
        correctAnswer: 2
    },
    {
        question: "Oxidation number of fluorine in F₂O is",
        options: ["-1", "+1", "+2", "-2"],
        correctAnswer: 0
    },
    {
        question: "Oxidation number of O in H₂O₂ will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1
    },
    {
        question: "Oxidation number of O in K₂O will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 0
    },
    {
        question: "Oxidation number of O in RbO₂ will be",
        options: ["-2", "-1/2", "+1/2", "+2"],
        correctAnswer: 1
    },
    {
        question: "Oxidation number of N₃H will be",
        options: ["-2", "-1", "+1", "0"],
        correctAnswer: 0
    },
    {
        question: "Oxidation number of H in LiAlH₄ will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1
    },
    {
        question: "Oxidation number of O in HO₂⁻¹ will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1
    },
    {
        question: "Oxidation number of Cl in HClO₄ will be",
        options: ["-2", "-1", "+1", "+7"],
        correctAnswer: 3
    },
    {
        question: "Oxidation number of Mg in MgS will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 3
    },
    {
        question: "Charge of Nitrate ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1
    },
    {
        question: "Charge of Dichromate ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 0
    },
    {
        question: "Charge of Chlorate ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 1
    },
    {
        question: "Charge of Sulphide ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 0
    },
    {
        question: "Charge of Arsenate ion will be",
        options: ["-2", "-3", "+3", "+2"],
        correctAnswer: 1
    },
    {
        question: "Charge of Ammonium ion will be",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: 2
    },
    {
        question: "Oxidation number of Cl in ClO₂ will be",
        options: ["-4", "-3", "+4", "+3"],
        correctAnswer: 2
    },
    {
        question: "Oxidation number of Cl in Cl₂O₇ will be",
        options: ["-7", "-2", "+7", "+2"],
        correctAnswer: 2
    },
    {
        question: "Oxidation number of Be in BeH₂ will be",
        options: ["-2", "-3", "+2", "+3"],
        correctAnswer: 2
    },
    {
        question: "Oxidation number of S in H₂SO₄ will be",
        options: ["-4", "-3", "-2", "-1"],
        correctAnswer: 0
    },
    {
        question: "Which of the following statement is correct?",
        options: ["Reducing agent is reduced", "Oxidising agent is oxidized", "Reducing agent is oxidized", "Oxidation and reduction does not occur in the reaction"],
        correctAnswer: 2
    },
    {
        question: "In the reaction H₂(g)+Br₂(g)→2HBr(g) which substance undergoes oxidation?",
        options: ["H₂(g)", "Br₂(g)", "HBr", "H₂(g) and Br₂(g)"],
        correctAnswer: 0
    },
    {
        question: "Which atom can have positive and negative oxidation number in their compounds?",
        options: ["F", "Na", "Ar", "Cl"],
        correctAnswer: 3
    },
    {
        question: "When Cu metal strip is dipped in AgNO₃ aqueous solution, which phenomena will occur?",
        options: ["Intensity of blue colour increases", "Ag is not deposited", "Intensity of blue colour decreases", "Cu is deposited"],
        correctAnswer: 0
    },
    {
        question: "When Ag ring is kept in CuSO₄ aqueous solution, which phenomena will occur?",
        options: ["Intensity of blue colour increases", "Ag is not deposited", "Intensity of blue colour decreases", "No Reaction"],
        correctAnswer: 3
    },
    {
        question: "Correct statement regarding molecules SF₄, CF₄ and XeF₄ are:",
        options: ["2, 0 and 1 lone pairs of central atom respectively", "1, 0 and 1 lone pairs of central atom respectively", "0, 0 and 2 lone pairs of central atom respectively", "1, 0 and 2 lone pairs of central atom respectively"],
        correctAnswer: 3
    },
    {
        question: "Which pair of elements can form multiple bond with itself and oxygen?",
        options: ["F, N", "N, Cl", "N, P", "N, C"],
        correctAnswer: 3
    },
    {
        question: "The ratio of π-bond and σ-bond in tetracyanoethylene is:",
        options: ["2:1", "1:1", "1:2", "None of these"],
        correctAnswer: 0
    },
    {
        question: "Resonance structures can be written for:",
        options: ["O₃", "NH₃", "CH₄", "H₂O"],
        correctAnswer: 0
    },
    {
        question: "Which statement is incorrect for PCl₅?",
        options: ["Its three P-Cl bond lengths are equal", "It involves sp³d hybridization", "It has a regular geometry", "Its shape is trigonal bipyramidal"],
        correctAnswer: 0
    },
    {
        question: "The number of sp² - s sigma bonds in benzene are:",
        options: ["3", "6", "12", "none of these"],
        correctAnswer: 2
    },
    {
        question: "The structure of XeF₄ is:",
        options: ["square planar", "distorted tetrahedral", "tetrahedral", "octahedral"],
        correctAnswer: 0
    },
    {
        question: "CH₃-CH₂-CH=CH₂ has hybridisation:",
        options: ["sp, sp, sp², sp²", "sp³, sp³, sp², sp", "sp³, sp³, sp², sp²", "sp³, sp², sp², sp"],
        correctAnswer: 2
    },
    {
        question: "Which molecular geometry is least likely to result from a trigonal bipyramidal electron geometry?",
        options: ["Trigonal planar", "See-saw", "Linear", "T-shaped"],
        correctAnswer: 2
    },
    {
        question: "The correct order of H-M-H bond angles is:",
        options: ["NH₃ < PH₃ < SbH₃ < BiH₃", "AsH₃ < SbH₃ < PH₃ < NH₃", "NH₃ < PH₃ < BiH₃ < SbH₃", "BiH₃ < SbH₃ < AsH₃ < PH₃"],
        correctAnswer: 1
    },
    {
        question: "The H-C-H bond angle in CH₄ is 109.5°, due to lone pair repulsion, the H-O-H angle in H₂O will:",
        options: ["remain the same", "increase", "decrease", "become 180°"],
        correctAnswer: 2
    },
    {
        question: "Why is BF₃ non-polar while NF₃ is polar?",
        options: ["Nitrogen atom is smaller than boron atom", "N-F bond is more polar than B-F bond", "NF₃ is pyramidal whereas BF₃ is planar triangular", "BF₃ is electron deficient whereas NF₃ is not"],
        correctAnswer: 2
    },
    {
        question: "Dipole moment of NF₃ is smaller than:",
        options: ["NH₃", "CO₂", "BF₃", "CCl₄"],
        correctAnswer: 0
    },
    {
        question: "Which molecule will have polar bonds but zero dipole moment?",
        options: ["O₂", "CHCl₃", "CF₄", "none of these"],
        correctAnswer: 2
    },
    {
        question: "Which is an example of super octet molecule?",
        options: ["ClF₃", "PCl₅", "IF₇", "All of these"],
        correctAnswer: 3
    },
    {
        question: "In H₂SO₄, the total number of unshared electrons is:",
        options: ["20", "16", "12", "8"],
        correctAnswer: 0
    },
    {
        question: "If oxidation of A=+2, B=+5 and C=-2, the possible formula of the compound is:",
        options: ["A₃(B₄C)₂", "A₃(BC₄)₂", "A₂(BC₃)₂", "ABC₂"],
        correctAnswer: 2
    },
    {
        question: "What is the experimental value of O-O bond length in ozone?",
        options: ["1.28 Å", "1.48 Å", "1.21 Å", "1.18 Å"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Array(questions.length).fill(false);

function initializeQuiz() {
    loadQuestion();
    updateProgress();
}

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = `${currentQuestion + 1}. ${question.question}`;
    
    const options = document.getElementsByClassName('option');
    for(let i = 0; i < options.length; i++) {
        options[i].textContent = question.options[i];
        options[i].className = 'option';
    }
    
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    updateNavigationButtons();
}

function checkAnswer(selectedOption) {
    if(answeredQuestions[currentQuestion]) return;
    
    const question = questions[currentQuestion];
    const options = document.getElementsByClassName('option');
    
    if(selectedOption === question.correctAnswer) {
        options[selectedOption].classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
    } else {
        options[selectedOption].classList.add('wrong');
        options[question.correctAnswer].classList.add('correct');
    }
    
    answeredQuestions[currentQuestion] = true;
    updateProgress();
}

function nextQuestion() {
    if(currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if(currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = (currentQuestion + 1) / questions.length * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').disabled = currentQuestion === questions.length - 1;
}

function submitQuiz() {
    const percentage = (score / questions.length) * 100;
    alert(`Quiz completed!\nYour score: ${score}/${questions.length} (${percentage.toFixed(2)}%)`);
}

// Initialize when page loads
window.onload = initializeQuiz;
