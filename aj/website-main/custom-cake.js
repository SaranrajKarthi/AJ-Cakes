document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showPopup').addEventListener('click', function () {
        document.getElementById('cakePopup').style.display = 'block';
    });

    document.getElementById('flavorButton').addEventListener('click', function () {
        // Handle flavor selection here
        alert('Flavor selected');
    });

    document.getElementById('creamButton').addEventListener('click', function () {
        // Handle cream selection here
        alert('Cream selected');
    });

    document.getElementById('cakeTypeButton').addEventListener('click', function () {
        // Handle cake type selection here
        alert('Cake type selected');
    });

    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('cakePopup').style.display = 'none';
    });
});
