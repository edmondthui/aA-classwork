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