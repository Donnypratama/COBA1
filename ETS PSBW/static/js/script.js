//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

// Fungsi untuk menampilkan pop-up
function showPopup() {
    document.getElementById("popupMessage").style.display = "block";
}

// Fungsi untuk menutup pop-up
function closePopup() {
    document.getElementById("popupMessage").style.display = "none";
}

// Event Listener pada Form
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirimkan secara default
    showPopup(); // Menampilkan pop-up

    // Menampilkan pesan terima kasih di bawah form (opsional)
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Terima kasih! Pesan Anda telah diterima.";

    // Reset form setelah submit
    this.reset();
});
