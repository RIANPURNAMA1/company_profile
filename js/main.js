document.getElementById("kirimButton").addEventListener("click", function() {
    // Ambil nilai dari input formulir
    const namaLengkap = document.getElementById("namaLengkap").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Nomor WhatsApp yang akan dituju
    const nomorWhatsApp = "6282118364415"; // Ganti dengan nomor WhatsApp yang sesuai

    // Membuat URL WhatsApp dengan pesan yang telah diisi
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=Nama%20Lengkap:%20${namaLengkap}%0AEmail:%20${email}%0APesan:%20${pesan}`;

    // Buka jendela WhatsApp dengan URL yang telah dibuat
    window.open(urlWhatsApp);
  });