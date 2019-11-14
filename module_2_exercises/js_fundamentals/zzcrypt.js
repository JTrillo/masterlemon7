import { zipObject } from './zip';

var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
    var dic = zipObject(cipher.split(""), plain.split(""));
    dic[" "] = " ";
    var plainText = "";
    for (var i = 0; i < secret.length; i++) {
        plainText += dic[secret[i]];
    }
    return plainText;
}

console.log(decrypt(secret));