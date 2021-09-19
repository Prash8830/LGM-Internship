import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Adam Benjamin",
          "title": "Apple's iOS 15 update arrives Monday, but you might not want to install it right away - CNET",
          "description": "Waiting a week to download Apple's new iOS 15 operating system might save you some headaches. Here's why.",
          "url": "https://www.cnet.com/tech/services-and-software/apples-ios-15-update-arrives-monday-but-you-might-not-want-to-install-it-right-away/",
          "urlToImage": "https://www.cnet.com/a/img/cdjUWvIVAcgKiiTxiD7Wd3NYngY=/1200x630/2021/08/04/43eb12b1-1564-417b-916c-2c92e75fe167/iphone-ios-15-2021-cnet-06.jpg",
          "publishedAt": "2021-09-19T10:00:07Z",
          "content": "iOS 15 is on the way, but you might not want to install it right away.\r\nSarah Tew/CNET\r\nThis story is part of Apple Event, our full coverage of the latest news from Apple.\r\nThe next version of Apple'… [+3313 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Dom Calicchio",
          "title": "Texas doctor claims state’s new abortion law is illegal, says he has already violated it - Fox News",
          "description": "A Texas doctor claimed Saturday that he has deliberately violated the state’s new abortion law in order to help test whether it’s legal.",
          "url": "https://www.foxnews.com/politics/texas-doctor-abortion-law-illegal",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/texas-abortion-cropped-internal.jpg",
          "publishedAt": "2021-09-19T09:23:20Z",
          "content": "A Texas doctor claimed Saturday that he has deliberately violated the states new abortion law in order to help test whether its legal.\r\nAlan Braid, an obstetrician-gynecologist in San Antonio, explai… [+4551 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Jennifer Hauser and Ivana Kottasová, CNN",
          "title": "Australia had 'deep and grave' concerns about French submarines' capabilities, PM says - CNN",
          "description": "Australia was concerned the conventional submarines it ordered from France would not meet its strategic needs before it canceled the multibillion defense deal in favor of an agreement with the United States and the United Kingdom earlier this week, Prime Mini…",
          "url": "https://www.cnn.com/2021/09/19/australia/aukus-australia-submarine-deal-concerns-intl/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210917125109-australia-submarine-hmas-sheean-file-2021-super-tease.jpg",
          "publishedAt": "2021-09-19T09:11:00Z",
          "content": null
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Evergrande begins repaying wealth product investors with property - Reuters",
          "description": "Cash-strapped developer China Evergrande Group <a href=\"https://www.reuters.com/companies/3333.HK\" target=\"_blank\">(3333.HK)</a> has begun repaying investors in its wealth management products with real estate, a unit of its main Hengda Real Estate Group Co Lt…",
          "url": "https://www.reuters.com/world/china/evergrande-begins-repaying-investors-with-discounted-properties-bloomberg-news-2021-09-19/",
          "urlToImage": "https://www.reuters.com/resizer/Wdcj8alAozN4PW8p8NKL5pPJVfk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CBMV6O5PNZKLTHB2MLP2KRBBN4.jpg",
          "publishedAt": "2021-09-19T09:03:00Z",
          "content": "An exterior view of China Evergrande Centre in Hong Kong, China March 26, 2018. REUTERS/Bobby Yip/File Photo/File PhotoBEIJING, Sept 19 (Reuters) - Cash-strapped developer China Evergrande Group (333… [+1668 chars]"
        },
        {
          "source": {
            "id": "nbc-news",
            "name": "NBC News"
          },
          "author": "Ben Kesslen",
          "title": "Suburbs take center stage as U.S. growth slows - NBC News",
          "description": "As the country’s biggest cities grow and become increasingly unaffordable, their suburbs have ballooned, becoming cities themselves.",
          "url": "https://www.nbcnews.com/news/us-news/suburbs-take-center-stage-u-s-growth-slows-n1279305",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_37/3506104/210915-south-jordan-utah-one_time_use_mn-1720.jpg",
          "publishedAt": "2021-09-19T08:31:00Z",
          "content": "In 1990, fewer than 10,000 people lived in Meridian, Idaho, a sleepy bedroom community surrounded by farmland.\r\nNow, with a population of 117,600, its main thoroughfare, Eagle Road, gets so congested… [+4951 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Holly Yan, CNN",
          "title": "After 169 hospitals, a dad finally got the Covid-19 care he needed -- and changed dozens of skeptics' minds - CNN",
          "description": "Just a few weeks ago, an unvaccinated father of six was on a ventilator with Covid-19 pneumonia in both lungs. What happened afterward stunned his family -- and may have spared countless other families from suffering.",
          "url": "https://www.cnn.com/2021/09/19/health/florida-man-inspires-covid-vaccinations/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210808115736-01-susan-walker-ndwknd-intv-vpx-super-tease.jpg",
          "publishedAt": "2021-09-19T08:04:00Z",
          "content": "By Holly Yan, CNN\r\nUpdated 4:04 AM ET, Sun September 19, 2021\r\n (CNN)Every breath Robby Walker takes is one that almost didn't happen.\r\nJust a few weeks ago, the Florida father of six was on a ventil… [+11227 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Hugo Lowell",
          "title": "Fears of US government shutdown as debt ceiling game of chicken begins - The Guardian",
          "description": "If neither side budges, US risks default on debt and lowered credit rating, which would cost billions",
          "url": "https://amp.theguardian.com/us-news/2021/sep/19/government-shutdown-fears-debt-ceiling-talks-latest-democrats-republicans",
          "urlToImage": null,
          "publishedAt": "2021-09-19T08:00:00Z",
          "content": "US politicsIf neither side budges, US risks default on debt and lowered credit rating, which would cost billions\r\nSun 19 Sep 2021 09.00 BST\r\nTop Democrats are expected to dare Republicans to block a … [+5717 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Farrah Abraham Looking at Law Schools After Harvard Beef, Including Yale - TMZ",
          "description": "Farrah Abraham says she might go to law school at Yale after beefing with Harvard.",
          "url": "https://www.tmz.com/2021/09/19/farrah-abraham-law-school-harvard-beef-yale/",
          "urlToImage": "https://imagez.tmz.com/image/59/16by9/2021/09/17/59901f0f9a504c9796e7459a0b46f56b_xl.jpg",
          "publishedAt": "2021-09-19T08:00:00Z",
          "content": "Farrah Abraham has her heart set on attending law school, possibly in the Ivy League -- on the heels of her Harvard beef -- and she says Harvard's fiercest rival is interested.\r\nWe got the former \"Te… [+1407 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Times of Israel"
          },
          "author": null,
          "title": "Bennett hails ‘sophisticated’ operation that caught last 2 Palestinian fugitives - The Times of Israel",
          "description": "Public security minister says the work of the government commission of inquiry into the incident will begin soon to 'seal the remaining holes'",
          "url": "https://www.timesofisrael.com/bennett-hails-sophisticated-operation-that-captured-remaining-two-fugitives/",
          "urlToImage": "https://static.timesofisrael.com/www/uploads/2021/09/Image-from-iOS-e1631345529562-1024x640.jpg",
          "publishedAt": "2021-09-19T07:50:39Z",
          "content": "Prime Minister Naftali Bennett on Sunday morning praised the recapture of the two remaining Palestinian fugitives from a prison break close to two weeks ago and reiterated the need to fix the broken … [+7012 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Lil Nas X's 'Montero' Raises Thousands for Charities Through 'Baby Registry' - TMZ",
          "description": "Lil Nas X racked up millions of streams -- as expected -- but, more importantly, he also raised tens of thousands of dollars for various charities with the drop of his debut album.",
          "url": "https://www.tmz.com/2021/09/19/lil-nas-x-montero-charity-baby-registry/",
          "urlToImage": "https://imagez.tmz.com/image/76/16by9/2021/09/17/76e9e82da4374943bd072d3072f93f08_xl.jpg",
          "publishedAt": "2021-09-19T07:50:00Z",
          "content": "Lil Nas X racked up millions of streams -- as expected -- but, more importantly, he also raised tens of thousands of dollars for various charities with the drop of his debut album.\r\nThe long-anticipa… [+1353 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Fox Business"
          },
          "author": "Associated Press",
          "title": "SpaceX tourist trip to orbit ends with splashdown off Florida coast - Fox Business",
          "description": "Four space tourists safely ended their trailblazing trip to orbit Saturday with a splashdown in the Atlantic off the Florida coast.",
          "url": "https://www.foxbusiness.com/technology/spacex-tourist-trip-orbit-splashdown-florida-coast",
          "urlToImage": "https://a57.foxnews.com/live.foxnews.com/60b090de5e744bd584c758dc700f7803/us-east-1/694940094001/0/0/playlist.m3u8?ve=1&tl=1",
          "publishedAt": "2021-09-19T07:10:12Z",
          "content": "CAPE CANAVERAL, Fla. — Four space tourists safely ended their trailblazing trip to orbit Saturday with a splashdown in the Atlantic off the Florida coast.\r\nTheir SpaceX capsule parachuted into the oc… [+5576 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNET"
          },
          "author": "Dashia Starr",
          "title": "Buy a 'free' iPhone 13 with trade-in at Verizon, T-Mobile and AT&T: What you need to know - CNET",
          "description": "All three carriers are now offering the 13 Pro, standard 13 or 13 Mini for $0 with a trade-in. But there are plenty of caveats to keep in mind.",
          "url": "https://www.cnet.com/tech/mobile/buy-a-free-iphone-13-with-trade-in-at-verizon-t-mobile-at-t-what-need-know/",
          "urlToImage": "https://www.cnet.com/a/img/VYzCje9sA_3HUxkHFzLDlVybhYU=/1200x630/2021/09/14/321237b5-a389-4ed9-99cc-917a9cd9be25/screen-shot-2021-09-14-at-1-41-20-pm-2.png",
          "publishedAt": "2021-09-19T04:46:55Z",
          "content": "This story is part of Apple Event, our full coverage of the latest news from Apple.\r\nApple's iPhone 13 has arrived, and as usual, carriers are rolling out the trade-in deals to entice users to upgrad… [+6040 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Nick Bromberg",
          "title": "College football Week 3 winners and losers: Our preliminary conference power rankings - Yahoo Sports",
          "description": "While it may feel like the season started just days ago, most teams across the country are already a quarter of the way through their schedules.",
          "url": "https://sports.yahoo.com/college-football-week-3-winners-and-losers-our-preliminary-conference-power-rankings-044240928.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zt33RkSdwXVmKJ.d.p48Ug--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-09/70be2020-1902-11ec-add3-1e87a09f7ab6",
          "publishedAt": "2021-09-19T04:42:00Z",
          "content": "We're already three weeks into the 2021 college football season. \r\nWhile it may feel like the season started just days ago, most teams across the country are already a quarter of the way through thei… [+14071 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ESPN"
          },
          "author": null,
          "title": "Heated postrace exchange between Kevin Harvick, Chase Elliott overshadows Kyle Larson's victory in NASCAR Cup Series - ESPN",
          "description": "A heated postrace conflict between Chase Elliott and Kevin Harvick overshadowed a dramatic victory by Kyle Larson in the NASCAR Cup Series on Saturday night at Bristol Motor Speedway.",
          "url": "https://www.espn.com/racing/nascar/story/_/id/32234088/heated-postrace-exchange-kevin-harvick-chase-elliott-overshadows-kyle-larson-victory-nascar-cup-series",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0919%2Fr911020_1296x729_16%2D9.jpg",
          "publishedAt": "2021-09-19T03:46:42Z",
          "content": "BRISTOL, Tenn. -- Kyle Larson denied Kevin Harvick his first win of the season with a masterful pass at Bristol Motor Speedway that was overshadowed Saturday night by a postrace skirmish between Harv… [+2942 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "fox13now.com"
          },
          "author": "Erin Cox",
          "title": "Former SLCPD chief gives insight on Petito/Laundrie investigation - fox13now.com",
          "description": "In his decades of police service and his time as Salt Lake City’s police chief, Chris Burbank said he knows these law enforcement officers have been working tirelessly to perfect the skills they are using in this investigation.",
          "url": "https://www.fox13now.com/news/local-news/former-slcpd-chief-gives-insight-on-petito-laundrie-investigation",
          "urlToImage": "https://ewscripps.brightspotcdn.com/dims4/default/ca5a003/2147483647/strip/true/crop/1920x1008+0+36/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fausw%2Fslices%2Fb01%2Fef205c0e5ea14d77944cbd6904335118%2Fb0111fe51b914e1b9d8bf75d75ea8b24%2Fposter_84785fab54924d2cbd55f525557aab67.jpeg",
          "publishedAt": "2021-09-19T03:28:13Z",
          "content": "SALT LAKE CITY The Federal Bureau of Investigation and North Port Police in Florida are now searching for 23-year-old Brian Laundrie.\r\nLaundrie is a person of interest as police also search for 22-ye… [+2151 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "STLtoday.com"
          },
          "author": "Annika Merrilees",
          "title": "Some Missouri nursing homes are beating COVID. Credit may go to ultra-high staff vaccination rates - STLtoday.com",
          "description": "COVID-19 vaccines have driven down case rates in nursing homes. But now the industry faces a crossroads.",
          "url": "https://www.stltoday.com/lifestyles/health-med-fit/coronavirus/some-missouri-nursing-homes-are-beating-covid-credit-may-go-to-ultra-high-staff-vaccination/article_09981ba8-e8ec-589f-a513-d0a4aeed2ab8.html",
          "urlToImage": "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/0/99/09981ba8-e8ec-589f-a513-d0a4aeed2ab8/614535da848ec.preview.jpg?crop=1784%2C1004%2C0%2C78&resize=1120%2C630&order=crop%2Cresize",
          "publishedAt": "2021-09-19T03:15:00Z",
          "content": "Vaccinations began for Missouri nursing home residents and staff on Dec. 28. By that point, nursing homes statewide had reported nearly 19,000 COVID-19 cases, and almost 3,000 deaths, according to fe… [+1221 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Kelsey Vlamis",
          "title": "Justice for J6: DC rally for January 6 defendants draws small crowds - Business Insider",
          "description": "Two days before the rally, Trump said \"our hearts and minds are with the people being persecuted so unfairly relating to the January 6th protest.\"",
          "url": "https://www.businessinsider.com/justice-for-j6-dc-rally-january-6-defendants-small-crowds-2021-9",
          "urlToImage": "https://i.insider.com/6146891fa060c800184bd84c?width=1200&format=jpeg",
          "publishedAt": "2021-09-19T01:33:45Z",
          "content": "Heightened fears surrounding the \"Justice for J6\" rally held in Washington DC on Saturday turned out to be largely unwarranted, as the event failed to draw significant crowds.\r\nThe event was held in … [+2308 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Emmy Awards 2021: 7 things to know ahead of the ceremony - BBC News",
          "description": "That's one possibility at this year's event, where Ted Lasso and The Crown are among other nominees.",
          "url": "https://www.bbc.com/news/entertainment-arts-57926660",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8F35/production/_120616663_mediaitem120616629.jpg",
          "publishedAt": "2021-09-19T01:04:07Z",
          "content": "By Steven McIntoshEntertainment reporter\r\nimage source, Getty Images\r\nimage captionCedric the Entertainer will host the ceremony, which will air on CBS in the US\r\nStars of the small screen are gearin… [+8493 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NPR"
          },
          "author": "Dustin Jones",
          "title": "Celebrate The End Of Summer With Monday's Harvest Moon - NPR",
          "description": "The harvest moon is the last full moon of the summer. This year it will appear to be full for three days with peak illumination occurring at 7:54 p.m. ET Monday.",
          "url": "https://www.npr.org/2021/09/18/1038602877/celebrate-the-end-of-summer-with-mondays-harvest-moon",
          "urlToImage": "https://media.npr.org/assets/img/2021/09/18/gettyimages-1228836229_wide-80b1779e63f9d3fab6c8fee69eca0a168ae29c86.jpg?s=1400",
          "publishedAt": "2021-09-19T00:57:05Z",
          "content": "Last year's harvest moon took place on Oct. 1. The lunar event is designated as the full moon occurring nearest to the autumnal equinox every year.\r\nAnadolu Agency via Getty Images\r\nFor those in the … [+2373 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deadline"
          },
          "author": "Matt Grobar",
          "title": "‘Belfast’ Claims TIFF People’s Choice Award, As Jessica Chastain, Benedict Cumberbatch & Denis Villeneuve Nab Other Top Prizes — Complete Winners List - Deadline",
          "description": "Kenneth Branagh’s semi-autobiographical, black-and-white drama Belfast claimed the TIFF People’s Choice Award on Saturday night, affirming its status as a major player to contend with in the 2022 Oscars race. Jessica Chastain (The Eyes of Tammy Faye) and Bene…",
          "url": "https://deadline.com/2021/09/2021-toronto-film-festival-complete-winners-list-belfast-jessica-chasten-benedict-cumberbatch-denis-villeneuve-dune-1234839226/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2021/09/Belfast-2-e1632010598691.jpg?w=1024",
          "publishedAt": "2021-09-19T00:28:00Z",
          "content": "Kenneth Branagh’s semi-autobiographical, black-and-white drama Belfast claimed the TIFF People’s Choice Award on Saturday night, affirming its status as a major player to contend with in the 2022 Osc… [+3115 chars]"
        }
      ]
    constructor(){
        super(); 
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NEWSTROM Fast Cards :</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4">
                        <NewsItem  title={element.title.slice(0,70)+"..."} description={element.description.slice(0,80)+"..."} imageurl={element.urlToImage} url={element.url}/>
                    </div>
                })}

                </div>
                
            </div>
        )
    }
}

export default News
