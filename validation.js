$("#submit-form").submit(function (e) {
    e.preventDefault();

    // Create JSON object from form values
    const formData = {
        apiKey: "", // same as in Apps Script
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#Message").val()
    };

    $.ajax({
        url: "",
        method: "POST",
        contentType: "application/json", // Tell server we're sending JSON
        data: JSON.stringify(formData),
        success: function (res) {
            alert("Form submitted successfully!");
            console.log(res); // check response
            $("#submit-form")[0].reset();
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    });
});