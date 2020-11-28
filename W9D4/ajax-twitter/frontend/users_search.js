const APIUtil = require('./api_util');

class UserSearch {

    constructor($el) {
        this.$el = $el
        this.$input = $($el.children().children()[0]);
        this.$users = $($el.children()[1]);
        this.handleInput();
    }

    handleInput() {
        let that = this;
        $('#search').on('submit', function(event) {
            event.preventDefault();
            const successCb = (users) => {
                users.forEach(function(user) {
                    that.$users.empty();
                    that.$users.append(`<li>${user.username}</li>`);
                })
            }
            APIUtil.searchUsers(that.$input.val()).then(successCb);
        })
    }
}

module.exports = UserSearch;