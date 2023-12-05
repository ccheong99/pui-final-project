document.addEventListener('DOMContentLoaded', function () {

    var iconRightUp = document.getElementById('icon-right-up');
    var iconRightUpWhite = document.getElementById('icon-right-up-white');
    var isButtonClicked = false;

    // Box 3

    // Function to reset the layout to its default state
    function resetLayoutBox3() {
        var screenWidthBox3 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (isButtonClicked) {
            if (screenWidthBox3 > 768) {
                document.getElementById('section-1-row-1').style.display = 'none';
                document.getElementById('section-1-row-2').style.display = 'none';
                document.getElementById('section-1-row-3').style.height = '100%';
                iconRightUp.src = 'assets/img/icon-arrow-left-down.png';
            } else {
                document.getElementById('section-1-row-3').style.height = '690px';
                iconRightUp.src = 'assets/img/icon-arrow-left-down.png';
            }
        } else {
            if (screenWidthBox3 > 768) {
                document.getElementById('section-1-row-1').style.display = 'flex';
                document.getElementById('section-1-row-2').style.display = 'flex';
                document.getElementById('section-1-row-3').style.height = '25%';
                iconRightUp.src = 'assets/img/icon-arrow-right-up.png';
            } else {
                document.getElementById('section-1-row-3').style.height = '160px';
                iconRightUp.src = 'assets/img/icon-arrow-right-up.png';
            }
        }
    }

    // Function to handle the first click
    function iconRightUpFirstClick() {
        isButtonClicked = true;
        resetLayoutBox3();

        // Remove the click event listener for FirstClick
        iconRightUp.removeEventListener('click', iconRightUpFirstClick);

        // Add a click event listener for SecondClick
        iconRightUp.addEventListener('click', iconRightUpSecondClick);
    }

    // Function to handle the second click
    function iconRightUpSecondClick() {
        isButtonClicked = false;
        resetLayoutBox3();

        // Remove the click event listener for SecondClick
        iconRightUp.removeEventListener('click', iconRightUpSecondClick);

        // Add a click event listener for FirstClick
        iconRightUp.addEventListener('click', iconRightUpFirstClick);
    }

    // Add initial click event listener
    iconRightUp.addEventListener('click', iconRightUpFirstClick);

    // Reset layout when the window is resized
    window.addEventListener('resize', function () {
        resetLayoutBox3();
    });


    // Box 7

    // Function to reset the layout for Box 7
    function resetLayoutBox7() {
        var screenWidthBox7 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (isButtonClicked) {
            if (screenWidthBox7 > 768) {
                document.getElementById('section-2-row-1').style.display = 'none';
                document.getElementById('section-2-row-2').style.height = '100%';
                iconRightUpWhite.src = 'assets/img/icon-arrow-left-down-white.png';
            } else {
                document.getElementById('section-2-row-1').style.display = 'flex';
                document.getElementById('section-2-row-2').style.height = '690px';
                iconRightUpWhite.src = 'assets/img/icon-arrow-left-down-white.png';
            }
        } else {
            if (screenWidthBox7 > 768) {
                document.getElementById('section-2-row-1').style.display = 'flex';
                document.getElementById('section-2-row-2').style.height = '50%';
                iconRightUpWhite.src = 'assets/img/icon-arrow-right-up-white.png';
            } else {
                document.getElementById('section-2-row-1').style.display = 'flex';
                document.getElementById('section-2-row-2').style.height = '320px';
                iconRightUpWhite.src = 'assets/img/icon-arrow-right-up-white.png';
            }
        }
    }

    // Function to handle the first click for iconRightUpWhite in Box 7
    function iconRightUpWhiteFirstClick() {
        isButtonClicked = true;
        resetLayoutBox7();

        // Remove the click event listener for FirstClick
        iconRightUpWhite.removeEventListener('click', iconRightUpWhiteFirstClick);

        // Add a click event listener for SecondClick
        iconRightUpWhite.addEventListener('click', iconRightUpWhiteSecondClick);
    }

    // Function to handle the second click for iconRightUpWhite in Box 7
    function iconRightUpWhiteSecondClick() {
        isButtonClicked = false;
        resetLayoutBox7();

        // Remove the click event listener for SecondClick
        iconRightUpWhite.removeEventListener('click', iconRightUpWhiteSecondClick);

        // Add a click event listener for FirstClick
        iconRightUpWhite.addEventListener('click', iconRightUpWhiteFirstClick);
    }

    // Add initial click event listener for iconRightUpWhite in Box 7
    iconRightUpWhite.addEventListener('click', iconRightUpWhiteFirstClick);

    // Reset layout for Box 7 when the window is resized
    window.addEventListener('resize', function () {
        resetLayoutBox7();
    });
 

});

