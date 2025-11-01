// Rotas simples da SPA
const rotas = {
  inicio: `
    <section class="hero">
      <div class="hero-texto">
        <h2>Juntos podemos fazer a diferença!</h2>
        <p>Cada animal merece amor, carinho e um lar seguro. Nos ajude com sua doação ♥️.</p>
        <button onclick="navegar('projeto')">Conheça o Projeto</button>
      </div>
    </section>

    <section class="animais">
      <h2>O que nós somos?</h2>
      <div class="galeria">
        <div class="card">
          <img src="Imagens/CachoroVelho.jpg" alt="Cachorro para adoção">
          <h3>Pet Store</h3>
          <p>Somos uma organização que ajuda animais resgatados, doentes e feridos. Nosso trabalho é 100% voluntário e depende da solidariedade de quem acredita que todo animal merece carinho e respeito.</p>
        </div>

        <div class="card">
          <img src="Imagens/GatoCarinho.jpg" alt="Gato para adoção">
          <h3>Como Ajudar?</h3>
          <p>Aceitamos doações de qualquer quantia ou itens para garantir o bem-estar de nossos animais. Ajude-nos a continuar salvando vidas!</p>
        </div>

        <div class="card">
          <img src="Imagens/GatoCachorro.jpg" alt="Cachorro e gato juntos">
          <h3>Nossa Missão</h3>
          <p>Proteger, cuidar e promover o bem-estar animal com amor e empatia. Acreditamos que respeitar os animais é respeitar a vida!</p>
        </div>

      </div>
    </section>
  `,

  projeto: `
    <section class="projeto-intro">
      <h2>&gt; Nossas Ações Comunitárias &lt;</h2>
      <p>Na Pet Store, acreditamos que cada gesto de amor pode mudar o destino de um animal. Atuamos com resgates, feirinhas de adoção e campanhas educativas em comunidades carentes.</p>
    </section>

    <section class="acoes">
      <div class="acao">
        <img src="Imagens/04.jpg" alt="Voluntários cuidando dos animais">
        <div>
          <h3>Equipe de Voluntários</h3>
          <p>Nossos voluntários são o coração da ONG. Eles ajudam nos cuidados diários, resgates e tratamento dos animais até encontrarem uma família. Cada vida importa!</p>
        </div>
      </div>

      <div class="acao">
        <img src="Imagens/gato comendo.jpg" alt="Feira de adoção de animais">
        <div>
          <h3>Feirinhas de Adoção</h3>
          <p>Realizamos feiras para encontrar lares cheios de amor. Também oferecemos orientações sobre cuidados, vacinação e bem-estar animal.</p>
        </div>
      </div>

      <div class="acao">
        <img src="Imagens/Resgate e Reabilitação.jpg" alt="Ação de resgate animal">
        <div>
          <h3>Resgates e Reabilitação</h3>
          <p>Salvamos animais em risco, oferecendo cuidados, abrigo e amor até que estejam saudáveis. Cada resgate é uma história de esperança.</p>
        </div>
      </div>
    </section>
  `,

  cadastro: `
    <section class="cadastro">
      <h2>Seja um Voluntário ♥️</h2>
      <p>Preencha o formulário abaixo e venha fazer parte da nossa família!</p>

      <form>
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" placeholder="Ex: 123.456.789-00" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensagem">Por que deseja ajudar?</label>
        <textarea id="mensagem" name="mensagem" rows="4"></textarea>

        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};

// Função para navegar entre as rotas
function navegar(pagina) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = rotas[pagina] || "<p>Página não encontrada.</p>";

  // Atualiza o estado da URL sem recarregar
  window.location.hash = pagina;

  // Atualiza destaque do menu
  document.querySelectorAll("nav a").forEach(link => link.classList.remove("ativo"));
  const ativo = document.querySelector(`nav a[href="#${pagina}"]`);
  if (ativo) ativo.classList.add("ativo");
}

// Detecta hash da URL e carrega a página correta
window.addEventListener("hashchange", () => {
  const pagina = window.location.hash.replace("#", "") || "inicio";
  navegar(pagina);
});

// Carrega a rota inicial
window.addEventListener("load", () => {
  const pagina = window.location.hash.replace("#", "") || "inicio";
  navegar(pagina);
});

// ===== MENU RESPONSIVO =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

