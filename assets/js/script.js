const myNewsSection = document.getElementById('news-section')

window.onload = bringNews

async function bringNews() {
    const theApi = "status.json"

    try {
        const theRequest = await fetch(theApi)
        const theResponse = await theRequest.json()

        for(let i=0; i<theResponse.length; i++) {
            myNewsSection.innerHTML += `
            <div class="some_news">
                        <div class="some_news-top">
                            <div class="some_news-top_profile">
                                <div class="pfp"><img src="https://source.unsplash.com/random" alt=""></div>
                                <div class="some_news-top_profile-name">
                                    <h4>${theResponse[i].paylashan_shexsin_adi}</h4>
                                    <h6>${theResponse[i].paylashilma_tarixi} ·</h6>
                                    <a href=""><i class="fa-solid fa-earth-americas"></i></a>
                                </div>
                            </div>
                            <div class="some_news-top_dots">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div class="some_news-main">
                            <p>${theResponse[i].statusun_metni}</p>
                        </div>
                        <img class="news-img" src="${theResponse[i].image}" alt="">
                        <div class="some_news-likes">
                            <div class="some_news-likes_count">
                                <img src="./assets/img/like.svg" alt="">
                                <h5>${theResponse[i].like_sayi}</h5>
                            </div>
                            <div class="some_news-likes_comments">
                                <a href=""><h5>${theResponse[i].comment_sayi} Comments</h5></a>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <div class="some_news-buttons">
                            <button><i class="fa-regular fa-thumbs-up"></i> <h4>Like</h4></button>
                            <button><i class="fa-regular fa-message"></i> <h4>Comment</h4></button>
                            <button><i class="fa-solid fa-share"></i> <h4>Share</h4></button>
                        </div>
                    </div> 
            `
        }
    }

    catch(err) {

    }

    
}