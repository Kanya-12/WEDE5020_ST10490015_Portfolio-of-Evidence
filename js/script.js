// ====== Interactive Features Added ======

// Lightbox Image Gallery
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
});

// ====== Search/Filter Services ======
function filterServices() {
  let input = document.getElementById("serviceSearch");
  let filter = input.value.toLowerCase();
  let items = document.getElementsByClassName("service-item");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].textContent || items[i].innerText;
    if (text.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

// ====== Enquiry Form Validation ======
document.addEventListener("DOMContentLoaded", function () {
  const enquiryForm = document.querySelector("#enquiryForm");
  const responseDiv = document.querySelector("#response");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = enquiryForm.querySelector("#name").value;
      const email = enquiryForm.querySelector("#email").value;
      const message = enquiryForm.querySelector("#message").value;

      if (name === "" || email === "" || message === "") {
        responseDiv.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
        return;
      }

      responseDiv.innerHTML = "<p style='color:green;'>Thank you, " + name + "! Your enquiry has been received.</p>";
      enquiryForm.reset();
    });
  }
});
