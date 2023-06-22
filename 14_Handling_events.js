// Events and DOM nodes
<html>
<botton>Click me</botton>
<p>No handler here.</p>
<script>
    var button = document.querySelector("button");
    button.addEventListener("click", function() {
        console.log("Button clicked.")
    });
</script>

<button>Act-once button</button>
<script>
    var button = document.querySelector("button");
    function once() {
        console.log("Done.");
        button.removeEventListener("click", once);
    }
    botton.addEventListener("click", once);
</script>
</html>

// Event object
// Setting timers
