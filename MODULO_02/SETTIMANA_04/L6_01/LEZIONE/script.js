function evidenzia(tag, coloreBackground, bordo=1){
    let testoEvidente = document.getElementsByTagName(tag)
    for (let i=0; i<testoEvidente.length; i++ ){
        //testoEvidente[i].style.color = "green"
        testoEvidente[i].setAttribute("style","color : white; font-weight:bold; background:" +coloreBackground)
    }
}

function togliEvidenza(){
    for (let i=0; i < testoEvidente.lenght; i++){
    testoEvidente[i].removeAttribute("style")
    }
}
