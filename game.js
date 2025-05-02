class ChasseDesBugs {
  constructor() {
    this.challenges = {
      python: [
        {
          code: `
def say_hello(name)
    print("Hello", name)
          `.trim(),
          solution: `
def say_hello(name):
    print("Hello", name)
          `.trim(),
          description: "Corriger la déclaration de fonction et ajouter les deux-points",
          bugs: ["Manque de deux-points après la définition de fonction"]
        },
        {
          code: `
numbers = [1, 2, 3, 4, 5]

print(numbers[5])
          `.trim(),
          solution: `
numbers = [1, 2, 3, 4, 5]

print(numbers[4])
          `.trim(),
          description: "Corriger l'index de la liste pour éviter une erreur d'index",
          bugs: ["Index hors limite"]
        },
        {
          code: `
age = "25"

print(age + 5)
          `.trim(),
          solution: `
age = int("25")

print(age + 5)
          `.trim(),
          description: "Convertir une chaîne en entier avant d'additionner",
          bugs: ["Type incompatible pour l'addition"]
        },
        {
          code: `
def increment():
    count += 1
    print(count)

count = 0
increment()
          `.trim(),
          solution: `
count = 0

def increment():
    global count
    count += 1
    print(count)

increment()
          `.trim(),
          description: "Utiliser le mot-clé global pour modifier une variable externe",
          bugs: ["Variable non déclarée comme globale"]
        },
        {
          code: `
x = 10
while x > 0:
    print(x)
          `.trim(),
          solution: `
x = 10
while x > 0:
    print(x)
    x -= 1
          `.trim(),
          description: "Ajouter une décrémentation pour éviter la boucle infinie",
          bugs: ["Boucle infinie sans décrémentation"]
        }
      ],
      css: [
        {
          code: `
p, h1 h2 {
    color: blue;
}
          `.trim(),
          solution: `
p, h1, h2 {
    color: blue;
}
          `.trim(),
          description: "Corriger le sélecteur pour cibler tous les éléments",
          bugs: ["Sélecteur de balise incorrect"]
        },
        {
          code: `
div {
    background-color: red;
    border-radius: 10xp;
}
          `.trim(),
          solution: `
div {
    background-color: red;
    border-radius: 10px;
}
          `.trim(),
          description: "Corriger l'unité de border-radius",
          bugs: ["Unité incorrecte"]
        },
        {
          code: `
.box {
    width: 100;
    height: 200px;
}
          `.trim(),
          solution: `
.box {
    width: 100px;
    height: 200px;
}
          `.trim(),
          description: "Ajouter l'unité px à la largeur",
          bugs: ["Unité manquante"]
        },
        {
          code: `
a:hover {
    text-decoration: none
}
          `.trim(),
          solution: `
a:hover {
    text-decoration: none;
}
          `.trim(),
          description: "Ajouter un point-virgule à la fin de la propriété",
          bugs: ["Point-virgule manquant"]
        },
        {
          code: `
.hidden {
    display: nonee;
}
          `.trim(),
          solution: `
.hidden {
    display: none;
}
          `.trim(),
          description: "Corriger la valeur de display",
          bugs: ["Valeur incorrecte"]
        }
      ],
      html: [
        {
          code: `
<h1>Bienvenue</h1>

<p>Bonjour à tous<p>
          `.trim(),
          solution: `
<h1>Bienvenue</h1>

<p>Bonjour à tous</p>
          `.trim(),
          description: "Fermer correctement la balise paragraphe",
          bugs: ["Balise mal fermée"]
        },
        {
          code: `
<img scr="image.jpg" alt="Une image">
          `.trim(),
          solution: `
<img src="image.jpg" alt="Une image">
          `.trim(),
          description: "Corriger l'attribut source de l'image",
          bugs: ["Attribut source incorrect"]
        },
        {
          code: `
<form action="submit.php">
    <input type="text" name="nom">
    <button>Envoyer</batton>
</form>
          `.trim(),
          solution: `
<form action="submit.php">
    <input type="text" name="nom">
    <button>Envoyer</button>
</form>
          `.trim(),
          description: "Corriger la fermeture de la balise bouton",
          bugs: ["Balise bouton incorrecte"]
        },
        {
          code: `
<!DOCTYPE html>
<html>
    <head>
        <title>Ma Page</title>
    <head>
    <body>
        <h1>Bonjour</h1>
    </body>
</html>
          `.trim(),
          solution: `
<!DOCTYPE html>
<html>
    <head>
        <title>Ma Page</title>
    </head>
    <body>
        <h1>Bonjour</h1>
    </body>
</html>
          `.trim(),
          description: "Corriger les balises head et fermer correctement",
          bugs: ["Balises mal fermées"]
        },
        {
          code: `
<a href="page.html">Lien<a>
          `.trim(),
          solution: `
<a href="page.html">Lien</a>
          `.trim(),
          description: "Fermer correctement la balise de lien",
          bugs: ["Balise de lien incorrecte"]
        }
      ],
      javascript: [
        {
          code: `
console.log(message);

var message = "Bonjour";
          `.trim(),
          solution: `
var message = "Bonjour";

console.log(message);
          `.trim(),
          description: "Déclarer la variable avant son utilisation",
          bugs: ["Variable utilisée avant sa déclaration"]
        },
        {
          code: `
function add(a, b) 
    return a + b;
          `.trim(),
          solution: `
function add(a, b) {
    return a + b;
}
          `.trim(),
          description: "Ajouter des accolades à la fonction",
          bugs: ["Accolades manquantes"]
        },
        {
          code: `
let x = "5";
let y = 3;
let result = x = y;
          `.trim(),
          solution: `
let x = "5";
let y = 3;
let result = x + y;
          `.trim(),
          description: "Corriger l'opération de concaténation/addition",
          bugs: ["Opération de comparaison au lieu d'addition"]
        },
        {
          code: `
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[numbers.length]);
          `.trim(),
          solution: `
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[numbers.length - 1]);
          `.trim(),
          description: "Corriger l'index pour accéder au dernier élément",
          bugs: ["Index hors limite"]
        },
        {
          code: `
function multiply(a, b) {
    result = a * b;
    return result;
}
          `.trim(),
          solution: `
function multiply(a, b) {
    let result = a * b;
    return result;
}
          `.trim(),
          description: "Déclarer la variable result avec let",
          bugs: ["Variable non déclarée"]
        }
      ]
    };

    this.currentLanguage = null;
    this.currentChallenge = null;

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Language Selection Buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
      button.addEventListener('click', () => this.startGame(button.dataset.lang));
    });

    // Back to Home Button
    document.getElementById('back-to-home').addEventListener('click', () => this.showHomeScreen());

    // Game Screen Buttons
    document.getElementById('change-challenge').addEventListener('click', () => this.loadRandomChallenge());
    document.getElementById('submit-debug').addEventListener('click', () => this.checkSolution());
    document.getElementById('show-solution').addEventListener('click', () => this.revealSolution());
  }

  startGame(language) {
    this.currentLanguage = language;
    
    // Update UI
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    document.getElementById('current-language-label').textContent = language.toUpperCase();
    
    // Load first challenge
    this.loadRandomChallenge();
  }

  loadRandomChallenge() {
    const challenges = this.challenges[this.currentLanguage];
    this.currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];

    // Update code display
    const codeDisplay = document.getElementById('code-display');
    codeDisplay.textContent = this.currentChallenge.code;
    codeDisplay.className = `language-${this.currentLanguage}`;
    
    // Update challenge description
    document.getElementById('challenge-description').textContent = this.currentChallenge.description;

    // Clear previous results
    document.getElementById('debug-input').value = '';
    document.getElementById('result-message').textContent = '';

    // Re-highlight code
    Prism.highlightElement(codeDisplay);
  }

  showHomeScreen() {
    document.getElementById('home-screen').classList.add('active');
    document.getElementById('game-screen').classList.remove('active');
  }

  checkSolution() {
    const submittedCode = document.getElementById('debug-input').value.trim();
    const resultMessage = document.getElementById('result-message');

    if (submittedCode === this.currentChallenge.solution.trim()) {
      resultMessage.textContent = 'Bravo ! Le code est maintenant corrigé !';
      resultMessage.style.color = 'var(--accent-color)';
    } else {
      resultMessage.textContent = 'Oops ! Vérifiez votre correction.';
      resultMessage.style.color = 'red';
    }
  }

  revealSolution() {
    document.getElementById('debug-input').value = this.currentChallenge.solution;
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = 'Solution révélée. Essayez de comprendre chaque correction !';
    resultMessage.style.color = 'var(--accent-color)';
  }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  new ChasseDesBugs();
});

export default ChasseDesBugs;