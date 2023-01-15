let lapi = ['https://api.gmit.vip/Api/DmImg?format=json', 'https://moe.jitsu.top/img/?sort=r18&size=original&type=json'];

function ajaxFetch(pos) {
    const tarImg = document.querySelector('.content .pic img');
    const url = lapi[pos];
    // console.log(url);
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
        })
}

function create() {
    const pos = Math.floor(Math.random() * lapi.length);
    ajaxFetch(pos);
}