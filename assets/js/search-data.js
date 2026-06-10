// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-julia-larson-graduates-with-honors-on-to-penn-state-phd",
        
          title: 'Julia Larson Graduates with Honors; On to Penn State PhD <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Julia Larson graduated this semester. Next stop is Penn State Biomedical Engineering PhD",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2026/graduation/", "_blank");
          
        },
      },{id: "post-student-presentations-on-deep-metric-learning-for-coin-identification",
        
          title: 'Student Presentations on Deep Metric Learning for Coin Identification <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Trevor Schonbrun and Dhanshrée Aire present research on ancient coin identification at regional conferences",
        section: "Posts",
        handler: () => {
          
            window.open("https://coin-research-group.github.io/blog/2026/student-presentations/", "_blank");
          
        },
      },{id: "post-prof-tara-burns-presents-vr-work-at-moco-2026",
        
          title: 'Prof. Tara Burns Presents VR Work at MOCO 2026 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Tara Burns presents new VR work at MOCO&#39;26",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2026/moco2026/", "_blank");
          
        },
      },{id: "post-x-ray-imaging-to-identify-ancient-fakes",
        
          title: 'X-ray Imaging to Identify Ancient Fakes <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A collaboration with the Madison Accelerator Lab helps identify fourrées in the collection",
        section: "Posts",
        handler: () => {
          
            window.open("https://coin-research-group.github.io/blog/2025/xray-mal/", "_blank");
          
        },
      },{id: "post-julia-larson-presents-at-virginia-academy-of-science",
        
          title: 'Julia Larson Presents at Virginia Academy of Science <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Julia Larson presents research at Virginia Academy of Science",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2025/spring2025/", "_blank");
          
        },
      },{id: "post-coin-identification-with-deep-metric-learning",
        
          title: 'Coin Identification with Deep Metric Learning <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Jackson Greer (CS &#39;25) presents at JMU CS Research Day",
        section: "Posts",
        handler: () => {
          
            window.open("https://coin-research-group.github.io/blog/2025/jackson/", "_blank");
          
        },
      },{id: "post-tenure",
        
          title: "Tenure",
        
        description: "Granted tenure at James Madison University",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tenure/";
          
        },
      },{id: "post-megan-caulfield-julia-larson-and-abby-ensogna-present-at-capwic-and-sieds-2024",
        
          title: 'Megan Caulfield, Julia Larson, and Abby Ensogna Present at CAPWIC and SIEDS 2024... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Research presentations at two conferences",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2024/spring2024/", "_blank");
          
        },
      },{id: "post-curator-of-coins-for-the-madison-art-collection-and-lisanby-museum",
        
          title: "Curator of Coins for the Madison Art Collection and Lisanby Museum",
        
        description: "Appointed as Curator of Coins at JMU&#39;s Madison Art Collection",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ancientcoins/";
          
        },
      },{id: "post-papers-at-sieds-2023-and-icat-day-panelist",
        
          title: "Papers at SIEDS 2023 and ICAT Day Panelist",
        
        description: "Student research presented at SIEDS and invited panelist at Virginia Tech ICAT",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sieds2023/";
          
        },
      },{id: "post-megan-caulfield-and-justin-blevins-present-at-ncur-2023",
        
          title: 'Megan Caulfield and Justin Blevins Present at NCUR 2023 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Megan Caulfield and Justin Blevins present haptic feedback research at NCUR",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2023/ncur2023/", "_blank");
          
        },
      },{id: "post-asee-and-fie-papers-additional-4va-grants-awarded",
        
          title: "ASEE and FIE Papers. Additional 4VA Grants Awarded.",
        
        description: "New grants and publications on entrepreneurial learning and engineering perceptions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/fall2022-update/";
          
        },
      },{id: "post-new-research-students-additional-grants-awarded",
        
          title: 'New Research Students. Additional Grants Awarded. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Fall 2021 updates on new undergraduate researchers and grant awards",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2021/fall2021-update/", "_blank");
          
        },
      },{id: "post-promotion-to-associate-professor-of-engineering",
        
          title: "Promotion to Associate Professor of Engineering",
        
        description: "Promoted to Associate Professor at JMU",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/promotion/";
          
        },
      },{id: "post-stephen-mitchell-sophia-cronin-tyler-webster-and-jonathan-li-present-at-ieee-southeast-and-capwic-2021",
        
          title: 'Stephen Mitchell, Sophia Cronin, Tyler Webster, and Jonathan Li Present at IEEE SouthEast... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Spring 2021 conference presentations by undergraduate researchers",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2021/ieee-capwic-2021/", "_blank");
          
        },
      },{id: "post-stephen-mitchell-presents-at-marcus-2019",
        
          title: 'Stephen Mitchell Presents at MARCUS 2019 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Stephen Mitchell presents athlete performance research at MARCUS",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2019/marcus2019/", "_blank");
          
        },
      },{id: "post-publications-at-asee-2019-and-election-to-program-chair",
        
          title: "Publications at ASEE 2019 and Election to Program Chair",
        
        description: "Two ASEE papers published and elected Program Chair for ENT division",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/asee2019/";
          
        },
      },{id: "post-sanarea-ali-presents-at-acm-capwic-2019",
        
          title: 'Sanarea Ali Presents at ACM CAPWIC 2019 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Sanarea Ali presents wearable computing research at CAPWIC 2019",
        section: "Posts",
        handler: () => {
          
            window.open("https://jmu-wearable-computing.github.io/blog/2019/capwic/", "_blank");
          
        },
      },{id: "post-joining-jmu-engineering-faculty",
        
          title: "Joining JMU Engineering Faculty",
        
        description: "Joining the Department of Engineering at James Madison University",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/joinJMU/";
          
        },
      },{id: "post-publications-at-asee-2018",
        
          title: "Publications at ASEE 2018",
        
        description: "Paper on service-learning effects on capstone student motivation accepted at ASEE",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/asee2018/";
          
        },
      },{id: "post-great-to-greater-grant-awarded",
        
          title: "Great to Greater Grant Awarded",
        
        description: "Received Great to Greater Grant for community-based service projects",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/GreatToGreater/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
