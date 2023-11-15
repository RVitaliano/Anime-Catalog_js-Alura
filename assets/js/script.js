var listaAnimes = [];

listaAnimes[0] = "https://m.media-amazon.com/images/M/MV5BNWEwMjE2MjQtZTQ3NC00OTUxLWEwMWUtMThjZjg4Zjc5ZDYwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg";
listaAnimes[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtRBqkYqm9tRYVkuaTzOr6dAuB7wSB-t8cciZwKhhEfS0zv20vjyLZDFJBXdR2a68nkc&usqp=CAU";
listaAnimes[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnEbQ5pfR6Im83sGTJDy9Bk3jLv2C9RbwtR49Qsf-tKtibWCfYBsv_3RQ6WxH9dcXssg&usqp=CAU";
listaAnimes[3] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa7N3yXfp-FANjjHhFSScUg0RU_ZoIg5R7K1Uj0GCLjOt2UoskAm0UgLA_hRZKtI-QXw&usqp=CAU";

for(var i = 0; i < listaAnimes.length; i++) {
    document.write('<img src=' + listaAnimes[i] + '>')
}