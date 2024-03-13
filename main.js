let arr=[`<p>“Be yourself; everyone else is already taken.” </p>
<p>― Oscar Wilde</p>`,
`<p>“If you don't stand for something you will fall for anything.”</p>
<p>― Gordon A. Eadie</p>`, 
`<p>“Never put off till tomorrow what may be done day after tomorrow just as well.”</p>
<p>― Mark Twain</p>`,

`<p>“For every minute you are angry you lose sixty seconds of happiness.”</p>
<p>― Ralph Waldo Emerson</p>`,
`<p>“That which does not kill us makes us stronger.”</p>
<p>― Friedrich Nietzsche</p>`];



console.log(arr.length);

function add(){


  
  document.getElementById("quote").innerHTML=arr[Math.trunc(Math.random()*arr.length)];

 

}