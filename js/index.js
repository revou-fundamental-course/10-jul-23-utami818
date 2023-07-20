// ketika di klik mengambil value dan diproses
var submitButton = document.getElementById("submitButton");
var reset = document.getElementById("reset");

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var inputBerat = document.getElementById("inputBerat").value;
    var inputTinggi = document.getElementById("inputTinggi").value;
    var tinggi = parseInt(inputTinggi) / 100;
    var outputHasil = parseInt(inputBerat) / (tinggi**2).toFixed(2);
    var hasil = outputHasil.toFixed(1);
    // document.getElementById("outputKelamin").innerHTML = jenisKelamin
    document.getElementById("outputHasil").innerHTML = hasil;
    
    nameValidation(inputBerat, inputUsia, inputTinggi);

// CONDISIONAL
    var e = hasil
    if (e <= 18.5){
        document.getElementById("outputStatus").innerHTML = "Kekurangan berat badan";
        document.getElementById("outputKeterangan").innerHTML = "Anda memiliki kekurangan berat badan";
    } else if (e >= 18.5 && e <=24.9){
        document.getElementById("outputStatus").innerHTML = "Normal(ideal)";
        document.getElementById("outputKeterangan").innerHTML = "Anda memiliki berat badan normal(ideal)";
    } else if(e > 25.0 && e <=9){
        document.getElementById("outputStatus").innerHTML = "Kelebihan berat badan";
        document.getElementById("outputKeterangan").innerHTML = "kelebihan berat badan";
    } else if(e > 30.0){
        document.getElementById("outputStatus").innerHTML = "kegemukan(obesitas)";
        document.getElementById("outputKeterangan").innerHTML = "Kegemukan(obesitas)";
        document.getElementById("hasilOver").innerHTML = "Hasil BMI diantara 23 dan 25.<br><br> Anda dalam kategori Over Weight atau berat badan berlebih";
    }
})

// reset data di form
function myFunction() {
    document.getElementById("formKalkulator").reset();
}

// validasi form kosong
function nameValidation(inBerat, inUsia, inTinggi){
    if (inBerat =="" || inUsia == "" || inTinggi == ""){
        alert("Masih ada yang kosong!");
    } else {
        alert("Hitung BMI berhasil");
    }
}
function myFunction() {
    var ipria = document.getElementById("inputPria");
    var iwanita = document.getElementById("inputWanita");
    var text = document.getElementById("outputPria");
    var text1 = document.getElementById("outputWanita");
    if (ipria.checked == true){
      text.display = "block";
    } else if(iwanita.checked == true){
        text1.display = "block";
    }
}
