app.controller("FlowerShopWebApplicationController", function ($scope, FlowerShopWebApplicationService) {

    $scope.usersArray = [];

    $scope.index = 0;


    $scope.titleRegistrationFunc = function ()
    {
        $scope.registrationTitle = "LET'S GET STARTED";
        $scope.registrationSubtitle = "Register your account";
    }

    //Registration

    $scope.registrationFunc = function () {

        $scope.registrationForm.$setSubmitted();

        var nameValidation = /^[a-zA-Z0-9\s'-]*$/;

            var trimmedFirstname = ($scope.firstname || "").trim();

        // Firstname

            if (trimmedFirstname == "") {
                $scope.firstnameErrorMessage = "Firstname is required.";
            }
            else if (!nameValidation.test(trimmedFirstname)) {
                $scope.firstnameErrorMessage = "Must only contain letters, numbers, spaces, or hyphens.";
            }
            else if (trimmedFirstname.length < 2) {
                $scope.firstnameErrorMessage = "Must be at least 2 characters long.";
            }
            else if (trimmedFirstname.length > 1100) {
                $scope.firstnameErrorMessage = "Must not exceed 1100 characters.";
            }
            else {
                $scope.firstnameErrorMessage = "";
            }

            // Lastname

            var trimmedLastname = ($scope.lastname || "").trim();

            if (trimmedLastname == "") {
                $scope.lastnameErrorMessage = "Lastname is required.";
            }
            else if (!nameValidation.test(trimmedLastname)) {
                $scope.lastnameErrorMessage = "Must only contain letters, spaces, or hyphens.";
            }
            else if (trimmedLastname.length < 2) {
                $scope.lastnameErrorMessage = "Must be at least 2 characters long.";
            }
            else if (trimmedLastname.length > 1100) {
                $scope.lastnameErrorMessage = "Must not exceed 1100 characters.";
            }
            else {
                $scope.lastnameErrorMessage = "";
            }


        var usernameValidation = /^[a-zA-Z0-9_]*$/;
        var trimmedUsername = ($scope.username || "").trim();

        if (trimmedUsername == "") {
            $scope.usernameErrorMessage = "Username is required";
        }
        else if (!usernameValidation.test(trimmedUsername)) {
            $scope.usernameErrorMessage = "Must only contain letters, numbers, or underscores."
        }
        else if (trimmedUsername.length < 4) {
            $scope.usernameErrorMessage = "Must be at least 4 characters long";
        }
        else if (trimmedUsername.length > 20) {
            $scope.usernameErrorMessage = "Must not exceed 20 characters";
        }
        else
        {
            var duplicateUsername = $scope.usersArray.some(function (user) {

                return user.username.toLowerCase() == trimmedUsername.toLowerCase();

            });

            if (duplicateUsername) {
                $scope.usernameErrorMessage = "Username already exists";
            }

            else
            {
                $scope.usernameErrorMessage = "";
            }

        }

        var emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var trimmedEmail = ($scope.email || "").trim();
        

        if (trimmedEmail == "") {
            $scope.emailErrorMessage = "Email is required";
        }

        else if (!emailValidation.test(trimmedEmail)) {
            $scope.emailErrorMessage = "Not a valid email";
        }

        else
        {
            var duplicateEmail = $scope.usersArray.some(function (user) {

                return user.email.toLowerCase() == trimmedEmail.toLowerCase();
            });

            if (duplicateEmail) {
                $scope.emailErrorMessage = "Email aready in used";
            }
            else
            {
                $scope.emailErrorMessage = "";
            }

        }

        var trimmedPassword = ($scope.password || "").trim();

        var upperCount = 0;
        var lowerCount = 0;
        var numberCount = 0;
        var specialCount = 0;

        var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

        for (var i = 0; i < trimmedPassword.length; i++) {
            var ch = trimmedPassword.charAt(i);

            if (ch >= 'A' && ch <= 'Z') {
                upperCount++;
            }
            else if (ch >= 'a' && ch <= 'z') {
                lowerCount++;
            }
            else if (ch >= '0' && ch <= '9') {
                numberCount++;
            }
            else if (specialChars.indexOf(ch) !== -1) {
                specialCount++;
            }
        }

        if (trimmedPassword.length === 0) {
            $scope.passwordErrorMessage = "Please enter a password.";
        }
        else if (trimmedPassword.length < 8) {
            $scope.passwordErrorMessage = "Needs at least 8 characters.";
        }
        else if (upperCount === 0) {
            $scope.passwordErrorMessage = "Add at least one uppercase letter.";
        }
        else if (lowerCount === 0) {
            $scope.passwordErrorMessage = "Add at least one lowercase letter.";
        }
        else if (numberCount === 0) {
            $scope.passwordErrorMessage = "Add at least one number.";
        }
        else if (specialCount === 0) {
            $scope.passwordErrorMessage = "Add at least one special character.";
        }
        else {
            $scope.passwordErrorMessage = "";
        }


        var trimmedConfirmPassword = ($scope.confirmPassword || "").trim();

        if (trimmedConfirmPassword == "") {

            $scope.confirmPasswordErrorMessage = "Please confirm your password.";
        }
        else if (trimmedConfirmPassword != trimmedPassword) {
            
            $scope.confirmPasswordErrorMessage = "Passwords do not match.";
        }
        else {
            $scope.confirmPasswordErrorMessage = "";
        }


        var trimmedContact = ($scope.contact || "").trim();

        var isAllDigits = true;

        for (var i = 0; i < trimmedContact.length; i++) {

            var ch = trimmedContact.charAt(i);

            if (ch < '0' || ch > '9') {

                isAllDigits = false;
                break;
            }
        }

        if (trimmedContact == "") {
            $scope.contactErrorMessage = "Contact number is required.";
        }
        else if (!isAllDigits) {
            $scope.contactErrorMessage = "Contact number must only contain digits.";
        }
        else if (trimmedContact.length < 10) {
            $scope.contactErrorMessage = "Contact number is too short.";
        }
        else if (trimmedContact.length > 13) {
            $scope.contactErrorMessage = "Contact number is too long.";
        }
        else {
            $scope.contactErrorMessage = "";
        }


        if ($scope.role == undefined) {
            $scope.roleErrorMessage = "Please select a role.";
        }
        else {
            $scope.roleErrorMessage = "";
        }

        if ($scope.role == "Employee" && ($scope.department == undefined)) {
            $scope.departmentErrorMessage = "Please select a department.";
        }
        else {
            $scope.departmentErrorMessage = "";
        }


        if ($scope.firstnameErrorMessage || $scope.lastnameErrorMessage || $scope.usernameErrorMessage || $scope.emailErrorMessage ||
            $scope.passwordErrorMessage || $scope.confirmPasswordErrorMessage || $scope.contactErrorMessage || $scope.roleErrorMessage ||
            $scope.departmentErrorMessage
        
        ) {
            return;

        }

     
        if ($scope.username == "" || $scope.username == undefined ||
            $scope.email == "" || $scope.email == undefined ||
            $scope.password == "" || $scope.password == undefined ||
            $scope.confirmPassword == "" || $scope.confirmPassword == undefined ||
            $scope.contact == "" || $scope.contact == undefined ||
            $scope.role == "" || $scope.role == undefined ||
            $scope.department == "" || $scope.department == undefined) {
            alert("Please insert values in the required field");
            return;
        }

   
        var userData = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            username: $scope.username,
            email: $scope.email,
            password: $scope.password,
            confirmPassword: $scope.confirmPassword,
            contact: $scope.contact,
            role: $scope.role,
            department: $scope.department
        };

        $scope.usersArray.push(userData);
        $scope.clearFunc();
        $scope.registrationForm.$setPristine();
        $scope.registrationForm.$setUntouched();




    };


    $scope.clearFunc = function ()
    {

        $scope.firstname = "";
        $scope.lastname = "";
        $scope.username = "";
        $scope.email = "";
        $scope.password = "";
        $scope.confirmPassword = "";
        $scope.contact = "";
        $scope.role = "";
        $scope.department = "";

        $scope.registrationForm.$setPristine();
        $scope.registrationForm.$setUntouched();
    }

    $scope.editFunc = function () {

        $scope.registrationForm.$setSubmitted();

        var userdata = $scope.usersArray[$scope.editUserId];

        var nameValidation = /^[a-zA-Z\s'-]*$/;
        var trimmedFirstname = ($scope.firstname || "").trim();

        //Firstname
        if (trimmedFirstname == "") {
            $scope.firstnameErrorMessage = "Firstname is required.";
        }
        else if (!nameValidation.test(trimmedFirstname)) {
            $scope.firstnameErrorMessage = "Must only contain letters, spaces, or hyphens.";
        }
        else if (trimmedFirstname.length < 2) {
            $scope.firstnameErrorMessage = "Must be at least 2 characters long.";
        }
        else if (trimmedFirstname.length > 10000) {
            $scope.firstnameErrorMessage = "Must not exceed 10000 characters.";
        }
        else {
            $scope.firstnameErrorMessage = "";
        }

        //Lastname

        var trimmedLastname = ($scope.lastname || "").trim();

        if (trimmedLastname == "") {
            $scope.lastnameErrorMessage = "Lastname is required.";
        }
        else if (!nameValidation.test(trimmedLastname)) {
            $scope.lastnameErrorMessage = "Must only contain letters, spaces, or hyphens.";
        }
        else if (trimmedLastname.length < 2) {
            $scope.lastnameErrorMessage = "Must be at least 2 characters long.";
        }
        else if (trimmedLastname.length > 10000) {
            $scope.lastnameErrorMessage = "Must not exceed 50 characters.";
        }
        else {
            $scope.lastnameErrorMessage = "";
        }

        var usernameValidation = /^[a-zA-Z0-9_]*$/;
        var trimmedUsername = ($scope.username || "").trim();

        if (trimmedUsername == "") {
            $scope.usernameErrorMessage = "Username is required";
        }
        else if (!usernameValidation.test(trimmedUsername)) {
            $scope.usernameErrorMessage = "Must only contain letters, numbers, or underscores."
        }
        else if (trimmedUsername.length < 4) {
            $scope.usernameErrorMessage = "Must be at least 4 characters long";
        }
        else if (trimmedUsername.length > 20) {
            $scope.usernameErrorMessage = "Must not exceed 20 characters";
        }
        else {
            var duplicateUsernameEdit = $scope.usersArray.some(function (user, idx) {
                return idx != $scope.editUserId && user.username.toLowerCase() == trimmedUsername.toLowerCase();
            });

            if (duplicateUsernameEdit) {
                $scope.usernameErrorMessage = "Username already exists";
            }
            else {
                $scope.usernameErrorMessage = "";
            }
        }
   

        

        var emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var trimmedEmail = ($scope.email || "").trim();


    if (trimmedEmail == "") {
        $scope.emailErrorMessage = "Email is required";
    }

    else if (!emailValidation.test(trimmedEmail)) {
        $scope.emailErrorMessage = "Not a valid email";
    }

    else {
        var duplicateEmailEdit = $scope.usersArray.some(function (user, idx) {
            return idx != $scope.editUserId && user.email.toLowerCase() == trimmedEmail.toLowerCase();
        });

        if (duplicateEmailEdit) {
            $scope.emailErrorMessage = "Email already in used";
        }
        else {
            $scope.emailErrorMessage = "";
        }
    }

        var trimmedPassword = ($scope.password || "").trim();

        var upperCount = 0;
        var lowerCount = 0;
        var numberCount = 0;
        var specialCount = 0;

        var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

        for (var i = 0; i < trimmedPassword.length; i++) {
            var ch = trimmedPassword.charAt(i);

            if (ch >= 'A' && ch <= 'Z') {
                upperCount++;
            }
            else if (ch >= 'a' && ch <= 'z') {
                lowerCount++;
            }
            else if (ch >= '0' && ch <= '9') {
                numberCount++;
            }
            else if (specialChars.indexOf(ch) !== -1) {
                specialCount++;
            }
        }

        if (trimmedPassword.length === 0) {
            $scope.passwordErrorMessage = "Please enter a password.";
        }
        else if (trimmedPassword.length < 8) {
            $scope.passwordErrorMessage = "Needs at least 8 characters.";
        }
        else if (upperCount === 0) {
            $scope.passwordErrorMessage = "Add at least one uppercase letter.";
        }
        else if (lowerCount === 0) {
            $scope.passwordErrorMessage = "Add at least one lowercase letter.";
        }
        else if (numberCount === 0) {
            $scope.passwordErrorMessage = "Add at least one number.";
        }
        else if (specialCount === 0) {
            $scope.passwordErrorMessage = "Add at least one special character.";
        }
        else {
            $scope.passwordErrorMessage = "";
        }


        var trimmedConfirmPassword = ($scope.confirmPassword || "").trim();

        if (trimmedConfirmPassword == "") {
            $scope.confirmPasswordErrorMessage = "Please confirm your password.";
        }
        else if (trimmedConfirmPassword != trimmedPassword) {
            $scope.confirmPasswordErrorMessage = "Passwords do not match.";
        }
        else {
            $scope.confirmPasswordErrorMessage = "";
        }


        var trimmedContact = ($scope.contact || "").trim();

        var isAllDigits = true;
        for (var i = 0; i < trimmedContact.length; i++) {
            var ch = trimmedContact.charAt(i);
            if (ch < '0' || ch > '9') {
                isAllDigits = false;
                break;
            }
        }

        if (trimmedContact == "") {
            $scope.contactErrorMessage = "Contact number is required.";
        }
        else if (!isAllDigits) {
            $scope.contactErrorMessage = "Contact number must only contain digits.";
        }
        else if (trimmedContact.length < 10) {
            $scope.contactErrorMessage = "Contact number is too short.";
        }
        else if (trimmedContact.length > 13) {
            $scope.contactErrorMessage = "Contact number is too long.";
        }
        else {
            $scope.contactErrorMessage = "";
        }


        if ($scope.role == undefined || $scope.role == "-- Select --") {
            $scope.roleErrorMessage = "Please select a role.";
        }
        else {
            $scope.roleErrorMessage = "";
        }

        if ($scope.role == "Employee" && ($scope.department == undefined || $scope.department == "-- Select --")) {
            $scope.departmentErrorMessage = "Please select a department.";
        }
        else {
            $scope.departmentErrorMessage = "";
        }


        if ($scope.firstnameErrorMessage || $scope.lastnameErrorMessage || $scope.usernameErrorMessage || $scope.emailErrorMessage ||
            $scope.passwordErrorMessage || $scope.confirmPasswordErrorMessage || $scope.contactErrorMessage || $scope.roleErrorMessage ||
            $scope.departmentErrorMessage

        ) {
            return;

        }


        if ($scope.firstname == "" || $scope.firstname == undefined ||
            $scope.lastname == "" || $scope.lastname == undefined ||
            $scope.username == "" || $scope.username == undefined ||
            $scope.email == "" || $scope.email == undefined ||
            $scope.password == "" || $scope.password == undefined ||
            $scope.confirmPassword == "" || $scope.confirmPassword == undefined ||
            $scope.contact == "" || $scope.contact == undefined ||
            $scope.role == "" || $scope.role == undefined ||
            $scope.department == "" || $scope.department == undefined)
        {

            alert("Please insert values in the required field");
        }

        else {

            if (userdata.firstname != $scope.firstname ||
                userdata.lastname != $scope.lastname ||
                userdata.username != $scope.username ||
                userdata.email != $scope.email ||
                userdata.password != $scope.password ||
                userdata.confirmPassword != $scope.confirmPassword ||
                userdata.role != $scope.role ||
                userdata.department != $scope.department
            ) {

                userdata.firstname = $scope.firstname;
                userdata.lastname = $scope.lastname;
                userdata.username = $scope.username;
                userdata.email = $scope.email;
                userdata.password = $scope.password;
                userdata.confirmPassword = $scope.confirmPassword;
                userdata.contact = $scope.contact;
                userdata.role = $scope.role;
                userdata.department = $scope.department;


            } else
            {
                alert("There was no changes");
            }

        }

        $scope.clearFunc();
        $scope.registrationForm.$setPristine();
        $scope.registrationForm.$setUntouched();
        $scope.editUserId = undefined;
    }

    $scope.loadUserEditFunc = function (userId)
    
    {

        var userDataEdit = $scope.usersArray[userId];


        $scope.firstname = userDataEdit.firstname;
        $scope.lastname = userDataEdit.lastname;
        $scope.username = userDataEdit.username;
        $scope.email = userDataEdit.email;
        $scope.password = userDataEdit.password;
        $scope.confirmPassword = userDataEdit.confirmPassword;
        $scope.contact = userDataEdit.contact;
        $scope.role = userDataEdit.role;
        $scope.department = userDataEdit.department;

        $scope.editUserId = userId;

        $scope.registrationForm.$setPristine();
        $scope.registrationForm.$setUntouched();

    }


    //DELETE

    $scope.deleteFunc = function (userId) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {

            if (result.isConfirmed) {

                var getData = FlowerShopWebApplicationService.deleteUserFunc(userId);

                getData.then(function (returnedData) {

                    $scope.usersArray.splice(userId, 1);

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });

                });

            }

        });

    }


    // Redirection Functions 

    $scope.homeRedirectFunc = function ()
    {
        var getData = FlowerShopWebApplicationService.fetchLoginMessageFunc();
        getData.then(function (returnedData) {

            Swal.fire({
                title: returnedData.data,
                icon: "success"

            }).then(function () {
                window.location.href = "/Module/HomePage";
            });

        });
    }


    $scope.homePageRedirectFunc = function ()
    {
        window.location.href = "/Module/HomePage";
    }

    $scope.registerRedirectFunc = function ()
    {
        window.location.href = "/Module/RegistrationPage";
    }

    $scope.loginRedirectFunc = function () { 
        window.location.href = "/Module/LoginPage";
    }

    $scope.aboutRedirectFunc = function ()
    {
        window.location.href = "/Module/AboutPage";
    }

    $scope.contactRedirectFunc = function ()
    {
        window.location.href = "/Module/ContactPage";
    }


    // Navigation Bar Functions

    $scope.navigationTitleFunc = function () 
    {
        $scope.homeTitle = "Home";
        $scope.aboutTitle = "About";
        $scope.contactTitle = "Contact";
        $scope.signupTitle = "Sign Up";

    }

    //Display in the home page from C# Controller

    $scope.getWelcomeMessage = function () {
        var getData = FlowerShopWebApplicationService.fetchWelcomeMessageFunc();
        getData.then(function (returnedData) {
            $scope.welcomeMessage = returnedData.data;
        });
    };

    $scope.getWelcomeSubtitle = function () {
        var getData = FlowerShopWebApplicationService.fetchWelcomeSubtitleFunc();
        getData.then(function (returnedData) {

            $scope.subtitleWelcomeMessage = returnedData.data;
        });
    };



    $scope.checkUsernameUnique = function () {
        if (!$scope.username) return true;

        var duplicate = $scope.usersArray.some(function (user, idnumm) {
            return idnum != $scope.editUserId && user.username.toLowerCase() == $scope.username.toLowerCase();
        });

        return !duplicate;
    };

    $scope.checkEmailUnique = function () {
        if (!$scope.email) return true;

        var duplicate = $scope.usersArray.some(function (user, idnum) {
            return idnum != $scope.editUserId && user.email.toLowerCase() == $scope.email.toLowerCase();
        });

        return !duplicate;
    };

    $scope.hasUpper = function () {
        return /[A-Z]/.test($scope.password || "");
    };

    $scope.hasLower = function () {
        return /[a-z]/.test($scope.password || "");
    };

    $scope.hasNumber = function () {
        return /[0-9]/.test($scope.password || "");
    };

    $scope.hasSpecial = function () {
        var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        var passWord = $scope.password || "";

        for (var i = 0; i < passWord.length; i++) {

            if (specialChars.indexOf(passWord.charAt(i)) !== -1) return true;
        }

        return false;
    };

    $scope.passwordsMatch = function () {
        return $scope.password === $scope.confirmPassword;
    };



    // $scope.updateUsername = function ()
    // {
    //     var getData = FlowerShopWebApplicationService.updateUsernameFunc("Klarissa");
    //     getData.then(function (returnedData)
    //     {
    //         alert(returnedData.data);
    //     })
    // }


    // $scope.userVerification = function () {

    //     var userData =
    //     {
    //         FirstName: "Klarissa",
    //         LastName: "Lizardo",
    //         UserName: "Maklarissa",
    //         Email: "kla@gmail.com",
    //         Password: "asdasdas",
    //         ConfirmPassword: "asdasdas",
    //         Contact: "123",
    //         Role: "Customer",
    //         Department: "Sales"
    //     };

    //     var getData = FlowerShopWebApplicationService.userVerificationFunc();
    //     getData.then(function (returnedData) {

    //     })
    // }




    
});