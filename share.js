document.addEventListener("DOMContentLoaded", function () {
    let isSharing = false; // Track sharing state
    const shareButtons = document.querySelectorAll("#shareButton, #shareButtonLower");

    shareButtons.forEach((btn) => {
        btn.addEventListener("click", async function (event) {
            event.preventDefault();

            if (isSharing) return; // Prevent multiple share triggers
            isSharing = true;

            if (navigator.share) {
                try {
                    await navigator.share({
                        title: "Stay Up",
                        text: "Stay Up Clothing promotes a positive attitude. Shop t-shirts, caps, apparel, and streetwear that inspire a lifestyle of confidence and positivity.",
                        url: window.location.href
                    });
                    console.log("Shared successfully");
                } catch (error) {
                    console.log("Error sharing:", error);
                }
            } else {
                alert("Sharing not supported on this browser.");
            }

            isSharing = false; // Reset state after sharing
        });
    });
});
