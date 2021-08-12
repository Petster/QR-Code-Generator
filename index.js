"use strict";
let myCollapse = document.getElementById('collapseExample');

//vars
let qrcode = new QRCode(document.getElementById('output'));
let qrdata = document.getElementById('url');
let makeQr = document.getElementById('makeQR');
let clearQr = document.getElementById('clearQR');
let codeData;
let tshown = false;

//update the url to generate on change
qrdata.addEventListener("change", function() {
    qrcode.clear();
    let data = qrdata.value;
    codeData = data;
    if(codeData == undefined) {
        $('#url').addClass('error');
    } else {
        $('#url').removeClass('error');
    }
});

//create the QRcode and show output when you hit enter
$('#url').on("keyup", function(e) {
    if (e.keyCode == 13) {
        if(codeData != undefined) {
            if(tshown == false) {
                var bsCollapse = new bootstrap.Collapse(myCollapse, {
                    hide: false
                });
                $('#url').removeClass('error');
                qrcode.makeCode(codeData);
                $('#output').addClass('bg-light p-3 rounded border border-2 border-dark m-auto text-center');
                tshown = true;
            } else {
                if(tshown == true) {
                    qrcode.makeCode(codeData);
                }
            }
        } else {
            $('#url').addClass('error');
        }
    }
});

//create the QRcode and show output when you hit the button
makeQr.addEventListener('click', function() {
    if(codeData != undefined) {
        if(tshown == false) {
            var bsCollapse = new bootstrap.Collapse(myCollapse, {
                hide: false
            });
            $('#url').removeClass('error');
            qrcode.makeCode(codeData);
            $('#output').addClass('bg-light p-3 rounded border border-2 border-dark m-auto text-center');
            tshown = true;
        } else {
            if(tshown == true) {
                qrcode.makeCode(codeData);
            }
        }
    } else {
        $('#url').addClass('error');
    }    
});