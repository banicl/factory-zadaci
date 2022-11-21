var container = $(".container");
var ulFind = container.find('ul');
var liWidth = ulFind.find('li:first').width();
var PageItms = 5;
var itmNo = ulFind.find('li').length;

ulFind.width(itmNo * liWidth);
container.width(PageItms * liWidth);

$(document).ready(function () {
    $('.arrow-right').click(function () {
        $('li').animate({ "left": "+=100px" }, 300);
        console.log("Ok.");
    });
});
$(document).ready(function () {
    $('.arrow-left').click(function () {
        $('li').animate({ "left": "-=100px" }, 300);
        console.log("Ok.");
    });
});