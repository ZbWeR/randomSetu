var lapi = ['https://api.gmit.vip/Api/DmImg?format=json', 'https://moe.jitsu.top/img/?sort=r18&size=original&type=json'];
var loading = document.querySelector('.content .pic .loader');
var btn = document.querySelectorAll('.content .header button');

function ajaxFetch(pos) {
    const tarImg = document.querySelector('.content .pic img');
    const url = lapi[pos];
    console.log("running");
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('访问api出错');
        })
        .then(data => {
            let resUrl = '';
            if (pos == 0) resUrl = data.data.url;
            else resUrl = data.pics[0];
            tarImg.src = resUrl;
            console.log(resUrl);
        })
        .catch(err => {
            console.log(err);
            setTimeout(() => hiddenAll(), 200);
            btn[1].innerHTML = "魔法上网";
            btn[1].disabled = true;
        })

}

async function create(pos) {
    console.log("如果你懂得取消disable,请不要重复点击按钮,api就在源码里自己拿");
    for (let i = 0; i < btn.length; i++) btn[i].disabled = true;
    loading.classList.remove('hidden');
    await ajaxFetch(pos);
    document.querySelector('.content .pic img').onload = () => hiddenAll();
    // document.querySelector('.content .pic img').onload = hiddenAll();
}

function hiddenAll() {
    console.log("@222");
    for (let i = 0; i < btn.length; i++) btn[i].disabled = false;
    loading.classList.add('hidden');
}