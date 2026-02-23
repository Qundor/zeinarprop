document.getElementById("contactForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let whatsappMessage = `New Inquiry from Zeinar Website:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Message: ${message}`;

    window.open(`https://wa.me/27833051734?text=${whatsappMessage}`, "_blank");
});