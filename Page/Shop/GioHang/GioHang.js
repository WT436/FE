function SelectAllProductCheck() {
    if (document.getElementById('CheckTotal').checked == true) {
        document.querySelector('.DieuChinhCheckAll').checked = true;
    } else {
        document.querySelector('.DieuChinhCheckAll').checked = false;
    }
}
/*
function formatter(a) {
    var acv = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    });
    return acv.format(a);
}

function fomatMoneyToString(str) {
    str = str.replace(",", "");
    str = str.replace("₫", "");
    return str;
}

function NumberProductSelect(tt, id, gia) {
    if (tt === 1) {
        var NumberProductInputThis = 'NumberProductInput' + id
        var ValuesNumberProductInput = document.getElementById(NumberProductInputThis).value;
        alert(document.getElementById('MoneyTotalNoVatCard').innerHTML);
        var MoneyDefault = fomatMoneyToString(document.getElementById('MoneyTotalNoVatCard').innerHTML);
        alert(MoneyDefault);

    }
}
*/