// Structure de fichiers à copier dans ton projet GitHub pour l’étape 3 (Vercel)

// =========================
// 📄 index.html
// =========================
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercices Maths 6e</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>


// =========================
// 📄 main.jsx
// =========================
import React from "react";
import ReactDOM from "react-dom/client";
import ExercicesMaths6eme from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExercicesMaths6eme />
  </React.StrictMode>
);


// =========================
// 📄 App.jsx
// =========================
import { useState } from "react";

const questions = [
  { id: 1, text: "Colorie les 3/4 d’un rectangle divisé en 4 parties égales.", type: "instruction" },
  { id: 2, text: "Écris la fraction correspondant à une barre où 7 parties sur 10 sont coloriées.", type: "text" },
  { id: 3, text: "Place sur une droite graduée de 0 à 1 : 1/2, 1/4, 3/4, 2/3.", type: "instruction" },
  { id: 4, text: "Complète : 2/5 ___ 3/7", type: "text" },
  { id: 5, text: "Simplifie la fraction 8/12.", type: "text" },
  { id: 6, text: "Calcule : 1/3 + 1/6", type: "text" },
  { id: 7, text: "Calcule : 3/4 - 1/2", type: "text" },
  { id: 8, text: "Lisa boit 2/5 d’une bouteille. Son frère boit 1/5. Quelle quantité reste-t-il ?", type: "text" },
  { id: 9, text: "Classe les angles suivants : 45°, 90°, 120°, 180°.", type: "text" },
  { id: 10, text: "Trace un angle de 150° avec un rapporteur.", type: "instruction" },
  { id: 11, text: "Un angle mesure 37°. Combien manque-t-il pour former un angle droit ?", type: "text" },
  { id: 12, text: "Indique le nom du triangle : 3 côtés égaux, 3 angles égaux.", type: "text" },
  { id: 13, text: "Classe ces triangles selon leurs côtés : 5 cm, 5 cm, 5 cm.", type: "text" },
  { id: 14, text: "Un triangle a deux angles de 70° et 40°. Calcule le 3e angle.", type: "text" },
  { id: 15, text: "Trace un triangle isocèle dont la base mesure 6 cm et les côtés 4 cm.", type: "instruction" },
  { id: 16, text: "Quel est le nom d’un quadrilatère avec 4 côtés égaux et 4 angles droits ?", type: "text" },
  { id: 17, text: "Trace un rectangle de 5 cm sur 3 cm.", type: "instruction" },
  { id: 18, text: "Associe : A. 4 côtés égaux → ? / B. Une paire de côtés parallèles → ?", type: "text" },
  { id: 19, text: "Somme des angles d’un quadrilatère ?", type: "text" },
  { id: 20, text: "Vrai ou faux : Un triangle peut avoir deux angles droits.", type: "text" }
];

export default function ExercicesMaths6eme() {
  const [current, setCurrent] = useState(0);

  const nextQuestion = () => {
    setCurrent((prev) => (prev + 1) % questions.length);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", marginBottom: "1rem" }}>
        <h2>Exercice {current + 1}</h2>
        <p>{questions[current].text}</p>
        {questions[current].type === "text" && <p style={{ color: "gray" }}>Réponds dans ton cahier.</p>}
      </div>
      <button onClick={nextQuestion}>Question suivante</button>
    </div>
  );
}


// =========================
// 📄 package.json
// =========================
{
  "name": "exercices-maths-6eme",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}
