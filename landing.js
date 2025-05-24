document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // Menu Hamburguer para Mobile
    // =============================================
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // =============================================
    // Modal de serviços
    // =============================================
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');
    const moreButtons = document.querySelectorAll('.btn-more');
    
        // Dados detalhados de todos os serviços
    const servicesData = {
        'pergunta-objetiva': {
            title: '1 pergunta objetiva ao Tarô',
            description: `<p>Envio a resposta em até <strong>24 horas</strong>, com fotos das cartas e mensagem escrita, com todas as orientações e detalhes possíveis sobre a situação.</p>
            <p><strong>Não respondo sobre:</strong> morte ou traições.</p>`
        },
        'banho-energetico': {
            title: 'Receita para banho energético',
            description: `<p><strong>Limpeza energética, banhos de atração.</strong> Te envio a receita com os componentes necessários para o seu banho.</p>
            <p><strong>Observação:</strong> Não envio o material a ser utilizado, apenas a receita.</p>`
        },
        'floral-humano': {
            title: 'Floral de Bach para humanos',
            description: `<p>Tratamento terapêutico através de essências de flores e plantas, que trazem <strong>alívio e equilíbrio emocional</strong>.</p>
            <p><strong>Envio apenas da receita.</strong></p>`
        },
        'mentoria-energetica': {
            title: 'Mentoria Energética',
            description: `<p>Utilizo <strong>TODAS as ferramentas</strong> com as quais trabalho, e montamos juntas(os) o melhor acompanhamento holístico pra você.</p>
            <p><strong>Agendamento e pagamento antecipado.</strong> Pacotes com desconto.</p>`
        },
        'psicoterapia': {
            title: 'Sessão de psicoterapia',
            description: `<p>Abordagem terapêutica que une e sintetiza várias correntes filosóficas, científicas e psicológicas em uma metodologia de <strong>ação prática e profunda</strong> que unem corpo, mente e espírito.</p>
            <p>Vamos juntas(os) pegar cada partezinha do seu ser e reorganizar, desenvolver sua identidade!</p>
            <p><strong>Para quem é a terapia?</strong> Para pessoas que queiram tratar e resolver os conflitos e dores com muita lógica, raciocínio, boas estratégias e atitudes perante a vida.</p>
            <p>Te trago o apoio que precisa e juntas(os) fazemos a vida funcionar!!</p>
            <p><strong>Agendamento e pagamento antecipado.</strong> Pacotes com desconto.</p>`
        },
        'radionica': {
            title: 'Mesa Radiônica',
            description: `<p>Ferramenta de <strong>reequilíbrio energético</strong> que possibilita a mudança do campo vibracional de pessoas, objetos, animais, veículo, residência, empresa, plantas, etc.</p>
            <p><strong>Para quem serve?</strong> A mesa é para aqueles que sentem que tem algo bloqueando uma ou diversas áreas da sua vida.</p>
            <p><strong>Indicações:</strong></p>
            <ul>
                <li>Conflito em relacionamentos de todos os tipos</li>
                <li>Auxiliar e complementar em tratamentos de saúde física ou psicológica</li>
                <li>Orientação para empresas, desenvolvimento de produtos</li>
                <li>Harmoniza local de trabalho, auxilia até na montagem do seu ambiente profissional</li>
                <li>Facilita e favorece melhoria de vendas</li>
                <li>Auxilia no emagrecimento</li>
                <li>Entre outras milhares de situações que esta ferramenta pode te ajudar!</li>
            </ul>
            <p><strong>Online ou presencial.</strong> (agendamento e pagamento antecipado)</p>`
        },
        'acorda-pra-vida': {
            title: 'Consulta Acorda pra Vida',
            description: `<p><strong>Avaliação energética completa:</strong></p>
            <ul>
                <li><strong>Momento atual:</strong> Como está a situação ou pessoa ou você atualmente dentro da área que você deseja saber?</li>
                <li><strong>Bloqueio da situação:</strong> O que está atrapalhando e causando bloqueios para que a situação seja esclarecida ou resolvida?</li>
                <li><strong>Trabalho interior a ser feito:</strong> O que você pode fazer por si mesmo(a) para melhorar ou iniciar a resolução disso?</li>
                <li><strong>Como é sua relação com a pessoa:</strong> Quais as energias para sua conexão com esta pessoa ou situação?</li>
                <li><strong>Como sua infância te afeta:</strong> O que pode ter acontecido com você em sua fase infantil que afeta seus posicionamentos dentro dessa situação?</li>
                <li><strong>Como agir para resolver:</strong> Orientação para que você possa se sentir mais seguro(a) dentro desse caso.</li>
                <li><strong>Seu resultado interno:</strong> Como você vai se sentir e desenvolver-se nisto.</li>
                <li><strong>Tendências de futuro:</strong> Tendências de acontecimentos para o assunto tratado na avaliação.</li>
            </ul>
            <p><strong>Agendamento e pagamento antecipado.</strong></p>`
        },
        'radionica-pet': {
            title: 'Mesa Radiônica Pet',
            description: `<p>Muitas enfermidades do seu pet podem estar ligadas ao <strong>estado físico, mental, emocional e energético dos tutores</strong>.</p>
            <p>A avaliação trará informação de todos os bloqueios e as melhores formas de tratamento.</p>
            <p>Conto com uma <strong>equipe de veterinários</strong> que acompanham 24 horas todos os tratamentos energéticos que são feitos para os animais.</p>
            <p><strong>E os animais silvestres?</strong> Tem tratamento também, traumas, medos, etc, aqui a gente trata absolutamente tudo em todas as áreas dos animais!!</p>
            <p><strong>Ideal para:</strong></p>
            <ul>
                <li>Acompanhamento pré e pós cirúrgico</li>
                <li>Questões comportamentais</li>
                <li>Potencializar tratamento de saúde que esteja sendo realizado no bichinho</li>
            </ul>`
        },
        'reiki': {
            title: 'Reiki',
            description: `<p>Prática terapêutica de origem japonesa, reconhecida como terapia integrativa pela Organização Mundial da Saúde (OMS) e inclusive aplicada no Sistema Único de Saúde (SUS) no Brasil. A palavra Reiki significa "energia vital universal", um conceito que descreve a energia que flui através de todos os seres vivos. Esta técnica se baseia na crença de que o terapeuta, conhecido como mestre reikiano, pode canalizar essa energia universal através da imposição das mãos sobre o corpo do paciente, ou mesmo à distância, para promover o equilíbrio e o bem-estar.

<strong><li>A aplicação</strong> do Reiki visa restaurar o equilíbrio energético do indivíduo em níveis físico, mental e emocional. Acredita-se que bloqueios ou desequilíbrios no fluxo de energia vital podem levar a diversos problemas de saúde e mal-estar. Durante uma sessão típica, que dura aproximadamente uma hora, o terapeuta posiciona as mãos suavemente sobre pontos específicos do corpo do paciente, correspondentes aos centros de energia conhecidos como chakras, ou mantém as mãos a uma pequena distância. O objetivo é facilitar o fluxo livre da energia vital, ajudando a regularizar as funções vitais do corpo, fortalecer o sistema imunológico e revitalizar o sistema nervoso.</li>

<strong><li>Os benefícios</strong> associados à prática do Reiki são variados, atuando como um complemento a tratamentos médicos convencionais. Ele é frequentemente procurado para auxiliar no alívio do estresse, da ansiedade e da depressão, além de poder contribuir para a redução de dores, fadiga, insônia e náuseas. Mais do que tratar sintomas específicos, o Reiki busca promover um estado de relaxamento profundo, paz interior e clareza mental, incentivando uma maior consciência corporal e emocional. A prática regular pode levar a uma mudança na percepção das dificuldades cotidianas, promovendo um estilo de vida mais equilibrado e saudável.</p></li>
<li><strong>Aplicação presencial</strong> ou a <strong>distância</strong> - consulte os valores </li>`
        },
        'baralho-cigano': {
            title: 'Mesa real com Baralho Cigano',
            description: `<p>Se você está procurando uma leitura para saber de <strong>absolutamente tudo em todas as áreas da sua vida</strong>, essa é sem dúvida a melhor escolha de todas!!</p>
            <p><strong>Nela irei avaliar profundamente:</strong></p>
            <ul>
                <li>Vida amorosa</li>
                <li>Profissão</li>
                <li>Dinheiro</li>
                <li>Local de trabalho</li>
                <li>Família</li>
                <li>Pets</li>
                <li>Amigos</li>
                <li>Saúde física e mental</li>
                <li>Pensamentos que estão dominando você</li>
                <li>Decisões a serem feitas</li>
                <li>Negociações importantes</li>
                <li>Novidades positivas</li>
                <li>Desafios a serem enfrentados</li>
                <li>Lições para aprender</li>
                <li>Melhor forma de agir para conseguir as melhores soluções</li>
                <li>Questões judiciais</li>
                <li>Seu poder de comunicação</li>
                <li>Como as pessoas te veem</li>
                <li>Espiritualidade</li>
                <li>E muito mais</li>
            </ul>
            <p><strong>Informações importantes:</strong></p>
            <ul>
                <li>O período de entrega é de <strong>até 15 dias úteis</strong></li>
                <li>Leitura apenas <strong>online</strong></li>
                <li>Material é enviado por <strong>fotos e áudios via Whatsapp</strong></li>
                <li>Esta leitura <strong>não dá direito ao consulente fazer perguntas</strong></li>
                <li>Você pode escolher o período da leitura: avaliação para <strong>1, 3 ou 6 meses</strong></li>
                <li>Perguntas não disponíveis nessa modalidade</li>
            </ul>
            <p><strong>Agendamento e pagamento antecipado.</strong> Desconto para assinantes da Carta do Dia.</p>`
        },
        'mandala-anual': {
            title: 'Mandala Anual',
            description: `<p>Estudo enviado via Whatsapp com <strong>fotos, vídeo e áudios</strong>.</p>
            <p>Após receber o seu material você tem <strong>24 horas</strong> para fazer até uma pergunta, caso ainda tenha dúvidas.</p>
            <p>Material enviado em <strong>até 15 dias</strong>.</p>
            <p><strong>Agendamento e pagamento antecipado.</strong> Desconto para assinantes da Carta do Dia.</p>`
        },
        'dama-noite': {
            title: 'Leitura com Dama da Noite',
            description: `<p>Essa e nenhuma das minhas leituras possuem <strong>cunho religioso ou dogmas</strong>, respeitando todas e quaisquer crenças que possam existir.</p>
            <p><strong>O valor citado é por pergunta objetiva.</strong></p>
            <p>Resposta e orientação enviados em <strong>até 48 horas</strong> (em dias úteis).</p>
            <p>O envio das respostas é feito por <strong>fotos e mensagens de texto, via Whatsapp</strong>.</p>
            <p><strong>Desconto para assinantes da Carta do Dia.</strong></p>`
        },
        'carta-do-dia-individual': {
            title: 'Carta do dia individual',
            description: `<p>Todos os dias da semana você recebe um <strong>conselho apenas para a sua energia</strong>, esta carta pode trazer mensagens que reverberam para o dia, para a semana e até para o mês inteiro.</p>
            <p><strong>Não é a partir de uma pergunta sua</strong>, mas sim uma análise da sua energia diariamente (exceto finais de semana e feriados).</p>
            <p>A diferença deste plano é que você recebe seu conselho diário por <strong>áudio com mensagens muito mais profundas exclusivamente e só pra você</strong>.</p>
            <p><strong>Benefícios:</strong></p>
            <ul>
                <li>Na Carta do dia individual você ganha <strong>1 pergunta objetiva grátis</strong></li>
                <li>Tem <strong>desconto nas leituras de tarô</strong> comigo</li>
                <li>E no mês do seu aniversário você ganha <strong>mais 1 pergunta objetiva!</strong></li>
            </ul>
            <p><strong>Importante:</strong> Não são todas as pessoas que estão aptas a participar desse serviço, é necessário passar por uma avaliação energética antes, pois a carta do dia pode deixar algumas pessoas ansiosas.</p>
            <p>Entre em contato comigo, com seu <strong>nome completo e data de nascimento</strong> para ser avaliado(a).</p>`
        },
        'carta-do-dia-grupo': {
            title: 'Carta do dia - Grupo',
            description: `<p>De <strong>segunda a sexta-feira</strong> (exceto feriados) você recebe um conselho em grupo.</p>
            <p>A carta do dia traz informações sobre:</p>
            <ul>
                <li>Energias dominantes no dia</li>
                <li>Saúde</li>
                <li>Mentalidade</li>
                <li>Emoções</li>
                <li>Profissão</li>
                <li>Família</li>
                <li>Algumas previsões diárias que podem reverberar para o mês todo em sua vida</li>
            </ul>
            <p><strong>Não é a partir de uma pergunta sua</strong>, é uma análise geral e direcionada a todos os participantes do grupo.</p>
            <p><strong>Benefícios para assinantes da Carta do Dia em grupo:</strong></p>
            <ul>
                <li>Desconto nas leituras de tarô comigo</li>
                <li>Todos os meses eu faço uma <strong>Mesa Real com Baralho Cigano em grupo!!</strong></li>
            </ul>
            <p>É sensacional, além de todos os dias você receber áudios explicativos, tem mais de <strong>1 hora de áudios falando sobre a energia do mês!!</strong></p>
            <p>Envio a foto da cartinha e um áudio completo, no grupo de Whatsapp.</p>`
        },
        'consulta': {
            title: 'Consulta Convencional',
            description: `<p>Uma leitura onde irei abrir o <strong>baralho cigano</strong> e te orientar sobre toda a sua vida, presente e tendências de futuro.</p>
            <p>Após todas essas informações você poderá fazer <strong>quantas perguntas quiser dentro do período de 1 hora (60 minutos)</strong>.</p>
            <p>Estarei usando também as cartas de <strong>Tarot, numerologia e radiestesia</strong> para que sua consulta seja a melhor experiência da sua vida!!</p>
            <p><strong>Agendamento e pagamento antecipado.</strong> Assinante da Carta do Dia tem desconto!!</p>`
        }
    };
    
    // Adicionar evento de clique a todos os botões "Saiba mais"
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            const service = servicesData[serviceId];
            
            if (service) {
                modalTitle.textContent = service.title;
                modalDescription.innerHTML = service.description;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                console.error('Serviço não encontrado:', serviceId);
            }
        });
    });
    
    // Fechar o modal quando clicar no X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fechar o modal com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // =============================================
    // Integração com WhatsApp - COM VALIDAÇÕES ADICIONAIS
    // =============================================
    const whatsappButton = document.getElementById('whatsappButton');
    
    whatsappButton.addEventListener('click', function() {
        // Obter os valores do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;
        
        // Validar campos obrigatórios
        if (!name || !email || !phone || !service || service === "Selecione um serviço" || !date) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // VALIDAÇÕES ADICIONAIS IMPLEMENTADAS AQUI
        // Validar telefone (com DDD, 10 ou 11 dígitos)
        const phoneDigits = phone.replace(/\D/g, '');
        if (!/^\d{10,11}$/.test(phoneDigits)) {
            alert('Por favor, insira um telefone válido com DDD (10 ou 11 dígitos).');
            return;
        }
        
        // Validar e-mail
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um e-mail válido no formato exemplo@dominio.com');
            return;
        }
        
        // Validar data (não pode ser no passado)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Zerar horas para comparar apenas a data
        
        if (selectedDate < today) {
            alert('Por favor, selecione uma data futura para o agendamento.');
            return;
        }
        
        // Formatar a data para exibição
        const formattedDate = selectedDate.toLocaleDateString('pt-BR');
        
        // Criar mensagem para WhatsApp
        const whatsappMessage = `Olá Ana, gostaria de agendar um serviço:
        
📌 *Nome:* ${name}
📧 *E-mail:* ${email}
📞 *Telefone:* ${phone}
🛎️ *Serviço desejado:* ${service}
📅 *Data preferencial:* ${formattedDate}
💬 *Mensagem adicional:* ${message || 'Nenhuma mensagem adicional'}

Aguardo seu retorno!`;
        
        // Codificar a mensagem para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Número de WhatsApp
        const whatsappNumber = '+5519997815295';
        
        // Criar link do WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp em nova aba
        window.open(whatsappUrl, '_blank');
    });

    // =============================================
    // Scroll suave para links internos
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Ajuste para o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});