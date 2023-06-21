// DOM: document object model
// comments are written between <!-- and --> in HTML

//The following example defines a utility elt, which creates an element
//node and treats the rest of its arguments as children to that node.
<html>
<blockquote id="quote">
    No book can ever be finished. While working on it we learn just enough to find it
    immature the moment we turn away from it.
</blockquote>

<script>
    function elt(type) {
        var node = document.createElement(type);
        for (var i = 1; i < arguments.length; i++) {
            var child = arguments[i];
            if (typeof child == "string")
              child = document.createTextNode(child);
            node.appendChild(child);
        }
    return node;
    }

    document.getElementById("quote").appendChild(
        elt("footer", ---"",
            elt("strong", "Karl Popper"),
            ", preface to the second edition of",
            elt("em", "The open Society and Its Enemies"),
            ", 1950"));
</script>
</html>

// CSS for Cascading Style Sheets
// Positioning and animating