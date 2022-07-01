



/**
 * @param 取得
 * @return JSON
 */
const get_energy = () => {
  fetch("http://agora.ex.nii.ac.jp/earthquake/201103-eastjapan/energy/electrical-japan/info.json")
    .then((response) => {
       return response.json();
    })
    .then((json) => {
        // すべての情報をDocumentに反映するわ～～～！！

        //Persentage
        var p = document.getElementById("per")

        //東京電力の情報
        var tokyo_enegry = document.getElementById('tokyo_enegry_pes')
        var tokyo_max = document.getElementById('tokyo_enegry_max')
        var tokyo_when =document.getElementById('tokyo_enegry_when')     

        //Tokyo Inner
        tokyo_enegry.innerHTML = json.tokyo.percentage + "%"
        tokyo_max.innerHTML = json.tokyo.max_percent + "%"
        tokyo_when.innerHTML = json.tokyo.time

    })
}

