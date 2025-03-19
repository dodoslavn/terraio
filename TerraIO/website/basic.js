const css = `
body
    {
    width: 100%;
    color: white;
    background-color: #121212;
    font-family: Open Sans;
    font-size: 1rem;
    }

body table
    {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    }
body table tr td 
    {
    padding-left: 1rem;
    padding-right: 1rem;
    height: 1rem;
    }

body table tr td.on
    { color: green; }
body table tr td.off
    { color: red; }

th
    {
    background-color: #006fdd;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    }

body div#panel
    {
    width: 10rem;
    background-color: #1b1b1b;
    float: left;
    height: 100vh;
    padding: 0;
    margin: 0;
    padding-left: 1rem;
    }

body div#panel ul 
    {
    }

body div#panel ul li
    {
    list-style: none;
    padding: 0.5rem;
    }

body div#panel ul li a
    {
    text-decoration: none;
    color: white;
    }

body div#panel ul li a:hover
    {
    text-decoration: none;
    color: #006fdd;
    }
`;

const header = `
<!DOCTYPE html>
<html>
<head>
    <title>TerrarIO</title>
    <link rel="stylesheet" type="text/css" href="/default.css" media="screen" >
</head>
<body>
<div id="panel">
    <h2>TerrarIO</h2>
    <ul>
        <li><a href="/">Schedule</a></li>
        <li><a href="/devices">Devices</a></li>
        <li><a href="/">About</a></li>
    </ul>
</div>
`;

const footer = `
</body>
</html>
`;

module.exports =
    {
    header,
    footer,
    css
    }