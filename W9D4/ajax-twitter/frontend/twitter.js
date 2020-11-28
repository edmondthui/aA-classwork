let FollowToggle = require ('./follow_toggle');
let UsersSearch = require ('./users_search');

const buildFollowToggle = () => {
    let $buttons = $('.follow-toggle');
    $buttons.each(function(idx, button) {
        new FollowToggle($(button));
    });
}

const buildUsersSearch = () => {
    let $users = $('nav.users-search');
    $users.each(function(idx, user) {
        new UsersSearch($(user));
    });
}


$(() => {
    buildFollowToggle();
    buildUsersSearch();
});