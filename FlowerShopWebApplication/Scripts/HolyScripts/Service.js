app.service("FlowerShopWebApplicationService", function ($http) {

    this.fetchWelcomeMessageFunc = function ()
    {
        return $http.get("/Module/GetWelcomeMessage");
    };

    this.fetchWelcomeSubtitleFunc = function ()
    {
        return $http.get("/Module/GetWelcomeSubtitle");
    }


    this.fetchLoginMessageFunc = function ()
    {
        return $http.get("/Module/GetLoginMessage");
    }

    this.deleteUserFunc = function (userId) {
        return $http.get("/Module/DeleteUser");
    }


    // this.updateUsernameFunc = function (uname)
    // {
    //     var data = $http({

    //         method: "post",
    //         url: "/Module/UpdateUsername",
    //         params:
    //         {
    //             username: uname
    //         }

    //     });

    //     return data;
    // }


    // this.userVerificationFunc = function (udata)
    // {
    //     var data = $http({
    //         method: "post",
    //         url: "Module/UserVerification",
    //         data: udata;
    //     })

    //     return data;
    // }


});