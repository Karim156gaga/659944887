function _0x81022c(_0x428e57) {
          $('#' + _0x428e57).removeAttr("readonly");
          var _0x35ca65 = $('#' + _0x428e57).data("kendoDropDownList");
          if (_0x35ca65) {
            var _0x325da0 = {
              autoBind: false
            };
            _0x35ca65.setOptions(_0x325da0);
          }
          _0x35ca65.bind("change", function (_0x5947f7) {
            _0x2209dc();
          });
        }
        if ($("#MissionId").length > 0) {
          _0x81022c("MissionId");
        }
        if ($("#LocationId").length > 0) {
          _0x81022c("LocationId");
        }
        if ($("#VisaType").length > 0) {
          _0x81022c("VisaType");
        }
        if ($("#VisaSubTypeId").length > 0) {
          _0x81022c("VisaSubTypeId");
        }
        if ($("#AppointmentCategoryId").length > 0) {
          _0x81022c("AppointmentCategoryId");
        }

(function() {
    'use strict';

    function clickElement(element) {
    var event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    element.dispatchEvent(event);
}


    // Function to combine all clicks
    function clickAllElements() {
        // Find and click the image
        var imgElement = document.querySelector('img.avatar-img[src="/assets/images/avatar/01.jpg"]');
        if (imgElement) {
            clickElement(imgElement);
        }

        // Find and click the anchor
        var anchorElement = document.querySelector('a.dropdown-item.bg-danger-soft-hover[href="javascript:OnLogout();"]');
        if (anchorElement) {
            clickElement(anchorElement);
        }

        // Find and click the button
        var buttonElement = document.querySelector('button.btn.btn-danger[onclick="OnLogoutSubmit();"]');
        if (buttonElement) {
            clickElement(buttonElement);
        }
    }

    // Create a styled button next to the specified image with the same dimensions
    function createButton() {
        var imgElement = document.querySelector('img.avatar-img[src="/assets/images/avatar/01.jpg"]');
        if (!imgElement) {
            console.error('Image element not found.');
            return;
        }

        var button = document.createElement('button');
button.className = 'btn btn-danger';
button.style.position = 'absolute';
button.style.top = (imgElement.offsetTop + 45) + 'px'; // Décalage de 10 pixels vers le bas
button.style.left = (imgElement.offsetLeft + imgElement.offsetWidth + 0.001) + 'px'; // Ajouter 10px pour l'espacement
button.style.width = imgElement.offsetWidth + 'px';
button.style.height = imgElement.offsetHeight + 'px';
button.style.zIndex = '9999';

        // Add a different logout icon to the button
        var logoutIcon = document.createElement('i');
        logoutIcon.className = 'fa fa-sign-out-alt me-2'; // Use a different logout icon class, e.g., 'fa-sign-out-alt'
        button.appendChild(logoutIcon);

        // Add click event to the button
        button.addEventListener('click', clickAllElements);

        // Append the button to the body
        document.body.appendChild(button);
    }

    // Create the button when the script is executed
    createButton();

function reloadPageIfError() {
    const errorTitles = [
        "504 Gateway Time-out",
        "502 Bad Gateway",
        "503 Service Temporarily Unavailable",
        "Service Unavailable",
        "500 Internal Server Error",
        "Database error",
        "FastCGI Error",
        "The connection has timed out",
        "Problemas al cargar la página",
        "Error 502 (Server Error)!!1",
        "403 Forbidden",
        "Service Unavailable','403 ERROR",
        "502 Bad Gateway"
    ];

    const pageTitle = document.title;

    if (errorTitles.includes(pageTitle)) {
        setTimeout(function () {
            window.location.reload();
        }, 2000); // Reload after 30 seconds
    }
}

// Call the function
reloadPageIfError();

var x = window['location']['href'];
if (
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 68, 90, 65, 47, 65, 99, 99, 111, 117, 110, 116, 47, 76, 111, 103, 73, 110)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 68, 90, 65, 47, 97, 99, 99, 111, 117, 110, 116, 47, 108, 111, 103, 105, 110)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47)) ||
    x['includes'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 97, 108, 103, 101, 114, 105, 97, 46, 98, 108, 115, 115, 112, 97, 105, 110, 103, 108, 111, 98, 97, 108, 46, 99, 111, 109, 47, 42, 47, 98, 108, 115, 65, 112, 112, 111, 105, 110, 116, 109, 101, 110, 116, 47, 77, 97, 110, 97, 103, 101, 65, 112, 112, 111, 105, 110, 116, 109, 101, 110, 116)) ||
    x['startsWith'](String['fromCharCode'](104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 98, 108, 115, 115, 112, 97, 105, 110, 109, 111, 114, 111, 99, 99, 111, 46, 110, 101, 116, 47))
) {


   (function() {
        'use strict';

        var axiosScript = document.createElement('script');
        axiosScript.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
        document.head.appendChild(axiosScript);

        axiosScript.onload = function() {
            const axiosConfig = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Referer": "https://algeria.blsspainglobal.com/DZA/CaptchaPublic/GenerateCaptcha?data=CXE0KwrmeprPjank82nvACV3quvIzljHrJbO7HIMobQDczQYlcdmU2mcTsblZxqU7NNbr%2bVOwgkPtw1NjUhif84edDhWhjzySPzP2H8ALJ0%3d",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.225 Safari/537.36",
                },
            };
        let captchaId = document.getElementById("CaptchaId").value;

        axios.post(
            'https://algeria.blsspainglobal.com/DZA/CaptchaPublic/SubmitCaptcha',
            {
                SelectedImages: 'ltles,uqjidmnth,rldvc',
                Id: captchaId,
                Captcha: "Bf0KU6r4PHzEtR9My6uzzPdKSddwylXruf9ExVC2AqwgiR5ycEqqKD0n6sTVxpXFAMEiyxKbKypeIJeRKluBctR3LnnxxPJy2rnOI+vCTXd/dFEObgxYW8YwyGW58oGBY3+nQ87uJvgs3HZgc+ZOft1fFK82dImahOv4G4ZaWzOqa/P/5MCDtejXzT9Oz0ZR7ADLJ6J+MzD2LrB8OZpKBsr5JdNjSEfcIQHHX2aY/c4Ax+Xw+FLWvYTC4N6oeceaAWvVATxJpBxADKkI79Ltu0o1Mw6cF2lgS8IwQsXuzLTQYCnRbl7D1dh8O556BQackiPdUnRtfWHbsnpXSESSH/JfofZ/kIZak4qxQ6+Bthlxsg6H2hVJx+44GdBwkoDN4V7E47kPAlSRiZtJUzoyozyG8rvqKeXwbucRyLBywkte2srjfD0rRpWdJ4LBpkI6P10GBCuRQC2c13GL2RQH8PPrfdIVs6MuEDLhktzfUO1LWg0E4lMtEpC44hcydqhL680ho2HFM2DDrf7x41PZE07Z4ZcnQrnrkC3HG98ukQY73KHKJnrCR8698RN0nVE43Cdenplq1BHAO0uKDbFaxXlAfR3pmDRoFYOoZeNZ9ZUD18UtRl+G62Ng2DE/mN0N+MNUOEYM1G96SvqDFx644Ud4cp6ecvF1FkCg0tMszDjP5vUwnkd8cNgYlnOGFWOpz4pW9kaGe05khy3YtBTD48J4+CxTpPAauoQvcr7zfumEYYNDFWKxh6SD0NHAiBu/EQW2Xq5tgSDVD8P4NKvIE4dcge2JUpckYCe1CfLsZbQBGbaxVr9vEFvZ0XXWIivBxJGPwwmJQ8et1pZ8YxQoDY2VJO3RRX+PS3Uotr3EnQ4EVf83V7mSlZ7TrBvL5nMlPaGk0TKajUUI4n75VtZR1C8lgsxvTlM+klZ1Vh3JYYVdIgru823JN/lI2LbvPieTZu5xJGkF23o5mrXJW/Chk8chm5llGr82qSjdylBm8+z6dJ2a9poNYvl044u6WYFtqHECgTiHkqFnWEzOIK7XgpgX6HFMfhgFyQZImyeQd+tRZNiH8bYoXz29DBKKkkaLQH0DN2TnJakDqvDkpZLsGeFk3A1ZpaX4geR4lyx2S5jkQnQBUS6b9xqPqC0tMEUXWwyFKh3Zyyixpzc4T0pibJz01WwwW0MROCTWy+/x21L4RoZQgUn/0kZf2nlQo+5gzHk2mkIJguWprFDSxTCWDoFrteMtoeKZ1Z4NvaBfYfwJDtqmana+olPBrfMIiyPFoVdBe4kAJegfb0/dC+1uWEln/k604YF/P3yoHfP4BcN6C5Mn2urxZc13DzWaOhAoX9beX+gpkCMPXeeII5f+YfcDdZP2Dvrc42Rc7vSCvr7nb2yTopbTCoE7t4pT2uHh56QYy5+GgOnRJX5mzZRdkHK3zH6dVxohfpIFUJUQdKXqgLxlVSyCYboqrYwXpSGt/P5Vu/KFhTVxUqCGay9Gtf3W/taBraqopkj3Di2hPTfxw2KdW3UBwDBmt4YX57vTYNOvfuZPqooQQhDlxy5LuBSTON0ssrxo2ew4Oca+IfNVqC033cZUnQnxQSObrNN+ilO9A/OwYw57DVPmgfo/m2+USh27bZHX+CgoQdPPQ48/Gsz7MVjaTdBQ2sg7D/FJuVuKECylGo89bydEPTlGyyvrn1pPgI2j9Zm4r3/xxCVx3MH1D5SOeCpCdXKQwsyuOO6fOj55cUvmpvxekd8+F20X9WgKVElqkk0Gcw4sTSFlpfGT05j3LnY+G3nE7LGOP3huhV6417M+zcW2XUYU0k0zyh02R4Qdb/HL+xVoazoNyw4g9haiabpdQZN5hQTee+vVKLAsG3gRe9FLnSjoumkb0GKMjdRN1gfmpg10/oVTladgE93wYK1A4DatM9Y/6J26ka0i3Mw6oSqjJXswuBZzbbl7ZfSF46jPwpZj12RDrPDSMjydh7cx7x4ycY68",
                __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value,
            },
            axiosConfig
        ).then(res => {
            console.log(res.data);
            document.getElementById("CaptchaData").value = res.data['captcha'];
            document.getElementById("CaptchaId").value = res.data['captchaId'];

            // Masquer le bouton btnVerify
            var btnVerify = document.getElementById("btnVerify");
            if (btnVerify) {
                btnVerify.style.display = "block";
            }

            // Afficher le bouton btnSubmit
            var btnSubmit = document.getElementById("btnSubmit");
            if (btnSubmit) {
                btnSubmit.style.display = "block";
            }
        });
    };
})();

 function tramelle() {
        if ($('#btnSubmit').attr('style') === '') {
            $('#btnSubmit').click();
            $('#btnSubmit').prop('disabled', true);
        }
    }
if (location.href.match(/ChangePassword|changepassword|CHANGEPASSWORD/)) {
        window.location.replace('https://algeria.blsspainglobal.com/DZA/bls/vtv');
    }

    if(window.location.href == ("https://algeria.blsspainglobal.com/DZA/blsappointment/manageapplicant?alert=true")){
      // window.location.replace("https://algeria.blsspainglobal.com/DZA/bls/visatypeverification");
    }
   if (window.location.href.includes("https://algeria.blsspainglobal.com/DZA/bls/vtv")) {
    $("button[id=btnVerify]").click();
    setInterval(function() { tramelle(); }, 1000);
}

       if(location.href.match(/Home|home|HOME/)){
          if ($(".avatar-img").length){
                window.location.replace("https://algeria.blsspainglobal.com/DZA/bls/vtv");
          }else{
                window.location.replace("https://algeria.blsspainglobal.com/DZA/account/login");
          }
       }

         var VariabLe = $(".bg-mode form div:visible .form-label:contains('Visa Type')").attr("id");
       var VariabLe_2 = $(".bg-mode form div:visible .form-label:contains('Visa Sub Type')").attr("id");
       var VariabLe_3 = $(".bg-mode form div:visible .form-label:contains('Appointment Category')").attr("id");

     if(location.href.match(/data/)){

         for (var i = 1; i < 6; i++) {

          if(VariabLe == "VisaType"+i+"_label"){
            $("#VisaType"+i+"_listbox > li:eq(1)").click();
        }
        if(VariabLe_2 == "VisaSubType"+i+"_label"){
            $("#VisaSubType"+i+"_listbox > li:eq(0)").click();
        }
        if(VariabLe_3 == "AppointmentCategoryId"+i+"_label"){
            $("#AppointmentCategoryId"+i+"_listbox > li:eq(1)").click();
        }

      /*  if(VariabLe_4 == "Location"+i+"_label"){
            $("#Location"+i+"_listbox > li:eq(0)").click();
        }*/
 }

      var variabLe_4 = $(".bg-mode form div:visible .form-label:contains('Location')").attr("id");
    for (var i = 1; i < 6; i++) {
        if (variabLe_4 == "Location" + i + "_label") {
            $("#Location" + i + "_listbox > li:eq(1)").click();
        }
    }



 }

 if(location.href.match(/ManageAppointment/)){





 }

  if(location.href.match(/livenessdetection/)){

    //  $('script[src="/assets/vendor/bioid/js/startVideo().js?v=cYV2_QtkS9WSeWhabBLqSPxCFEFAVxkA7oHJZH3HYKQ"]').remove();
    //  $('script').remove()

 }


 $(window).scrollTop( 180 );

   
(function() {
    'use strict';

    // Create and append the container for the login page
    const loginContainer = document.createElement('div');
    loginContainer.className = 'login-container';
    document.body.appendChild(loginContainer);

    // Inject custom styles
    const style = document.createElement('style');
    style.innerHTML = `
        .modal-container {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            justify-content: flex-start;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }

        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

       .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        color: #fff;
        background: #0a0a0a;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-left: 20px;
        width: 400px;
        max-width: 80%;
    }


        .login-form h1 {
            margin: 0 0 24px 0;
        }

        .login-form .form-input-material {
            margin: 12px 0;
        }

        .login-form .btn {
            width: 100%;
            margin-bottom: 9px;
        }

         .btn-danger {
        background-color: #962020;
        color: #fff;
    }
    .list-container {
            width: 10%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .listbox {
            flex: 1;
            margin-right: 10px;
            padding: 5px;
            font-size: 14px;
            border: 1px solid #bdc3c7;
            border-radius: 10px;
            box-sizing: border-box;
        }

    `;
    document.head.appendChild(style);
// Function to simulate a click event on an element
    function clickElement(element) {
        var event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }
    // Create and append the button to the header
    const button = document.createElement('button');
    button.className = 'btn btn-primary btn-ghost';
    button.innerText = 'SHOW LOGIN FORM';
    document.body.insertBefore(button, document.body.firstChild);
(function() {
    'use strict';

    // Crée le div pour afficher le texte
    var rs2kTextDiv = document.createElement('div');
    rs2kTextDiv.style.position = 'fixed';
    rs2kTextDiv.style.top = '10px';
    rs2kTextDiv.style.right = '10px';
    rs2kTextDiv.style.color = 'black'; // Couleur du texte
    rs2kTextDiv.style.backgroundColor = 'yellow'; // Couleur de fond
    rs2kTextDiv.style.padding = '5px';
    rs2kTextDiv.style.fontWeight = 'bold';
    rs2kTextDiv.innerHTML = 'RS2K Version: Fri, 09/02/2024.RS2K.SCRIPT_USER<span style="color: green; margin-left: 5px;">✅</span>';
    // Ajoute le texte à la page
    document.body.appendChild(rs2kTextDiv);
})();
    // Create and append the "Supprimer" button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-ghost';
    deleteButton.innerText = 'DELETE';
    document.body.insertBefore(deleteButton, button.nextSibling);

    // Create and append the modal container with the form inside the login container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = `
     <div class="login-form">
    <h1>LOGINFORM</h1>
    <div class="form-group">
        <label for="fullName">Nom Prénom</label>
        <input type="text" name="fullName" id="fullName" placeholder=" " autocomplete="off" class="form-control" required />
    </div>
    <div class="form-group">
        <label for="email">Adresse email "BLS ACCOUNT"</label>
        <input type="email" name="email" id="email" placeholder=" " autocomplete="off" class="form-control" required />
    </div>
    <div class="form-group">
        <label for="password">Mot de passe "BLS ACCOUNT"</label>
        <input type="password" name="password" id="password" placeholder=" " autocomplete="off" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary btn-ghost" id="saveButton">Enregistrer</button>
    <button class="btn btn-primary btn-ghost" id="closeButton">Fermer</button>

    <!-- Telegram button below the "Fermer" button -->
    <a href="https://t.me/amnesia96_bls" target="_blank" class="btn btn-primary btn-ghost">Rejoindre sur Telegram</a>
</div>
    `;
    loginContainer.appendChild(modalContainer);

    // Add event listener to the button
    button.addEventListener('click', function() {
        modalContainer.style.display = 'flex';
    });

    // Add event listener to the "Supprimer" button
    deleteButton.addEventListener('click', function() {
        const profiles = document.querySelectorAll('.delete-profile');
        profiles.forEach(profile => {
            profile.style.textDecoration = '';
            profile.style.color = 'white';
            profile.addEventListener('click', function() {
                const profileIndex = Array.from(profiles).indexOf(profile);
                const savedButtons = JSON.parse(localStorage.getItem('buttons')) || [];
                const updatedButtons = savedButtons.filter((_, index) => index !== profileIndex);
                localStorage.setItem('buttons', JSON.stringify(updatedButtons));
                updateProfileButtons();
            });
        });
    });

    // Add event listener to the save button
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const buttons = JSON.parse(localStorage.getItem('buttons')) || [];
            buttons.push({ fullName, buttonText: `LOG: ${fullName}`, email, password });
            localStorage.setItem('buttons', JSON.stringify(buttons));
            updateProfileButtons();

            modalContainer.style.display = 'none';
        });
    }

    // Add event listener to the close button
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modalContainer.style.display = 'none';
        });
    }

    // Add event listener to the form to hide it when submitted
    const form = document.querySelector('.login-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Custom form submission logic');
            modalContainer.style.display = 'none';
        });
    }

    // Restore saved buttons on page load
    function updateProfileButtons() {
        const savedButtons = JSON.parse(localStorage.getItem('buttons')) || [];
        const existingButtons = document.querySelectorAll('.delete-profile');
        existingButtons.forEach(button => button.remove());

        for (const savedButton of savedButtons) {
            const restoredButton = document.createElement('button');
            restoredButton.className = 'btn btn-primary btn-ghost delete-profile';
            restoredButton.innerText = savedButton.buttonText;
            document.body.insertBefore(restoredButton, button.nextSibling);

            restoredButton.addEventListener('click', function() {
                document.getElementById('UserId1').value = savedButton.email;
                document.getElementById('UserId2').value = savedButton.email;
                document.getElementById('UserId3').value = savedButton.email;
                document.getElementById('UserId4').value = savedButton.email;
                document.getElementById('UserId5').value = savedButton.email;
                document.getElementById('UserId6').value = savedButton.email;
                document.getElementById('UserId7').value = savedButton.email;
                document.getElementById('UserId8').value = savedButton.email;
                document.getElementById('UserId9').value = savedButton.email;
                document.getElementById('UserId10').value = savedButton.email;
                document.getElementById('Password1').value = savedButton.password;
                document.getElementById('Password2').value = savedButton.password;
                document.getElementById('Password3').value = savedButton.password;
                document.getElementById('Password4').value = savedButton.password;
                document.getElementById('Password5').value = savedButton.password;
                document.getElementById('Password6').value = savedButton.password;
                document.getElementById('Password7').value = savedButton.password;
                document.getElementById('Password8').value = savedButton.password;
                document.getElementById('Password9').value = savedButton.password;
                document.getElementById('Password10').value = savedButton.password;

                $('#btnSubmit').click();
                $('#btnSubmit').prop('disabled', true);
            });
        }
    }

    updateProfileButtons();
})();};})();
