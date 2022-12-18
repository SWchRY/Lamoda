    
    const imgs = [  'https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/g-class/suv-w463/amg/amg-equipment/_jcr_content/swipeableteaserbox/par/swipeableteaser_1104675555/asset.MQ6.12.20191004111601.jpeg',
                    'https://autoreview.ru/images/Article/1680/Article_168035_860_575.jpg',
                    'https://www.domkrat.by/img/2021/audi/audi_rs7_minsk_01.jpg',
                    'https://avatars.mds.yandex.net/get-autoru-vos/2179989/9e0416eeed3405bf8523bc9e464bbcc3/456x342n',
                    'https://upload.wikimedia.org/wikipedia/commons/1/16/Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg',
                    'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/xc60-fuel/xc60-gallery-1-1x1.jpg?h=1080&iar=0&w=1080',
                    'https://kolesa-uploads.ru/-/bf19664f-22dc-499c-ad5a-98d6ca88f7de/0-0.jpg',
                    'https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-huracan-tecnica-101-1657303967.jpg?crop=0.678xw:0.509xh;0.0651xw,0.355xh&resize=1200:*',
                    'https://www.supercars.net/blog/wp-content/uploads/2022/02/Ferrari-SF90-Stradale-1.jpg'
                ]
    const names = ['Mercedes', 'BMW', 'Audi', 'McLaren', 'Bugatti', 'Volvo', 'Alfa Romeo', 'Lamborghini', 'Ferrari']
    const colors = ['Черный', 'Красный', 'Синий', 'Белый', 'Бежевый', 'Коричневый']
    const descWords = ['потрясающий', 'восхитительный', 'комфортный', 'вызывающий', 'восхитительный', 'великолепный', 'динамичный', 'суперский']
    function randId(){
        const id = Math.random().toString(36).substring(2)
        return id
    }
    function randColor(){
        let color = colors[Math.floor(Math.random()*6)]
        return color
    }
    function randPrice(){
        let price = Math.floor(Math.random()*9999 + 500)
        return price
    }
    function randRate(){
        let rate = Math.floor(Math.random()*100)
        return rate
    }
    function randName(){
        let name = names[Math.floor(Math.random()*6)]
        return name
    }
    function randDesc(){
        let a = ''
        for(let i = 0;i<descWords.length-4;i++){
            a = a + descWords[Math.floor(Math.random()*8)] + ' '
        }
        let desc = a[0].toUpperCase() + a.slice(1)
        return desc
    }
    let numImg
    function randImg(){
        return numImg = imgs[Math.floor(Math.random()*9)]
    }

    export default function generateInfo(num){
        let Prods = []
        for(let i = 0; i < num; i++){
            let fields = {
                name: randName(),
                price: randPrice(),
                desc: randDesc(),
                rate: randRate(),
                color: randColor(),
                id: randId(),
                img: randImg()
            }
            Prods.push(fields)
        }
        return Prods
    }


    