import React from 'react';
import './HistoriaPage.css';

function HistoriaPage() {
  // Timeline data
  const timelineEvents = [
    {
      year: 1984,
      title: "Fundação da Classe FC",
      description: "Um pequeno grupo de jovens jogadores, entre 10 e 14 anos de idade, começou a jogar futebol na praça ao lado do Colégio Dirce Celestino do Amaral, no CIC, em Curitiba. Marcos Dudda, o mais velho, organizou a turma para jogar contra times da região.",
      image: "/images/cfc-historia1984.png",
      achievement: "Início da jornada"
    },
    {
      year: 1985,
      title: "Primeiro Título - Torneio Jaime Lerner",
      description: "O primeiro título veio um ano após a fundação, em 1985, num torneio realizado na Vila N. Sra da Luz, campanha para a Prefeitura de Curitiba. A Classe FC derrotou o Vasquinho na semifinal e, nos pênaltis, consagrou-se campeã contra o Expressinho.",
      image: "/images/cfc-historia1985.png",
      achievement: "Campeão"
    },
    {
      year: 1986,
      title: "Criação do Escudo",
      description: "Marcelo Duda, torcedor do Grêmio de Porto Alegre, criou o escudo do time inspirado no símbolo do Grêmio e na banda Engenheiros do Hawaii. O escudo foi uma junção do símbolo do Grêmio com as engrenagens, presentes nas capas dos discos da banda.",
      image: "/images/logo-antigo.png",
      achievement: "Identidade visual"
    },
    {
      year: 1990,
      title: "Copa Poupança Banestado",
      description: "O título HISTÓRICO do time veio em 1990. A Copa Poupança Banestado, amplamente divulgada pela imprensa na época, tendo como veículo principal de divulgação a Tribuna do Paraná. O time conquistou o título de forma invicta.",
      image: "/images/cfc-historia1990.png",
      achievement: "Campeão invicto"
    },
    {
      year: 2010,
      title: "Renovação do Time",
      description: "Com o passar dos anos, o time foi se renovando, mas mantendo a essência e os valores que sempre nortearam o Classe FC. Novos jogadores foram se integrando ao grupo, trazendo novas ideias e energias para o time.",
      image: "/images/cfc-historia2010.png",
      achievement: "Nova geração"
    },
    {
      year: 2024,
      title: "Copa Lillico",
      description: "Em 2024, o Classe FC conquistou mais um título importante para sua história, sagrando-se campeão da Copa Lillico, mostrando que o time continua forte e competitivo após 40 anos de história.",
      image: "/images/cfc-atual4.png",
      achievement: "Campeão"
    }
  ];

  return (
    <div className="historia-page">
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
          <div className="container">
            <h2 className="section-title">Nossa Linha do Tempo</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="timeline-items">
                {timelineEvents.map((event, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <div className="timeline-card-header">
                          <h3 className="timeline-year">{event.year}</h3>
                          <h4 className="timeline-title">{event.title}</h4>
                        </div>
                        <div className="timeline-image-container">
                          <img src={event.image} alt={event.title} className="timeline-image" />
                        </div>
                        <div className="timeline-card-body">
                          <p>{event.description}</p>
                          <div className="timeline-badge">{event.achievement}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              <div className="image-container logo-image-container">
                <img src="/images/logo-antigo.png" alt="Escudo do Classe FC" className="img-fluid rounded shadow" />
                <div className="image-caption">O escudo do Classe FC, inspirado no Grêmio e na banda Engenheiros do Hawaii</div>
              </div>
            </div>
          </div>
        </section>

        <section className="history-section">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="image-container">
                <img src="/images/cfc-atual4.png" alt="Time atual do Classe FC" className="img-fluid rounded shadow" />
                <div className="image-caption">Time do Classe FC na Copa Lillico 2024</div>
              </div>
              <div className="image-container" style={{ marginTop: '2rem' }}>
                <img src="/images/team2025-1.jpg" alt="Time Classe FC 2025" className="img-fluid rounded shadow" />
                <div className="image-caption">Time Classe FC 2025</div>
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
            O time tem uma filosofia de jogo baseada no respeito ao adversário, na amizade entre os jogadores e na valorização do futebol como esporte que une pessoas. O Classe FC é um time que valoriza a história e a tradição, mas que está sempre aberto a novas ideias e desafios, mantendo viva a chama da paixão pelo futebol que move o time há mais de 40 anos.
          </p>
        </section>
      </div>
    </div>
  );
}

export default HistoriaPage;
