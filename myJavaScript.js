const textElement=document.getElementById('colorful-text'),colors=['red','blue','green','orange','purple','pink','brown'],text=textElement.textContent;let processedText='';const targetDate=new Date("oct 12, 2024 00:00:00").getTime(),countdown=setInterval(function(){const now=new Date().getTime(),distance=targetDate-now,days=Math.floor(distance/(1000*60*60*24)),hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60)),minutes=Math.floor((distance%(1000*60*60))/(1000*60)),seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("demo").innerHTML=`${days} <font color='red'>days</font>, ${hours} <font color='green'>Hrs</font>, ${minutes} <font color='blue'>Min</font>, ${seconds} <font color='gold'>Sec</font> antes`;distance<0&&(clearInterval(countdown),document.getElementById("demo").innerHTML="EXPIRED");},1000);for(let i=0;i<text.length;i++)processedText+=(text[i]===' '?'<br>':`<span style="color: ${colors[i % colors.length]}; animation-delay: ${i * 0.1}s; line-height: 1.5;">${text[i]}</span>`);textElement.innerHTML=processedText,document.addEventListener("DOMContentLoaded",function(){const colors=['#FF5733','#33FF57','#3357FF','#FF33A0','#F4FF33'],typingElement=document.querySelector('#dewal'),lines=typingElement.querySelectorAll('span');let currentLine=0,currentColor=0,typingInterval;function typeLine(line,callback){const text=line.textContent||'';line.textContent='';let index=0;typingInterval=setInterval(()=>{line.textContent+=text[index];index++;index>=text.length&&(clearInterval(typingInterval),callback());},100);}function showNextLine(){if(currentLine>0)lines[currentLine-1].style.opacity=1;if(currentLine<lines.length){lines[currentLine].style.color=colors[currentColor];lines[currentLine].style.opacity=1;typeLine(lines[currentLine],()=>{currentLine++;currentColor=(currentColor+1)%colors.length;setTimeout(showNextLine,500);});}}showNextLine();});
