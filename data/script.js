function tampilkanMenu() {
  $.getJSON("data/donuts.json", function (data) {
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

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active")
  $(this).addClass("active")

  let kategori = $(this).html()
  //bacanya jquery cari h1 ganti htmlnya dengan kategori
  $("h1").html(kategori)

  if (kategori == "All Menu") {
    tampilkanMenu()
    return
  }

  $.getJSON("data/donuts.json", function (data) {
    let menu = data.menu
    let content = ""

    $.each($(menu).get().reverse(), function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col"><div class="card mb-3"style="width: 18rem;"><img src="img/' +
          data.gambar +
          ' " class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      }
    })

    //batas
    $("#daftar-menu").html(content)
  })
})
