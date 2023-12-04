document.addEventListener('DOMContentLoaded', function () {

    var iconRightUp = document.getElementById('icon-right-up');
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var isButtonClicked = false;

    // Function to reset the layout to its default state
    function resetLayout() {
        if (isButtonClicked) {
            if (screenWidth > 768) {
                document.getElementById('section-1-row-1').style.display = 'none';
                document.getElementById('section-1-row-2').style.display = 'none';
                document.getElementById('section-1-row-3').style.height = '100%';
                iconRightUp.src = 'assets/img/icon-arrow-left-down.png';
            } else {
                document.getElementById('section-1-row-3').style.height = '690px';
                iconRightUp.src = 'assets/img/icon-arrow-left-down.png';
            }
        } else {
            if (screenWidth > 768) {
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
        resetLayout();

        // Remove the click event listener for FirstClick
        iconRightUp.removeEventListener('click', iconRightUpFirstClick);

        // Add a click event listener for SecondClick
        iconRightUp.addEventListener('click', iconRightUpSecondClick);
    }

    // Function to handle the second click
    function iconRightUpSecondClick() {
        isButtonClicked = false;
        resetLayout();

        // Remove the click event listener for SecondClick
        iconRightUp.removeEventListener('click', iconRightUpSecondClick);

        // Add a click event listener for FirstClick
        iconRightUp.addEventListener('click', iconRightUpFirstClick);
    }

    // Add initial click event listener
    iconRightUp.addEventListener('click', iconRightUpFirstClick);

    // Reset layout when the window is resized
    window.addEventListener('resize', function () {
        var newScreenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Update the screen width and reset the layout if it has changed
        if (newScreenWidth !== screenWidth) {
            screenWidth = newScreenWidth;
            resetLayout();
        }
    });

    /*
    var iconRightUp = document.getElementById('icon-right-up');
    var iconRightDown = document.getElementById('icon-right-down');
    var iconRightUpWhite = document.getElementById('icon-right-up-white');

    iconRightUp.addEventListener('click', iconRightUpFirstClick);
    iconRightDown.addEventListener('click', iconRightDownFirstClick);
    iconRightUpWhite.addEventListener('click', iconRightUpWhiteFirstClick);


    function resetLayout() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 768) {
            document.getElementById('section-1-row-1').style.display = 'flex';
            document.getElementById('section-1-row-2').style.display = 'flex';
            document.getElementById('section-1-row-3').style.height = '25%';
            iconRightUp.src = 'assets/img/icon-arrow-right-up.png';

            // Add a click event listener for FirstClick
            iconRightUp.addEventListener('click', iconRightUpFirstClick);
            // Remove the click event listener for SecondClick
            iconRightUp.removeEventListener('click', iconRightUpSecondClick);
        } else {
            document.getElementById('section-1-row-3').style.height = '160px';

            // Swap icons back
            iconRightUp.src = 'assets/img/icon-arrow-right-up.png';

            // Remove the click event listener for SecondClick
            iconRightUp.removeEventListener('click', iconRightUpSecondClick);

            // Add a click event listener for FirstClick
            iconRightUp.addEventListener('click', iconRightUpFirstClick);
        }
    }

    // Function to handle the first click
    function iconRightUpFirstClick() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 768) {
            // Change height
            document.getElementById('section-1-row-1').style.display = 'none';
            document.getElementById('section-1-row-2').style.display = 'none';
            document.getElementById('section-1-row-3').style.height = '100%';

            // Swap icons
            iconRightUp.src = 'assets/img/icon-arrow-left-down.png';

            // Remove the click event listener for FirstClick
            iconRightUp.removeEventListener('click', iconRightUpFirstClick);

            // Add a click event listener for SecondClick
            iconRightUp.addEventListener('click', iconRightUpSecondClick);
        }

        if (screenWidth < 768) {
            // Change height
            document.getElementById('section-1-row-3').style.height = '690px';

            // Swap icons
            iconRightUp.src = 'assets/img/icon-arrow-left-down.png';

            // Remove the click event listener for FirstClick
            iconRightUp.removeEventListener('click', iconRightUpFirstClick);

            // Add a click event listener for SecondClick
            iconRightUp.addEventListener('click', iconRightUpSecondClick);
        }
    }

    // Function to handle the second click
    function iconRightUpSecondClick() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 768) {
            // Toggle the heights back to their original values
            resetLayout();
        }

        if (screenWidth < 768) {
            // Toggle the heights back to their original values
            document.getElementById('section-1-row-3').style.height = '160px';

            // Swap icons back
            iconRightUp.src = 'assets/img/icon-arrow-right-up.png';

            // Remove the click event listener for SecondClick
            iconRightUp.removeEventListener('click', iconRightUpSecondClick);

            // Add a click event listener for FirstClick
            iconRightUp.addEventListener('click', iconRightUpFirstClick);
        }
    }

    // Add initial click event listener
    iconRightUp.addEventListener('click', iconRightUpFirstClick);

    // Reset layout when the window is resized
    window.addEventListener('resize', resetLayout);
    */



    // Function to handle the first click
    function iconRightDownFirstClick() {

        // Change height
        document.getElementById('section-2-row-2').style.display = 'none';
        document.getElementById('section-2-row-1-column-2-row-1').style.display = 'none';
        document.getElementById('section-2-row-1-column-2-row-2').style.display = 'none';
        document.getElementById('section-2-row-1-column-1').style.height = '100%';
        document.getElementById('section-2-row-1-column-1').style.width = '100%';
    
        // Swap icons
        iconRightDown.src = 'assets/img/icon-arrow-left-up.png';
    
        // Remove the click event listener for FirstClick
        iconRightDown.removeEventListener('click', iconRightDownFirstClick);
    
        // Add a click event listener for SecondClick
        iconRightDown.addEventListener('click', iconRightDownSecondClick);
    }
    
    // Function to handle the second click
    function iconRightDownSecondClick() {

        // Toggle the heights back to their original values
        document.getElementById('section-2-row-2').style.display = 'flex';
        document.getElementById('section-2-row-1-column-2-row-1').style.display = 'flex';
        document.getElementById('section-2-row-1-column-2-row-2').style.display = 'flex';
        document.getElementById('section-2-row-1-column-1').style.height = '';
        document.getElementById('section-2-row-1-column-1').style.width = '50%';
    
        // Swap icons back
        iconRightDown.src = 'assets/img/icon-arrow-right-down.png';
    
        // Remove the click event listener for SecondClick
        iconRightDown.removeEventListener('click', iconRightDownSecondClick);
    
        // Add a click event listener for FirstClick
        iconRightDown.addEventListener('click', iconRightDownFirstClick);
    }

    // Function to handle the first click
    function iconRightUpWhiteFirstClick() {

        // Change height
        document.getElementById('section-2-row-1').style.display = 'none';
        document.getElementById('section-2-row-2').style.height = '100%';
    
        // Swap icons
        iconRightUpWhite.src = 'assets/img/icon-arrow-left-down-white.png';
    
        // Remove the click event listener for FirstClick
        iconRightUpWhite.removeEventListener('click', iconRightUpWhiteFirstClick);
    
        // Add a click event listener for SecondClick
        iconRightUpWhite.addEventListener('click', iconRightUpWhiteSecondClick);
    }
    
    // Function to handle the second click
    function iconRightUpWhiteSecondClick() {

        // Toggle the heights back to their original values
        document.getElementById('section-2-row-1').style.display = 'flex';
        document.getElementById('section-2-row-2').style.height = '50%';
    
        // Swap icons back
        iconRightUpWhite.src = 'assets/img/icon-arrow-right-up-white.png';
    
        // Remove the click event listener for SecondClick
        iconRightUpWhite.removeEventListener('click', iconRightUpWhiteSecondClick);
    
        // Add a click event listener for FirstClick
        iconRightUpWhite.addEventListener('click', iconRightUpWhiteFirstClick);
    }

});

