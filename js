<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        
        *{
            font-family: 'segoe ui', tahoma, geneva, Verdana, sans-serif;

        }

        div
        h2{
            color:rgb(120, 145, 195);
            text-shadow:3px 3px 3px gainsboro;
        }
        p{
            text-indent: 2rem
        }
        /*class selector: ten bat dau bang giau cham .*/
        hot{
            color: blue;
            font-weight: bold;
        }
        .cool{
        color:green;
        font-weight: bolder;
        }
        #healline{
            font-size: 2em;
            color: aquamarine;
        }
    </style>

<body>

    <div>
        </h2>Example <blockquote cite="blue">
        </blockquote><h2>
        <p>length measure units demo</p>
        <p> version 3</p>
        <hr>
        <p>CSS has several different units for expressing a length.

            Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

            Length is a number followed by a length unit, such as 10px, 2em, etc.</p>
        </p>Absolute Lengths
        The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

        Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they
        can be used if the output medium is known, such as for print layout.</p>
        <p>* Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the
            display. For printers and high resolution screens 1px implies multiple device pixels.S</p>
        <p><p class="cool"Relative Lengths
            Relative length units specify a length relative to another length property. Relative length units scale
            better between different rendering mediums.</p>
    </div>
</body>

</html>