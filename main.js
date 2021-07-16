name_of_people_array = [];

function Submit() {
    var Guest_Name = document.getElementById("Enter_Name").value;
    name_of_people_array.push(Guest_Name);
    document.getElementById("Display_names").innerHTML = name_of_people_array;
    console.log(name_of_people_array);
    var length_of_array = name_of_people_array.length;
    console.log(length_of_array);
}

function Show_List() {
    var i = name_of_people_array.join("<br>");
    console.log(name_of_people_array);
    document.getElementById("Show_names").innerHTML = i.toString();
}

function sorting() {
    name_of_people_array.sort();
    var i = name_of_people_array.join("<br>");
    console.log(name_of_people_array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}

function Search() {
    var s = document.getElementById("Search_Name").value;
    var found = 0;
    var j;
    for (j = 0; j < name_of_people_array.length; j++) {
        if (s == name_of_people_array[j]) {
            found = found + 1;
        }
    }
    document.getElementById("Search_name").innerHTML = "Name Found" + found + "Time/s";
    console.log("Found Name" + found + "Time/s");
}