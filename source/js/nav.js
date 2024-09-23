document.getElementById('TOinteriors').addEventListener('click', function() {
    document.querySelectorAll('.mobOpen').forEach(function(element) {
        element.classList.remove('mobOpen');
    }); 
    document.querySelectorAll('.navMob_open').forEach(function(element) {
        element.classList.remove('navMob_open');
    });
    
    document.querySelector('.TOinteriors').classList.add('navMob_open');
    document.getElementById('interiors').classList.add('mobOpen');
});

document.getElementById('TOexteriors').addEventListener('click', function() {
    document.querySelectorAll('.mobOpen').forEach(function(element) {
        element.classList.remove('mobOpen');
    }); 
    document.querySelectorAll('.navMob_open').forEach(function(element) {
        element.classList.remove('navMob_open');
    });
    
    document.querySelector('.TOexteriors').classList.add('navMob_open');
    document.getElementById('exteriors').classList.add('mobOpen');
});

document.getElementById('TOcalculator').addEventListener('click', function() {
    document.querySelectorAll('.mobOpen').forEach(function(element) {
        element.classList.remove('mobOpen');
    });
    document.querySelectorAll('.navMob_open').forEach(function(element) {
        element.classList.remove('navMob_open');
    });

    document.querySelector('.TOcalculator').classList.add('navMob_open');
    document.getElementById('calculator').classList.add('mobOpen');
    document.querySelector('.building').classList.add('close');
});


document.getElementById('TOstep1').addEventListener('click', function() {
    document.querySelectorAll('.now').forEach(function(element) {
        element.classList.remove('now');
    });
    document.querySelectorAll('.active').forEach(function(element) {
        element.classList.remove('active');
    });

    document.querySelector('.step1').classList.add('active');
    document.getElementById('action1').classList.add('now');
    document.querySelector('.building').classList.remove('close');
});

document.querySelectorAll('#TOstep2').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelectorAll('.now').forEach(function(element) {
            element.classList.remove('now');
        });
        document.querySelectorAll('.active').forEach(function(element) {
            element.classList.remove('active');
        });

        document.querySelector('.step2').classList.add('active');
        document.getElementById('action2').classList.add('now');
    });
});

document.querySelectorAll('#TOstep3').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelectorAll('.now').forEach(function(element) {
            element.classList.remove('now');
        });
        document.querySelectorAll('.active').forEach(function(element) {
            element.classList.remove('active');
        });

        document.querySelector('.step3').classList.add('active');
        document.getElementById('action3').classList.add('now');
    });
});

document.getElementById('TOstep4').addEventListener('click', function() {
    document.querySelectorAll('.now').forEach(function(element) {
        element.classList.remove('now');
    });

    document.querySelector('.steps').classList.add('close');
    document.getElementById('action4').classList.add('now');

    const element = document.querySelector('.title');
    element.style.margin = '0';
});