var app = new Vue({
    el: '#app',
    data: {
        seasons: [
            {
                title: "Education",
                episodes:
                    [
                        {
                            title: "The Business Guy!",
                            when: "Sept 2018 - June 2021",
                            description: "Luigi begins his university studies at SAA - University of Turin, he graduates in Business & Management in English despite the outbreak of a worldwide pandemic.",
                            thumb: "img/saa.jpg"
                        },
                        {
                            title: "Blockchain? Stonks!",
                            when: "Jan 2022 - May 2022",
                            description: "Luigi is awarded a 100% scholarship from AIO Blockchain to attend the second edition of MasterZ. Blockchain, Smart Contracts, Token and NFT, Cryptocurrencies, DeFi, Legal Aspects, Corporate and Startup use cases are some of the topics covered by this Master.",
                            thumb: "img/blockchain.jpg" 
                        },
                        {
                            title: "The Bootcamp",
                            when: "Jan 2022 - June 2022",
                            description: "Luigi rediscovers his old passion for programming. He jumps in with both feet and starts a Bootcamp (Boolean Careers) of 6 months and about 800 hours to become a Web Developer! During this experience he learns HTML, CSS, JavaScript, PHP, Vue.js, Laravel, Sass.",
                            thumb: "img/duck.jpg" 
                        }
                    ]
            },
            {
                title: "Employment History",
                episodes:
                    [
                        {
                            title: "Jeff Bezos Wannabe", 
                            when: "Sept 2018 - Sept 2019",
                            description: "Luigi launches DADA, a brand of baby products on Amazon.com, meanwhile his room fills up with more and more unsold products. He recovers his investment and learns a valuable lesson about the power of branding. ",
                            thumb: "img/stock.jpg"
                        },
                        {
                            title: "Ka-Ching!",
                            when: "Jan 2020 - Dec 2021",
                            description: "Luigi begins to create landing pages and e-commerce for his clients. In the same period he launches some Shopify brands, after dozens of attempts and a lot of study he manages to generate more than 700€/day with a net of 40% with a single store. During this experience he learns valuable skills in copywriting, performance marketing and graphic design.",
                            thumb: "img/dollars.jpeg"
                        },
                        {
                            title: "Ka-Ching!",
                            when: "2020 - 2019",
                            description: "Luigi begins to create landing pages and e-commerce for his clients. In the same period he launches some Shopify brands, after dozens of attempts and a lot of study he manages to generate more than 700€/day with a net of 40% with a single store. During this experience he learns valuable skills in copywriting, performance marketing and graphic design.",
                            thumb: "img/dollars.jpeg"
                        }
                    ]
            },
            {
                title: "Skills",
                episodes:
                    [
                        {
                            title: "Sara Croce",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/82"
                        },
                        {
                            title: "La riunione",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/82"
                        }
                    ]
            },
            {
                title: "Other Shit",
                episodes:
                    [
                        {
                            title: "Gossip",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/82"
                        },
                        {
                            title: "La riunione",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/82"
                        }
                    ]
            },
        ],
        appStatus : {
            currentSeason: 0,
            seasonSelectorShow: false
        }
    },
    methods: {
        toggleSeasonSelector(){
            this.appStatus.seasonSelectorShow =  !this.appStatus.seasonSelectorShow;
        },
        changeCurrentSeason(index){
            this.appStatus.currentSeason = index;
            setTimeout(()=>{
                this.appStatus.seasonSelectorShow =  !this.appStatus.seasonSelectorShow;
            },900);
        }
    },
})