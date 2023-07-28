// Assemble: Create/select DOM elements
var rootEl = $('#root');
var a1 = $('.item-a1');
var a3 = $('.item-a3');
// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children(1).children().css('background-color', 'white');
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children(1).closest(0).text("O");
a3.text("O");