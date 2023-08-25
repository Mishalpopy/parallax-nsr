window.onload = function() {
  window.addEventListener('scroll', function(e) {
    let s = this.scrollY;
    let w = this.outerWidth;
    let h = document.getElementsByClassName('parallax')[0].clientWidth;
    let h_b = document.getElementsByClassName('container-parallax-3d-hero')[0].clientWidth;
    let p = s / h * 10;
    let p_b = s / h_b * 10;

    let translateY = -s * 0.9; // Adjust the speed of upward movement here

    let opas = 1 - 1 / 100 * p_b;
    let z_1 = 1 + (w / 10000 * p_b);
    document.getElementsByClassName('p-item4')[0].style = `transform: scale(${z_1}) translateY(${translateY}px); opacity: ${opas}`;

    let z_2 = 1 + (w / 5000000 * p);
    document.getElementsByClassName('p-item1')[0].style = `transform: scale(${z_2})`;
    let rotation = (s / window.innerHeight) * 360; 
    let pItem2 = document.querySelector('.p-item2');
    pItem2.style.transform = `translateY(${translateY}px)`;
    pItem2.querySelector('img').style.transform = `rotate(${rotation}deg)`;

    let hr = w / 2000 * p_b;
    let z_3 = 1 + (w * 0.000005 * p_b);
    document.getElementsByClassName('p-item3')[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_3})`;

    let hr_2 = w / 100 * p_b;
    let z_4 = 1 + (w * 0.00001 * p_b);
    document.querySelector('.content-parallax-3d-hero').style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;

    // Calculate text translation and opacity
    let textTranslateY = s * 0.5; // Adjust the speed of text emergence here
    let textOpacity = 1 - s / (window.innerHeight * 0.5); // Adjust the point where text is fully visible
    
    // Apply the text transformations
    let headerText = document.querySelector('.content-header-parallax-3d-hero h1');
    headerText.style.transform = `translateY(${textTranslateY}px)`;
    headerText.style.opacity = textOpacity;
  });
};
