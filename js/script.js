// js/script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Configurações do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOUbJmjrJlDRFCNcUm-_Ni9TfAOpUzPjc",
  authDomain: "led-iot32.firebaseapp.com",
  databaseURL: "https://led-iot32-default-rtdb.firebaseio.com",
  projectId: "led-iot32",
  storageBucket: "led-iot32.firebasestorage.app",
  messagingSenderId: "307711404053",
  appId: "1:307711404053:web:109898c06a68f317dd061c"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const caminhoLed = ref(db, 'iot/dispositivo01/led/status');

// Escuta o banco de dados em tempo real
onValue(caminhoLed, (snapshot) => {
    const estado = snapshot.val();
    
    // 1. Atualiza o texto "ACESO" ou "APAGADO"
    document.getElementById('status-display').innerText = estado ? "ACESO" : "APAGADO";

    // 2. Animação do LED na interface
    const ledVisual = document.getElementById('led-visual');
    if (estado) {
        ledVisual.classList.remove('led-off');
        ledVisual.classList.add('led-on');
    } else {
        ledVisual.classList.remove('led-on');
        ledVisual.classList.add('led-off');
    }
});

// Tornando a função global para que o onclick do HTML consiga acessá-la
window.mudarStatus = (valor) => {
    set(caminhoLed, valor);
};