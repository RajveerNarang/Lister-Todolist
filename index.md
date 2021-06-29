<html>
    <head>
    <meta charset="UTF-8">
    <title>To-Do List</title>
    <link rel="stylesheet" type="text/css" href="style.css">
   <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
          
        <div class="title">
            <h1 class ="Intro">Lister's Memory</h1>
            <p class ="Intro">Things for me to remember</p>
        </div>
        <div class="form">
<form action="javascript:void(0);" method="POST" onsubmit="app.add()">
<input type="text" id="add-todo" placeholder="Type here">
<input type="submit" value="Add" class="btn btn-success">
</form>

<p id="count" class="Intro" ></p>

<table>
    <br>
    <br>
    <br>
    <br>
   
    <tr class ="to-do"><th><h3 class ="Intro">-Pending Tasks-</h3></th></tr>
    <tbody id="stuff">

    </tbody>
</table>
        </div>
<div id ="edit-box" role="hidden">
    <form action="javascript:void(0);" method="POST" id="save-edit">
        <input type="text" id="edit-todo">
        <input type="submit" value="save" id = "save" class="btn btn-primary">
    <a onclick ="closeinput()" aria-label="Close">&#10006;</a>
    </form>
</div>
<script src="script.js"></script>

    </body>
</html>
