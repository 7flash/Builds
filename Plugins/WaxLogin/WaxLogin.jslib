mergeInto(LibraryManager.library, {
    Login: function() {
        async function login() {
                const loginUrl = "https://all-access.wax.io/cloud-wallet/login";

                const loginWindow = await window.open(loginUrl, "_blank", "location=yes,height=800,width=600,scrollbars=yes,status=yes");

                loginWindow.addEventListener("message", function(e) {
                    console.log('new event', e.data.type);           

                    try {
                        const { verified, userAccount, keys } = e.data;

                        if (verified) {
                            unityInstance.SendMessage("WaxLoginObject", "LoginSuccess", userAccount);
                        } else {
                            throw 'user declined login';
                        }
                    } catch (e) {
                        unityInstance.SendMessage("WaxLoginObject", "LoginFailure", e.toString());
                    }
                });
            }

        login();  
    }
});