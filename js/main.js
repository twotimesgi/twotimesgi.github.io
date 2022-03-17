var app = new Vue({
    el: '#app',
    data: {
        seasons: [
            {
                title: "Education",
                episodes:
                    [
                        {
                            title: "Bachelor Degree in Business&Management @ University of Turin",
                            when: "Sept 2018 - June 2021",
                            description: "The course is designed to provide a broad knowledge and awareness of business management in international and global contexts. Students will acquire skills in management, key business processes, organization and decision-making in international companies. Delivered entirely in English.",
                            thumb: "img/saa.jpg"
                        },
                        {
                            title: "Master in Blockchain & Digital Assets @ MasterZ",
                            when: "Jan 2022 - May 2022",
                            description: "Awarded a 100% scholarship from AIO Blockchain to attend the second edition of MasterZ. Blockchain, Smart Contracts, Token and NFT, Cryptocurrencies, DeFi, Legal Aspects, Corporate and Startup use cases are some of the topics covered by this Master.",
                            thumb: "img/blockchain.jpg" 
                        },
                        {
                            title: "Web Dev Bootcamp @ Boolean Careers",
                            when: "Jan 2022 - June 2022",
                            description: "Full-time live course lasting 6 months (about 700 hours) for the development of skills as Full Stack Web Developer. Upon completion of the course the student will have mastered HTML, CSS, JavaScript, PHP, Vue.js, Laravel, Sass.",
                            thumb: "img/duck.jpg" 
                        }
                    ]
            },
            {
                title: "Employment History",
                episodes:
                    [
                        {
                            title: "Amazon Seller @ LBG  (Self-Employed)", 
                            when: "Sept 2018 - Sept 2019",
                            description: "Luigi launches DADA, a brand of baby products on Amazon.com, meanwhile his room fills up with more and more unsold products. He recovers his investment and learns a valuable lesson about the power of branding. ",
                            thumb: "img/stock.jpg"
                        },
                        {
                            title: "Performance Marketer @ LBG (Self-Employed)",
                            when: "Jan 2020 - Dec 2021",
                            description: "Brand Identity design, professional E-commerce creation using Shopify, management of paid traffic campaigns and Influencer Marketing. Funnel design and creation of landing pages. In the same period I launched different Shopify brands. After dozens of attempts and a lot of study I managed to generate more than 700€/day with a net of 40% with a single store. During this experience I learnt valuable skills in copywriting, performance marketing and graphic design.",
                            thumb: "img/dollars.jpeg"
                        },
                    ]
            },
            {
                title: "Courses",
                episodes:
                    [
                        {
                            title: "Algo Expert Certification @ AlgoExpert.io",
                            when: "Feb 2022",
                            description: "The course explains in detail many of the aspects related to Data Structures, Memory, Big O notation, Time Complexity and Space Complexity. In addition the course includes step by step explanations of more than 160 algorithms.",
                            thumb: "img/alan.jpg"
                        },
                        {
                            title: "Master in Social Media Strategy @ Creators Academy",
                            when: "2018 - 2019",
                            description: "",
                            thumb: "https://picsum.photos/140/82"
                        }
                    ]
            }
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