document.getElementById("fileInput").addEventListener("change", function () {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var imageUrl = e.target.result;
      document.getElementById("imagePreview").src = imageUrl;
      // You can use imageUrl here as the URL of the image
      console.log("Image URL:", imageUrl);
    };
    reader.readAsDataURL(file);
  }
});
