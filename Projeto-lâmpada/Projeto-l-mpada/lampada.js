// Para o exercício da lâmpada, é necessário primeiramente "pegar" os elementos html necessários para fazer a construção do código. Neste caso, são os botões "ligar" e "desligar", representados pelas Id's 'turnOn'e 'turnOff', respectivamente. Esse "pegar" mencionado acima, nada mais é do que declarar por meio de const como eles serão representados no código Js (Da mesma forma que eu chamo a class no css e preciso de um nome pra essa class, eu nomeio uma Id lá no Html e chamo essa Id aqui no Js com o getElementById e o comando usado é a const, representados nas 3 primeiras linhas de código). Após essa declaração, eu preciso criar um comando para fazer com o que o "turnOn" (já explicado quem é lá em cima) mude a imagem da lampada desligada para acesa ao "ouvir" o click(do mouse). Este comando é o addEventListener (ele ficará "escutando", e quando "ouvir" um click no botão "turnOn", irá executar o comando de mudar a imagem). O mesmo processo ocorrerá com o "turnOff".

const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const texto = document.getElementById('texto')
// Só peguei os elementos que quero (botoes e a imagem da lampada) com o get element by id

function lampOn() {
  lamp.src = './IMG/lampada-acesa.jpeg'
}
function lampOff() {
  lamp.src = './IMG/lampada-apagada.jpeg'
}
// função que altera o lampOn para acesa
function brokenLamp() {
  lamp.src = './IMG/lampada-quebrada.jpeg'
}

turnOn.addEventListener('click', lampOn)
// Comando para o turnOn ficar "ouvindo". Quando ele "ouvir" o click, ele acende a lâmpada

turnOff.addEventListener('click', lampOff)
// Comando para o turnOn ficar "ouvindo". Quando ele "ouvir" o click, ele acende a lâmpada

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', brokenLamp)
// Comandos para a lâmpada apagar e acender se passar o mouse por cima
