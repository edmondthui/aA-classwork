/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

const APIUtil = {

    toggleFollow: userId => {
        return $.ajax ({
            method: "POST",
            url: `/users/${userId}/follow`,
            dataType: "JSON"
        })
    },

    toggleUnfollow: userId => {
        return $.ajax ({
            method: "DELETE",
            url: `/users/${userId}/follow`,
            dataType: "JSON"
            // data: {followee_id: userId}
        })
    },

    searchUsers: queryVal => {
        return $.ajax ({
            method: "GET",
            url: `/users/search?query=${queryVal}` ,
            dataType: "JSON",
        })
    }
}

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
    constructor($el) {
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        this.$el = $el;
        this.handleClick();
        this.render();
    }

    render() {
        if (this.followState === false) {
            this.$el.text("Follow!")
            this.$el.prop("disabled", false)
        }

        else if (this.followState === true) {
            this.$el.text("Unfollow!")
            this.$el.prop("disabled", false)
        }

        else if (this.followState === "unfollowing") {
            this.$el.text("Unfollowing!")
            this.$el.prop("disabled", true)
        }

        else if (this.followState === "following") {
            this.$el.text("Following!")
            this.$el.prop("disabled", true)
        }
    }

    handleClick() {
        let that = this;
        (this.$el).on("click", function(event) {
            event.preventDefault();
            if (that.followState === true) {
                that.followState = "unfollowing"; // change this.followState 
                that.render();
                const successCb = () => {
                    that.followState = false;
                    that.render();
                }
                APIUtil.toggleUnfollow(that.userId).then(successCb);
            }  
            if (that.followState === false) {
                that.followState = "following";
                that.render();
                const successCb = () => {
                    that.followState = true;
                    that.render();
                }
                APIUtil.toggleFollow(that.userId).then(successCb);
            }
        })
    }
}

module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 27:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
let FollowToggle = __webpack_require__ (/*! ./follow_toggle */ "./frontend/follow_toggle.js");
let UsersSearch = __webpack_require__ (/*! ./users_search */ "./frontend/users_search.js");

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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map