/* 
::::::::::::::::::::::::::::::: AULA 01 :::::::::::::::::::::::::::::::::::::::

Componente - uma função que retorna HTML. Eles facilitam tanto na manutenção do
  código, quanto na reutilização do mesmo. Tudo dentro do react é um componente. 

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

import { useState } from 'react'

'useState()' -  essa função retorna duas informações. Ela retorna um array 
contendo o estado, e uma função que vai alterar o estado.
[estado, alterarEstado()]
*/

const [counter, setCounter] = useState(1);

/* pegando cada uma das informações que o 'useState' retorna, e colocando dentro
  de uma variável seraparada. Aqui temos a variável 'counter' armazenando o 
  estado que é retornado por 'useState', e 'setCounter' armazenando a função que 
  modifica esse estado. 
  
  "useState is a Hook that allows you to have state variables in functional 
  components. You pass the initial state to this function and it returns a 
  variable with the current state value (not necessarily the initial state) and
   another function to update this value." (LogRocket, 20 Abril 2021)
  (https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/)
  
  

<div>
  <Button/>
  <Button/>
  <Button/>
  <Button/>
</div>

/* Para não ter de utilizar uma 'div' exclusivamente para isso, pode ser utilizado
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

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* 
::::::::::::::::::::::::::::::: AULA 02 ::::::::::::::::::::::::::::::::::::::: 

:::: Porque utilziar TypeScript

Utilizar uma linguagem tipada nos confere certeza a respeito do formato dos 
dados. 

O grande propósito do TypeScript é a manutenção do código. 

O TS auxilia no momento do desenvolvimento, e na manutenção do código. Uma vez 
aplciada a tipagem, o próprio editor avisa quando há incoerências relativas ao 
tipo da variável.

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
  '_document' - permite configurar qual o documento, qual o fomato, que fica em
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

    ::

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
    revalidate: 60 * 60 * 8, //nova chamada a API a cada 8 horas.
  };
}

/*

    O SSG só funciona em produção. Por isso, deve-se gerar uma build do projeto,
    para simular que ela está rodando em produção, utilizando o 'yarn build'. 
    Após a build estar pronta, utiliza-se o 'yarn start'. Ele faz com o que o 
    projeto rode da mesma forma que se ele estivesse em produção.
*/
