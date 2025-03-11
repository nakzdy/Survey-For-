document.getElementById('surveyForm').addEventListener('submit', function(event) {
    if (document.getElementById('surveyForm').checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const middleInitial = document.getElementById("middleInitial").value;
        const lastName = document.getElementById("lastName").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("province").value;
        const zipCode = document.getElementById("zipCode").value;

        let sports = [];
        if (document.getElementById("basketball").checked) sports.push("Basketball");
        if (document.getElementById("football").checked) sports.push("Football");
        if (document.getElementById("hockey").checked) sports.push("Hockey");

        const year = document.querySelector('input[name="year"]:checked')?.value || "None selected";
        const favoriteFood = document.getElementById("favoriteFood").value;
        const comments = document.getElementById("comments").value;

        alert(`
            First Name: ${firstName}
            Middle Initial: ${middleInitial}
            Last Name: ${lastName}
            City: ${city}
            State: ${state}
            Zip Code: ${zipCode}
            Sports: ${sports.join(", ")}
            Year: ${year}
            Favorite Food: ${favoriteFood}
            Comments: ${comments}
        `);
    } else {
        event.preventDefault();
    }
});