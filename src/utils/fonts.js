import localFont from "next/font/local";

const yekanBakh=localFont({
    src:[
        {path:"../../public/fonts/YekanBakh-Light.woff2",weight:"100",style:"normal"},
        {path:"../../public/fonts/YekanBakh-Regular.woff2",weight:"300",style:"normal"},
        {path:"../../public/fonts/YekanBakh-Bold.woff2",weight:"400",style:"normal"},
        {path:"../../public/fonts/YekanBakh-Heavy.woff2",weight:"600",style:"normal"},
        {path:"../../public/fonts/YekanBakh-Fat.woff2",weight:"700",style:"normal"},
    ],
    variable:"--font-yekan-bakh",
    display:"swap",
});
const vazirmatn=localFont({
    // all weight of vazirmatn font with this file can be use
    src:"../../public/fonts/Vazir-Variable.woff2",
    variable:"--font-vazirmatn",
    display:"swap",
});
const vazirmatnNumbers=localFont({
    src:[
        {path:"../../public/fonts/Vazir-Light-FD-WOL.woff2",weight:"300",style:"normal"},
        {path:"../../public/fonts/Vazir-Regular-FD-WOL.woff2",weight:"400",style:"normal"},
        {path:"../../public/fonts/Vazir-Medium-FD-WOL.woff2",weight:"500",style:"normal"},
        {path:"../../public/fonts/Vazir-Bold-FD-WOL.woff2",weight:"700",style:"normal"},
     ],
     variable:"--font-vazirmatn-numbers",
     display:"swap",
});
const iransans=localFont({
    src:[
        {path:"../../public/fonts/IRANSansWeb.woff2",weight:"400",style:"normal"},
    ],
    variable:"--font-iransans",
    display:"swap",
})
export{yekanBakh,vazirmatn,vazirmatnNumbers,iransans};