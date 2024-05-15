    function selectMembership() {
        // You can implement logic to handle the selected membership, such as storing it in a database or processing it.
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const selectedMembership = document.getElementById("selected-membership").value;
        if (!name || !email || !selectedMembership) {
            alert('Please fill in all fields');
            return;
        }

        alert("Thank you, " + name + "! You have chosen the " + selectedMembership + " membership. We will contact you at " + email + ".");
        name.value = '';
        email.value = '';
        selectedMembership.value = '';
    }