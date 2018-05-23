

// bfoXMLToPDF = {};


// <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
// <div id="root"></div>
// <script type="text/babel">

//   ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//   );

// </script>

var myRe = /<%=.*?%>/g;

var frase = 
'<div id="frente-assinaturas" class="col-100 font-times">'+
'<table class="col-100">'+
'<tr>'+
'<td class="col-50">'+
'<img style="z-index: 9999; position: absolute; left: 10mm" src="<%=certificados[i].assinatura_conselho%>" width="240" height="85"/>'+
'<p class="text-14 center" style="padding-top: 15mm; line-height: 14pt;">'+
'_______________________________________ <br/>'+
'Presidente do Cons. Adm do <%=certificados[i].nome_unidade%><br/>'+
'<%=certificados[i].nome_conselho%>'+
'</p>'+
'</td>'+
'<td class="col-50" align="right">'+
'<p class="text-14 center" style="padding-top: 15mm; line-height: 14pt;">'+
'_______________________________________ <br/>'+
'Superintendente<br/>'+
'Rayley Campos Luzza'+
'</p>'+
'</td>'+
'</tr>'+
'</table>'+
'</div>';


var myArray = frase.match(myRe);
var myArray2 = frase.replace(myRe);

// console.log(JSON.stringify(myArray, null, 2));
// console.log(JSON.stringify(myArray2, null, 2));

var variablesArray = ['test1', 'test2', 'test3', 'test4', 'test5'];

for(i in myArray){
    var replaceReg = /<%=.*?%>/;
    frase = frase.replace(replaceReg, variablesArray[i]);
}

console.log(frase);



