



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
        var tokyo_when = document.getElementById('tokyo_enegry_when')
        var tokyo_usage = document.getElementById('tokyo_enegry_usage')
        var tokyo_maxusage = document.getElementById('tokyo_energy_maxusage')
        var tokyo_cap = document.getElementById('tokyo_enegry_cap')
        
        //関西電力の情報
        var kansai_enegry = document.getElementById('kansai_enegry_pes')
        var kansai_max = document.getElementById('kansai_enegry_max')
        var kansai_when = document.getElementById('kansai_enegry_when')  
        var kansai_usage = document.getElementById('kansai_enegry_usage')
        var kansai_maxusage = document.getElementById('kansai_energy_maxusage')
        var kansai_cap = document.getElementById('kansai_enegry_cap')

        //Tokyo Inner
        tokyo_enegry.innerHTML = json.tokyo.percentage + "%"
        tokyo_max.innerHTML = json.tokyo.max_percent + "%"
        tokyo_when.innerHTML = json.tokyo.time
        tokyo_usage.innerHTML = json.tokyo.usage + " MW"
        tokyo_maxusage.innerHTML = Math.ceil(json.tokyo.max_percent / 100 * json.tokyo.capacity) + " MW"
        tokyo_cap.innerHTML = json.tokyo.capacity + " MW"

        //Kansai Inner
        kansai_enegry.innerHTML = json.kansai.percentage + "%"
        kansai_max.innerHTML = json.kansai.max_percent + "%"
        kansai_when.innerHTML = json.kansai.time
        kansai_usage.innerHTML = json.kansai.usage + " MW"
        kansai_maxusage.innerHTML = Math.ceil(json.kansai.max_percent / 100 * json.kansai.capacity) + " MW"
        kansai_cap.innerHTML = json.kansai.capacity + " MW"
    })
}

