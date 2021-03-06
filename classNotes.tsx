/*

## ::::::::::::::::::::::::::::::: AULA 01 :::::::::::::::::::::::::::::::::::::::

    client (browser) - next.js (node.js) - server (back-end) 

No next, a geração da páginas pode ser feita tanto no client, quanto na camada do
Next.js.

Componente - uma função que retorna HTML. Eles facilitam tanto na manutenção do
código, quanto na reutilização do mesmo. Tudo dentro do react é um componente.

Conceptually, components are like JavaScript functions. They accept arbitrary 
inputs (called “props”) and return React elements describing what should appear
 on the screen.
 (https://reactjs.org/docs/components-and-props.html)



Propriedade - é uma informação que é repassada de um componente para outro. É
equivalente a um atributo do HTML. Mais especificamente, de um componente pai,
para um componente filho.

Um elemento não pode ser colocado em baixo do outro, sem que tenha algo em volta
(como uma div). T

Estado - manipular informações de dentro de um componente. É uma informação que
está dentro de um componente, cujo valor pode ser alterado de acordo com alguma
ação do usuário.

O React não fica monitorando o valor das variáves, para que quando elas sejam
modificadas, seu valor seja alterado em tela. Para que isso aconteça, é necessário
que se utilize um conceito chamado estado.
*/

import { useState } from 'react'

/*
'useState()' - essa função retorna duas informações. Ela retorna um array
contendo o estado, e uma função que vai alterar o estado.
[estado, alterarEstado()]
*/

const [counter, setCounter] = useState(1);

/*
pegando cada uma das informações que o 'useState' retorna, e colocando dentro
de uma variável seraparada. Aqui temos a variável 'counter' armazenando o
estado que é retornado por 'useState', e 'setCounter' armazenando a função que
modifica esse estado.

"useState is a Hook that allows you to have state variables in functional
components. You pass the initial state to this function and it returns a
variable with the current state value (not necessarily the initial state) and
another function to update this value." (LogRocket, 20 Abril 2021)
(https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/)
*/

<div>
  <Button/>
  <Button/>
  <Button/>
  <Button/>
</div> 

/*
Para não ter de utilizar uma 'div' exclusivamente para isso, pode ser utilizado
um 'fragment'
*/

<>
  {" "}
  //fragment
  <Button />
  <Button />
  <Button />
  <Button />
</>; 

/*
## ::::::::::::::::::::::::::::::: AULA 02 :::::::::::::::::::::::::::::::::::::::

:::: Porque utilziar TypeScript

Utilizar uma linguagem tipada nos confere certeza a respeito do formato dos
dados.

O grande propósito do TypeScript é a manutenção do código.

O TS auxilia no momento do desenvolvimento, e na manutenção do código. Uma vez
aplciada a tipagem, o próprio editor avisa quando há incoerências relativas ao
tipo da variável.
*/

type User = {
name: string;
address: {
city: string;
state: string;
}
}

//Retornar o texto de boas vindas do site
function createWelcomeMessage(user: User){
return `Boas-vindas, ${user.name}, Cidade: ${user.address.city} - ${user.address.state}!`
}

const joe = {
name: 'Joelson',
adress: {
city: 'Rio de Janeiro',
state: 'RJ'
}
}

const welcomeMessage = createWelcomeMessage({
name: 'Joe',
address: {
city: 'Rio de Janeiro',
state: 'RJ'
}
})

//Tipagem das propriedades

type ButtonProps = {
title: string;
}
function Button(props: ButtonProps){
return(

<button>{props.title}</button>
)
}

<>
<Button title="Button 1" />
<Button title={2} />
<Button title="Button 3" />
</> 

/*
tsx = TypeScript + jsx (xml no javascript)

A pasta 'pages' só pode exixtir dentro da raiz do projeto, ou dentro da pasta
'src'

:::: Sass
Pré-processador CSS

::::CSS

A media 'rem' é mais indicada por questões de acessibilidade. Cada '1rem'
equivale ao font-size do root da página (o HTML). Caso fosse utilizado o 'em'
ele tem o tamanho relativo ao tamanho de fonte do elemento que o envolve.

O tamanho padrão do font-size do HTML é 16px;

Quando se utilzia o 'rem', ao contrário do px, quando o usuário aumenta a fonte
do sistema, toda a aplicação seguirá essa alteração.

::::APP.TSX
Esse arquivo está 'em volta' de toda a aplicação. Todas as rotas passam por
ele, e sempre que uma página é carregada, ele é carregado junto.

::::_DOCUMENT
'document' - permite configurar qual o documento, qual o fomato, que fica em
volta da aplicação. Sendo que ele é carregado uma única vez, independente da
quantidade de páginas pelas quais se navegue, dentro do APP.

::::NOTES
No React, toda TAG precisa ter um fechamento.

::::PASTA COMPONENTS
Nesta pasta ficam os componentes que são utilizados em mais de uma página do
APP, os componentes globais.

::::NOTES
Ao exporter um componente só é obrigatório utilizar o 'default' quando se
tratam das páginas da pasta 'pages'.

::::NOTES
Todo o arquivo na pasta 'public' são públicos, logo não há a necessidade de
se escrever todo o caminho dos mesmos.

::::CSS MODULES
Esse recurso do Next permite que sejam criados arquivos CSS que são
específicos para um componente. Ou seja, as regras desse css não serão
compartilhadas com nenhum outro elemento da aplicação.

    ::::APP.TSX
    Toda a página da aplicação será exibida dentro do APP. Caso eu queria que
    algum componente sempre fique visível dentro da aplicação (como é o caso do
      header), eu vou colocar esse componente dentro do arquivo 'app.tsx'

    ::::CONSUMINDO UMA API
    SPA - funciona em um projeto React tradicional
      Para utilziar essa abordagem, começa-se importando uma função do React
      chamada 'useEffect()'. Ela "dispara" algo, sempre que algo mudar em nossa
      aplciação (ver bibliotecas de side effects)

      O primeiro parâmetro passado para ela é o que que eu quero executar, e o
      segundo parâmetro é quando executar. O segundo parâmetro é um array.
      Dentro do array pode ser passada uma variável, que, caso o seu valor se
      altere ao longo da execução do app , fará com que a 'useEffect()' seja
      executada.

      Quando se deseja que a função seja executada tão logo o componente seja
      exibido em tela, uma única vez, basta passar um array vazio '[]'.

      Logo, para fazer o carregamente de uma API, basta fazê-lo dentro da função.
    */

import { useEffect } from "react";

export default function Home() {
useEffect(() => {
fetch("http://localhost:3333/episodes")
.then((response) => response.json())
.then((data) => console.log(data));
}, []);

return <h1>Index</h1>;
}

/*
    Nesse modelo, os dados estão sendo caregados somente no momento em que a pessoa
    acessa a tela da aplicação.
    Por conta disso, essa abordagem não é interessante quando há a necessidade de
    que os dados sejam indexados por um motor de busca.


    SSR - funciona em um projeto utilizando NextJs
    Para utilziar o SSR no Next, basta que dentro de qualquer arquivo da pasta
    'pages' seja feito o seguinte export:
*/

export function getServerSideProps() {} 

/*
Assim que o Next localiza essa função, ele já sabe que ela deve ser
executada, antes de exibir a página para o usuário final.

      Apos alterado, o código fica da seguinte forma:
*/

export default function Home(props) {
console.log(props.episodes);

return <h1>Index</h1>;
}

export async function getServerSideProps() {
const response = await fetch("http://localhost:3333/episodes");
const data = await response.json();

return {
props: {
episodes: data,
},
};
}

/*
Como o nome da função diz, o que está sendo buscado são os 'props', por isso
de essa propriedade estar sendo retornada. O objeto 'props' precisa sempre
ter esse nome. Já as propriedades e valores desse objeto, pode ter seus
nomes alterados conforme seja necessário.

    Com base no conceito de propriedades do React, quando se quer acesar as
    propriedades pelo getServerSideProps, els podem ser acessados pelos
    parâmetros da função 'Home(props)'.

    A primeira execução ocorre no servidor Next, e não no browser. Por isso, caso
    o JS seja desabilitado, não haverá saída no console. Contudo, há saída no
    terminal.

    A requisição dos dados é realizada pela camada do Next. Logo, assim que a
    página é exibida os dados jã estão disponíveis.

    O getServerSideProps será executado toda vez quem alguem acessar a home da
     aplicação.


    SSG - funciona em um projeto utilizando NextJs
    Quando a home da aplicação não precisa ser atualizada em tempo real, não
    faz sentido recorrer a API toda vez que um novo acesso é realizado, uma vez
    que é sabido que os dados não mudaram.

    Com o SSG, gera-se uma versão estática da página, tão logo ela seja acessada,
    e essa página é servida para todos os acesssos que ocorrerem após o primeiro.
    Eliminando assim a necessidade de uma nova requisição todas as vezes.

    Para isso, basta mudar a função para 'gesStaticProps', e retornar a opção
    'revalidate' após os 'props'. O 'revalidate' recebe um número em segundos,
    que define de quanto em quanto tempo deseja-se criar uma nova versão dessa
    página.
*/

export async function getStaticProps() {
const response = await fetch("http://localhost:3333/episodes");
const data = await response.json();

return {
props: {
episodes: data,
},
revalidate: 60 _ 60 _ 8, //nova chamada a API a cada 8 horas.
};
}

/*
    O SSG só funciona em produção. Por isso, deve-se gerar uma build do projeto,
    para simular que ela está rodando em produção, utilizando o 'yarn build'.
    Após a build estar pronta, utiliza-se o 'yarn start'. Ele faz com o que o
    projeto rode da mesma forma que se ele estivesse em produção.

## ::::::::::::::::::::::::::::::: AULA 03 :::::::::::::::::::::::::::::::::::::::

:: TypeScript
Todas as funções possuem uma tipagem, que pode ser importada de dentro do Next.
Quando se importa uma tipagem de uma função, está sendo determinado o formato dela,
e do retorno dela.
<br>
<br>
<code>
import { GetStaticProps } from 'next';
</code>
<br>
<br>

Para tipar uma função como um todo (seus parâmetros e seu retorno) ela deve ser
transformada em uma constante. E a tipagem vem logo após o nome da função,
precedida por ':'

A função muda de:
*/

export async function getStaticProps() {};

/*
Para:
*/

export const getStaticProps: GetStaticProps = async () => {};

/*
::'generic' - no TS se refere a uma função. Um tipo que pode receber um parâmetro.

::Tipagem do argumento do componente Home

export default function Home(props: HomeProps) {}


::Axios - biblioteca para fazer requisições HTTP (tal qual o fetch), mas que trás
algumas funcionalidades. Com ela fica mais simples de se definir como os dados
serão pegos no servidor, e quais 'filtros' serão utilizados nessa requisição.

::Formatação de dados - quando se trabalha com Front end é muito comum ter de
apresentar dados que vem em um formato diferete daquele no qual ele vem do
backend.

Não é interessante formatar o dado no momento de exibi-lo, um vez que todas as
vezes que aquele componente for renderizado, essa formatação será executada.
Quanto mais isso ocorrer, maior será o impacto na performace.

Por isso, sempre que for necessária realziar a formatação de algum conteúdo que
está vindo do Back end, deve-se formatá-lo ANTES de ele chegar ao componente.

A dica é formatar os dados, logo depois da chamada a API, para retornar para o
componente os dados já formatados.

::'.map' - sempre que se deseja percorrer uma lista, e retornar algo, deve-se 
utilizar o método '.map'.

Sempre que é feito um 'map' dentro do React, o primeiro elemento que vem dentro 
return, deve ter uma propriedade chamada 'key'.

Toda vez que um componente é alterado, o React recriará o mesmo. Essa 'key' 
permite que ele saiba, exatamente, qual elemento deverá ser alterado. Evitando
assim que toda a página da aplicação sejá renderizada, sem que haja necessidade.

::'Image' - componente do Next. Ele pode ser utilizado no lugar das tags '<img>'
Permite que o tamanho de uma imagem seja ajustado automaticamente pelo Next.
*/

<Image width={192} height={192} src={episode.thumbnail} alt="{episode.title}"/>

/*
Esses atributos de largura e altura são referentes ao tamanho que será carregado
pelo Next, e não ao tamanho de exibição.
Por boa prática, os valores devem corresponder a 3x o tamanho no qual se pretende
exibir a imagem.

Por padrão o 'Image' não funciona para qualquer local de hospedagem de imagem. 
Logo, é necessário criar um arquivo 'next.config.js' na raiz do projeto, no qual
consta qual o domínio das imagens.
*/

module.exports = {
  images: {
    domains: ["storage.googleapis.com"],
  },
};

/*
O componente 'Image' pode receber outras propriedades, que servem para definir 
o tamanho de exibição da imagem (similar ao 'background-size' do CSS).

::File system routing - os arquivos existentes na pasta 'pages' são os que 
compoem a rota da aplicação.
Para que a página dos episódios fique com uma rota mais interessante, será 
utilizado um 'slug' (o nome do episódio em formato amigável com a barra de 
endereços).

A fim de atinger esse objetivo, foi criada uma pasta 'episode' dentro de pages, 
e dentro dela foi criado um arquivo com o nome:
*/

[slug].tsx

/*
O nome do arquivo não precisa ser necessariamente 'slug'. Ele pode ser qualquer
palavra que se opotou por usar como referência ao nome amigável que será enviado
para a barra de endereços.

Para acessar o conteúdo desse slug, basta importar o método useRouter de dentro
do next.
No exemplo abaixo, o conteúdo do 'slug' é exibido dentro do h1.
*/

import {useRouter} from 'next/router'

export default function Episode() {
  const router = useRouter()

  return (
    <h1>{router.query.slug}</h1>
  )
}

/*
::'link' - Componente do Next, que envolve uma âncora '<a> </a>', e faz com que
quando o link em questão for clicado, apenas o novo conteúdo referente àquele link
seja carregado. 
O atributo 'href' será movido da tag <a> para a tag <Link>
Antes que esse componenete seja utilizado, ele precisa ser importado. 
*/

import Link from 'next/link';

<Link href={`/episodes/${episode.id}`}>
  <a >{episode.title}</a>
</Link>

/*

Dessa forma, só será carregado o que for necessário, e não toda a página.

::React Hooks - todo método que começa com 'use', com por exemplo 'useRouter', 
está dentro dessa classificação. Todo hook só pode ser utilizado dentro de um 
componente.
*/

/* Como o 'getStaticProps' não é um componente, não se pode utilizar o 'useRouter'
dentro dele ( uma vez que hooks devem vir dentro de um componente). Por isso, 
foi utilizado o 'context' (ctx) como parâmetro, da função async, para que se 
pudesse acessar os dados do 'slug'. */

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`episodes/${slug}`)
  
  return {
    props: {
      revalidate: 60 * 60 * 24 //24 hours
    }
  }
}

/*
::HTML no React -  semrpe que se vai exibir um texto com formatação HTML, o React
não o apresenta, por questões de segurança, como uma estrutura que possa ser 
exibida em tela. (Pode haver um código malicioso injetado no conteúdo.)

Para forçar o React a rendezizar o texto como HTML, deve-de adicionar a propriedade
'dangerouslySetInnerHTML'

Isso não deve ser feito quando não se tem certeza absoluta a respeito dos dados 
que estão sendo recebidos. 
*/

<div 
className={styles.description} 
dangerouslySetInnerHTML={{__html: episode.description }}
/>

/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::: AULA 04 :::::::::::::::::::::::::::::::::::::

::: getStaticProps() : é utilizado de forma obrigatória em toda rota que está 
utilizando geração estática, e que possui parâmetros dinâmicos ( que tem o [] no
nome do arquivo).

O principal momento no qual o Next vai gerar a página estática da aplicação é no
momento da build.

Sendo assim, uma vez que o next não sabe o con

Observando o [slug].tsx : 

Uma vez que o Next roda o processo de gerar as páginas estáticas no momento da 
build do projeto (yarn build), como que ele vai construir uma versão estática 
dá página de episódios, uma vez que no momento da build ele não sabe qual 
episódio existe, qual episódio eu quero gerar uma versão estática? 

O episódio (o slug do episódio) é uma opção dinâmica. No momento da build, o Next
não possui a informação de quais episódios temos dentro de nossa página, de nossa
API. Ele não sabe quais episódios ele precisa gerar de forma estática.

Também  pode-se ver que o 'paths: []' está vazio. Logo, não será
gerada nenhuma página (referente aos episódios) de forma estática.

Por isso, toda vez que se está gerando de forma dinâmica uma página estática, ou 
seja, uma página estática que tem parâmetros, é preciso informar o método 
'getStaticPaths()', pois ele retorna (no caso em questão) quais episódios eu 
quero gerar de forma estática no momento da build.

Uma vez que o 'paths: []' está vazio, o Next entende que ele não vai gerar de 
forma estática nenhum episódio no momento da build. 

: fallback: determina o comportamente da página de um episódio, que não foi 
gerado estaticamente.

: fallback: false : caso seja acessada a página estática de um epísódio, e esse
episódio não foi gerado no momento da build, ele vai retornar 404.
*/
    client (browser) - next.js (node.js) - server (back-end) 
/*

: fallback: true : caso seja acessado um epísódio, e o mesmo não tenha sido
gerado anteriormente de forma estática, ele tentar vai buscar os dados daquele 
espisódio que está sendo acessado, para gerar uma página estática e salvar em 
disco. O 'fallback:true' faz com que a requisição para buscar os dados do 
episódio ( a requisição que está dentro do getStaticProps(), a chamada à API) 
aconteça pelo lado do client, ou seja, pelo lado do browser.  

Como a requisição ocorre pelo lado do client, os dados que devem preencher 
'episode', vão demorar um pouco para serem gerados. 

O Next só vai carregar os dados das páginas quando elas forem acessadas pelo 
usuário.

: fallback: blocking : ele roda a requisição na camada do next.js. Logo, quando
o usuário clicar em um link, ele só será redirecionado para a próxima tela, 
quando os dados já tiverem sido carregados. Para questões de SEO e indexação, 
essa é a melhor opção. Caso um crawler tente acessar o conteúdo da aplicação
que ainda não foi gerado estaticamente, a página vai aguardar o conteúdo ser
carregado, para então ser exibido. 

Dentro do Next o fallback (true ou blocking) são chamados de incremental static
regeneration. Ele permite gerar novas páginas conforme as pessoas vão acessando, 
e também revalidar (gerar novamente) páginas que estejam obsoletas.

::Context API  23:41


*/

