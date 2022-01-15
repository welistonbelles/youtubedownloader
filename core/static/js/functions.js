function searchVideo() {
    let url = document.querySelector('.url').value;

    const data = {
        "url": url
    }

    let download = document.querySelector('#download');
    download.style.display = 'none';

    let content = document.querySelector('.content');
    content.style.display = "none";

    let contentLoading = document.querySelector('.content-loading');
    contentLoading.style.display = "flex";

    const csrftoken = getCookie('csrftoken');
    const request = new Request(`http://localhost:8000/api/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'X-CSRFToken': csrftoken,
            },
            mode: 'same-origin',
            body: JSON.stringify(data)
        }
    )
    fetch(request).then(res => {
        return res.json()
    }).then(function(data) {
        completeData(data);
    })
}


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function completeData(data) {

    let contentLoading = document.querySelector('.content-loading');
    contentLoading.style.display = "none";

    let img = document.querySelector('.watch-video>img');
    img.src = `https://img.youtube.com/vi/${data.thumb}/maxresdefault.jpg`

    let content = document.querySelector('.content');
    content.style.display = "flex";

    content.querySelector('.center>.info h3').textContent = (data.name).slice(0, 25) + "...";
    content.querySelector('.center>.info h4').textContent = data.channel;
    content.querySelector('.center>.info h5').textContent = data.duration;

    content.querySelector('.center>.info>.button-actions>.get-link>button').id = data.thumb;
}

function generateLink(element) {
    let content = document.querySelector('.content');
    let select = content.querySelector('.center>.info>.button-actions>#select').options[content.querySelector('.center>.info>.button-actions>#select').selectedIndex].value;

    const data = {
        "id": element.id,
        "type": select
    }

    let loading = document.querySelector('.loading');
    loading.style.display = 'flex';

    let alert = document.querySelector('#alert');
    alert.style.display = 'flex';

    let download = document.querySelector('#download');
    download.style.display = 'none';

    const csrftoken = getCookie('csrftoken');
    const request = new Request(`http://localhost:8000/api/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'X-CSRFToken': csrftoken,
            },
            mode: 'same-origin',
            body: JSON.stringify(data)
        }
    )
    fetch(request).then(res => {
        return res.json()
    }).then(function(data) {
        let loading = document.querySelector('.loading');
        loading.style.display = 'none';
        let alert = document.querySelector('#alert');
        alert.style.display = 'none';
        let download = document.querySelector('#download');
        download.style.display = 'flex';
        download.href = data.url;
        download.download = data.name;
    })
}