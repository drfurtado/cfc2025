import React from 'react';
import './HistoriaPage.css';

function HistoriaPage() {
  return (
    <div className="historia-page">
      <div className="hero-section" style={{ backgroundImage: `url('/images/cfc-atual3.jpeg')` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="page-title">Nossa História</h1>
          <p className="page-subtitle">Mais de 40 anos de paixão pelo futebol</p>
        </div>
      </div>

      <div className="container content-section">
        <section className="history-section">
          <h2 className="section-title">Muito Mais Que Futebol</h2>
          
          <div className="quote-box">
            <blockquote>
              "Marcelo Duda, responsável pelo desenho do emblema, torcedor do Grêmio de Porto Alegre, resolveu se inspirar no símbolo do time e na banda Engenheiros do Hawaii, sucesso dos anos 80 e curtida pela maioria do grupo na época."
            </blockquote>
          </div>
          
          <p>
            Em 1984, um pequeno grupo de jovens jogadores, amantes do futebol, entre 10 e 14 anos de idade, brincava de futebol na praça ao lado do Colégio Dirce Celestino do Amaral, que fica entre a Vila N. Sra. da Luz e Conjunto Osvaldo Cruz I, no CIC, em Curitiba. Marcos Dudda, o mais velho, com 14 anos na época, logo organizou a turma e combinava jogos no campo, sempre após as aulas, no período da tarde. Os adversários eram times da região, como Osvaldo Cruz, times das praças da Vila, Campo Alegre, Osvaldo Cruz II. Faziam parte do seleto grupo inicial: Marcos Dudda e Marcelo Duda, Oliver Helferich, Adriano Cardoso, Luiz Carlos, Edinho, Ronaldo, entre outros, que hoje formam a "velha guarda" do time.
          </p>
        </section>

        <section className="history-section">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">O Nome e as Cores do Time</h2>
              <p>
                Com os jogos mais frequentes e o time mais organizado, Marcos Dudda pediu um jogo de camisa ao seu pai, Nicolau Moura, que na época trabalhava na Classe Industrial de Móveis, na Rua João Bettega, na Cidade Industrial de Curitiba (CIC). Assim, o time conquistou seu primeiro uniforme, camisas azuis com o logo da Classe Industrial. Mais tarde, com calções pretos e meias brancas, nascia mais um time tricolor no Brasil, com as cores azul, preto e branco. Pouco tempo depois foi criado o escudo do time.
              </p>
              <p>
                Marcelo Duda, responsável pelo desenho do emblema, torcedor do Grêmio de Porto Alegre, resolveu se inspirar no símbolo do time e na banda Engenheiros do Hawaii, sucesso dos anos 80 e curtida pela maioria do grupo na época. O escudo então foi uma junção do símbolo do Grêmio com as engrenagens, sempre presentes nas capas dos discos da banda.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img src="/images/logo-antigo.png" alt="Escudo do Classe FC" className="img-fluid rounded shadow" />
                <div className="image-caption">O escudo do Classe FC, inspirado no Grêmio e na banda Engenheiros do Hawaii</div>
              </div>
            </div>
          </div>
        </section>

        <section className="history-section">
          <h2 className="section-title">Conquistas e Campeonatos</h2>
          <div className="row">
            <div className="col-lg-8">
              <p>
                Após muitos amistosos, era hora de enfrentar novos desafios. O primeiro título veio um ano após a fundação, em 1985, num torneio realizado na Vila N. Sra da Luz, campanha para a Prefeitura de Curitiba – Torneio Jaime Lerner. O torneio contou com alguns dos principais times da época na Vila, como Vasquinho e Expressinho. A Classe FC derrotou o Vasquinho na semifinal e, nos pênaltis, consagrou-se campeã contra o Expressinho, time sensação da época, com vários craques que ainda disputam campeonatos em Curitiba.
              </p>
              <p>
                Vários outros títulos vieram em torneios e campeonatos disputados na Cidade Industrial de Curitiba, mas o título HISTÓRICO do time veio em 1990. A Copa Poupança Banestado, amplamente divulgada pela imprensa na época, tendo como veículo principal de divulgação a Tribuna do Paraná. O time conquistou o título de forma invicta, mostrando sua força e determinação em campo. Atualmente, a Classe FC disputa o campeonato 50tinha, na Vila N. Sra. da Luz, e tem projeto de disputar o campeonato no Santa Amélia, levando o nome do time para outras regiões da cidade e mostrando que o futebol amador ainda é uma paixão que move muitas pessoas.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="trophy-timeline">
                <div className="trophy-item">
                  <div className="trophy-year">1985</div>
                  <div className="trophy-name">Torneio Jaime Lerner</div>
                </div>
                <div className="trophy-item">
                  <div className="trophy-year">1990</div>
                  <div className="trophy-name">Copa Poupança Banestado</div>
                  <div className="trophy-highlight">Invicto</div>
                </div>
                <div className="trophy-item">
                  <div className="trophy-year">2024</div>
                  <div className="trophy-name">Copa Vila</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="history-section">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="image-container">
                <img src="/images/copa-vila-2024.jpg" alt="Time atual do Classe FC" className="img-fluid rounded shadow" />
                <div className="image-caption">Time do Classe FC na Copa Vila 2024</div>
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="section-title">O Time de Hoje</h2>
              <p>
                Atualmente, o time Classe FC é formado por jogadores de várias idades, que se reúnem para jogar futebol e manter a tradição do time. A "velha guarda" do time, formada pelos fundadores e jogadores que estão juntos há mais de 40 anos, ainda é a base do time, mas novos jogadores vão se integrando ao grupo e trazendo novas ideias e energias para o time. O time tem uma torcida fiel, formada por amigos e familiares dos jogadores, que acompanham os jogos e torcem pela vitória do time.
              </p>
            </div>
          </div>
        </section>

        <section className="history-section">
          <h2 className="section-title">Mais Que um Time, Uma Família</h2>
          <p>
            O time Classe FC é muito mais do que um time de futebol, é uma família formada pelos integrantes da "velha guarda", amigos que estão juntos há 40 anos e tomam as decisões do time, jogadores que foram se integrando ao longo dos anos, criando laços de amizade que ultrapassam os campos, e atletas convocados pontualmente para a disputa dos campeonatos, que logo se enturmam e passam a fazer parte dessa grande família.
          </p>
          <p>
            Além das atividades comuns de um time de futebol, a união dessas pessoas se torna uma força nas iniciativas de ajuda humanitária aos mais necessitados. Nas confraternizações de fim de ano do time, eles promovem a arrecadação de alimentos, que são doados à igreja para distribuição às famílias carentes do bairro. São essas pequenas ações que tornam um time de futebol amador ainda mais importante para a vida das comunidades e por isso eles merecem ser valorizados e incentivados a seguir em frente e a crescer cada vez mais.
          </p>
          <p>
            O time Classe FC é um exemplo de como o esporte amador pode transformar a vida das pessoas e das comunidades, promovendo amizades que perduram através do tempo, a paz, o lazer e combatendo a violência nos bairros da periferia. Iniciativas como essa merecem ser valorizadas e incentivadas, pois mostram que o futebol é muito mais que um esporte, é uma ferramenta de transformação social.
          </p>

          <div className="final-quote">
            <blockquote>
              O time Classe FC é um exemplo de dedicação, amizade e transformação social através do esporte. Que venham mais 40 anos de história e conquistas!
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HistoriaPage;
