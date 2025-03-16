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


`;

const header = `
<!DOCTYPE html>
<html>
<head>
    <title>TerrarIO</title>
    <link rel="stylesheet" type="text/css" href="/default.css" media="screen" >
</head>
<body>
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