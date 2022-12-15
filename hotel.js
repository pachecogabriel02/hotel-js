<html>

<head>

	<script>
		let nomeHotel, usuario, senha;
		var lista_hospedes = [];
		bemVindo();

		function bemVindo(){
			nomeHotel = prompt("Qual o nome do hotel?");
			alert(`O nome do hotel é: Hotel ${nomeHotel}`);
			alert("Para acessar o sistema insira seu usúario e senha.");
			usuario = prompt("Usúario:");
			senha = prompt("Insira sua senha");

			while (senha != 2678){
				alert("Senha incorreta, tente de novo");
				senha = prompt("Insira sua senha");
			}

			alert(`Bem vindo ao Hotel ${nomeHotel}, ${usuario}. É um imenso prazer ter você por aqui!`);
			inicio();
		}

		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Abastecimento de Carros 4.) Reserva de eventos 5.) Reservar Buffet 6.) Reservar auditório 7.) Reservar restaurante 8.) Verificar combustível mais barato 9.) Manutenção de Ar Condicionado 10.) Sistema de Cadastro e Pesquisa de Hóspedes 11.) Sair'));

			/* if (escolha === 1) {
				reserva_quartos();
			} else if (escolha === 2) {
				cadastro_hospedes();
			} else if (escolha === 3) {
				abastecer_carros();
			} else if (escolha === 4) {
				sair();
			} else {
				erro();
			} */

			switch (escolha){
				case 1:
					reserva_quartos();
					break;
				case 2: 
					cadastro_hospedes();
					break;
				case 3: 
					abastecer_carros(); 
					break;
				case 4: 
					reservar_eventos();
					break;
				case 5:
					reservar_buffet();
					break;
				case 6:
					reservar_auditorio();
					break;
				case 7: 
					reservar_restaurante();
					break;
				case 8:
					combustivel();
					break;
				case 9: 
					manutencao();
					break;
				case 10: 
					sistema_cadastrar_hospedes();
					break;
				case 11:
					sair();
					break;
				default: 
					erro();
					break;
			}
		}		

		function reserva_quartos() {
			alert(`HOTEL ${nomeHotel.toUpperCase()} - RESERVA DE QUARTOS`);
			var quantidadeDeDias, valorDiaria;
			valorDiaria = parseInt(prompt("Qual o valor da diária?"));
			quantidadeDeDias = parseInt(prompt("Você irá se hospedar por quantos dias?"));

			if (valorDiaria < 0 || quantidadeDeDias < 0 || quantidadeDeDias > 30){
				alert("UM DOS VALORES É INVÁLIDO.");
				inicio();
			} else {
				var diaria = quantidadeDeDias * valorDiaria;
				alert(`O valor total é R$${diaria}`);
				var nomeHospede = prompt("Qual o nome do hóspede?"), 
				confirmar = prompt(`${usuario} você confirma a hospedagem para ${nomeHospede} por ${quantidadeDeDias} dias no valor diário de R$${valorDiaria}? S/N`),
				confirmacao = confirmar.toLowerCase();
				if (confirmacao == "s"){
					alert(`${usuario}, reserva efetuada para ${nomeHospede}. O valor total é de R$${diaria}`);
					inicio();
				} else {
					alert(`${usuario}, reserva não efetuada.`);
				}

			}
			inicio();
		}

		function cadastro_hospedes() {
			alert(`HOTEL ${nomeHotel.toUpperCase()} - CADASTRO DE HÓSPEDES`);
			let valorDaDiaria = parseInt(prompt("Qual o valor padrão da diária?")), valorTotal = 0, totalGratuidade = 0, totalMeia = 0;
			
			while (true){
				let hospedeCadastrado = prompt("Qual o nome do hóspede a ser cadastrado?");
				if (hospedeCadastrado == "PARE"){
					inicio();
				}
				let idadeHospede = parseInt(prompt("Qual a idade do hóspede?"))
				if (idadeHospede <= 6){
					alert(`${hospedeCadastrado} cadastrado(a) com sucesso! Este hóspede possui gratuidade!`);
					totalGratuidade++;
				} else if(idadeHospede >= 60){
					alert(`${hospedeCadastrado} cadastrado(a) com sucesso! Este hóspede possui desconto de 50% na diária.`);
					totalMeia++;
					valorTotal = valorTotal + (valorDaDiaria / 2);
				} else {
					alert(`${hospedeCadastrado} cadastrado(a) com sucesso!`);
					valorTotal += valorDaDiaria;
				}
				alert(`O valor total da sua hospedagem é de ${valorTotal}`);
			}
			
		}

		function abastecer_carros() {
			alert(`HOTEL ${nomeHotel.toUpperCase()} - ABASTECER`);
			inicio();
		}

		function reservar_eventos(){
			let quantidadeGarcons = parseInt(prompt("Qual será a quantidade de garçons necessários?")), duracaoEvento = parseInt(prompt("Qual será a duração do evento em horas?"));
			reservar();
			function reservar(){
				let valorGarcons = quantidadeGarcons * 10.5, valorEventoTotal = duracaoEvento * valorGarcons;
				let confirmar = prompt(`O valor total para reservar o seu evento foi de R$${valorEventoTotal}. Você confirma a sua reserva? S/N`);
				confirmar = confirmar.toLowerCase();
				if (confirmar == "s"){
					alert("Parabéns, seu evento já está reservado!");
					inicio();
				} else {
					alert("Reserva não efetuada.")
					inicio();
				}
			}

		}
		
		function reservar_buffet(){
			let convidados = parseInt(prompt("Qual a quantidade de convidados?"));

			if (convidados > 350){
				alert("Quantidade de convidados é maior do que o limite permitido.");
				inicio();
			} else {
				let quantidadeAgua = convidados * 0.5, quantidadeCafe = convidados * 0.2, totalSalgados = convidados * 7;
				let valorComida = (quantidadeAgua * 0.4) + (quantidadeCafe * 0.8) + (totalSalgados * 0.34);
				valorComida = valorComida.toFixed(2);
				alert(`Para esta quantidade de convidados será necessário ${quantidadeAgua} litros de água, ${quantidadeCafe} litros de café e ${totalSalgados} salgados. O custo total do evento será de R$${valorComida}.`);
			}
			let confirmarBuffet = prompt("Você confirma sua reserva de buffet?");
			confirmarBuffet = confirmarBuffet.toLowerCase();
			if (confirmarBuffet == "s"){
				alert("Reserva efetuada com sucesso!");
				inicio();
			} else {
				alert("Reserva não efetuada.");
				inicio();
			}
		}

		function reservar_auditorio(){
			let quantidadeConvidados = parseInt(prompt("Qual a quantidade de convidados para seu evento?")), auditorioLaranja = 150 + 70, auditorioColorado = 350;

			if (quantidadeConvidados <= 0 || quantidadeConvidados > auditorioColorado){
				alert("Quantidade de convidados superior à capacidade máxima.");
				reservar_auditorio();
			} else if (quantidadeConvidados <= auditorioLaranja){
				let cadeirasExtras = auditorioLaranja - quantidadeConvidados;
				alert(`Use o auditório Laranja (inclua mais ${cadeirasExtras} cadeiras).`)
			} else {
				alert(`Use o auditório Colorado.`);
			}
			let confirmarAuditorio = prompt("Gostaria de efetuar a reserva? S/N");
				confirmarAuditorio = confirmarAuditorio.toLowerCase();
				if (confirmarAuditorio == "s"){
					alert(`${usuario}, reserva efetuada com sucesso!`)
				} else {
					alert(`${usuario}, reserva não efetuada.`);
				}
			inicio();
		}

		function reservar_restaurante(){
			let diaEvento = prompt("Qual o dia de seu evento?"), horarioEvento = 0, nomeEmpresa;
			diaEvento = diaEvento.toLowerCase();

			if (diaEvento == "sabado" || diaEvento == "domingo"){
				horarioEvento = parseInt(prompt("Qual a hora do seu evento?"));
				if (horarioEvento >= 7 && horarioEvento <= 15){
					nomeEmpresa = prompt("Qual o nome de sua empresa?");
					alert(`Restaurante reservado para ${nomeEmpresa} às ${horarioEvento}hs.`);
					inicio();
				} else {
					alert("Restaurante indisponível neste horário.");
					reservar_restaurante();
				}
			} else if (diaEvento == "segunda" || diaEvento == "terça" || diaEvento == "quarta" || diaEvento == "quinta" || diaEvento == "sexta") {
				horarioEvento = parseInt(prompt("Qual a hora do seu evento?"));
				if (horarioEvento >= 7 && horarioEvento <= 23){
					nomeEmpresa = prompt("Qual o nome de sua empresa?");
					alert(`Restaurante reservado para ${nomeEmpresa} às ${horarioEvento}hs.`);
					inicio();
				} else {
					alert("Restaurante indisponível neste horário.");
					reservar_restaurante();
				}
			} else {
				alert("Insira um dia da semana válido.");
				reservar_restaurante();
			}
	}

		function combustivel(){
			let valorGasolina = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?")), valorAlcool = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?")),
			porcentagem = valorGasolina * 0.3, diferenca = valorGasolina - valorAlcool;
			if (diferenca >= porcentagem){
				alert(`${usuario}, é mais barato abastecer com álcool no posto Stark Petrol.`);
				inicio();
			} else {
				alert(`${usuario}, é mais barato abastecer com gasolina no posto Wayne Oil.`);
				inicio();
			}
		}
			
		function manutencao(){
			var total = 0.0, empresaBarata;
			do {
				var nomeEmpresa = prompt("Qual o nome da empresa?");
				var valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
				var quantidadeDeAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
				var desconto = parseInt(prompt("Qual a porcentagem de desconto?"));
				var minimoDeAparelhos = parseInt(prompt("Qual o minímo de aparelhos para permitir o desconto?"));
				var valorAtual = calculo(valorPorAparelho, quantidadeDeAparelhos, desconto, minimoDeAparelhos);
				alert(`O serviço da empresa ${nomeEmpresa} custará R$${valorAtual}`);
				if (total == 0 || total > valorAtual){
					empresaBarata = nomeEmpresa;
					total = valorAtual;
				}
				var repetir = prompt("Gostaria de calcular outra empresa? S/N");
				repetir = repetir.toLowerCase();
			} while (repetir == "s");
			alert(`O orçamento de menor valor é o da empresa ${empresaBarata} por R$${total}.`);
			inicio();
		}

		function calculo(valorPorAparelho, quantidadeDeAparelhos, desconto, minimoDeAparelhos){
			var valorTotal = 0;
			if (quantidadeDeAparelhos >= minimoDeAparelhos){
				desconto = desconto * 0.01;
				valorTotal = (valorPorAparelho * quantidadeDeAparelhos);
				desconto = valorTotal * desconto;
				valorTotal = valorTotal - desconto;
			} else {
				valorTotal = quantidadeDeAparelhos * valorPorAparelho;
			}
			return valorTotal;
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 5');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(`Muito obrigado e até logo, ${usuario}.`);
				window.close();
			} else {
				inicio();
			}
		}
			
		function sistema_cadastrar_hospedes() {

				var escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

				if (escolha_hospedes === 1) {
					cadastrar_hospedes();
				} else if (escolha_hospedes === 2) {
					pesquisar_hospedes();
				} else if (escolha_hospedes === 3) {
					inicio();
				} else {
					erro_pesquisar_hospedes();
				}
			}
			
		function cadastrar_hospedes() {
				if (lista_hospedes.length == 15){
					alert("Numero máximo de hóspedes cadastrados.");
					sistema_cadastrar_hospedes();
				} else {	
					var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');
					
					lista_hospedes.push(nome_hospede);
					console.log(lista_hospedes); 
					alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
				}
				
				sistema_cadastrar_hospedes();
			}
			
		function pesquisar_hospedes() {
				var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
				
				if (lista_hospedes.includes(nome_hospede)){
					alert(nome_hospede + ' encontrada(o).');
					sistema_cadastrar_hospedes();
				} else {
					alert(nome_hospede + ' não foi encontrada(o).');
					sistema_cadastrar_hospedes();
				}
				
				sistema_cadastrar_hospedes() 
			}
			
		function erro_pesquisar_hospedes(){
				alert('Por favor, informe um número entre 1 e 3');
				sistema_cadastrar_hospedes();
			}
			
		
	
	</script>
</head>

<body>

</body>

</html>