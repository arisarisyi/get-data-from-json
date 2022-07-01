function tampilkanMenu() {
  $.getJSON("./data/donuts.json", function (data) {
    let menu = data.menu
    $("#daftar-menu").empty()
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(
        '<div class="col"><div class="card mb-3"style="width: 18rem;"><img src="img/' +
          data.gambar +
          '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      )
    })
  })
}
tampilkanMenu()
