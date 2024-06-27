//UURUUSUU UUR NEGENIIG HARAH GEJ ORJ IRSEN BOL GARNA UU
//SETGELIIG CHIN UVTUHIIG HUSEHGU BAINA SHUU!!!!!
//Busdiig yu gej bodoh maani chamaig uvtguhvii gej bodjiin

var n1 = "Ner:"
var n2 = "Minii huvid:"
var n3 = "Helehiig husdeg ug:"
var n4 = "Anhnii setgegdel:"
var n5 = "Chinii talaar namaig shanluuldag zuil:"
var n6 = "Zurgiig ni nuutsaar darsan/hadgalj avsan:"
var n7 = "Chamaig 3 ugeer ilerhiilvel:"

function gettingReady(){
    idH2.innerHTML = "<input type='textbox' value='' placeholder='Naiziin Code' id='idFriendCode'>"
    idH2.innerHTML += "<br>"
    idH2.innerHTML += "<input type='button' id='idBtn1' value = 'shalgah' onClick ='getIntoFriend()'><br>"
    idH2.innerHTML += "<input type='button' id='idBtn2' value = 'herhen ashiglah ve' onClick ='information()'><br>"
}
function information(){
    idH2.innerHTML = "Ene dotor ihenh naizuudtaigaa yaj taniltsaj baisan,<br> haana yu hiij yvdag baisan geed bugdiig bichiv."
    idH2.innerHTML += "Naizuudruugaa code yvuulsan baigaa<br>Ter codiig naiziin code hesegt bichiz orno<br>Orsonii daraa tend<br>Ner:<br>Minii huvid:<br>"
    idH2.innerHTML += "Helehiig husdeg ug/zuils:<br>Anhnii setgegdel:<br>Chinii talaar namaig shanluuldag zuil:<br>Zurgiig ni nuutsaar darsan/hadgalj avsan:<br>"
    idH2.innerHTML += "Chamaig 3 ugeer ilerhiilvel:<br>Geed hesguud baigaa. Bi hariulaad yvsaan gesen ug."
    idH2.innerHTML += "<hr width = '50%'>"
    idH2.innerHTML += "Ymar negen feedback esvel busdiig harahiin<br>tuld ene dood tovchin deer darna uu<br>"
    idH2.innerHTML += "<button onClick='myFeed()'>Feedback</button>"
    idH2.innerHTML += "<hr width = '50%'>"
    idH2.innerHTML += "<input type ='button' id='idBtn3' value='butsah' onClick='back()'>"
}


function getIntoFriend(){
    //Amina
    if(idFriendCode.value == "nz08ae19gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Amin-Erdene<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno, uulzahiig hamgiin ih husdeg humuusiin neg<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Chamd uneheer ih talarhaj yavdag shuu :)<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Huurhun l ohin ym neg angid orchihvol ch hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Ter neg udur chamaig arai l hetruulchihsen<br> Ternees hoish l chamaig hamgaalmaar sanagdaz<br> ehelsen. Gehdee end irtsen. Uuchlaarai (T-T)<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Yes uuchlaarai hhah<br> Chi chin zurgaa fb tavih hovor bolohoor l hhe.<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Iyldeg, Uhaalag, Medremjtei<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tegshee
    else if(idFriendCode.value == "nz11tg23gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tegshbileg<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Setgeld hursen sanaj yvdag humuusiin neg<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Hetsuu uyd hamt baidagt bylla <3<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Namaig hamgaalad baihiin goy aashtai ohin ymaa taniltsah ymsan.<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Hyadaa gomdoochihson ym shig sanagddag uy bii, herev chamaig gomdooson bol uuchlaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Yes hha<br> humuus sain naiziinhaa zuragiig gallery daa hadgaldag geed baisiin hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Zorigtoi, Uruwch<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tsoomoo
    else if(idFriendCode.value == "nz08tr14by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tsolmonbayr<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Gants and min<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Andaa hairtai shuu ochihoor hamt erchuudiin shalgavariig daviishdee hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>10 jiliin umnuhiig sanahgu bna aa hhah <br> gehdee naizlahiig husej baisanaa sanajiin<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Ireeduid minii esreg baival yah bol gej bodogddog<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Yes hhah, Guee gants andiin maani zurag galleryd maani baigaad yaval gej hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Zorigtoi, Uhaalag, Hugjiltei<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Namuun
    else if(idFriendCode.value == "nz10nn23gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Namuun<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno naizuudiin neg<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Hamt butku2 ym hiidegt bylla hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ene yatsan bolood nadaa prankdah huselt irdeg bna aa hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Zarimdaa ymand ni tusalj chddagud uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Timee hhah<br>Gallery daa nuutsaar avj yvj uzmeer baisiin hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Hugjiltei, Butelgu<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Michidmaa
    else if(idFriendCode.value == "nz09ma16gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Michidmaa<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Gants goy mni duu shig naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Bayrlah, Gomdoh geed ymarch uyd chin hamt baih <br>bolohoor btgi shntraarai<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ygd MunkhBilegiin angid iim huurhun ohin baigaad<br>mni angid huurhun ohin baidaggu ym be hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Hayadaa tengtdegt uuclaarai hha<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Th, barg mddg baih te hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Huurhun, Uhaalag, Havriin tenger<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Naransuvd
    else if(idFriendCode.value == "nz11nd24gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Naransuvd<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>idol edr deer namaig oilgochih hedhen hunii neg<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Uul ni hamtlag bolood duulchuul te hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ene entiin ami ym baina l daa hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Mogi g idevhtei baihad hamt duu gargaaguid sorry hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guu, Bi tegej engiin naiziinhaa <br>zurgiig husaad bdg hun bish ee hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Goy hoolootoi, Sergelen<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tamiraa
    else if(idFriendCode.value == "nz11tr17by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tamiraa<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Baruun salaanii naizuudaas gants fb deer maani baigaa ni<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Chi ml gaigu toglochihdog shuu<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ene neg nuhur ydj hashaa davj chadah bolov uu hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Hamt ml toglodoggud uuclaarai hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guu, Chi fb dee zrg edree oruuldiimuu hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Nairsag, Yria, Tomootoi<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tanhiluun
    else if(idFriendCode.value == "nz08tn24gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tanhiluun<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Minii nasnii hov hamt bazdag gants hun dee hhah<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Insta edr deer aldartai bolooch bro<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Huurhun l ohin ym baina<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>chamaig haraad shanaldaggu ee hha<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guu, Cni zurgiig harj baigaagui ym bna shd hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Yria, Uhaalag<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Undral
    else if(idFriendCode.value == "nz08ul22gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Undral<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Umnuh dursamjuud ch goy shuu te hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ymar ch ih zovlon uzee ve<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Hoyr ch udaa uyrhej setgeliig chin ursand uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Th, Mni naiz ohin baihad chin<br> nileen ih zrg hadgalj avsaan hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Uhaalag, Unench<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Ancha
    else if(idFriendCode.value == "nz10ar19by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Ariunchanar<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno tsaashaa naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Yioo ta hed hurdan ireesee te<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Holbombog toglodiin bolov uu<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Tunkheld hoyr ch udaa bil uu <br> Huuhduudtei muudaltsuulaad zodolduulchihsan sorry bro<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Mdku ee, dandaa zurgiig chin asuuj avdag bolohoor hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Uhaalag, Sportlog<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Nini
    else if(idFriendCode.value == "nz08nn19gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Ninjin<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotnoos dotno naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Aah udku tugsluuu<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ailiin tom ym baina l daa<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>mdkuee shanluuldag ym sain mdku baina<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Gu baih aa<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Huurhun, Enrengui<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Namuunaa
    else if(idFriendCode.value == "nz08na24gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Namuunaa<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Bi cni copy yg mun uu<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ymar ih setgeliin sevtei huuhed ve<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Chamaar togloh geegui shuu zgr l<br> uur shaltgaantai baisiimaa uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Uguu<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Uhaalag, Huurhun<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

     //D.Misheel
    else if(idFriendCode.value == "nz08ml14gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Misheel<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Bi baigaa shdee chamaig 2 jil garan haisiishd fb g chin hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Mat daa sain baih daa<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Chamaig zgr neg haigaagu shuu zgr suuldee<br> tanihgu hun shig boltson baina lee<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Uguu<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Uhaalag, Huurhun<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Narantungalag
    else if(idFriendCode.value == "nz09ng19gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Narantungalag<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Bi shorgoolz bish!!!<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ymar ch unduriin<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Haya togloomoo hetruulchihdegt uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guh<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Undur, Uhaalag, Huurhun<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

     //Itgel
     else if(idFriendCode.value == "nz10il23by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Itgel<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Naiz<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Hrhn ohin baina shd hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Yioh anhni zahialag,<br> ter huniin goy prankdaj ugnu uu hha<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Ter neg huniig ni oligtoi prankdaj <br>chadaagu uuclaarai hhah (nmg zgnaad baisiin hhah)<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guh<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Tsarailag, Uhaalag, Shiniig sudlagch<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Chinzorig
    else if(idFriendCode.value == "nz09cg17by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Chinzorig<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Duugiin angiin minii naizuudiin neg hhah<br><br>";
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Ochihoor hamt ml togliishuu<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ymarch ganster shig durak ve hhah <br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Anhnii bodold maani sorry hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guh<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Cool, Uhaalag, Hudulmurch<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Anar-Erdene
    else if(idFriendCode.value == "nz10ae17by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Anar-Erdene<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Duugiin angiin batsaan hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Ochihoor hamt holbombog togliishuu hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Chinzo, Bilegee hoyrtoi niildiin baihdaa<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Uuchlalt guih zuil olddoggu ee<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guu<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Hugjiltei, Yria<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Ninjin
    else if(idFriendCode.value == "nz08nn23gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Ninjin<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Volly hamt toglodog naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Chi ym buhend buh chadlaaraa hicheedeg shuu<br>haya amrch baigaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Mongoloor ymar sain yridiin ireed udaagui ym bna l daa<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Suuliin vollyd orj chadaagud sorry<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guh, zurgiig chin darj barigdaad yahav<br> geed oroldoj ch uzeegu hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Uhaalag, Hicheengui<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Egshiglen
    else if(idFriendCode.value == "uy08en15gl"){
        // document.body.style.textAlign = "left"  
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Egshiglen<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Uyel<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Huuy hoyulaa taniltsaad 10 jil boloogu bgn baina shd hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ymarch ih ponytoi ym,<br> Bi pony uzeh durtai gvl yah bol hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Cni ngu zurgiin storydoo hiisend uuclaarai hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Tiin2, Emee yvuulaad baisiin hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Sungalttai, Hicheengui<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Soyombo
    else if(idFriendCode.value == "nz08so22by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Soyombo<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Mongold ochvol daguulaad iish tiishee yvah uu chi hha<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Uurtain be, Eegiigiin naiz zaluu bil uu<br> zaahan hundetgeltei baimaariim aa bi hha<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Anh hudlaa hereldej prankdsand uuclaarai hha<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guh<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Genagiin hiisen hool xD<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Nandia egch
    else if(idFriendCode.value == "nz"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Nandia egch<br>Zgr shuud Nandin geh gsn evgu sanagdchilaa hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Zuvlugch egch<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Hayadaa hetsuu uyd zuvluguu ugdugt bylla<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Aan ene eejiin yriad baisan <br>suuliin roommate boloh egch uu<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Hayaa tng2 idea gargachihdagt sorry hha<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Gu<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uguumur, Uhaalag, Hugjiltei<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Enerel
    else if(idFriendCode.value == "nz08el22gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Enerel<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Umnu hamt baisand bylla<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Harj baigaagu huuhed baih chin<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Ter jiliin ymnuudad uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Gants udaa<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hugjiltei, Cool, Huurhun<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tseepilmaa
    else if(idFriendCode.value == "nz08ta19gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tseepilmaa<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Bi 6 dugaar angid chamd uhaanaa aldtal durlasan baisiishd<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Ali angias orj irsiin bol, Ymarch huurhuniin<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Neg nuuts medmeer bna uu chatandaa orood ir hhe<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Hedhen udaa<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Pretty, Uguumur<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Samuel
    else if(idFriendCode.value == "nz09sl19by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Samuel<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Dotno naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Mongold ochihoor hamt togliishdee bombog edree beldejii hhah<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Nice boy baina shd hha<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Uuclalt guigaad baih ym baina uu heleerei haha<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guu<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Hicheengui, Yria, Hugjiltei<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tuvshinsaihan
    else if(idFriendCode.value == "nz08tn14by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tuvshinsaikhan<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Bagiin naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Baga baihad dandaa nadaa tusaldag baisand bylla<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Namaig tooj hamt togloh bolov uu<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Baga angid baihad sadaa bolood baidag baisand uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Gu, hoyulangiinh ni uyd utas selfie edr<br>baidaggu bailaa shd hha<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Taivan, Uhaalag, Uruvch<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Tuvshinbayr
    else if(idFriendCode.value == "nz10tr17by"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Tuvshinbayr<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Duugiin angiin naiz<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Humuustei taniltsuulsand bylla<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Munkhbilegiin naiz ym baina l daa<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>baihgu<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Guh<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Uguumur, Hugjiltei<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    //Misheel
    else if(idFriendCode.value == "uy14ml14gl"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>Enkhmisheel<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>Uyl duu<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Bitgii nadaa gomdood baigaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Wuadg2 egduutei ym be<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Hayaa chmd uurladagt uuclaarai<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>Yes, ineedtei2 zrgiig chin dardag bailaa shd hhah<br>Daanch odoo neg ni ch alga uu<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>Uhaalag, Huurhun, Gomdomhoi<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }


    //NO ONE
    else if(idFriendCode.value == "no08ne24gy"){
        // document.body.style.textAlign = "left"
        idH2.innerHTML = "<wonky>" + n1 + "</wonky> <br>No One<br><br>"
        idH2.innerHTML +="<wonky>" + n2 + "</wonky> <br>IDK<br><br>"
        idH2.innerHTML +="<wonky>" + n3 + "</wonky> <br>Nothing to say<br><br>"
        idH2.innerHTML +="<wonky>" + n4 + "</wonky> <br>Nothing to say<br><br>"
        idH2.innerHTML +="<wonky>" + n5 + "</wonky> <br>Nothing to say<br><br>"
        idH2.innerHTML +="<wonky>" + n6 + "</wonky> <br>No<br><br>"
        idH2.innerHTML +="<wonky>" + n7 + "</wonky> <br>****, ****, ****<br><br>"
        idH2.innerHTML += "<button class='customButtons' onClick='myFeedBack()'>Nadaa heleh ug baival dar</button><br><br>"
        idH2.innerHTML += "<button onClick='back()'>butsah</button>"
    }

    else{
        alert("Medku code!");
    }
}

function myFeedBack(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8GB1WYugXkBF2301LI_gVdz4M0axlv6ywi6-RHSr8Z0IqBQ/viewform")
}
function myFeed(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfN1pHlxaRFtoao973HFaLEVVNF_a9cvCrdWDdDTz1MGN5b0Q/viewform")
}

function back(){
    idH2.innerHTML = "<input type='textbox' value='' placeholder='naiziin code' id='idFriendCode'>"
    idH2.innerHTML += "<br><br>"
    idH2.innerHTML += "<input type='button' id='idBtn1' value = 'shalgah' onClick='getIntoFriend()'><br>"
    idH2.innerHTML += "<input type='button' id='idBtn2' value = 'herhen ashiglah ve' onClick='information()'><br>"
}

