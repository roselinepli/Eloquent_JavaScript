// SVG: Scalable Vector Graphics

// Drawing a pie chart
var results = [
    {name: "Satisfied", count: 1043, color: "lightblue"},
    {name: "Neutral", count: 563, color: "lightgreen"},
    {name: "Unsatisfied", count: 510, color: "pink"},
    {name: "No comment", count: 175, color: "silver"}
];

<http>
<canvas width="200" height="200"></canvas>
<script>
    var cx = document.querySelector("canvas").getContext("2d");
    var total = result.reduce(function(sum, choice) {
        return sum + choice.count;
    }, 0);
    // Start at the top
    var currentAngle = -0.5 * Math.PI;
    results.forEach(function(result) {
        var sliceAngle = (result.count / total) * 2 * Math.PI;
        cx.beginPath();
        // center=100,100, radius=100
        // from current angle, clockwise by slice's angle
        cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
        currentAngle += sliceAngle;
        cx.lineTo(100, 100);
        cx.fillStyle = result.color;
        cx.fill();
    });
</script>

<canvas></canvas>
<script>
    var cx = document.querySelector("canvas").getContext("2d");
    cx.font = "28px Georgia";
    cx.fillStyle = "fuchsia";
    cx.fillText("I can draw text, too!", 10, 50);
</script>


// Images
<canvas></canvas>
<script>
    var cx = document.querySelector("canvas").getContext("2d");
    var img = document.createElement("img");
    img.addEventListener("load", function() {
        for (var x = 10; x < 200; x += 30)
          cx.drawImage(img, x, 10);
    });
</script>

<canvas></canvas>
<script>
    var cx = document.querySelector("canvas").getContext("2d");
    var img = document.createElement("img");
    img.src = "img/player.png";
    var spriteW = 24, spriteH = 30;
    img.addEventListener("load", function(){
        var cycle = 0;
    setInterval(function() {
        cx.clearRect(0, 0, spriteW, spriteH);
        cx.drawImage(img,
                     // source rectangle
                     cycle * spriteW, 0, spriteW, spriteH,
                     // destination rectangle
                     0, 0, spriteW, spriteH);
        cycle = (cycle + 1) % 8;
    }, 120);
    });
</script>

<canvas></canvas>
<script>
    var cx = document.querySelector("canvas").getContext("2d");
    cx.scale(3, .5);
    cx.beginPath();
    cx.arc(50, 50, 40, 0, 7);
    cx.lineWidth = 3;
    cx.stroke();
</script>
</http>