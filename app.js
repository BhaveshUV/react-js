// Importing React and ReactDOM from respective packages/dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

let restaurants = [
    {
        info: {
            "id": "282471",
            "name": "Nothing But Chicken",
            "cloudinaryImageId": "qvesmpgho5p4ntqp0oqc",
            "locality": "Naghar Road",
            "areaName": "Mulund East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Salads",
                "Biryani",
                "Kebabs",
                "Fast Food",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "668",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nothing-but-chicken-naghar-road-mulund-east-mumbai-282471",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "24464",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "aimajvlwqnus1s3h7dy7",
            "locality": "Antop Hill Wadala",
            "areaName": "Mulund East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "2456",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 02:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-antop-hill-wadala-mulund-east-mumbai-24464",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "31986",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "eujiycfwfkq9k0jixoqg",
            "locality": "Krupa Co Operative Society",
            "areaName": "Mulund East",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "2093",
            "avgRatingString": "4.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/natural-ice-cream-krupa-co-operative-society-mulund-east-mumbai-31986",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "14341",
            "name": "Cafe Coffee Day",
            "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
            "locality": "Lrishnai Appartment",
            "areaName": "Mulund East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Burgers",
                "Ice Cream",
                "Bakery",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "1",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-lrishnai-appartment-mulund-east-mumbai-14341",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "238032",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Ns Road Junction",
            "areaName": "Mulund West",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "2",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 05:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-ns-road-junction-mulund-west-mumbai-238032",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "20937",
            "name": "Shubdum Chinese Corner",
            "cloudinaryImageId": "heuqgfhfysd1eho1iib0",
            "locality": "Kopri - Thane East",
            "areaName": "Mumbai",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.3,
            "parentId": "187292",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹65"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shubdum-chinese-corner-kopri-thane-east-mumbai-mumbai-20937",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23746",
            "name": "McDonald's",
            "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
            "locality": "R Mall",
            "areaName": "Mulund West",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-r-mall-mulund-west-mumbai-23746",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "30748",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
            "locality": "MG Road",
            "areaName": "Mulund West",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "43 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-mg-road-mulund-west-mumbai-30748",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "433401",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "LBS Marg",
            "areaName": "Mulund",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-lbs-marg-mulund-mumbai-433401",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "68043",
            "name": "Jumboking Indian Burger",
            "cloudinaryImageId": "ff0747ae3755d4ed49a4d7c0c2d8a2d4",
            "locality": "N.S. Road",
            "areaName": "Mulund West",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "American",
                "Mexican",
                "Fast Food",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "515",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/jumboking-indian-burger-n-s-road-mulund-west-mumbai-68043",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "284184",
            "name": "Monginis",
            "cloudinaryImageId": "j295yuq8kyj2djfxdlkx",
            "locality": "Thane",
            "areaName": "Thane Panchpakhadi",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "5007",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 00:54:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                        "shortDescription": "Perfect Cake Delivery",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                    "shortDescription": "Perfect Cake Delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/monginis-thane-thane-panchpakhadi-mumbai-284184",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "236606",
            "name": "Mad Over Donuts",
            "cloudinaryImageId": "b15d7f2733cb9445a0123ee0174edd2a",
            "locality": "M.G.Road",
            "areaName": "Mulund West",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Sweets",
                "Bakery"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "611",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mad-over-donuts-m-g-road-mulund-west-mumbai-236606",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "435689",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "182191ab163770437b62861a6f987709",
            "locality": "Gaurangi Chambers",
            "areaName": "Panch Pakhdi",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.5,
            "parentId": "195515",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹219"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-gaurangi-chambers-panch-pakhdi-mumbai-435689",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50050",
            "name": "Shiv Sagar Veg Restaurant",
            "cloudinaryImageId": "pqzrv7x4rsspvpzfeexk",
            "locality": "Vardhman Nagar, Mulund West",
            "areaName": "Mulund West",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Indian",
                "Chinese",
                "Continental",
                "Beverages",
                "Mexican",
                "Desserts",
                "Chaat",
                "Italian",
                "North Indian",
                "Jain"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "183312",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shiv-sagar-veg-restaurant-vardhman-nagar-mulund-west-mumbai-50050",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "14996",
            "name": "Apsara Ice Creams",
            "cloudinaryImageId": "dpjb5y9foyysrofdjfzj",
            "locality": "Tarasingh Garden",
            "areaName": "Mulund West",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "35219",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 00:30:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/apsara-ice-creams-tarasingh-garden-mulund-west-mumbai-14996",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "114776",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
            "locality": "Neelkantha Nagar",
            "areaName": "Mulund West",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.7",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-neelkantha-nagar-mulund-west-mumbai-114776",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "371638",
            "name": "Samosa Singh",
            "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
            "locality": "Wagle Estate Thane",
            "areaName": "Thane West",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Snacks",
                "Desserts",
                "Beverages",
                "Street Food"
            ],
            "avgRating": 3.9,
            "parentId": "5639",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-26 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/samosa-singh-wagle-estate-thane-thane-west-mumbai-371638",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "10839",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Mulund West",
            "areaName": "Mulund West",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Italian",
                "Pizzas",
                "Fast Food"
            ],
            "avgRating": 3.7,
            "parentId": "721",
            "avgRatingString": "3.7",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "42 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-mulund-west-mumbai-10839",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "351122",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "zma74lt3fmzb1wojuuzg",
            "locality": "Neelkantha Nagar",
            "areaName": "Mulund West",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-20 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/grameen-kulfi-neelkantha-nagar-mulund-west-mumbai-351122",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "359539",
            "name": "Grandmama's Cafe",
            "cloudinaryImageId": "ncwcklhzijgcilodal4x",
            "locality": "Mulund",
            "areaName": "Mulund West",
            "costForTwo": "₹800 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Cafe",
                "Italian",
                "Continental"
            ],
            "avgRating": 4.3,
            "parentId": "4890",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "41 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-19 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/grandmamas-cafe-mulund-mulund-west-mumbai-359539",
            "type": "WEBLINK"
        }
    }
];

let Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src="https://img.freepik.com/free-vector/sticker-template-with-food-delivery-banner-isolated_1308-62732.jpg?w=740&t=st=1705576529~exp=1705577129~hmac=641de4625ac9c82c0e91f608c7c24bf5709aa6e2f4f1848243693d6e672cc1dc" />
            </div>
            <ul className='nav-items'>
                <li style={{ color: "#ebdb34" }}>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

let Search = () => {
    return (
        <div className="search-box">
            <input type="text" id="search" placeholder='Search for restaurant, cuisine or a dish' />
            <button>Search</button>
        </div>
    );
}

let Card = (props) => {
    let { restaurant } = props;
    let { info } = restaurant;
    return (
        <div className='card'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId} />
            <div className="card-title">
                <span id="title">{info.name}</span>
                <button>{info.avgRating}&#9733;</button>
            </div>
            <span>{info.cuisines.join(", ")}</span>
        </div>
    );
}

let Body = () => {
    return (
        <div className='body'>
            <Search />
            <div className='card-container'>
                {restaurants.map((restaurant) => <Card key={restaurant.info.id} restaurant={restaurant} />)}
                {/* This is a js comment inside JSX */}
            </div>
        </div>
    );
}

const App = () => {
    return (
        <div id='app'>
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());