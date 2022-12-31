var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var sol = document.getElementById("solana");
var usdt = document.getElementById("usdt");


var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2CtetherUS&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    sol.innerHTML = response.solana.usd;
    usdt.innerHTML = response.tetherUS.usd;
});