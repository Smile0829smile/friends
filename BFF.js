var n1 = "Ner:"
var n2 = "Minii huvid:"
var n3 = "Helehiig husdeg ug:"
var n4 = "Anhnii setgegdel:"
var n5 = "Chinii talaar namaig shanluuldag zuil:"
var n6 = "Zurgiig ni nuutsaar darsan/hadgalz avsan:"
var n7 = "Chamaig 3 ugeer ilerhiilvel:"

function gettingReady(){
    idH2.innerHTML = "<input type='textbox' value='' placeholder='naiziin code' id='idFriendCode'>"
    idH2.innerHTML += "<br>"
    idH2.innerHTML += "<input type='button' id='idBtn1' value = 'shalgah' onClick ='getIntoFriend()'><br>"
    idH2.innerHTML += "<input type='button' id='idBtn2' value = 'herhen ashiglah ve' onClick ='information()'><br>"
}
function information(){
    idH2.innerHTML = "Ene dotor ihenh naizuudtaigaa yaj taniltsaj baisan,<br> haana yu hiij yvdag baisan geed bugdiig bichiv."
    idH2.innerHTML += "<hr width = '50%'>"
    idH2.innerHTML += "<input type ='button' id='idBtn3' value='butsah' onClick='back()'>"
}


function getIntoFriend(){
    if(idFriendCode.value == "2008021420190901"){
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
}

function myFeedBack(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8GB1WYugXkBF2301LI_gVdz4M0axlv6ywi6-RHSr8Z0IqBQ/viewform")
}

function back(){
    idH2.innerHTML = "<input type='textbox' value='' placeholder='naiziin code' id='idFriendCode'>"
    idH2.innerHTML += "<br><br>"
    idH2.innerHTML += "<input type='button' id='idBtn1' value = 'shalgah' onClick='getIntoFriend()'><br>"
    idH2.innerHTML += "<input type='button' id='idBtn2' value = 'herhen ashiglah ve' onClick='information()'><br>"
}

