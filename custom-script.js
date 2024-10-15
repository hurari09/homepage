document.addEventListener("DOMContentLoaded", function() {
    // ��ư Ŭ�� �� �˸� �޽��� ǥ��
    // const alertButton = document.getElementById("alert-button");
    //  alertButton.addEventListener("click", function() {
    //     alert("Button clicked!");
    // });

    // "Learn more" ��ư Ŭ�� �� learn.html�� �̵�
    alertButton.addEventListener("click", function () {
        window.location.href = "learn-more.html";
    });

    // �̹��� ����
    const imageElement = document.getElementById("change-image");
    const originalImageSrc = imageElement.src;
    const newImageSrc = "./images/mountain.jpg";

    imageElement.addEventListener("mouseover", function() {
        imageElement.src = newImageSrc;
    });

    imageElement.addEventListener("mouseout", function() {
        imageElement.src = originalImageSrc;
    });

    
});