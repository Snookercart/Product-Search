// Product list with proper URLs only
const products = [
    {
        "name": "ADR Tip 10mm MJW",
        "url": "https://snookercart.com/buy-product/ols/products/adr-tip-10mm-mjw-76a148"
    },
    {
        "name": "ADR Tip Med 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/adr-tip-med-10mm-e35de2"
    },
    {
        "name": "ADR Tip Soft 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/adr-tip-soft-10mm-6be832"
    },
    {
        "name": "ADR Tip Super Soft 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/adr-tip-super-soft-10mm-bd7917"
    },
    {
        "name": "Bison Tip Hard 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/bison-tip-hard-10mm-blue-ff91d7"
    },
    {
        "name": "Blue Diamond Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/blue-diamond-tip-10mm-blue-e10825"
    },
    {
        "name": "Blue Diamond Tip 11mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/blue-diamond-tip-11mm-blue-a687cd"
    },
    {
        "name": "Brunswik Blue Daimond Tip 9mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/brunswik-blue-daimond-tip-9mm-blue-b08477"
    },
    {
        "name": "Brunswik Tip 9mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/brunswik-tip-9mm-blue-135b9b"
    },
    {
        "name": "Buffalo Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/buffalo-tip-10mm-blue-3d4203"
    },
    {
        "name": "Burroughes and Watts Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/burroughes-and-watts-tip-10mm-blue-a90c2a"
    },
    {
        "name": "Century Pro-X Tip 11mm Blue ( Pack of 1 )",
        "url": "https://snookercart.com/buy-product/ols/products/century-pro-x-tip-11mm-blue-pack-of-1-14c19b"
    },
    {
        "name": "Century Tip G5 Tip Super Hard 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/century-tip-g5-tip-super-hard-10mm-blue-bd7a3d"
    },
    {
        "name": "Century Tip G1 Soft 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/century-tip-g1-soft-10mm-blue-4ef024"
    },
    {
        "name": "Century Tip G2 Med 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/century-tip-g2-med-10mm-blue-b7208f"
    },
    {
        "name": "Century Tip G3 Med-Hard10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/century-tip-g3-med-hard10mm-blue-b2f22c"
    },
    {
        "name": "Century Tip G4 Hard 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/century-tip-g4-hard-10mm-blue-2e6f1e"
    },
    {
        "name": "Clover Tip 12mm Grey",
        "url": "https://snookercart.com/buy-product/ols/products/clover-tip-12mm-grey-eb8d0c"
    },
    {
        "name": "Deer Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/deer-tip-10mm-blue-d3f76d"
    },
    {
        "name": "Double Black Leather Tip 10mm Pack of 3 Black",
        "url": "https://snookercart.com/buy-product/ols/products/double-black-leather-tip-10mm-pack-of-3-black-dd9735"
    },
    {
        "name": "Elk Master Pro Tip 10mm Light Grey",
        "url": "https://snookercart.com/buy-product/ols/products/elk-master-pro-tip-10mm-light-grey-aac7bc"
    },
    {
        "name": "Elk Master Tip Club 9mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/elk-master-tip-club-9mm-blue-910ea4"
    },
    {
        "name": "Elk Master Tip OG 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/elk-master-tip-og-10mm-blue-59f89e"
    },
    {
        "name": "Elk Master Tip OG 9mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/elk-master-tip-og-9mm-blue-8cd9ed"
    },
    {
        "name": "Grand Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/grand-tip-10mm-blue-f7000e"
    },
    {
        "name": "Hi-Chrome Tip Single 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/hi-chrome-tip-single-10mm-blue-ca0549"
    },
    {
        "name": "Kamui Black Tip Med 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-black-tip-med-10mm-1c7a1f"
    },
    {
        "name": "Kamui Brown Tip Med 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-brown-tip-med-10mm-08da07"
    },
    {
        "name": "Kamui Sai Tip 14mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-sai-tip-14mm-black-81b118"
    },
    {
        "name": "Kamui Tip 11mm",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-tip-11mm-230b22"
    },
    {
        "name": "Kamui Tip Single 10mm Brown",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-tip-single-10mm-brown-dc23fe"
    },
    {
        "name": "Legend Tip Blue",
        "url": "https://snookercart.com/buy-product/ols/products/legend-tip-blue-8345fe"
    },
    {
        "name": "LP Black Tips A 10mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-black-tips-a-10mm-light-green-5e1564"
    },
    {
        "name": "LP Blue Tips B 10mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-blue-tips-b-10mm-light-green-609c5b"
    },
    {
        "name": "LP Club Tips A Pack of 50 10.5mm",
        "url": "https://snookercart.com/buy-product/ols/products/lp-club-tips-a-pack-of-50-10-5mm-d5c960"
    },
    {
        "name": "LP Club Tips A Pack of 50 11mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/lp-club-tips-a-pack-of-50-11mm-blue-793963"
    },
    {
        "name": "LP Club Tips B Pack of 50 10.5mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/lp-club-tips-b-pack-of-50-10-5mm-blue-96cff1"
    },
    {
        "name": "LP Dream Tip 10mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-dream-tip-10mm-light-green-8d4154"
    },
    {
        "name": "LP Gen3 Tip soft 10.5mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-gen3-tip-soft-10-5mm-light-green-955332"
    },
    {
        "name": "LP Professional Pack of 6 Tip 11mm",
        "url": "https://snookercart.com/buy-product/ols/products/lp-professional-pack-of-6-tip-11mm-0c6f1f"
    },
    {
        "name": "LP Super Dream Tip (Pack of 1) Light green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-super-dream-tip-pack-of-1-light-green-ddfb74"
    },
    {
        "name": "LP Super Pro Tip (Pack of 1) 10mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/lp-super-pro-tip-pack-of-1-10mm-black-71959f"
    },
    {
        "name": "Lp Super SS Dream M1 Tip 11mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/lp-super-ss-dream-m1-tip-11mm-blue-624502"
    },
    {
        "name": "LP Tip A Grade 13mm light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-tip-a-grade-13mm-light-green-448dd3"
    },
    {
        "name": "Mandum Tip 13mm Grey",
        "url": "https://snookercart.com/buy-product/ols/products/mandum-tip-13mm-grey-838244"
    },
    {
        "name": "Mark Shelby Tip 10mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/mark-shelby-tip-10mm-black-ad9dd2"
    },
    {
        "name": "Master Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/master-tip-10mm-blue-c8089b"
    },
    {
        "name": "Mike Wooleridge Tip 9mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/mike-wooleridge-tip-9mm-blue-e6b3e8"
    },
    {
        "name": "Omin Red Tip 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/omin-red-tip-10mm-32048c"
    },
    {
        "name": "Omin Tip Pack of 1 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-pack-of-1-10mm-blue-e92136"
    },
    {
        "name": "Omin Tip 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-10mm-61c516"
    },
    {
        "name": "Omin Tip 10mm Dark green",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-10mm-dark-green-6b9c91"
    },
    {
        "name": "Omin Tip 9mm Brown",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-9mm-brown-bbe842"
    },
    {
        "name": "Pheonix Tip Pack of 5 Soft 10mm Green",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-tip-pack-of-5-soft-10mm-green-e6431d"
    },
    {
        "name": "Pheonix Tip 10mm Green",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-tip-10mm-green-faf53c"
    },
    {
        "name": "Pheonix Tip Single 11mm Green",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-tip-single-11mm-green-9af72c"
    },
    {
        "name": "Phoenix Red Tip Med 11mm",
        "url": "https://snookercart.com/buy-product/ols/products/phoenix-red-tip-med-11mm-588fe3"
    },
    {
        "name": "Pool Tip General 14mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/pool-tip-general-14mm-light-green-49219a"
    },
    {
        "name": "Royal Oak Tip 10mm Brown",
        "url": "https://snookercart.com/buy-product/ols/products/royal-oak-tip-10mm-brown-d24872"
    },
    {
        "name": "Sapphire Tip Med 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/sapphire-tip-med-10mm-blue-e21f86"
    },
    {
        "name": "Sunny Pro Tip (Pack of 1) 10mm Brown",
        "url": "https://snookercart.com/buy-product/ols/products/sunny-pro-tip-pack-of-1-10mm-brown-19b02f"
    },
    {
        "name": "Taiwan Tip 10mm Brown",
        "url": "https://snookercart.com/buy-product/ols/products/taiwan-tip-10mm-brown-675f87"
    },
    {
        "name": "Talisman Pro Tip 10mm Brown",
        "url": "https://snookercart.com/buy-product/ols/products/talisman-pro-tip-10mm-brown-a60a24"
    },
    {
        "name": "Talisman Tip Hard WB 10mm Green",
        "url": "https://snookercart.com/buy-product/ols/products/talisman-tip-hard-wb-10mm-green-540083"
    },
    {
        "name": "Talisman Trinity Tip 10mm Grey",
        "url": "https://snookercart.com/buy-product/ols/products/talisman-trinity-tip-10mm-grey-3f65c7"
    },
    {
        "name": "Taom Fusion Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/taom-fusion-tip-10mm-blue-3aaab9"
    },
    {
        "name": "Taom Fusion Tip 14mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/taom-fusion-tip-14mm-blue-6cd192"
    },
    {
        "name": "Taom Pro Tip 10mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/taom-pro-tip-10mm-black-d1b552"
    },
    {
        "name": "Taom Pro Tip 14mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/taom-pro-tip-14mm-black-bb12dd"
    },
    {
        "name": "Vip Pro Tip 10mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/vip-pro-tip-10mm-black-6a58cd"
    },
    {
        "name": "Xiguan Pro Pool Tip 14mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/xiguan-pro-pool-tip-14mm-black-274ab8"
    },
    {
        "name": "ADR Cutter",
        "url": "https://snookercart.com/buy-product/ols/products/adr-cutter-ddd941"
    },
    {
        "name": "Kamui Tip Protector Black Single",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-tip-protector-black-single-c07353"
    },
    {
        "name": "Kamui Tip Protector Red Single",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-tip-protector-red-single-e934f4"
    },
    {
        "name": "Omin Tip Puncture Black Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-black-single-sided-7a1dcd"
    },
    {
        "name": "Omin Tip Puncture Blue Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-blue-single-sided-c94f77"
    },
    {
        "name": "Omin Tip Puncture Golden Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-golden-single-sided-bc165b"
    },
    {
        "name": "Omin Tip Puncture Light Blue Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-light-blue-single-sided-fecf06"
    },
    {
        "name": "Omin Tip Puncture Navy Blue Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-navy-blue-single-sided-8a0443"
    },
    {
        "name": "Omin Tip Puncture Purple Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-purple-single-sided-31cd3e"
    },
    {
        "name": "Omin Tip Puncture Red Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-red-single-sided-60411e"
    },
    {
        "name": "Omin Tip Puncture Silver Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/omin-tip-puncture-silver-single-sided-d55708"
    },
    {
        "name": "Tip Puncture Black Double Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-black-double-sided-76bc98"
    },
    {
        "name": "Tip Puncture Golden Double Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-golden-double-sided-da6f6c"
    },
    {
        "name": "Tip Puncture Red 2 Inch Double Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-red-2-inch-double-sided-288c94"
    },
    {
        "name": "Tip Puncture Red 2 Inch Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-red-2-inch-single-sided-834ccf"
    },
    {
        "name": "Tip Puncture Red Double Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-red-double-sided-73d4fa"
    },
    {
        "name": "Tip Puncture Silver 2 Inch Single Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-silver-2-inch-single-sided-d7d011"
    },
    {
        "name": "Tip Puncture Silver Double Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-silver-double-sided-311639"
    },
    {
        "name": "Tip Sharpner",
        "url": "https://snookercart.com/buy-product/ols/products/tip-sharpner-ccc4ee"
    },
    {
        "name": "Wooden Tip Compressor",
        "url": "https://snookercart.com/buy-product/ols/products/wooden-tip-compressor-4860f9"
    },
    {
        "name": "1G Cue Ball",
        "url": "https://snookercart.com/buy-product/ols/products/1g-cue-ball-2fd975"
    },
    {
        "name": "1G Super Pro Aramith Snooker Ballset 52.4mm Used",
        "url": "https://snookercart.com/buy-product/ols/products/1g-super-pro-aramith-snooker-ballset-52-4mm-used-d2118f"
    },
    {
        "name": "Aramith Premier Pool Ball set 57.2 In Suit Case",
        "url": "https://snookercart.com/buy-product/ols/products/aramith-premier-pool-ball-set-57-2-in-suit-case-562060"
    },
    {
        "name": "Aramith Premier Snooker Ballset 52.4mm Old Balls",
        "url": "https://snookercart.com/buy-product/ols/products/aramith-premier-snooker-ballset-52-4mm-old-balls-be4c3f"
    },
    {
        "name": "Belgian Aramitch Balls Set of 3",
        "url": "https://snookercart.com/buy-product/ols/products/belgian-aramitch-balls-set-of-3-1d72bb"
    },
    {
        "name": "Chinese Pool Ballset Black 52.4mm",
        "url": "https://snookercart.com/buy-product/ols/products/chinese-pool-ballset-black-52-4mm-f16f61"
    },
    {
        "name": "Chinese Pool Ballset Green 52.4mm",
        "url": "https://snookercart.com/buy-product/ols/products/chinese-pool-ballset-green-52-4mm-ef4e1b"
    },
    {
        "name": "Dotted Cue Ball",
        "url": "https://snookercart.com/buy-product/ols/products/dotted-cue-ball-3721fe"
    },
    {
        "name": "Dyna Spehere Snooker Ballset Silver 52.4mm",
        "url": "https://snookercart.com/buy-product/ols/products/dyna-spehere-snooker-ballset-silver-52-4mm-581093"
    },
    {
        "name": "JDH Ball set",
        "url": "https://snookercart.com/buy-product/ols/products/jdh-ball-set-62fa10"
    },
    {
        "name": "JDH Pool Ballset 52.4mm",
        "url": "https://snookercart.com/buy-product/ols/products/jdh-pool-ballset-52-4mm-139c82"
    },
    {
        "name": "Mandum Ball set",
        "url": "https://snookercart.com/buy-product/ols/products/mandum-ball-set-375eae"
    },
    {
        "name": "Training Cue Ball",
        "url": "https://snookercart.com/buy-product/ols/products/training-cue-ball-a3c42e"
    },
    {
        "name": "Xing Kang 8A TV Pro Cup Ballset ( Snooker)",
        "url": "https://snookercart.com/buy-product/ols/products/xing-kang-8a-tv-pro-cup-ballset-snooker-1e9a5a"
    },
    {
        "name": "Xing Kang Ball set",
        "url": "https://snookercart.com/buy-product/ols/products/xing-kang-ball-set-ec3191"
    },
    {
        "name": "Ball Cleaning Plates",
        "url": "https://snookercart.com/buy-product/ols/products/ball-cleaning-plates-4f029a"
    },
    {
        "name": "Ball Position Marker",
        "url": "https://snookercart.com/buy-product/ols/products/ball-position-marker-521538"
    },
    {
        "name": "MW Ball Cleaner 150ml",
        "url": "https://snookercart.com/buy-product/ols/products/mw-ball-cleaner-150ml-4f0938"
    },
    {
        "name": "Xiguan Ball Cleaner",
        "url": "https://snookercart.com/buy-product/ols/products/xiguan-ball-cleaner-84009c"
    },
    {
        "name": "Leather Case Black-Yellow 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-black-yellow-3-4-d457ae"
    },
    {
        "name": "Aluminium Case For 3 Cues Black 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-case-for-3-cues-black-1-piece-5c2181"
    },
    {
        "name": "Aluminium Case Black 3/4 - Silk",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-case-black-3-4-silk-7ea3c7"
    },
    {
        "name": "Aluminium Case Golden 1 Piece- Silk",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-case-golden-1-piece-silk-2b60ee"
    },
    {
        "name": "Aluminium Case Red 1 Piece - Silk",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-case-red-1-piece-silk-909062"
    },
    {
        "name": "Aluminium Case Silver 1 Piece - New",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-case-silver-1-piece-new-dfe35a"
    },
    {
        "name": "Aluminium Case Silver 3/4 - Silk",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-case-silver-3-4-silk-3c34e1"
    },
    {
        "name": "Apex Leather Case Black 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-black-1-piece-73fb2e"
    },
    {
        "name": "Apex Leather Case Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-black-3-4-79edf9"
    },
    {
        "name": "Apex Leather Case Blue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-blue-3-4-b67ddb"
    },
    {
        "name": "Apex Leather Case Green 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-green-1-piece-6af8be"
    },
    {
        "name": "Apex Leather Case Green 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-green-3-4-17a8d1"
    },
    {
        "name": "Apex Leather Case Orange 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-orange-1-piece-effe0d"
    },
    {
        "name": "Apex Leather Case Orange 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/apex-leather-case-orange-3-4-83b7c2"
    },
    {
        "name": "Apex Premium Case Brown 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-premium-case-brown-1-piece-4eb12e"
    },
    {
        "name": "Apex Premium Case Navy Blue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-premium-case-navy-blue-1-piece-5fa75b"
    },
    {
        "name": "Apex Premium Case Red 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-premium-case-red-1-piece-c0f085"
    },
    {
        "name": "Case Cover Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/case-cover-black-3-4-54b17b"
    },
    {
        "name": "Case Cover Blue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/case-cover-blue-1-piece-73b694"
    },
    {
        "name": "Cue Cover Black 3/4 ( Black & White strips )",
        "url": "https://snookercart.com/buy-product/ols/products/cue-cover-black-3-4-black-white-strips-d8a60c"
    },
    {
        "name": "Cue Cover Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/cue-cover-black-3-4-60520a"
    },
    {
        "name": "Cue Cover with Spunch Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/cue-cover-with-spunch-black-3-4-daff7c"
    },
    {
        "name": "Cue Cover with Spunch Black-Yellow 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/cue-cover-with-spunch-black-yellow-3-4-3ab582"
    },
    {
        "name": "Cue Cover Black 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/cue-cover-black-1-2-a14acb"
    },
    {
        "name": "Kamui Case Cover For 2 Cues Black 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-case-cover-for-2-cues-black-1-2-7fda95"
    },
    {
        "name": "Leather case with Num Lock Black 1 piece",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-with-num-lock-black-1-piece-01b3c1"
    },
    {
        "name": "Leather case with Num Lock Brown 1 piece",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-with-num-lock-brown-1-piece-edc8a9"
    },
    {
        "name": "Leather Case Black-Brown 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-black-brown-3-4-cc051b"
    },
    {
        "name": "Leather Case Black-Grey 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-black-grey-3-4-3d5419"
    },
    {
        "name": "Leather Case Black-Red 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-black-red-3-4-4cf8a7"
    },
    {
        "name": "Leather Case Black-White 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-black-white-3-4-a5d27a"
    },
    {
        "name": "Leather Case Leopard 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-leopard-3-4-ed8f03"
    },
    {
        "name": "Leather Case Leopard One Piece",
        "url": "https://snookercart.com/buy-product/ols/products/leather-case-leopard-one-piece-ef12e7"
    },
    {
        "name": "Omin 3/4 Premium Cue Cover Leather - Special Category",
        "url": "https://snookercart.com/buy-product/ols/products/omin-3-4-premium-cue-cover-leather-special-category-d4036c"
    },
    {
        "name": "Omin Premium Case Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-premium-case-black-3-4-330849"
    },
    {
        "name": "Omin Premium Case Black-Grey 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-premium-case-black-grey-1-piece-3230ec"
    },
    {
        "name": "Omin Premium Case Black-Grey 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-premium-case-black-grey-3-4-10a322"
    },
    {
        "name": "Omin Premium Case Red-Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-premium-case-red-black-80dd66"
    },
    {
        "name": "Pipe Case Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/pipe-case-black-3-4-10bfdf"
    },
    {
        "name": "Pipe Case Brown 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/pipe-case-brown-3-4-329270"
    },
    {
        "name": "Pipe Case Grey 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/pipe-case-grey-3-4-823e22"
    },
    {
        "name": "Plain Leather Case Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/plain-leather-case-black-3-4-07f9d7"
    },
    {
        "name": "Pool Cue Case 6 Holes Black",
        "url": "https://snookercart.com/buy-product/ols/products/pool-cue-case-6-holes-black-9d9ccb"
    },
    {
        "name": "Pool Cue Case 9 Holes Black",
        "url": "https://snookercart.com/buy-product/ols/products/pool-cue-case-9-holes-black-56e014"
    },
    {
        "name": "Pool Cue Case 9 Holes Brown",
        "url": "https://snookercart.com/buy-product/ols/products/pool-cue-case-9-holes-brown-054dc6"
    },
    {
        "name": "Premium Cue Case For 3 Nos Black 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/premium-cue-case-for-3-nos-black-1-piece-0e3801"
    },
    {
        "name": "Premium Cue Case For 8 Nos Silver 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/premium-cue-case-for-8-nos-silver-1-piece-46f3ff"
    },
    {
        "name": "Tube case plain Black 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/tube-case-plain-black-1-2-0bfb7e"
    },
    {
        "name": "Tube case plain Black 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/tube-case-plain-black-3-4-11cc64"
    },
    {
        "name": "Xingpai Leather Case Black -White 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-leather-case-black-white-3-4-3a0d73"
    },
    {
        "name": "Billie Chalk Single Tip Dark Blue",
        "url": "https://snookercart.com/buy-product/ols/products/billie-chalk-single-tip-dark-blue-f3cc25"
    },
    {
        "name": "Blue Diamond Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/blue-diamond-chalk-single-blue-6a1970"
    },
    {
        "name": "Brunswik Chalk Single Tip Dark Blue",
        "url": "https://snookercart.com/buy-product/ols/products/brunswik-chalk-single-tip-dark-blue-741013"
    },
    {
        "name": "Hong Chai Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/hong-chai-chalk-single-blue-b9609d"
    },
    {
        "name": "Jupiter Chalk Single Dark Green",
        "url": "https://snookercart.com/buy-product/ols/products/jupiter-chalk-single-dark-green-106a3f"
    },
    {
        "name": "Kamui Roku Chalk Single Light Blue",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-roku-chalk-single-light-blue-eef211"
    },
    {
        "name": "Legend Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/legend-chalk-single-blue-abee1c"
    },
    {
        "name": "Master Chalk Single Black",
        "url": "https://snookercart.com/buy-product/ols/products/master-chalk-single-black-b989c3"
    },
    {
        "name": "Master Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/master-chalk-single-blue-ebc713"
    },
    {
        "name": "Master Chalk Single Brown",
        "url": "https://snookercart.com/buy-product/ols/products/master-chalk-single-brown-1b10cf"
    },
    {
        "name": "Master Chalk Single Maroon",
        "url": "https://snookercart.com/buy-product/ols/products/master-chalk-single-maroon-0e6ba6"
    },
    {
        "name": "Master Chalk Single Red",
        "url": "https://snookercart.com/buy-product/ols/products/master-chalk-single-red-27d1a7"
    },
    {
        "name": "Omin Chalk Single Dark Blue",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-single-dark-blue-dc1404"
    },
    {
        "name": "Omin Chalk Single Dark Green",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-single-dark-green-dbe3f8"
    },
    {
        "name": "Predator Chalk Single Dark Blue",
        "url": "https://snookercart.com/buy-product/ols/products/predator-chalk-single-dark-blue-242e19"
    },
    {
        "name": "Professional Chalk Single Grey",
        "url": "https://snookercart.com/buy-product/ols/products/professional-chalk-single-grey-81cb38"
    },
    {
        "name": "Silver Cup Chalk Single Black",
        "url": "https://snookercart.com/buy-product/ols/products/silver-cup-chalk-single-black-995a56"
    },
    {
        "name": "Silver Cup Chalk Single Purple",
        "url": "https://snookercart.com/buy-product/ols/products/silver-cup-chalk-single-purple-305e0a"
    },
    {
        "name": "Silver Cup Chalk Single Red",
        "url": "https://snookercart.com/buy-product/ols/products/silver-cup-chalk-single-red-3b53ce"
    },
    {
        "name": "Taom 2.0 Chalk Single Green",
        "url": "https://snookercart.com/buy-product/ols/products/taom-2-0-chalk-single-green-3fda43"
    },
    {
        "name": "Taom Pyro Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/taom-pyro-chalk-single-blue-0f274f"
    },
    {
        "name": "Taom V10 Chalk Pack of 9 Blue",
        "url": "https://snookercart.com/buy-product/ols/products/taom-v10-chalk-pack-of-9-blue-b5df3e"
    },
    {
        "name": "Taom V10 Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/taom-v10-chalk-single-blue-666a3c"
    },
    {
        "name": "Taom V10 Chalk Single Green",
        "url": "https://snookercart.com/buy-product/ols/products/taom-v10-chalk-single-green-7c6d32"
    },
    {
        "name": "Triangle Chalk Club Pack of 144 Blue",
        "url": "https://snookercart.com/buy-product/ols/products/triangle-chalk-club-pack-of-144-blue-f818d4"
    },
    {
        "name": "Triangle Chalk Club Pack of 144 Spruce",
        "url": "https://snookercart.com/buy-product/ols/products/triangle-chalk-club-pack-of-144-spruce-3c5d52"
    },
    {
        "name": "Triangle Chalk Single Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/triangle-chalk-single-light-green-40da2c"
    },
    {
        "name": "Trianle Pro Chalk Pack of 12 Dark Green",
        "url": "https://snookercart.com/buy-product/ols/products/trianle-pro-chalk-pack-of-12-dark-green-756aae"
    },
    {
        "name": "Trianle Pro Chalk Single Dark Green",
        "url": "https://snookercart.com/buy-product/ols/products/trianle-pro-chalk-single-dark-green-0c2411"
    },
    {
        "name": "Wanstan Chalk Single Blue",
        "url": "https://snookercart.com/buy-product/ols/products/wanstan-chalk-single-blue-4faad2"
    },
    {
        "name": "Whirl Wind Chalk Single Dark Green",
        "url": "https://snookercart.com/buy-product/ols/products/whirl-wind-chalk-single-dark-green-f4cab8"
    },
    {
        "name": "Wiraka Chalk Single Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-chalk-single-light-green-9945db"
    },
    {
        "name": "Adr Pouch Single Black",
        "url": "https://snookercart.com/buy-product/ols/products/adr-pouch-single-black-b54e95"
    },
    {
        "name": "Apex Chalk Pouch Blue",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-blue-b32d26"
    },
    {
        "name": "Apex Chalk Pouch Brown",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-brown-1d90a2"
    },
    {
        "name": "Apex Chalk Pouch Cherry Red",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-cherry-red-f8af92"
    },
    {
        "name": "Apex Chalk Pouch Coffe Color",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-coffe-color-0078a8"
    },
    {
        "name": "Apex Chalk Pouch Dark Brown",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-dark-brown-d27df0"
    },
    {
        "name": "Apex Chalk Pouch Golden",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-golden-e62407"
    },
    {
        "name": "Apex Chalk Pouch Green",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-green-761f1c"
    },
    {
        "name": "Apex Chalk Pouch Red",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-red-8abe21"
    },
    {
        "name": "Apex Chalk Pouch Violet",
        "url": "https://snookercart.com/buy-product/ols/products/apex-chalk-pouch-violet-7c0625"
    },
    {
        "name": "GT Magnetic round Chalk Holder Red-Black",
        "url": "https://snookercart.com/buy-product/ols/products/gt-magnetic-round-chalk-holder-red-black-0bfd4d"
    },
    {
        "name": "Magnetic Chalk Holder Black",
        "url": "https://snookercart.com/buy-product/ols/products/magnetic-chalk-holder-black-a7dc58"
    },
    {
        "name": "Master Magnetic Chalk Holder Black",
        "url": "https://snookercart.com/buy-product/ols/products/master-magnetic-chalk-holder-black-a04493"
    },
    {
        "name": "Melin Magnetic Dual Chalk Holder Black-Red",
        "url": "https://snookercart.com/buy-product/ols/products/melin-magnetic-dual-chalk-holder-black-red-d28529"
    },
    {
        "name": "Omin Chalk Holder with Cap Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-holder-with-cap-black-41a1ba"
    },
    {
        "name": "Omin Chalk Holder Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-holder-black-3aa2af"
    },
    {
        "name": "Omin Chalk Holder Black Without Cap",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-holder-black-without-cap-8b37b1"
    },
    {
        "name": "Omin Chalk Holder Brown",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-holder-brown-7aeda0"
    },
    {
        "name": "Omin Chalk Holder Light Brown Without Cap",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-holder-light-brown-without-cap-3afaf3"
    },
    {
        "name": "Omin Chalk Pouch Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-chalk-pouch-black-034fe9"
    },
    {
        "name": "Omin Magnetic Dual Chalk Holder Blue",
        "url": "https://snookercart.com/buy-product/ols/products/omin-magnetic-dual-chalk-holder-blue-82cbb9"
    },
    {
        "name": "Omin Magnetic Dual Chalk Holder Green",
        "url": "https://snookercart.com/buy-product/ols/products/omin-magnetic-dual-chalk-holder-green-ccdc04"
    },
    {
        "name": "Taom Chalk Pouch without Magnet",
        "url": "https://snookercart.com/buy-product/ols/products/taom-chalk-pouch-without-magnet-e016b0"
    },
    {
        "name": "Taom Magnetic Chalk Holder",
        "url": "https://snookercart.com/buy-product/ols/products/taom-magnetic-chalk-holder-239c3d"
    },
    {
        "name": "Andy 600 4.5X9 Blue",
        "url": "https://snookercart.com/buy-product/ols/products/andy-600-4-5x9-blue-191305"
    },
    {
        "name": "PNS 720 / Club Snooker Cloth 6X12 feet Green",
        "url": "https://snookercart.com/buy-product/ols/products/pns-720-club-snooker-cloth-6x12-feet-green-7a68d9"
    },
    {
        "name": "PNS 888 4.5X9 Green",
        "url": "https://snookercart.com/buy-product/ols/products/pns-888-4-5x9-green-0ad74f"
    },
    {
        "name": "PNS F5 Snooker Cloth 6X12 feet Green",
        "url": "https://snookercart.com/buy-product/ols/products/pns-f5-snooker-cloth-6x12-feet-green-ed2f8f"
    },
    {
        "name": "PRO-Tec 6X12 feet Green",
        "url": "https://snookercart.com/buy-product/ols/products/pro-tec-6x12-feet-green-c29eea"
    },
    {
        "name": "PRO-Tec 6X12 feet Green Bed",
        "url": "https://snookercart.com/buy-product/ols/products/pro-tec-6x12-feet-green-bed-428335"
    },
    {
        "name": "Strachan 6811 6X12 feet Green 30 Oz with Cushion",
        "url": "https://snookercart.com/buy-product/ols/products/strachan-6811-6x12-feet-green-30-oz-with-cushion-0f4955"
    },
    {
        "name": "Super Pool 4X8 feet Blue",
        "url": "https://snookercart.com/buy-product/ols/products/super-pool-4x8-feet-blue-1fee3e"
    },
    {
        "name": "Super Pool 4X8 feet Green",
        "url": "https://snookercart.com/buy-product/ols/products/super-pool-4x8-feet-green-6baa26"
    },
    {
        "name": "Super Pool 4X8 feet Red",
        "url": "https://snookercart.com/buy-product/ols/products/super-pool-4x8-feet-red-9c40b0"
    },
    {
        "name": "Used Pro-Tech Cloth 6X12 feet Green Bed",
        "url": "https://snookercart.com/buy-product/ols/products/used-pro-tech-cloth-6x12-feet-green-bed-baa270"
    },
    {
        "name": "Wiraka 6565 5X10 feet Green B",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-6565-5x10-feet-green-b-e066b5"
    },
    {
        "name": "Wiraka 777 4X8 feet Green B",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-777-4x8-feet-green-b-f637bd"
    },
    {
        "name": "Wiraka 777 4X8 feet Green OG",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-777-4x8-feet-green-og-ba464c"
    },
    {
        "name": "Wiraka 777 5X10 feet Green B BED",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-777-5x10-feet-green-b-bed-6419f8"
    },
    {
        "name": "Wiraka Pro 960 4X8 feet Blue",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-pro-960-4x8-feet-blue-add465"
    },
    {
        "name": "Xiguan Fabric Softnerer",
        "url": "https://snookercart.com/buy-product/ols/products/xiguan-fabric-softnerer-0e4067"
    },
    {
        "name": "20 Holes Cue Stand",
        "url": "https://snookercart.com/buy-product/ols/products/20-holes-cue-stand-916c9c"
    },
    {
        "name": "Boutique Billiard Gloves Blue",
        "url": "https://snookercart.com/buy-product/ols/products/boutique-billiard-gloves-blue-1e8ac7"
    },
    {
        "name": "Butt Protector",
        "url": "https://snookercart.com/buy-product/ols/products/butt-protector-828449"
    },
    {
        "name": "Century ferrule 10",
        "url": "https://snookercart.com/buy-product/ols/products/century-ferrule-10-f58875"
    },
    {
        "name": "Century ferrule 9.1",
        "url": "https://snookercart.com/buy-product/ols/products/century-ferrule-9-1-d65fa3"
    },
    {
        "name": "Century ferrule 9.2",
        "url": "https://snookercart.com/buy-product/ols/products/century-ferrule-9-2-60494e"
    },
    {
        "name": "Century ferrule 9.3",
        "url": "https://snookercart.com/buy-product/ols/products/century-ferrule-9-3-a7198c"
    },
    {
        "name": "Century ferrule 9.6",
        "url": "https://snookercart.com/buy-product/ols/products/century-ferrule-9-6-56b4c0"
    },
    {
        "name": "Cue shaft polisher double sided",
        "url": "https://snookercart.com/buy-product/ols/products/cue-shaft-polisher-double-sided-45db13"
    },
    {
        "name": "Cue Tip Shaper",
        "url": "https://snookercart.com/buy-product/ols/products/cue-tip-shaper-62b5ff"
    },
    {
        "name": "Cue Tip Shaper Dragon Tongue",
        "url": "https://snookercart.com/buy-product/ols/products/cue-tip-shaper-dragon-tongue-d85600"
    },
    {
        "name": "Cue Tip Shaper Premium",
        "url": "https://snookercart.com/buy-product/ols/products/cue-tip-shaper-premium-f8da18"
    },
    {
        "name": "Cue towel shaft",
        "url": "https://snookercart.com/buy-product/ols/products/cue-towel-shaft-641ce3"
    },
    {
        "name": "Cue Wall Stand Brown",
        "url": "https://snookercart.com/buy-product/ols/products/cue-wall-stand-brown-db7c1f"
    },
    {
        "name": "Delux Billiards Towel",
        "url": "https://snookercart.com/buy-product/ols/products/delux-billiards-towel-896f53"
    },
    {
        "name": "Kamui Clear Bridge Head Transparent",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-clear-bridge-head-transparent-eb7451"
    },
    {
        "name": "Leather Tip Protector",
        "url": "https://snookercart.com/buy-product/ols/products/leather-tip-protector-2847f7"
    },
    {
        "name": "Lp Extension Small (6-Inch) Black",
        "url": "https://snookercart.com/buy-product/ols/products/lp-extension-small-6-inch-black-bb306b"
    },
    {
        "name": "Mandun Cue Shaft Single Black-White",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-cue-shaft-single-black-white-0fdb28"
    },
    {
        "name": "Mandun Wax 50gm",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-wax-50gm-cb71df"
    },
    {
        "name": "Master Mini Butt 6\" Plastic",
        "url": "https://snookercart.com/buy-product/ols/products/master-mini-butt-6-plastic-1dbb7f"
    },
    {
        "name": "Omin Butt protector Brass",
        "url": "https://snookercart.com/buy-product/ols/products/omin-butt-protector-brass-1495c2"
    },
    {
        "name": "Omin Cue Cleaner Spary",
        "url": "https://snookercart.com/buy-product/ols/products/omin-cue-cleaner-spary-13029b"
    },
    {
        "name": "Omin Cue Oil 10ml",
        "url": "https://snookercart.com/buy-product/ols/products/omin-cue-oil-10ml-0ac6d6"
    },
    {
        "name": "Omin Extension (6-Inch) Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-6-inch-black-9fd2a9"
    },
    {
        "name": "Omin Extension (6-Inch) Black - Plastic",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-6-inch-black-plastic-50d69f"
    },
    {
        "name": "Omin Extension (6-Inch) Golden",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-6-inch-golden-bc2da3"
    },
    {
        "name": "Omin Extension (6-Inch) SkyBlue",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-6-inch-skyblue-730383"
    },
    {
        "name": "Omin Extension (9-Inch) Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-9-inch-black-7af1e1"
    },
    {
        "name": "Omin Extension (9-Inch) Black-Green",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-9-inch-black-green-e558e4"
    },
    {
        "name": "Omin Extension (9-Inch) Golden",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-9-inch-golden-41a6b9"
    },
    {
        "name": "Omin Extension (9-Inch) Silver",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-9-inch-silver-7fe9d7"
    },
    {
        "name": "Omin Extension Black - Silver 18 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-black-silver-18-inch-f7d2bf"
    },
    {
        "name": "Omin Extension Black 18 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-black-18-inch-763182"
    },
    {
        "name": "Omin Extension Black-Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-black-black-8face7"
    },
    {
        "name": "Omin Extension Black-Blue 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-black-blue-12-inch-7d448a"
    },
    {
        "name": "Omin Extension Black-Golden",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-black-golden-9b03d4"
    },
    {
        "name": "Omin Extension Black-Golden 18 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-black-golden-18-inch-36ee2a"
    },
    {
        "name": "Omin Extension Golden 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-golden-12-inch-7f451e"
    },
    {
        "name": "Omin Extension Silver 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/omin-extension-silver-12-inch-95fc36"
    },
    {
        "name": "Omin Original Extension (6-Inch) Black",
        "url": "https://snookercart.com/buy-product/ols/products/omin-original-extension-6-inch-black-9c4f74"
    },
    {
        "name": "Omin Wooden Mini Butt - Special Category",
        "url": "https://snookercart.com/buy-product/ols/products/omin-wooden-mini-butt-special-category-e843ef"
    },
    {
        "name": "Phoenix Cue Oil 30ml",
        "url": "https://snookercart.com/buy-product/ols/products/phoenix-cue-oil-30ml-a340a0"
    },
    {
        "name": "Plastic Telescopic Extension Large Black-Blue",
        "url": "https://snookercart.com/buy-product/ols/products/plastic-telescopic-extension-large-black-blue-30d89b"
    },
    {
        "name": "Plastic Tip Cap",
        "url": "https://snookercart.com/buy-product/ols/products/plastic-tip-cap-d503e4"
    },
    {
        "name": "Portable Cue rest",
        "url": "https://snookercart.com/buy-product/ols/products/portable-cue-rest-a431c4"
    },
    {
        "name": "Small Universal Extension Black",
        "url": "https://snookercart.com/buy-product/ols/products/small-universal-extension-black-0fe7e7"
    },
    {
        "name": "Small Universal Extension Black - Blue",
        "url": "https://snookercart.com/buy-product/ols/products/small-universal-extension-black-blue-bef518"
    },
    {
        "name": "Small Universal Extension Black - Gold",
        "url": "https://snookercart.com/buy-product/ols/products/small-universal-extension-black-gold-36f697"
    },
    {
        "name": "Small Universal Extension Black - Red",
        "url": "https://snookercart.com/buy-product/ols/products/small-universal-extension-black-red-fea77f"
    },
    {
        "name": "Small Universal Extension Black - Silver",
        "url": "https://snookercart.com/buy-product/ols/products/small-universal-extension-black-silver-cebb0e"
    },
    {
        "name": "Stroke Excerciser Single Black-Transparent",
        "url": "https://snookercart.com/buy-product/ols/products/stroke-excerciser-single-black-transparent-727bd5"
    },
    {
        "name": "Telescopic Extension Aluminium Black - Gold 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/telescopic-extension-aluminium-black-gold-12-inch-c62edc"
    },
    {
        "name": "Telescopic Extension Aluminium Black - Silver 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/telescopic-extension-aluminium-black-silver-12-inch-53c3d6"
    },
    {
        "name": "Telescopic Extension Aluminium Black 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/telescopic-extension-aluminium-black-12-inch-195c61"
    },
    {
        "name": "Telescopic Extension Aluminium Black-Blue 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/telescopic-extension-aluminium-black-blue-12-inch-018d25"
    },
    {
        "name": "Tip protector rubber 10mm",
        "url": "https://snookercart.com/buy-product/ols/products/tip-protector-rubber-10mm-c18214"
    },
    {
        "name": "Tip protector rubber 12mm",
        "url": "https://snookercart.com/buy-product/ols/products/tip-protector-rubber-12mm-d5e9c5"
    },
    {
        "name": "Tip shaper round",
        "url": "https://snookercart.com/buy-product/ols/products/tip-shaper-round-73bb77"
    },
    {
        "name": "Volkan Cue Cleaner 20ml",
        "url": "https://snookercart.com/buy-product/ols/products/volkan-cue-cleaner-20ml-f35996"
    },
    {
        "name": "Volkan Wax 20gm",
        "url": "https://snookercart.com/buy-product/ols/products/volkan-wax-20gm-c66bb3"
    },
    {
        "name": "American Club Pool Cue 3 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/american-club-pool-cue-3-piece-c1561a"
    },
    {
        "name": "American Pool Cue 3 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/american-pool-cue-3-piece-d021d1"
    },
    {
        "name": "Billee Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/billee-cue-1-2-40a1e4"
    },
    {
        "name": "Bridge Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/bridge-cue-3-4-283e60"
    },
    {
        "name": "Bridge Jack Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/bridge-jack-cue-3-4-aa8716"
    },
    {
        "name": "Bridge Rebel Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/bridge-rebel-cue-1-2-176900"
    },
    {
        "name": "Chinese Dragaon Cues 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/chinese-dragaon-cues-1-piece-7685d3"
    },
    {
        "name": "Dufferin Canada Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/dufferin-canada-cue-1-2-491857"
    },
    {
        "name": "Europian Pool Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/europian-pool-cue-1-piece-9a4e1b"
    },
    {
        "name": "Hand made Professional Club Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/hand-made-professional-club-cue-1-2-c6df8e"
    },
    {
        "name": "Hand made Professional Club Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/hand-made-professional-club-cue-3-4-f8e351"
    },
    {
        "name": "Jack Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/jack-cue-1-2-7abbf2"
    },
    {
        "name": "Jack Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/jack-cue-3-4-8908ca"
    },
    {
        "name": "Janeson Cue Club 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/janeson-cue-club-1-2-5429fe"
    },
    {
        "name": "Janeson Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/janeson-cue-3-4-61b955"
    },
    {
        "name": "JDH Club cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/jdh-club-cue-1-piece-b525ef"
    },
    {
        "name": "Lead Super American Pool Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/lead-super-american-pool-cue-1-2-a06d02"
    },
    {
        "name": "LP Premium Cue Brown 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-premium-cue-brown-3-4-df70c4"
    },
    {
        "name": "LP White Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-white-cue-3-4-84fbff"
    },
    {
        "name": "Pool Cue Playing",
        "url": "https://snookercart.com/buy-product/ols/products/pool-cue-playing-d41d33"
    },
    {
        "name": "Power Glide original 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/power-glide-original-3-4-9e5894"
    },
    {
        "name": "Riley Club Cues 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/riley-club-cues-1-piece-d48e78"
    },
    {
        "name": "Riley Club Cues 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/riley-club-cues-3-4-2edcb6"
    },
    {
        "name": "Riley Eng Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/riley-eng-cue-3-4-f90165"
    },
    {
        "name": "Riley Made in England Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/riley-made-in-england-cue-3-4-cdbb48"
    },
    {
        "name": "Riley Professional Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/riley-professional-cue-3-4-0c0398"
    },
    {
        "name": "Slp Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/slp-cue-3-4-fdc1dd"
    },
    {
        "name": "SLP Pool Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/slp-pool-cue-1-2-ea6afc"
    },
    {
        "name": "Woods Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/woods-cue-3-4-b2161e"
    },
    {
        "name": "Xingpai Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-cue-3-4-46e13e"
    },
    {
        "name": "Blue Diamond Gloves Black",
        "url": "https://snookercart.com/buy-product/ols/products/blue-diamond-gloves-black-f1c7fc"
    },
    {
        "name": "Bridge Rebel Black",
        "url": "https://snookercart.com/buy-product/ols/products/bridge-rebel-black-ae8f22"
    },
    {
        "name": "Century Towel Small Size",
        "url": "https://snookercart.com/buy-product/ols/products/century-towel-small-size-36c55c"
    },
    {
        "name": "Gloves Black",
        "url": "https://snookercart.com/buy-product/ols/products/gloves-black-532e55"
    },
    {
        "name": "Gloves Blue",
        "url": "https://snookercart.com/buy-product/ols/products/gloves-blue-bcc0ff"
    },
    {
        "name": "Gloves Brown",
        "url": "https://snookercart.com/buy-product/ols/products/gloves-brown-957d15"
    },
    {
        "name": "Key Chain Crystal Pack of 16",
        "url": "https://snookercart.com/buy-product/ols/products/key-chain-crystal-pack-of-16-6f6819"
    },
    {
        "name": "Key Chain Small Pack of 16",
        "url": "https://snookercart.com/buy-product/ols/products/key-chain-small-pack-of-16-f4575f"
    },
    {
        "name": "Key Chains Pack of 16",
        "url": "https://snookercart.com/buy-product/ols/products/key-chains-pack-of-16-217934"
    },
    {
        "name": "Mandun Gloves Black",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-gloves-black-126502"
    },
    {
        "name": "Partners Billiard Gloves Red",
        "url": "https://snookercart.com/buy-product/ols/products/partners-billiard-gloves-red-0a9a09"
    },
    {
        "name": "Pns Gloves Black",
        "url": "https://snookercart.com/buy-product/ols/products/pns-gloves-black-5b269a"
    },
    {
        "name": "Pns Gloves Blue",
        "url": "https://snookercart.com/buy-product/ols/products/pns-gloves-blue-663608"
    },
    {
        "name": "Pns Gloves Red",
        "url": "https://snookercart.com/buy-product/ols/products/pns-gloves-red-bf980b"
    },
    {
        "name": "Pool Keychains Small Single",
        "url": "https://snookercart.com/buy-product/ols/products/pool-keychains-small-single-f20116"
    },
    {
        "name": "Position Market",
        "url": "https://snookercart.com/buy-product/ols/products/position-market-54c15f"
    },
    {
        "name": "Predator Gloves Black - Grey",
        "url": "https://snookercart.com/buy-product/ols/products/predator-gloves-black-grey-d7752c"
    },
    {
        "name": "Predator Gloves Black - Yellow",
        "url": "https://snookercart.com/buy-product/ols/products/predator-gloves-black-yellow-d7588b"
    },
    {
        "name": "Predator Gloves Red- Green - Black",
        "url": "https://snookercart.com/buy-product/ols/products/predator-gloves-red-green-black-42ff9c"
    },
    {
        "name": "Predator Gloves Black-Golden",
        "url": "https://snookercart.com/buy-product/ols/products/predator-gloves-black-golden-d0d96f"
    },
    {
        "name": "Predator Gloves Black-Grey",
        "url": "https://snookercart.com/buy-product/ols/products/predator-gloves-black-grey-d91d63"
    },
    {
        "name": "Predator Gloves Black-Red",
        "url": "https://snookercart.com/buy-product/ols/products/predator-gloves-black-red-5c79f6"
    },
    {
        "name": "Predator Towel",
        "url": "https://snookercart.com/buy-product/ols/products/predator-towel-1612a7"
    },
    {
        "name": "Ros Towel Single Black",
        "url": "https://snookercart.com/buy-product/ols/products/ros-towel-single-black-e25c35"
    },
    {
        "name": "ROX Towel",
        "url": "https://snookercart.com/buy-product/ols/products/rox-towel-6403d8"
    },
    {
        "name": "SPR GL Gloves Blue",
        "url": "https://snookercart.com/buy-product/ols/products/spr-gl-gloves-blue-c797d7"
    },
    {
        "name": "SPR GL Gloves Black",
        "url": "https://snookercart.com/buy-product/ols/products/spr-gl-gloves-black-63b846"
    },
    {
        "name": "SPR GL Gloves Blue-Black",
        "url": "https://snookercart.com/buy-product/ols/products/spr-gl-gloves-blue-black-96450f"
    },
    {
        "name": "Super Blue Diamond Gloves",
        "url": "https://snookercart.com/buy-product/ols/products/super-blue-diamond-gloves-4acbcf"
    },
    {
        "name": "Taom Cap Black",
        "url": "https://snookercart.com/buy-product/ols/products/taom-cap-black-7f4de0"
    },
    {
        "name": "Taom Gloves Black Left Large",
        "url": "https://snookercart.com/buy-product/ols/products/taom-gloves-black-left-large-5d3034"
    },
    {
        "name": "Taom Gloves Black Left Medium",
        "url": "https://snookercart.com/buy-product/ols/products/taom-gloves-black-left-medium-78b241"
    },
    {
        "name": "Taom Gloves Black Left Small",
        "url": "https://snookercart.com/buy-product/ols/products/taom-gloves-black-left-small-195540"
    },
    {
        "name": "Taom Gloves Black Right Large",
        "url": "https://snookercart.com/buy-product/ols/products/taom-gloves-black-right-large-a47571"
    },
    {
        "name": "Taom Gloves Black Right Medium",
        "url": "https://snookercart.com/buy-product/ols/products/taom-gloves-black-right-medium-e1ed3d"
    },
    {
        "name": "Taom Official Batch",
        "url": "https://snookercart.com/buy-product/ols/products/taom-official-batch-2a5a5b"
    },
    {
        "name": "Taom Towel Single",
        "url": "https://snookercart.com/buy-product/ols/products/taom-towel-single-bf3007"
    },
    {
        "name": "Taom V10 Batch",
        "url": "https://snookercart.com/buy-product/ols/products/taom-v10-batch-c27c2f"
    },
    {
        "name": "Taom V10 Green Cap",
        "url": "https://snookercart.com/buy-product/ols/products/taom-v10-green-cap-50ff6e"
    },
    {
        "name": "10 ft Table Cover Silver",
        "url": "https://snookercart.com/buy-product/ols/products/10-ft-table-cover-silver-0e77ae"
    },
    {
        "name": "12 ft Table Cover Silver",
        "url": "https://snookercart.com/buy-product/ols/products/12-ft-table-cover-silver-e32bb2"
    },
    {
        "name": "15 Panels LED Set",
        "url": "https://snookercart.com/buy-product/ols/products/15-panels-led-set-c9f105"
    },
    {
        "name": "7 Holes Cue Stand",
        "url": "https://snookercart.com/buy-product/ols/products/7-holes-cue-stand-5ab7ba"
    },
    {
        "name": "8 Ball pool frame wooden Large Balls",
        "url": "https://snookercart.com/buy-product/ols/products/8-ball-pool-frame-wooden-large-balls-4e5ab1"
    },
    {
        "name": "8 Holes Cue Stand",
        "url": "https://snookercart.com/buy-product/ols/products/8-holes-cue-stand-4737c7"
    },
    {
        "name": "9 Ball pool frame wooden",
        "url": "https://snookercart.com/buy-product/ols/products/9-ball-pool-frame-wooden-270ed7"
    },
    {
        "name": "9 ft Table Cover Silver",
        "url": "https://snookercart.com/buy-product/ols/products/9-ft-table-cover-silver-0f2690"
    },
    {
        "name": "Aluminium Pocket Railing Pack of 6 Black-Golden - Small",
        "url": "https://snookercart.com/buy-product/ols/products/aluminium-pocket-railing-pack-of-6-black-golden-small-1c437c"
    },
    {
        "name": "Apex Inner Pocket Sets Pack of 6 Light Brown",
        "url": "https://snookercart.com/buy-product/ols/products/apex-inner-pocket-sets-pack-of-6-light-brown-e604c1"
    },
    {
        "name": "Apex Pocket Leather Pack of 6 Light Brown",
        "url": "https://snookercart.com/buy-product/ols/products/apex-pocket-leather-pack-of-6-light-brown-e1a932"
    },
    {
        "name": "Apex Pool Table Railing Pack of 6 Black",
        "url": "https://snookercart.com/buy-product/ols/products/apex-pool-table-railing-pack-of-6-black-804775"
    },
    {
        "name": "Table Brush Light Brown Premium - 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-light-brown-premium-12-inch-23276d"
    },
    {
        "name": "Table Brush Light Brown Slim - 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-light-brown-slim-12-inch-f914b7"
    },
    {
        "name": "Table Brush Premium Maroon- 10 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-premium-maroon-10-inch-6131df"
    },
    {
        "name": "Table Brush Premium Quality Maroon - 8 Inch ( Railing Brush )",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-premium-quality-maroon-8-inch-railing-brush-b9bac8"
    },
    {
        "name": "Table Brush Brown 9 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-brown-9-inch-fa55cb"
    },
    {
        "name": "Table Brush Light Brown 10.5 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-light-brown-10-5-inch-d20ab3"
    },
    {
        "name": "Cotton Pocket Net Pack of 6 White",
        "url": "https://snookercart.com/buy-product/ols/products/cotton-pocket-net-pack-of-6-white-a01af7"
    },
    {
        "name": "Dust Cover for Mini Snooker Black (5X10 feet)",
        "url": "https://snookercart.com/buy-product/ols/products/dust-cover-for-mini-snooker-black-5x10-feet-1260ab"
    },
    {
        "name": "Dust Cover for Pool Black ( 4X8 feet)",
        "url": "https://snookercart.com/buy-product/ols/products/dust-cover-for-pool-black-4x8-feet-0593cc"
    },
    {
        "name": "Dust Cover for Snooker Cloth Green ( 6X12 feet)",
        "url": "https://snookercart.com/buy-product/ols/products/dust-cover-for-snooker-cloth-green-6x12-feet-daf9ce"
    },
    {
        "name": "Dust Cover Xingpai Leather Brown (4.5X9 feet)",
        "url": "https://snookercart.com/buy-product/ols/products/dust-cover-xingpai-leather-brown-4-5x9-feet-f6c0a7"
    },
    {
        "name": "Electronics Score Board with remote",
        "url": "https://snookercart.com/buy-product/ols/products/electronics-score-board-with-remote-b64057"
    },
    {
        "name": "Extended Spider Head",
        "url": "https://snookercart.com/buy-product/ols/products/extended-spider-head-d24e18"
    },
    {
        "name": "Fibre Glass rest Stick",
        "url": "https://snookercart.com/buy-product/ols/products/fibre-glass-rest-stick-5f985f"
    },
    {
        "name": "Inner Pockets Set of 6 Brown",
        "url": "https://snookercart.com/buy-product/ols/products/inner-pockets-set-of-6-brown-c15058"
    },
    {
        "name": "Inner Pockets Set of 6 Light Brown - Apex",
        "url": "https://snookercart.com/buy-product/ols/products/inner-pockets-set-of-6-light-brown-apex-1e3626"
    },
    {
        "name": "Kamui Brand Logo Leather",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-brand-logo-leather-a703d6"
    },
    {
        "name": "Leather for Inner Pocket Pack of 6 Hard Light Brown (Apex)",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-inner-pocket-pack-of-6-hard-light-brown-apex-153ab9"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Hard Black",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-hard-black-53529c"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Hard Brown",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-hard-brown-be484d"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Hard Light Brown",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-hard-light-brown-9804f4"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Soft Brown",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-soft-brown-7114f9"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Soft Grey",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-soft-grey-8a1c8b"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Soft Light Brown",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-soft-light-brown-06d30d"
    },
    {
        "name": "Leather for Upper Pocket Pack of 6 Soft Red",
        "url": "https://snookercart.com/buy-product/ols/products/leather-for-upper-pocket-pack-of-6-soft-red-70b6b9"
    },
    {
        "name": "LED Light 36 Watt",
        "url": "https://snookercart.com/buy-product/ols/products/led-light-36-watt-fdab95"
    },
    {
        "name": "Long rest Head",
        "url": "https://snookercart.com/buy-product/ols/products/long-rest-head-ef249f"
    },
    {
        "name": "Long rest Head Xingpai",
        "url": "https://snookercart.com/buy-product/ols/products/long-rest-head-xingpai-3dbceb"
    },
    {
        "name": "Table Brush Maroon Premium Quality - 12 Inch",
        "url": "https://snookercart.com/buy-product/ols/products/table-brush-maroon-premium-quality-12-inch-18ce56"
    },
    {
        "name": "Melin Table Cue Stand for 2 Cues",
        "url": "https://snookercart.com/buy-product/ols/products/melin-table-cue-stand-for-2-cues-72da13"
    },
    {
        "name": "Melin Table Cue Stand for 3 Cues",
        "url": "https://snookercart.com/buy-product/ols/products/melin-table-cue-stand-for-3-cues-07bff8"
    },
    {
        "name": "Melin Table Cue Stand for 5 Cues",
        "url": "https://snookercart.com/buy-product/ols/products/melin-table-cue-stand-for-5-cues-eeb441"
    },
    {
        "name": "Plain Leather for Inner Pocket Pack of 6",
        "url": "https://snookercart.com/buy-product/ols/products/plain-leather-for-inner-pocket-pack-of-6-89fb39"
    },
    {
        "name": "Pool Ball Tray",
        "url": "https://snookercart.com/buy-product/ols/products/pool-ball-tray-1ba4b6"
    },
    {
        "name": "Railing Brush Premium",
        "url": "https://snookercart.com/buy-product/ols/products/railing-brush-premium-e240aa"
    },
    {
        "name": "Rest Head Golden Without cap",
        "url": "https://snookercart.com/buy-product/ols/products/rest-head-golden-without-cap-c8e970"
    },
    {
        "name": "Round Railing Brush - 7 Inch ( Railing Brush )",
        "url": "https://snookercart.com/buy-product/ols/products/round-railing-brush-7-inch-railing-brush-fd3b3f"
    },
    {
        "name": "Snooker Ball Tray",
        "url": "https://snookercart.com/buy-product/ols/products/snooker-ball-tray-f24506"
    },
    {
        "name": "Spider Head",
        "url": "https://snookercart.com/buy-product/ols/products/spider-head-25b728"
    },
    {
        "name": "Spider Head Xingpai",
        "url": "https://snookercart.com/buy-product/ols/products/spider-head-xingpai-46b633"
    },
    {
        "name": "Stroke Exerciser",
        "url": "https://snookercart.com/buy-product/ols/products/stroke-exerciser-60554f"
    },
    {
        "name": "Table Rest Hooks Pack of 6 Golden",
        "url": "https://snookercart.com/buy-product/ols/products/table-rest-hooks-pack-of-6-golden-f2c3c5"
    },
    {
        "name": "Upper Pocket Set Pack of 6 Black",
        "url": "https://snookercart.com/buy-product/ols/products/upper-pocket-set-pack-of-6-black-4ed0ec"
    },
    {
        "name": "Upper Pocket Set Pack of 6 Brown",
        "url": "https://snookercart.com/buy-product/ols/products/upper-pocket-set-pack-of-6-brown-ec527e"
    },
    {
        "name": "Upper Pocket Set Pack of 6 Cherry Red",
        "url": "https://snookercart.com/buy-product/ols/products/upper-pocket-set-pack-of-6-cherry-red-094f15"
    },
    {
        "name": "Upper Pocket Set Pack of 6 Dark Brown",
        "url": "https://snookercart.com/buy-product/ols/products/upper-pocket-set-pack-of-6-dark-brown-4842b9"
    },
    {
        "name": "Upper Pocket Set Pack of 6 Light Brown",
        "url": "https://snookercart.com/buy-product/ols/products/upper-pocket-set-pack-of-6-light-brown-f3fd50"
    },
    {
        "name": "Upper Pocket Set Pack of 6 White",
        "url": "https://snookercart.com/buy-product/ols/products/upper-pocket-set-pack-of-6-white-78e65a"
    },
    {
        "name": "Wall Cue Stand Wooden",
        "url": "https://snookercart.com/buy-product/ols/products/wall-cue-stand-wooden-82750d"
    },
    {
        "name": "Wooden rest Stick Black",
        "url": "https://snookercart.com/buy-product/ols/products/wooden-rest-stick-black-40f99c"
    },
    {
        "name": "Wooden rest Stick Black Larger",
        "url": "https://snookercart.com/buy-product/ols/products/wooden-rest-stick-black-larger-ffac8b"
    },
    {
        "name": "Wooden rest Stick Yellow",
        "url": "https://snookercart.com/buy-product/ols/products/wooden-rest-stick-yellow-077841"
    },
    {
        "name": "Wooden rest Stick Yellow Larger",
        "url": "https://snookercart.com/buy-product/ols/products/wooden-rest-stick-yellow-larger-ff239e"
    },
    {
        "name": "Wooden Score Board Brown",
        "url": "https://snookercart.com/buy-product/ols/products/wooden-score-board-brown-97dbf9"
    },
    {
        "name": "Xingpai Leather for Inner Pocket Pack of 6",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-leather-for-inner-pocket-pack-of-6-f703dc"
    },
    {
        "name": "Xingpai railing Pack of 6 Black-Golden - Small",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-railing-pack-of-6-black-golden-small-84b266"
    },
    {
        "name": "Apex A1 Championship Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-a1-championship-snooker-table-6x12-ft-b34d98"
    },
    {
        "name": "Apex A1 Tournament Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-a1-tournament-snooker-table-6x12-ft-65215e"
    },
    {
        "name": "Apex Signature Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-signature-snooker-table-6x12-ft-dcee0e"
    },
    {
        "name": "Apex Aristocrat Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-aristocrat-snooker-table-6x12-ft-68001c"
    },
    {
        "name": "Apex Royale Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-royale-snooker-table-6x12-ft-0d6834"
    },
    {
        "name": "Apex Club Mini Snooker Table 5X10 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-club-mini-snooker-table-5x10-ft-afceaf"
    },
    {
        "name": "Apex Classic Mini Snooker Table 5X10 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-classic-mini-snooker-table-5x10-ft-480809"
    },
    {
        "name": "Apex Exclusive Mini Snooker Table 5X10 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-exclusive-mini-snooker-table-5x10-ft-2aa2fb"
    },
    {
        "name": "Apex Club Pool Table 4X8 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-club-pool-table-4x8-ft-a75979"
    },
    {
        "name": "Apex Classic Pool Table 4X8 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-classic-pool-table-4x8-ft-ed255d"
    },
    {
        "name": "Apex Exclusive Pool Table 4X8 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-exclusive-pool-table-4x8-ft-b79aa2"
    },
    {
        "name": "Apex Ultimate American Pool Table 4.5X9 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-ultimate-american-pool-table-4-5x9-ft-e2f9b0"
    },
    {
        "name": "Apex Elite American Pool Table 4.5X9 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-elite-american-pool-table-4-5x9-ft-c7b907"
    },
    {
        "name": "Apex Elite Plus American Pool Table 4.5X9 ft",
        "url": "https://snookercart.com/buy-product/ols/products/apex-elite-plus-american-pool-table-4-5x9-ft-63c33c"
    },
    {
        "name": "Herculean Foosball Table 2.5X5 ft",
        "url": "https://snookercart.com/buy-product/ols/products/herculean-foosball-table-2-5x5-ft-8ebc34"
    },
    {
        "name": "Magnum Plus Foosball Table 2.5X5 ft",
        "url": "https://snookercart.com/buy-product/ols/products/magnum-plus-foosball-table-2-5x5-ft-07982b"
    },
    {
        "name": "Singature Pro Foosball Table 2.5X5 ft",
        "url": "https://snookercart.com/buy-product/ols/products/singature-pro-foosball-table-2-5x5-ft-0f0f06"
    },
    {
        "name": "Ultimate Challenge Foosball Table 2.5X5 ft",
        "url": "https://snookercart.com/buy-product/ols/products/ultimate-challenge-foosball-table-2-5x5-ft-c57aa1"
    },
    {
        "name": "Wiraka M1 Classic Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-m1-classic-snooker-table-6x12-ft-bd142a"
    },
    {
        "name": "Wiraka M1 Gold Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-m1-gold-snooker-table-6x12-ft-f47ac6"
    },
    {
        "name": "Xingpai S106 Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-s106-snooker-table-6x12-ft-a552c4"
    },
    {
        "name": "Xingpai XW101 Snooker Table 6X12 ft",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-xw101-snooker-table-6x12-ft-6cf002"
    },
    {
        "name": "ADR Tip 10mm Grey",
        "url": "https://snookercart.com/buy-product/ols/products/adr-tip-10mm-grey-914a66"
    },
    {
        "name": "Long Cue",
        "url": "https://snookercart.com/buy-product/ols/products/long-cue-6bbf54"
    },
    {
        "name": "LP Black-8 Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-black-8-3-4-28b480"
    },
    {
        "name": "LP HS Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/lp-hs-cue-1-piece-apex-0653-a98999"
    },
    {
        "name": "Mandun Break & Jump Cue",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-break-jump-cue-f1c8a0"
    },
    {
        "name": "Mandun Break Cue",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-break-cue-c20b79"
    },
    {
        "name": "Mandun Playing Cue",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-playing-cue-417439"
    },
    {
        "name": "Mandun Playing Cue 1",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-playing-cue-1-387b6c"
    },
    {
        "name": "Omin Break & Jump Cue",
        "url": "https://snookercart.com/buy-product/ols/products/omin-break-jump-caacb1"
    },
    {
        "name": "Omin Master Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-master-cue-3-4-0ae497"
    },
    {
        "name": "PNS 6688 Cloth_4.5X9 feet_Green",
        "url": "https://snookercart.com/buy-product/ols/products/pns-6688-cloth-4-5x9-feet-green-1259ba"
    },
    {
        "name": "PNS 6688 Cloth_6X12 feet_Green",
        "url": "https://snookercart.com/buy-product/ols/products/pns-6688-cloth-6x12-feet-green-ebdd9b"
    },
    {
        "name": "PNS 900 Pool Cloth_4.5X9 feet_Green",
        "url": "https://snookercart.com/buy-product/ols/products/pns-900-pool-cloth-4-5x9-feet-green-8d2af0"
    },
    {
        "name": "Wiraka 6565_6X12 feet_Green_OG",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-6565-6x12-feet-green-og-596f37"
    },
    {
        "name": "Wiraka 777_5X10 feet_Green_OG",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-777-5x10-feet-green-og-d4d2c1"
    },
    {
        "name": "Wiraka 777_6X12 feet_Green_OG",
        "url": "https://snookercart.com/buy-product/ols/products/wiraka-777-6x12-feet-green-og-09b780"
    },
    {
        "name": "Apex 147 White Perfect Badge Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-147-white-perfect-badge-cue-1-piece-dc4e55"
    },
    {
        "name": "Apex Classic Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-classic-cue-1-piece-4d12f4"
    },
    {
        "name": "Apex Merchant Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-merchant-cue-1-piece-60473f"
    },
    {
        "name": "Apex Perfect Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-perfect-cue-1-piece-3d049e"
    },
    {
        "name": "Apex Rocket Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-rocket-cue-1-piece-afb7d2"
    },
    {
        "name": "Apex Ultimate 147 Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-ultimate-147-cue-1-piece-1432c9"
    },
    {
        "name": "Apex Ultimate Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-ultimate-cue-1-piece-903095"
    },
    {
        "name": "Apex Victory Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/apex-victory-cue-1-piece-8f6afa"
    },
    {
        "name": "Arrow Master Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/arrow-master-cue-3-4-46e929"
    },
    {
        "name": "Black Chinese Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/black-chinese-cue-1-piece-efc717"
    },
    {
        "name": "Bliston Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/bliston-cue-1-piece-e91a70"
    },
    {
        "name": "Bridge Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/bridge-cue-1-2-eda531"
    },
    {
        "name": "Chinese Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/chinese-cue-1-piece-af3119"
    },
    {
        "name": "Ebony Hunter Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/ebony-hunter-cue-605b7f"
    },
    {
        "name": "Lp Black Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-black-cue-3-4-e52b1c"
    },
    {
        "name": "LP Black8 Heyball Cue Series 1 Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/lp-black8-heyball-cue-series-1-cue-1-piece-74c642"
    },
    {
        "name": "LP Black8 Heyball Cue Series 2 Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/lp-black8-heyball-cue-series-2-cue-1-piece-d43014"
    },
    {
        "name": "LP Black8 Snooker Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-black8-snooker-cue-3-4-cue-3-4-da1031"
    },
    {
        "name": "LP Classic Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-classic-cue-3-4-af89fb"
    },
    {
        "name": "LP Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/lp-cue-1-piece-94c4ca"
    },
    {
        "name": "Lp Loppy Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-loppy-cue-3-4-9053c5"
    },
    {
        "name": "LP Premium Maroon Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/lp-premium-maroon-cue-3-4-975ce2"
    },
    {
        "name": "LP whirlwind with case Cue",
        "url": "https://snookercart.com/buy-product/ols/products/lp-whirlwind-with-case-cue-87aa50"
    },
    {
        "name": "Maximus Legend Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-legend-cue-1-piece-ebec64"
    },
    {
        "name": "Maximus Precious Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-precious-cue-1-piece-ac16da"
    },
    {
        "name": "Maximus Premium Cue 1 Piece (Set1 Cues)",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-premium-cue-1-piece-f1b40d"
    },
    {
        "name": "Maximus Premium Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-premium-cue-3-4-0bcc77"
    },
    {
        "name": "Omin American Pool Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/omin-american-pool-cue-1-2-7418c0"
    },
    {
        "name": "Omin Basic Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-basic-cue-1-piece-80966d"
    },
    {
        "name": "Omin Basic Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-basic-cue-3-4-eeaad0"
    },
    {
        "name": "Omin Champion Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-champion-cue-1-piece-658303"
    },
    {
        "name": "Omin Champion Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-champion-cue-3-4-ff20ea"
    },
    {
        "name": "Omin Classic Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-classic-cue-1-piece-d8fd69"
    },
    {
        "name": "Omin Classic Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-classic-cue-3-4-de3e2f"
    },
    {
        "name": "Omin Imagine Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-imagine-cue-1-piece-82b5c9"
    },
    {
        "name": "Omin Master Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-master-cue-1-piece-a57a58"
    },
    {
        "name": "Omin Maximum 147 Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-maximum-147-cue-3-4-2a9179"
    },
    {
        "name": "Omin Maximum 147 Gold Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-maximum-147-gold-cue-3-4-41064a"
    },
    {
        "name": "Omin O'Millenium Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-o-millenium-cue-1-piece-c0d3c2"
    },
    {
        "name": "Omin O'Millenium Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-o-millenium-cue-3-4-e4e510"
    },
    {
        "name": "Omin Perfect Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-perfect-cue-3-4-736f5d"
    },
    {
        "name": "Omin Pool Playing Cue",
        "url": "https://snookercart.com/buy-product/ols/products/omin-pool-playing-cue-4c7f7b"
    },
    {
        "name": "Omin Professional Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-professional-cue-1-piece-c64093"
    },
    {
        "name": "Omin Professional Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-professional-cue-3-4-91a2d3"
    },
    {
        "name": "Omin Ultimate Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/omin-ultimate-cue-1-piece-b69d5c"
    },
    {
        "name": "Phoenix Elite Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-elite-cue-1-2-64c5f7"
    },
    {
        "name": "Phoenix Limited Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/phoenix-limited-cue-1-piece-419683"
    },
    {
        "name": "Phoenix Unity Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/phoenix-unity-cue-1-piece-6ec5a7"
    },
    {
        "name": "Uni Cues Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/uni-cues-cue-1-piece-7cd4af"
    },
    {
        "name": "Uni Cues Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/uni-cues-cue-3-4-b207b1"
    },
    {
        "name": "Xingpai American Pool Cue",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-american-pool-cue-4ac5b2"
    },
    {
        "name": "Xingpai American Pool Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-american-pool-cue-1-2-9b7736"
    },
    {
        "name": "Maximus Legend Plus Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-legend-cue-1-piece"
    },
    {
        "name": "Maximus Immortal Cue 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-premium-cue-3-slash-4"
    },
    {
        "name": "Omin Classic Golden Badge Cue 3/4",
        "url": "https://snookercart.com/buy-product/ols/products/omin-classic-cue-3-slash-4"
    },
    {
        "name": "Billiards Tournament Ballset",
        "url": "https://snookercart.com/buy-product/ols/products/billiards-tournament-ballset-7d7a36"
    },
    {
        "name": "Dyna Spehere Snooker Ballset 52.4mm ( 187 Model )",
        "url": "https://snookercart.com/buy-product/ols/products/dyna-spehere-snooker-ballset-52-4mm-187-model-96800d"
    },
    {
        "name": "Case Cover Black 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/case-cover-black-1-piece-f15248"
    },
    {
        "name": "Leather Cue Case Premium Num lock 3/4 Black",
        "url": "https://snookercart.com/buy-product/ols/products/leather-cue-case-premium-num-lock-3-4-black-d29476"
    },
    {
        "name": "Leather Cue Case Premium Num lock 3/4 Blue",
        "url": "https://snookercart.com/buy-product/ols/products/leather-cue-case-premium-num-lock-3-4-blue-fcfb67"
    },
    {
        "name": "Leather Cue Case Premium Num lock 3/4 Brown",
        "url": "https://snookercart.com/buy-product/ols/products/leather-cue-case-premium-num-lock-3-4-brown-d95040"
    },
    {
        "name": "Tube case for Pool Cue Black-White",
        "url": "https://snookercart.com/buy-product/ols/products/tube-case-for-pool-cue-black-white-7c6830"
    },
    {
        "name": "Tube case for Pool Cue Black-Yellow",
        "url": "https://snookercart.com/buy-product/ols/products/tube-case-for-pool-cue-black-yellow-ee59a9"
    },
    {
        "name": "Tube case for Pool cue Brown-Grey",
        "url": "https://snookercart.com/buy-product/ols/products/tube-case-for-pool-cue-brown-grey-9ec869"
    },
    {
        "name": "Tube case for Pool cue red-black",
        "url": "https://snookercart.com/buy-product/ols/products/tube-case-for-pool-cue-red-black-31eea7"
    },
    {
        "name": "WST Cue Carft Case 1 Piece",
        "url": "https://snookercart.com/buy-product/ols/products/wst-cue-carft-case-1-piece-064415"
    },
    {
        "name": "Taom Chalk Soft",
        "url": "https://snookercart.com/buy-product/ols/products/taom-chalk-soft-181123"
    },
    {
        "name": "Taom Pyro Chalk Single Pink",
        "url": "https://snookercart.com/buy-product/ols/products/taom-pyro-chalk-single-pink-b97a87"
    },
    {
        "name": "Legends Grain filler",
        "url": "https://snookercart.com/buy-product/ols/products/legends-grain-filler-1d688a"
    },
    {
        "name": "Mandun Cue Oil 10ml",
        "url": "https://snookercart.com/buy-product/ols/products/mandun-cue-oil-10ml-f7f869"
    },
    {
        "name": "Mix Color Gloves Good Quality",
        "url": "https://snookercart.com/buy-product/ols/products/mix-color-gloves-good-quality-6a5a21"
    },
    {
        "name": "Pheonix Tip Protector Leather",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-tip-protector-leather-b6ef60"
    },
    {
        "name": "Tip Puncture Blue Double Sided",
        "url": "https://snookercart.com/buy-product/ols/products/tip-puncture-blue-double-sided-34cebd"
    },
    {
        "name": "Apex Pocket Leather Pack of 6 Black",
        "url": "https://snookercart.com/buy-product/ols/products/apex-pocket-leather-pack-of-6-black-f68708"
    },
    {
        "name": "Ceramic Triangle frame for Pool Blue",
        "url": "https://snookercart.com/buy-product/ols/products/ceramic-triangle-frame-for-pool-blue-182640"
    },
    {
        "name": "Cue Stand for 9 cues darkwood",
        "url": "https://snookercart.com/buy-product/ols/products/cue-stand-for-9-cues-darkwood-f61f43"
    },
    {
        "name": "Rest Head_Golden with Cap",
        "url": "https://snookercart.com/buy-product/ols/products/rest-head-golden-with-cap-7a7e52"
    },
    {
        "name": "Spider Head with cap",
        "url": "https://snookercart.com/buy-product/ols/products/spider-head-with-cap-68fe70"
    },
    {
        "name": "Table Adjuster Golden Large",
        "url": "https://snookercart.com/buy-product/ols/products/table-adjuster-golden-large-3284f6"
    },
    {
        "name": "Table Adjuster Silver Small",
        "url": "https://snookercart.com/buy-product/ols/products/table-adjuster-silver-small-d77617"
    },
    {
        "name": "Xingpai Cue Stand for 6 Cues",
        "url": "https://snookercart.com/buy-product/ols/products/xingpai-cue-stand-for-6-cues-a9f88c"
    },
    {
        "name": "Maximus Premium Cue 1 Piece (Set 2 Cues)",
        "url": "https://snookercart.com/buy-product/ols/products/maximus-premium-cue-1-piece"
    },
    {
        "name": "Elk Master Tip 10mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/elk-master-tip-10mm-blue-4071e6"
    },
    {
        "name": "Kamui Black Tip 12mm Hard",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-black-tip-12mm-hard-4c860e"
    },
    {
        "name": "Kamui Black Tip 12mm Med",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-black-tip-12mm-med-ed3b84"
    },
    {
        "name": "Kamui Black Tip 12mm Soft",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-black-tip-12mm-soft-2490e7"
    },
    {
        "name": "Kamui Black Tip Single 12Mm Super Soft",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-black-tip-single-12mm-super-soft-788579"
    },
    {
        "name": "Kamui Black Tip Single 14Mm Hard",
        "url": "https://snookercart.com/buy-product/ols/products/kamui-black-tip-single-14mm-hard-d39392"
    },
    {
        "name": "Legends Tip Single Tip Med 11mm Blue",
        "url": "https://snookercart.com/buy-product/ols/products/legends-tip-single-tip-med-11mm-blue-39b433"
    },
    {
        "name": "LP Dream Tip Soft 10mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-dream-tip-soft-10mm-light-green-1b9744"
    },
    {
        "name": "LP Gen3 Tip Hard 10.5mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-gen3-tip-hard-10-5mm-light-green-542fc4"
    },
    {
        "name": "LP Gen3 Tip Med 10.5mm Light Green",
        "url": "https://snookercart.com/buy-product/ols/products/lp-gen3-tip-med-10-5mm-light-green-04bb15"
    },
    {
        "name": "Navigator Tip 11mm Black Hard",
        "url": "https://snookercart.com/buy-product/ols/products/navigator-tip-11mm-black-hard-9cbba5"
    },
    {
        "name": "Navigator Tip 11mm Black Med",
        "url": "https://snookercart.com/buy-product/ols/products/navigator-tip-11mm-black-med-eff52e"
    },
    {
        "name": "Navigator Tip 11mm Blue Hard",
        "url": "https://snookercart.com/buy-product/ols/products/navigator-tip-11mm-blue-hard-3b9b03"
    },
    {
        "name": "Navigator Tip 11mm Blue Med",
        "url": "https://snookercart.com/buy-product/ols/products/navigator-tip-11mm-blue-med-d513cc"
    },
    {
        "name": "Navigator Tip 11mm Brown Hard",
        "url": "https://snookercart.com/buy-product/ols/products/navigator-tip-11mm-brown-hard-864a27"
    },
    {
        "name": "Pheonix Tip Pack of 50 Hard 10mm Green",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-tip-pack-of-50-hard-10mm-green-ec7b93"
    },
    {
        "name": "Pheonix Tip Single Tip Med 10mm Red",
        "url": "https://snookercart.com/buy-product/ols/products/pheonix-tip-single-tip-med-10mm-red-6cf310"
    },
    {
        "name": "Taom Pro Tip Soft 14mm Black",
        "url": "https://snookercart.com/buy-product/ols/products/taom-pro-tip-soft-14mm-black-564e49"
    },
    {
        "name": "Cue Rock Pool Cue 1/2",
        "url": "https://snookercart.com/buy-product/ols/products/cue-rock-pool-cue-1-2-c2c9b1"
    }
];

function searchProducts() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const suggestionBox = document.getElementById('suggestions');
    suggestionBox.innerHTML = '';

    if (input.length === 0) return;

    const filtered = products.filter(p => p.name.toLowerCase().includes(input));

    if (filtered.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No matching products found.';
        li.style.padding = '8px';
        li.style.color = 'gray';
        suggestionBox.appendChild(li);
        return;
    }

    filtered.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${p.url}" target="_blank" rel="noopener noreferrer" style="color: chocolate; text-decoration: none; display: block; padding: 8px;">${p.name}</a>`;
        suggestionBox.appendChild(li);
    });
}
