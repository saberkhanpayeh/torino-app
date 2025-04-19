/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['localhost'],
        // domains:['torino-api-production.up.railway.app']
        // remotePatterns: [
        //     {
        //       protocol: "https",
        //       hostname: "torino-api-production.up.railway.app",
        //       pathname: "/static/images/**",
        //     },
        //   ],
    }
}

module.exports = nextConfig
