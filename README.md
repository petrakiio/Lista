<div align="center">
  <img src="https://img.icons8.com/fluency/96/todo-list.png" alt="Logo do Projeto" width="80">
  
  <h1>🌿 Earth Tone Task Manager</h1>
  
  <p>
    <b>Uma aplicação de lista de tarefas minimalista com foco em UX e manipulação dinâmica de elementos.</b>
  </p>

  <p>
    <img src="https://img.shields.io/badge/JavaScript-ES6+-331F19?style=for-the-badge&labelColor=331F19&color=CBBBA7" alt="JS">
    <img src="https://img.shields.io/badge/CSS3-Design_Terroso-798252?style=for-the-badge&labelColor=798252&color=F4F0EA" alt="CSS">
    <img src="https://img.shields.io/badge/HTML5-Semântico-A34743?style=for-the-badge&labelColor=A34743&color=F4F0EA" alt="HTML">
  </p>
</div>

<hr>

<h2>📋 Sobre o Projeto</h2>
<p>
  Este gerenciador de tarefas foi construído para demonstrar o controle completo de um <b>CRUD</b> (Create, Read, Update, Delete) utilizando JavaScript puro. A interface utiliza uma paleta de cores orgânica para proporcionar uma experiência de uso relaxante e organizada.
</p>

<h2>✨ Funcionalidades Detalhadas</h2>
<ul>
  <li><b>Adição Inteligente:</b> Captura de input com método <code>.trim()</code> para evitar tarefas vazias.</li>
  <li><b>Feedback Visual:</b> Sistema de mensagens dinâmicas que alteram a cor via classes CSS (<code>.erro</code> e <code>.pass</code>).</li>
  <li><b>Edição in-place:</b> Permite atualizar o texto de tarefas já existentes através de prompts.</li>
  <li><b>Gestão de Lista:</b> Exclusão individual de tarefas e um botão global de limpeza que surge dinamicamente.</li>
  <li><b>Interatividade:</b> Efeitos de <i>hover</i> e transições suaves em todos os botões.</li>
</ul>

<h2>🎨 Design e Estilização</h2>
<p>O projeto segue uma linha de design <b>Earth Tone</b> (Tons de Terra), garantindo contraste e acessibilidade:</p>
<table>
  <tr>
    <th align="left">Elemento</th>
    <th align="left">Cor Principal</th>
    <th align="left">Aplicação</th>
  </tr>
  <tr>
    <td><b>Background</b></td>
    <td><code>#331F19</code></td>
    <td>Contraste profundo no corpo da página.</td>
  </tr>
  <tr>
    <td><b>Container</b></td>
    <td><code>#CBBBA7</code></td>
    <td>Fundo neutro para a área de trabalho.</td>
  </tr>
  <tr>
    <td><b>Botões</b></td>
    <td><code>#798252</code></td>
    <td>Verde musgo para ações de confirmação.</td>
  </tr>
  <tr>
    <td><b>Alertas</b></td>
    <td><code>#A34743</code></td>
    <td>Tom avermelhado para remoção e erros.</td>
  </tr>
</table>

<h2>🛠️ Destaques do Código</h2>
<p>Algumas soluções implementadas no <code>script.js</code>:</p>
<pre>
<code>
// Criação dinâmica de botões com funções anônimas (callbacks)
function criarBotao(texto, classe, onClick) {
    const botao = document.createElement('button')
    botao.textContent = texto
    botao.className = classe
    botao.onclick = onClick
    return botao
}
</code>
</pre>

<h2>🚀 Como Clonar e Rodar</h2>
<p>Para testar o projeto localmente, siga os passos abaixo:</p>
<ol>
  <li>Clone o repositório: <code>git clone https://github.com/seu-usuario/seu-repositorio.git</code></li>
  <li>Navegue até a pasta: <code>cd seu-repositorio</code></li>
  <li>Abra o arquivo <code>index.html</code> no seu navegador preferido.</li>
</ol>

<hr>

<div align="center">
  <p>Desenvolvido com foco em <b>DOM Manipulation</b> e <b>Clean Code</b>.</p>
  <p>🌱 <i>"Organize suas tarefas, organize sua mente."</i></p>
</div>
