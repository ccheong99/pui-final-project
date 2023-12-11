document.addEventListener('DOMContentLoaded', function () {

    var iconRightUp = document.getElementById('icon-right-up');
    var iconRightUpWhite = document.getElementById('icon-right-up-white');
    var iconRightDown = document.getElementById('icon-right-down');
    var iconLeftDown = document.getElementById('icon-left-down');
    var isButtonClicked = false;

    // Remember the initial scroll position
    var initialScrollY = window.scrollY;

    // Reset layout and maintain scroll position when the window is resized
    function resetLayoutAndScroll() {
        
        isButtonClicked = false;
        resetLayoutBox3();
        resetLayoutBox7();
        resetLayoutBox4();
        resetLayoutBox5();

        // Restore the initial scroll position
        window.scrollTo(0, initialScrollY);
    }

    // Listen for the window resize event
    window.addEventListener('resize', function () {
        // Use a timeout to wait for the resizing to complete before resetting the layout
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(resetLayoutAndScroll, 10);
    });

    // Box 3

    // Function to reset the layout to its default state
    function resetLayoutBox3() {
        var screenWidthBox3 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (isButtonClicked) {
            if (screenWidthBox3 > 768) {
                document.getElementById('section-1-row-1').style.display = 'none';
                document.getElementById('section-1-row-2').style.display = 'none';
                document.getElementById('section-1-row-3').style.height = '100%';
                document.getElementById('box-3-content').style.display = 'block';
                iconRightUp.src = 'assets/img/icon-arrow-left-down.png';
            } else {
                document.getElementById('section-1-row-3').style.height = '580px';
                document.getElementById('box-3-content').style.display = 'block';
                iconRightUp.src = 'assets/img/icon-arrow-left-down.png';
            }
        } else {
            if (screenWidthBox3 > 768) {
                document.getElementById('section-1-row-1').style.display = 'flex';
                document.getElementById('section-1-row-2').style.display = 'flex';
                document.getElementById('section-1-row-3').style.height = '25%';
                document.getElementById('box-3-content').style.display = 'none';
                iconRightUp.src = 'assets/img/icon-arrow-right-up.png';
            } else {
                document.getElementById('section-1-row-3').style.height = '160px';
                document.getElementById('box-3-content').style.display = 'none';
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
                document.getElementById('blur').style.display = 'block';
                document.getElementById('box-7-content').style.display = 'block';
                iconRightUpWhite.src = 'assets/img/icon-arrow-left-down-white.png';
            } else {
                document.getElementById('section-2-row-1').style.display = 'flex';
                document.getElementById('section-2-row-2').style.height = '690px';
                document.getElementById('blur').style.display = 'block';
                document.getElementById('box-7-content').style.display = 'block';
                iconRightUpWhite.src = 'assets/img/icon-arrow-left-down-white.png';
            }
        } else {
            if (screenWidthBox7 > 768) {
                document.getElementById('section-2-row-1').style.display = 'flex';
                document.getElementById('section-2-row-2').style.height = '50%';
                document.getElementById('blur').style.display = 'none';
                document.getElementById('box-7-content').style.display = 'none';
                iconRightUpWhite.src = 'assets/img/icon-arrow-right-up-white.png';
            } else {
                document.getElementById('section-2-row-1').style.display = 'flex';
                document.getElementById('section-2-row-2').style.height = '320px';
                document.getElementById('blur').style.display = 'none';
                document.getElementById('box-7-content').style.display = 'none';
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


    // Box 4

    // Function to reset the layout for Box 4
    function resetLayoutBox4() {
        var screenWidthBox4 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (isButtonClicked) {
            if (screenWidthBox4 > 768) {
                document.getElementById('section-2-row-1-column-1').style.width = '100%';
                document.getElementById('section-2-row-1').style.height = '97%';
                document.getElementById('section-2-row-1-column-1').style.height = '100%';
                document.getElementById('section-2-row-1-column-2').style.display = 'none';
                document.getElementById('section-2-row-2').style.display = 'none';
                document.getElementById('box-4-content').style.display = 'block';
                iconRightDown.src = 'assets/img/icon-arrow-left-up.png';
            } else {
                document.getElementById('section-2-row-1').style.height = '50%';
                document.getElementById('section-2-row-1-column-1').style.width = '100%';
                document.getElementById('section-2-row-1-column-1').style.height = '690px';
                document.getElementById('section-2-row-1-column-2').style.display = 'none';
                document.getElementById('box-4-content').style.display = 'block';
                iconRightDown.src = 'assets/img/icon-arrow-left-up.png';
            }
        } else {
            if (screenWidthBox4 > 768) {
                document.getElementById('section-2-row-1-column-1').style.width = '50%';
                document.getElementById('section-2-row-1').style.height = '50%';
                document.getElementById('section-2-row-1-column-1').style.height = 'auto';
                document.getElementById('section-2-row-1-column-2').style.display = 'flex';
                document.getElementById('section-2-row-2').style.display = 'flex';
                document.getElementById('box-4-content').style.display = 'none';
                iconRightDown.src = 'assets/img/icon-arrow-right-down.png';
            } else {
                document.getElementById('section-2-row-1-column-1').style.width = '50%';
                document.getElementById('section-2-row-1').style.height = '320px';
                document.getElementById('section-2-row-1-column-1').style.height = '320px';
                document.getElementById('section-2-row-1-column-2-row-1').style.height = '160px';
                document.getElementById('section-2-row-1-column-2-row-2').style.height = '160px';
                document.getElementById('section-2-row-1-column-2').style.display = 'flex';
                document.getElementById('box-4-content').style.display = 'none';
                iconRightDown.src = 'assets/img/icon-arrow-right-down.png';
            }
        }
    }

    // Function to handle the first click for iconRightDown in Box 4
    function iconRightDownFirstClick() {
        isButtonClicked = true;
        resetLayoutBox4();

        // Remove the click event listener for FirstClick
        iconRightDown.removeEventListener('click', iconRightDownFirstClick);

        // Add a click event listener for SecondClick
        iconRightDown.addEventListener('click', iconRightDownSecondClick);
    }

    // Function to handle the second click for iconRightUpWhite in Box 7
    function iconRightDownSecondClick() {
        isButtonClicked = false;
        resetLayoutBox4();

        // Remove the click event listener for SecondClick
        iconRightDown.removeEventListener('click', iconRightDownSecondClick);

        // Add a click event listener for FirstClick
        iconRightDown.addEventListener('click', iconRightDownFirstClick);
    }

    // Add initial click event listener for iconRightDown in Box 4
    iconRightDown.addEventListener('click', iconRightDownFirstClick);

    // Reset layout for Box 4 when the window is resized
    window.addEventListener('resize', function () {
        resetLayoutBox4();
    });


    // Box 5

    // Function to reset the layout for Box 5
    function resetLayoutBox5() {
        var screenWidthBox5 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (isButtonClicked) {
            if (screenWidthBox5 > 768) {
                document.getElementById('section-2-row-1-column-2').style.width = '100%';
                document.getElementById('section-2-row-1-column-2').style.height = '100%';
                document.getElementById('section-2-row-1-column-2-row-1').style.height = '100%';
                document.getElementById('section-2-row-1-column-2-row-2').style.display = 'none';
                document.getElementById('section-2-row-1-column-1').style.display = 'none';
                document.getElementById('box-5-content').style.display = 'block';
                iconLeftDown.src = 'assets/img/icon-arrow-right-up.png';
            } else {
                document.getElementById('section-2-row-1-column-2').style.width = '100%';
                document.getElementById('section-2-row-1-column-2').style.height = '100%';
                document.getElementById('section-2-row-1-column-2-row-1').style.height = '100%';
                document.getElementById('section-2-row-1-column-2-row-2').style.display = 'none';
                document.getElementById('section-2-row-1-column-1').style.display = 'none';
                document.getElementById('box-5-content').style.display = 'block';
                iconLeftDown.src = 'assets/img/icon-arrow-right-up.png';
            }
        } else {
            if (screenWidthBox5 > 768) {
                document.getElementById('section-2-row-1-column-2').style.width = '50%';
                document.getElementById('section-2-row-1-column-2').style.height = '100%';
                document.getElementById('section-2-row-1-column-2-row-1').style.height = '50%';
                document.getElementById('section-2-row-1-column-2-row-2').style.display = 'flex';
                document.getElementById('section-2-row-1-column-1').style.display = 'flex';
                document.getElementById('box-5-content').style.display = 'none';
                iconLeftDown.src = 'assets/img/icon-arrow-left-down.png';
            } else {
                document.getElementById('section-2-row-1-column-2').style.width = '50%';
                document.getElementById('section-2-row-1-column-2').style.height = '100%';
                document.getElementById('section-2-row-1-column-2-row-1').style.height = '50%';
                document.getElementById('section-2-row-1-column-2-row-2').style.display = 'flex';
                document.getElementById('section-2-row-1-column-1').style.display = 'flex';
                document.getElementById('box-5-content').style.display = 'none';
                iconLeftDown.src = 'assets/img/icon-arrow-left-down.png';
            }
        }
    }

    // Function to handle the first click for iconRightDown in Box 4
    function iconLeftDownFirstClick() {
        isButtonClicked = true;
        resetLayoutBox5();

        // Remove the click event listener for FirstClick
        iconLeftDown.removeEventListener('click', iconLeftDownFirstClick);

        // Add a click event listener for SecondClick
        iconLeftDown.addEventListener('click', iconLeftDownSecondClick);
    }

    // Function to handle the second click for iconRightUpWhite in Box 7
    function iconLeftDownSecondClick() {
        isButtonClicked = false;
        resetLayoutBox5();

        // Remove the click event listener for SecondClick
        iconLeftDown.removeEventListener('click', iconLeftDownSecondClick);

        // Add a click event listener for FirstClick
        iconLeftDown.addEventListener('click', iconLeftDownFirstClick);
    }

    // Add initial click event listener for iconRightDown in Box 4
    iconLeftDown.addEventListener('click', iconLeftDownFirstClick);

    // Reset layout for Box 4 when the window is resized
    window.addEventListener('resize', function () {
        resetLayoutBox5();
    });
 

});

