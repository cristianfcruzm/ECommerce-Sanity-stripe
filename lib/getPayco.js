
console.log(process.env.NEXT_PUBLIC_EPAYCO_PUBLISHABLE_KEY);

console.log(process.env.NEXT_PRIVATE_EPAYCO_PUBLISHABLE_KEY);

var epayco = require('epayco-sdk-node')({
    apiKey: 'c9753abe993a2e2f810127bdd9e8f625',
    privateKey: 'bd69dea9075ffdfd8ab3aef4842bbcff',
    lang: 'ES',
    test: true
})

var credit_info = {
    "card[number]": "4575623182290326",
    "card[exp_year]": "2025",
    "card[exp_month]": "12",
    "card[cvc]": "123"
}
epayco.token.create(credit_info)
    .then(function(token) {
        console.log(token);
    })
    .catch(function(err) {
        console.log("err: " + err);
    });
