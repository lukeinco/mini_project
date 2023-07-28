var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInput = $('input[name="shopping-input"]');
var btn = $('.btn');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
btn.on('click', function () {
    var li = $('<h2>');
    li.text(shoppingInput);
    shoppingListEl.append(li);
}
);
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
