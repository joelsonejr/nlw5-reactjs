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
