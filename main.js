setTimeout(function () {
    $(document).ready(function () {
        $("#loading").css("display", "none");
        $("#wrapper").css("opacity", "1");

        $('#about ul').slick({
            //   setting-name: setting-value
            autoplay: false,
            autoplaySpeed: 7000,
            speed: 500,
            arrows: false,
            fade: false,
            cssEase: 'linear'
        });

        $('#prev-slide').click(function (event) {
            $('#about ul').slick('slickPrev');
        });
        $('#next-slide').click(function (event) {
            $('#about ul').slick('slickNext');
        });

        let btnOpen = document.getElementById('btn-open');
        let btnClose = document.getElementById('btn-close');
        let menu = document.getElementById('menu');

        btnOpen.addEventListener('click', function (event) {
            if (this.style.opacity == '0') {
                menu.style.right = 'calc(-100% - 50px)';
                this.style.opacity = '1';
                btnClose.style.opacity = '0';
                this.style.transform = 'rotate(0deg)';
            }
            else {
                menu.style.right = '-15px';
                btnClose.style.opacity = '1';
                this.style.opacity = '0';
                this.style.transform = 'rotate(90deg)';
            }
        });

        btnOpen.addEventListener('blur', (event) => {
            menu.style.right = 'calc(-100% - 50px)';
            btnOpen.style.opacity = '1';
            btnClose.style.opacity = '0';
            btnOpen.style.transform = 'rotate(0deg)';
        });

    });
}, 1000);