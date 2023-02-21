function check() {
  var toan = document.getElementById("diemtoan").value;
  var van = document.getElementById("diemvan").value;
  var anh = document.getElementById("diemanh").value;
  var congkhuvuc = document.getElementById("khuvuc").value;
  switch (congkhuvuc) {
    case "kv1":
      var diemcong = 0.75;
      break;
    case "kv2":
      var diemcong = 0.5;
      break;
    case "kv3":
      var diemcong = 0.25;
      break;
    case "kv4":
      var diemcong = 0;
      break;
  }
  var total = parseFloat(toan) + parseFloat(van) + parseFloat(anh) + parseFloat(diemcong);
  console.log(total);
  document.getElementById("ketqua").innerHTML = "Tổng điểm đại học khối D của bạn là: " + total;
}
