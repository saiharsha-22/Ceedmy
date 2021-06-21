$(document).ready(function() {
    $('.chat_icon').click(function(event) {
        $('.chat_box').toggleClass('active')
    })
    $('.conv-form-wrapper').convform({ selectInputStyle: 'disable' });
})

var rollbackTo = false;
var originalState = false;

function rollback(stateWrapper, ready) {
    console.log("rollback called: ", rollbackTo, originalState);
    console.log("answers at the time of user input: ", stateWrapper.answers);
    if (rollbackTo != false) {
        if (originalState == false) {
            originalState = stateWrapper.current.next;
            console.log('stored original state');
        }
        stateWrapper.current.next = rollbackTo;
        console.log('changed current.next to rollbackTo');
    }
    ready();
}

function restore(stateWrapper, ready) {
    if (originalState != false) {
        stateWrapper.current.next = originalState;
        console.log('changed current.next to originalState');
    }
    ready();
}