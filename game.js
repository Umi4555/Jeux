class ChasseDesBugs {
  constructor() {
    this.challenges = {
      python: [
        {
          originalCode: `
def say_hello(name)
    print("Hello", name)
          `.trim(),
          fixedCode: `
def say_hello(name):
    print("Hello", name)
          `.trim(),
          description: "Corriger la déclaration de fonction et ajouter les deux-points",
          bugs: ["Manque de deux-points après la définition de fonction"]
        },
        {
          originalCode: `
numbers = [1, 2, 3, 4, 5]

print(numbers[5])
          `.trim(),
          fixedCode: `
numbers = [1, 2, 3, 4, 5]

print(numbers[4])
          `.trim(),
          description: "Corriger l'index de la liste pour éviter une erreur d'index",
          bugs: ["Index hors limite"]
        },
        {
          originalCode: `
age = "25"

print(age + 5)
          `.trim(),
          fixedCode: `
age = int("25")

print(age + 5)
          `.trim(),
          description: "Convertir une chaîne en entier avant d'additionner",
          bugs: ["Type incompatible pour l'addition"]
        },
        {
          originalCode: `
def increment():
    count += 1
    print(count)

count = 0
increment()
          `.trim(),
          fixedCode: `
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
          originalCode: `
x = 10
while x > 0:
    print(x)
          `.trim(),
          fixedCode: `
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
          originalCode: `
p, h1 h2 {
    color: blue;
}
          `.trim(),
          fixedCode: `
p, h1, h2 {
    color: blue;
}
          `.trim(),
          description: "Corriger le sélecteur pour cibler tous les éléments",
          bugs: ["Sélecteur de balise incorrect"]
        },
        {
          originalCode: `
div {
    background-color: red;
    border-radius: 10xp;
}
          `.trim(),
          fixedCode: `
div {
    background-color: red;
    border-radius: 10px;
}
          `.trim(),
          description: "Corriger l'unité de border-radius",
          bugs: ["Unité incorrecte"]
        },
        {
          originalCode: `
.box {
    width: 100;
    height: 200px;
}
          `.trim(),
          fixedCode: `
.box {
    width: 100px;
    height: 200px;
}
          `.trim(),
          description: "Ajouter l'unité px à la largeur",
          bugs: ["Unité manquante"]
        },
        {
          originalCode: `
a:hover {
    text-decoration: none
}
          `.trim(),
          fixedCode: `
a:hover {
    text-decoration: none;
}
          `.trim(),
          description: "Ajouter un point-virgule à la fin de la propriété",
          bugs: ["Point-virgule manquant"]
        },
        {
          originalCode: `
.hidden {
    display: nonee;
}
          `.trim(),
          fixedCode: `
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
          originalCode: `
<h1>Bienvenue</h1>

<p>Bonjour à tous<p>
          `.trim(),
          fixedCode: `
<h1>Bienvenue</h1>

<p>Bonjour à tous</p>
          `.trim(),
          description: "Fermer correctement la balise paragraphe",
          bugs: ["Balise mal fermée"]
        },
        {
          originalCode: `
<img scr="image.jpg" alt="Une image">
          `.trim(),
          fixedCode: `
<img src="image.jpg" alt="Une image">
          `.trim(),
          description: "Corriger l'attribut source de l'image",
          bugs: ["Attribut source incorrect"]
        },
        {
          originalCode: `
<form action="submit.php">
    <input type="text" name="nom">
    <button>Envoyer</batton>
</form>
          `.trim(),
          fixedCode: `
<form action="submit.php">
    <input type="text" name="nom">
    <button>Envoyer</button>
</form>
          `.trim(),
          description: "Corriger la fermeture de la balise bouton",
          bugs: ["Balise bouton incorrecte"]
        },
        {
          originalCode: `
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
          fixedCode: `
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
          originalCode: `
<a href="page.html">Lien<a>
          `.trim(),
          fixedCode: `
<a href="page.html">Lien</a>
          `.trim(),
          description: "Fermer correctement la balise de lien",
          bugs: ["Balise de lien incorrecte"]
        }
      ],
      javascript: [
        {
          originalCode: `
console.log(message);

var message = "Bonjour";
          `.trim(),
          fixedCode: `
var message = "Bonjour";

console.log(message);
          `.trim(),
          description: "Déclarer la variable avant son utilisation",
          bugs: ["Variable utilisée avant sa déclaration"]
        },
        {
          originalCode: `
function add(a, b) 
    return a + b;
          `.trim(),
          fixedCode: `
function add(a, b) {
    return a + b;
}
          `.trim(),
          description: "Ajouter des accolades à la fonction",
          bugs: ["Accolades manquantes"]
        },
        {
          originalCode: `
let x = "5";
let y = 3;
let result = x = y;
          `.trim(),
          fixedCode: `
let x = "5";
let y = 3;
let result = x + y;
          `.trim(),
          description: "Corriger l'opération de concaténation/addition",
          bugs: ["Opération de comparaison au lieu d'addition"]
        },
        {
          originalCode: `
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[numbers.length]);
          `.trim(),
          fixedCode: `
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[numbers.length - 1]);
          `.trim(),
          description: "Corriger l'index pour accéder au dernier élément",
          bugs: ["Index hors limite"]
        },
        {
          originalCode: `
function multiply(a, b) {
    result = a * b;
    return result;
}
          `.trim(),
          fixedCode: `
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
    
    // Create a new method to highlight the bug
    const highlightBug = (code, bugs) => {
      const lines = code.split('\n');
      const highlightedLines = lines.map(line => {
        const bugMatch = bugs.find(bug => line.includes(bug));
        if (bugMatch) {
          return `<mark class="bug-highlight">${line}</mark>`;
        }
        return line;
      });
      return highlightedLines.join('\n');
    };

    const highlightedCode = highlightBug(this.currentChallenge.originalCode, this.currentChallenge.bugs);
    
    codeDisplay.innerHTML = highlightedCode;
    codeDisplay.className = `language-${this.currentLanguage}`;
    
    // Update challenge description
    document.getElementById('challenge-description').textContent = this.currentChallenge.description;

    // Clear previous results
    document.getElementById('debug-input').value = this.currentChallenge.originalCode;
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

    if (submittedCode === this.currentChallenge.fixedCode.trim()) {
      resultMessage.textContent = 'Bravo ! Le code est maintenant corrigé !';
      resultMessage.style.color = 'var(--accent-color)';
    } else {
      resultMessage.textContent = 'Oops ! Vérifiez votre correction.';
      resultMessage.style.color = 'red';
    }
  }

  revealSolution() {
    const debugInput = document.getElementById('debug-input');
    const resultMessage = document.getElementById('result-message');
    
    debugInput.value = this.currentChallenge.fixedCode;
    debugInput.style.color = '#f1fa8c';  
    debugInput.style.fontWeight = 'bold';
    
    // Add detailed explanation based on the current challenge's bugs
    const explanationMap = {
      python: {
        "Manque de deux-points après la définition de fonction": "En Python, les définitions de fonction doivent se terminer par deux-points (:) pour ouvrir le bloc de code.",
        "Index hors limite": "Les indices de liste commencent à 0. Donc pour un tableau de 5 éléments, le dernier index est 4.",
        "Type incompatible pour l'addition": "En Python, vous devez convertir une chaîne en entier avec int() avant de faire des opérations mathématiques.",
        "Variable non déclarée comme globale": "Pour modifier une variable définie en dehors d'une fonction, utilisez le mot-clé 'global'.",
        "Boucle infinie sans décrémentation": "Dans une boucle while, assurez-vous de modifier la variable de contrôle pour éviter une boucle infinie."
      },
      javascript: {
        "Variable utilisée avant sa déclaration": "En JavaScript, utilisez 'let' ou 'const' et déclarez vos variables avant de les utiliser pour éviter les problèmes de hoisting.",
        "Accolades manquantes": "Les fonctions JavaScript nécessitent des accolades {} pour définir leur bloc de code.",
        "Opération de comparaison au lieu d'addition": "Vérifiez que vous utilisez + pour concaténer des chaînes ou additionner des nombres selon le contexte.",
        "Index hors limite": "Les indices de tableau commencent à 0. Utilisez length - 1 pour accéder au dernier élément.",
        "Variable non déclarée": "Déclarez toujours vos variables avec let, const, ou var avant de les utiliser."
      },
      html: {
        "Balise mal fermée": "Assurez-vous que chaque balise ouvrante a une balise fermante correspondante.",
        "Attribut source incorrect": "Vérifiez l'orthographe des attributs (src pour les images, pas scr).",
        "Balise bouton incorrecte": "Fermez correctement les balises avec </balise>.",
        "Balises mal fermées": "Vérifiez que toutes les balises head, body, etc. sont correctement fermées.",
        "Balise de lien incorrecte": "Les balises <a> doivent être correctement fermées avec </a>."
      },
      css: {
        "Sélecteur de balise incorrect": "Utilisez des virgules pour séparer les différents sélecteurs.",
        "Unité incorrecte": "Utilisez les unités correctes (px, em, %, etc.).",
        "Unité manquante": "N'oubliez pas d'ajouter une unité aux valeurs de dimensions.",
        "Point-virgule manquant": "Terminez chaque déclaration CSS par un point-virgule (;).",
        "Valeur incorrecte": "Vérifiez l'orthographe des valeurs de propriétés CSS."
      }
    };

    // Find the first matching bug explanation
    let explanation = "Solution détaillée :";
    for (let bug of this.currentChallenge.bugs) {
      const bugExplanation = explanationMap[this.currentLanguage][bug];
      if (bugExplanation) {
        explanation += `\n\n• ${bugExplanation}`;
      }
    }
    
    resultMessage.innerHTML = `<strong>${explanation}</strong>`;
    resultMessage.style.color = 'var(--accent-color)';
    resultMessage.style.fontSize = '1em';
    resultMessage.style.textAlign = 'left';
    resultMessage.style.whiteSpace = 'pre-wrap';
  }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  new ChasseDesBugs();
});

export default ChasseDesBugs;
