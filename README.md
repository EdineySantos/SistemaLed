💡 Painel de Controle IoT - Smart LED
Um painel web moderno e responsivo para controle remoto de dispositivos IoT (como um LED) em tempo real. Este projeto utiliza HTML, CSS e JavaScript integrados ao Firebase Realtime Database para enviar comandos e receber o status do dispositivo instantaneamente.

📱 Demonstração e Recursos
O painel foi desenhado com foco em usabilidade e estética, utilizando o conceito de Glassmorphism (efeito de vidro) e uma paleta de cores Dark Mode.

Principais Funcionalidades:

Controle em Tempo Real: Ligue e desligue o dispositivo instantaneamente com botões interativos.

Feedback Visual: Um indicador "LED" na própria tela acende (verde) e apaga (vermelho) sincronizado com o status real do banco de dados.

Sincronização Bidirecional: Se o status for alterado por outro aplicativo ou diretamente no hardware, a interface web atualiza o status automaticamente, sem precisar recarregar a página.

🛠️ Tecnologias Utilizadas
HTML5 & CSS3: Estrutura semântica e estilização moderna (Flexbox, variáveis CSS, transições).

JavaScript (ES6+): Lógica de interface e manipulação do DOM.

Firebase Realtime Database (v10 Modular SDK): Banco de dados em nuvem para comunicação rápida entre a web e o hardware.

📂 Estrutura de Pastas
Plaintext
meu-projeto-iot/
├── index.html       # Estrutura principal da página
├── css/
│   └── style.css    # Estilos visuais e animações
└── js/
    └── script.js    # Lógica de controle e conexão com Firebase
🚀 Como Executar o Projeto
Clone este repositório ou baixe os arquivos para a sua máquina.

Configuração do Firebase:

Crie um projeto no Firebase Console.

Ative o Realtime Database e configure as Regras (Rules) de leitura/gravação temporariamente para true para testes:

JSON
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
Pegue as suas credenciais do Firebase (no menu Configurações do Projeto) e substitua a variável firebaseConfig dentro de js/script.js.

Abra o projeto:

Como utilizamos o type="module" no JavaScript, é altamente recomendado usar uma extensão como o Live Server (no VS Code) para rodar o arquivo index.html. Abrir o arquivo direto com dois cliques pode causar bloqueios de segurança (CORS) em alguns navegadores.

🔌 Integração com o Hardware (Próximos Passos)
Este projeto web é a interface de controle (o Front-end). Para que uma lâmpada ou LED real acenda, você precisará conectar um microcontrolador (como ESP32, ESP8266 ou NodeMCU) à mesma rede Wi-Fi e programá-lo em C++ para ler o caminho iot/dispositivo01/led/status do seu banco de dados Firebase.