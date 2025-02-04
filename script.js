document.addEventListener("DOMContentLoaded", () => {
    const secretInput = document.getElementById("secretNumber");
    const proveBtn = document.getElementById("proveBtn");
    const resultDiv = document.getElementById("result");

    secretInput.addEventListener("input", () => {
        if (secretInput.value && !isNaN(secretInput.value) && secretInput.value > 0) {
            proveBtn.disabled = false;
        } else {
            proveBtn.disabled = true;
        }
    });

    proveBtn.addEventListener("click", () => {
        const secret = parseInt(secretInput.value);
        proveKnowledge(secret);
    });

    // Function to simulate the ZKP
    function proveKnowledge(secret) {
        // Step 1: Calculate the square of the secret (the prover knows this)
        const square = secret * secret;
        
        // Step 2: Challenge - Randomly choose to either reveal the square or verify the square
        const challenge = Math.random() > 0.5 ? "verify" : "reveal";

        if (challenge === "reveal") {
            // Prover reveals the square
            resultDiv.textContent = `You have revealed the square: ${square}. You know the square root!`;
            resultDiv.style.color = "green";
        } else {
            // Prover does not reveal the square, only proves it
            const randomFactor = Math.random() > 0.5 ? 1 : -1;
            const verification = secret * randomFactor;
            
            resultDiv.textContent = `You did not reveal the square, but the verifier can check that: ${verification}`;
            resultDiv.style.color = "blue";
        }
    }
});
