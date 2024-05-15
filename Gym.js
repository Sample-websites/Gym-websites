
        // Load existing reviews from local storage
        //window.onload = function () {
            //displayStoredReviews();
        //};
        
        function toggleNav() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

        function displayReview() {
            var email = document.getElementById('remail').value;
            var review = document.getElementById('review').value;
            var outputDiv = document.getElementById('output');

            // Save the review to local storag
   

            // Display the review with improved styling
            if (email === '' || review ==='') {
             alert('Please insert proper value');
            }
            else {
            outputDiv.innerHTML += `
                <div class="review">
                    <strong>Email:</strong> ${email}<br>
                    <strong>Review:</strong> ${review}
                </div>
            `;
            

            // Clear input fields
            document.getElementById('remail').value = '';
            document.getElementById('review').value = '';
            }
        }

        /*function saveReview(email, review) {
            var existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
            existingReviews.push({ email: email, review: review });
            localStorage.setItem('reviews', JSON.stringify(existingReviews));
        }

        function displayStoredReviews() {
            var outputDiv = document.getElementById('output');
            var storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

            storedReviews.forEach(function (item) {
                outputDiv.innerHTML += `
                    <div class="review">
                        <strong>Email:</strong> ${item.email}<br>
                        <strong>Review:</strong> ${item.review}
                    </div>
                `;
            });
        
        }
        function eraseReviews() {
            // Clear reviews from local storage and reload the page
            localStorage.removeItem('reviews');
            location.reload();
        }
        function toggleNav() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
*/