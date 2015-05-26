// ==UserScript==
// @name         IntraSane
// @description  Gui-tweaks for SopraSteria intranett
// @version      1.1
// @author       Joachim Lous
// @namespace    https://github.com/steria/IntraSane
// @homepage     https://github.com/steria/IntraSane
// @downloadURL  https://github.com/steria/IntraSane/raw/master/IntraSane.tamper.js
// @match        https://intranet.steria.no/*
// @require      http://cherne.net/brian/resources/jquery.hoverIntent.minified.js
// @grant        none
// ==/UserScript==

var roeNedMegamenyenLitt = function(){
    $("li.section").off( "mouseenter mouseleave" );
    $("li.section").hoverIntent(
        function () {
            $(this).addClass("megamenu-selected-item");
            $(this).children("div.submenupanel").addClass("submenupanel-show");
            $(this).find(".arrow").show();
        }, 
        function () {
            $(this).removeClass("megamenu-selected-item");
            $(this).children("div.submenupanel").removeClass("submenupanel-show");
            $(this).parent().find(".arrow").hide();
        }
    );
};

roeNedMegamenyenLitt();
