function generate()
 {
    let length = document.getElementById("strlength").value;
    var characters = 'abcdefghijklmnopqrstuvwxyz ';
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result +=  characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("target").innerHTML = result
}