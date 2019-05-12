function getRandom() 
{
    var min = parseInt(document.getElementById('a').value);
	var max = parseInt(document.getElementById('b').value);
    let c = (Math.floor(Math.random() * (max - min)) + min);
    return c;
}

function vivod()
{
    var answer = getRandom();
    if(isNaN(answer))
    {
        alert("ошибка");
    }
    else
    {
        alert(answer);
    }
}

function getArray()
{
    var val = parseInt(document.getElementById('mas').value);
    if (val > 30) 
    {
        alert("я не буду выводить такой большой массив")
        return;
    }
    var matrica = new Array();
    document.getElementById("vivod").innerHTML = '';
    for (var i=0; i < val; i++)
    {
        matrica[i]=new Array();
    }
    for (var i=0; i < val; i++)
    {
        for (var j=0; j < val; j++)
        {
            matrica[i][j]=getRandom();
        }
    }
    alert("сейчас будет ОЧЕНЬ");
    document.getElementById("vivod").innerHTML+='';
    let str = ' ';
    for (let i=0; i < val; i++)
    {
        for (let j=0; j < val; j++)
        {
            str +=matrica[i][j]+' ';
        }
        document.getElementById("vivod").innerText+=str;
        document.getElementById("vivod").innerText+="\n";
        str='';
    }
}

function getResultArray()
{  
    var size = parseInt(document.getElementById('greatarray').value);
    if(isNaN(size))
    {
        alert("выбери другой размер");
        return;
    }
    else
    {
        alert("массив будет из "+size+" элементов");
        mass = new Array();
        for (let i=0; i < size; i++)
        {
            let element = prompt("введите элемент");
            if(element == null)
            {
                alert("ну ок")
                return;
            }
            if((isNaN(element))||(element*2==0)&&(element!=0))
            {
                alert("похоже придется начать снчала");
                return;
            }
            else
            {
                element=Number.parseInt(element);
                mass[i]=element;
            }    
        }
        let a;
        for(let i=0; i < size-1; i++)
        {
            for(let j=0; j < size-1; j++)
            {
                if (mass[j]>mass[j+1])
                {
                    a = mass[j];
                    mass[j] = mass[j+1];
                    mass[j+1] = a;
                }
            }
        }
        alert(mass);
    }
}

function snake()
{
    let size = prompt("введите размер матрицы");
    if(isNaN(size)||(size*2==0)||(size > 20))
    {
        alert("попробуйте еще раз");
        return;
    }
    else
    {
        let mas = new Array();
        for (let i = 0; i < size; i++)
        {
            mas[i] = new Array();           
        }
        let count = 1;
        let one = size - 1;
        let two = 0;
        while(count<=size*size)
        {
            while((one >=0) && (count<=size*size))
            {
                mas[one][two] = count;
                count += 1;
                one-=1;
            }
            one+=1;
            two+=1;
            while((one < size) && (count<=size*size))
            {
                mas[one][two] = count;
                count +=1;
                one +=1;
            }
            one = size-1;
            two +=1;
        }
        let str = '';
        document.getElementById("vivod2").innerHTML='';
        for (let i=0; i < size; i++)
        {
            for (let j=0; j < size; j++)
            {
                str +=mas[i][j]+' ';
            }
            document.getElementById("vivod2").innerText+=str;
            document.getElementById("vivod2").innerText+="\n";
            str='';
        }
    }
}

function square(){
    var squar = prompt('введите сторону квадрата', "228");
    if (squar * squar) 
    {
        document.getElementById("demo").innerHTML = squar * squar;
    }
    else
    {
        document.getElementById("demo").innerHTML = "ошибка";
    }
}
function sycle(){
    var mnoj = prompt('введенное вами число будет использованно в формуле (Х+2)x(Х2+3)х…х(Х10+11)');
    var itog = 1;
    if (mnoj * mnoj)
    {
        for (i=1; i <= 10; i++){
            itog=(Math.pow(mnoj,i)+1+i)*mnoj*itog;
        }
        document.getElementById("umnoj").innerHTML = itog;
    }
    else
    {
        document.getElementById("umnoj").innerHTML = "ошибка";
    }
}

function random()
{
    alert('random');
}

function CoolFunction(){
    var arr = new Array();
    for(var i=0; i<8; i++)
    {
      arr[i] = new Array();
    }
    let chec;
    for(var i=0; i<8; i++)
    {
        for(var j=0; j<8; j++)
        {        
            arr[i][j]=getRandom();
        }
    }
    let str=' ';
    document.getElementById("t1").innerHTML ='';
    for(let i = 0; i < 8; i ++)
    {
        for(let j = 0; j < 8; j ++)
        {
            if (arr[i][j] >= 0){str+='+'+arr[i][j] + ' ' + ' ';}
            else str+=arr[i][j] + ' ';
            
        }
        document.getElementById("t1").innerText +=str;
        document.getElementById("t1").innerText += "\n"
        str='';
    }
    document.getElementById("t1").innerText += "\n"
    let check=Number ;
    let checked=Number;
    let itog=Number;
    checked=0;
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(arr[j][i]>0)
            {
                check=check+1;
            }
        }
        if (checked<check){checked=check; itog = i;}
        check=0;
    }
    for(var i=0; i<8; i++){
        check=arr[i][i];
        arr[i][i]=arr[i][itog];
        arr[i][itog]=check;
    }
   
    
    for(let i = 0; i < 8; i ++)
    {
        for(let j = 0; j < 8; j ++)
        {
            if (arr[i][j] >= 0){str+='+'+arr[i][j] + ' ';}
            else str+=arr[i][j] + ' ';
            
        }
        document.getElementById("t1").innerText +=str;
        document.getElementById("t1").innerText += "\n"
        str='';
    }
}


function addName(){
    var arr = new Array();
    for(var i=0; i<8; i++)
    {
      arr[i] = new Array();
    }
    let chec;
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            let answer=prompt("введите матрицу");
            if (answer==null)
            {
                alert("и правильно");
                return;
            }
            if ((answer*0!=0)||(answer*2==0))
            {
                alert("ОШИБКААА? ПРИДЕТСЯ ВВОДИТЬ ВСЕ СНАЧАЛА");
                return;
            }
            else
            {
                arr[i][j]=answer;
            }
        }
    }
    
    let check=Number ;
    let checked=Number;
    let itog=Number;
    checked=0;
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(arr[j][i]>0)
            {
                check=check+1;
            }
        }
        if (checked<check){checked=check; itog = i;}
        check=0;
    }
    for(var i=0; i<8; i++){
        check=arr[i][i];
        arr[i][i]=arr[i][itog];
        arr[i][itog]=check;
    }
    for(let i = 0; i < 8; i ++)
    {
        for(let j = 0; j < 8; j ++)
        {
            document.getElementById("t1").innerHTML +=arr[i][j]; 
        }
        document.getElementById("t1").innerText += "\n"
    }
    
    // document.getElementById("t2").innerHTML = arr[1][0]+" "+arr[1][1]+" "+arr[1][2]+" "+arr[1][3]+" "+arr[1][4]+" "+arr[1][5]+" "+arr[1][6]+" "+arr[1][7];
    // document.getElementById("t3").innerHTML = arr[2][0]+" "+arr[2][1]+" "+arr[2][2]+" "+arr[2][3]+" "+arr[2][4]+" "+arr[2][5]+" "+arr[2][6]+" "+arr[2][7];
    // document.getElementById("t4").innerHTML = arr[3][0]+" "+arr[0][1]+" "+arr[3][2]+" "+arr[3][3]+" "+arr[3][4]+" "+arr[3][5]+" "+arr[3][6]+" "+arr[3][7];
    // document.getElementById("t5").innerHTML = arr[4][0]+" "+arr[4][1]+" "+arr[4][2]+" "+arr[4][3]+" "+arr[4][4]+" "+arr[4][5]+" "+arr[4][6]+" "+arr[4][7];
    // document.getElementById("t6").innerHTML = arr[5][0]+" "+arr[5][1]+" "+arr[5][2]+" "+arr[5][3]+" "+arr[5][4]+" "+arr[5][5]+" "+arr[5][6]+" "+arr[5][7];
    // document.getElementById("t7").innerHTML = arr[6][0]+" "+arr[6][1]+" "+arr[6][2]+" "+arr[6][3]+" "+arr[6][4]+" "+arr[6][5]+" "+arr[6][6]+" "+arr[6][7];
    // document.getElementById("t8").innerHTML = arr[7][0]+" "+arr[7][1]+" "+arr[7][2]+" "+arr[7][3]+" "+arr[7][4]+" "+arr[7][5]+" "+arr[7][6]+" "+arr[7][7];
}
function privet()
{
    alert("ДОБРО ПОЖАЛЫВАТЬ НА САЙТ ДИМЫ ДРОГОВОЗА, СТУДЕНТА ДАЛЬНЕВОСТОЧНОГО ФЕДЕРАЛЬНОГО УНИВЕРСИТЕТА ГРУППЫ Б8102");
}


    
    
  