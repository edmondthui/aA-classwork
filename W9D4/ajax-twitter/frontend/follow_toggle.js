const APIUtil = require('./api_util');

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