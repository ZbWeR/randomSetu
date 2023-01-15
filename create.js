var lapi = ['https://api.gmit.vip/Api/DmImg?format=json', 'https://moe.jitsu.top/img/?sort=r18&size=original&type=json'];

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
}

async function create() {
    console.log("如果你懂得取消disable,请不要重复点击按钮,api就在源码里自己拿");
    var loading = document.querySelector('.content .pic .loader');
    document.querySelector('.content .header button').disabled = true;
    const pos = Math.floor(Math.random() * lapi.length);
    // ajaxFetch(pos);
    loading.classList.remove('hidden');
    await ajaxFetch(pos);
    document.querySelector('.content .pic img').onload = () => {
        loading.classList.add('hidden');
        document.querySelector('.content .header button').disabled = false;
    }
}