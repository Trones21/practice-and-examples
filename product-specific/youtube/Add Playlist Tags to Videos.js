
/*Soemthing is wrong with getVideosOnPlaylist, need to debug*/
const key = ''
async function main() {
    let myPlaylists = await getPlaylists()
    myPlaylists = myPlaylists.splice(0, 3)
    let videosPlaylistsMap = {}
    for (let playlist of myPlaylists) {
        console.log(playlist.id)
        let vidIds = await getVideosOnPlaylist(playlist.id)
        for (let id of vidIds) {
            if (!videosPlaylistsMap[id]) {
                videosPlaylistsMap[id] = [playlist]
            } else {
                videosPlaylistsMap[id].push(playlist)
            }
        }
    }
    console.log(videosPlaylistsMap)
}

async function getPlaylists() {

    let res = await fetch(`https://www.youtube.com/youtubei/v1/guide?key=${key}&prettyPrint=false`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7,de-DE;q=0.6,de;q=0.5",
            "authorization": "SAPISIDHASH 1672533869_55952a3fb462861a05294011bb0f187b8990445f",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
            "sec-ch-ua-arch": "\"x86\"",
            "sec-ch-ua-bitness": "\"64\"",
            "sec-ch-ua-full-version": "\"108.0.5359.125\"",
            "sec-ch-ua-full-version-list": "\"Not?A_Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"108.0.5359.125\", \"Google Chrome\";v=\"108.0.5359.125\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"10.0.0\"",
            "sec-ch-ua-wow64": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "same-origin",
            "sec-fetch-site": "same-origin",
            "x-client-data": "CJC2yQEIprbJAQjBtskBCKmdygEI3tPKAQi1kMsBCJShywEIi6vMAQjg+cwBCOX6zAEI8IDNAQiygs0BCPGCzQEI74TNAQjIhs0BGMDLzAEY2OzMAQ==",
            "x-goog-authuser": "0",
            "x-goog-visitor-id": "CgtlQkptcGZXSzRmcyjOrsOdBg%3D%3D",
            "x-origin": "https://www.youtube.com",
            "x-youtube-bootstrap-logged-in": "true",
            "x-youtube-client-name": "1",
            "x-youtube-client-version": "2.20221220.09.00"
        },
        "referrer": "https://www.youtube.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"US\",\"remoteHost\":\"172.115.243.17\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"CgtlQkptcGZXSzRmcyjOrsOdBg%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB\",\"clientVersion\":\"2.20221220.09.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://www.youtube.com/\",\"screenPixelDensity\":1,\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CM6uw50GEIfdrgUQuNSuBRCC3a4FEP3urgUQzN-uBRCJ4a4FELKI_hIQ2umuBRC2nP4SEOLUrgUQvNquBRDX5K4FEKjcrgUQuZD-EhC4i64FEKLsrgUQieiuBRCA0q4FEIye_hIQkfj8EhDYvq0F\"},\"screenDensityFloat\":1.25,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"timeZone\":\"America/Los_Angeles\",\"browserName\":\"Chrome\",\"browserVersion\":\"108.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"deviceExperimentId\":\"ChxOekU0TURFNE5qYzVOVE13TkRReE9EZ3dOdz09EM6uw50GGNnLlJ0G\",\"screenWidthPoints\":2048,\"screenHeightPoints\":1010,\"utcOffsetMinutes\":-480,\"memoryTotalKbytes\":\"8000000\",\"mainAppWebInfo\":{\"graftUrl\":\"https://www.youtube.com/\",\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"consistencyTokenJars\":[{\"encryptedTokenJarContents\":\"ACHmjUq6VYaNcoCwruYVeYjxPjPwekmcudz0uloXDeBtplpwLuQiT8qorn_2BMv_FjiIbNFKe_MqHtS2aCM-Jcn5cMKmHTHUctK4KPynnrefW7uMdjfOH6KBoyp44kR8Vc9qCvbbHCJrV_g4iIoWArjXz_4YuDzhK5p1s1lrkr52uM2MGa8xrku5uJk2hTqneLid3ZBXTBduoxYPIGIDgpYFzDA_f_Uppb-OAEWwUZnt_0VKz08MDVpFdLgicEUcRkEvalTqqaXHMEdtQpgTZb7yqwalK5jywjEacvGy\"}],\"internalExperimentFlags\":[]},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1672533868476\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"-480\"},{\"key\":\"u_his\",\"value\":\"5\"},{\"key\":\"u_h\",\"value\":\"1152\"},{\"key\":\"u_w\",\"value\":\"2048\"},{\"key\":\"u_ah\",\"value\":\"1112\"},{\"key\":\"u_aw\",\"value\":\"2048\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"1010\"},{\"key\":\"biw\",\"value\":\"2032\"},{\"key\":\"brdim\",\"value\":\"0,0,0,0,2048,0,2048,1112,2048,1010\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}],\"bid\":\"ANyPxKqkBjcRTkh4WEqZyz-GnGQ971Xf2RxXtI2rNQiGlRqEiIxdII1VKPKnxzD806WzsH8RG5BtuvcaoAav-jpTKRS-bcGf1Q\"}},\"fetchLiveState\":true}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })

    let data = await res.json();

    let playlistsRaw = data.items[0].guideSectionRenderer.items[3].guideCollapsibleSectionEntryRenderer.sectionItems[5].guideCollapsibleEntryRenderer.expandableItems
    playlistsRaw = await playlistsRaw.map(i => {
        return {
            id: i.guideEntryRenderer.entryData.guideEntryData.guideEntryId,
            name: i.guideEntryRenderer.formattedTitle.simpleText
        }
    }
    )
    let myPlaylists = playlistsRaw.filter(i => {
        if (i.id.slice(0, 12) === 'PLU8JULtUESm') {
            return i
        }
    }
    )
    return myPlaylists;

}

async function getVideosOnPlaylist(playlistID) {
    let res = await fetch(`https://www.youtube.com/youtubei/v1/browse?key=${key}prettyPrint=false`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7,de-DE;q=0.6,de;q=0.5",
            "authorization": "SAPISIDHASH 1672536159_92fb1dff1341d708566c6555420c1305d79a6cf5",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
            "sec-ch-ua-arch": "\"x86\"",
            "sec-ch-ua-bitness": "\"64\"",
            "sec-ch-ua-full-version": "\"108.0.5359.125\"",
            "sec-ch-ua-full-version-list": "\"Not?A_Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"108.0.5359.125\", \"Google Chrome\";v=\"108.0.5359.125\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"10.0.0\"",
            "sec-ch-ua-wow64": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "same-origin",
            "sec-fetch-site": "same-origin",
            "x-client-data": "CJC2yQEIprbJAQjBtskBCKmdygEI3tPKAQi1kMsBCJShywEIi6vMAQjg+cwBCOX6zAEI8IDNAQiygs0BCPGCzQEI74TNAQjIhs0BGMDLzAEY2OzMAQ==",
            "x-goog-authuser": "0",
            "x-goog-visitor-id": "CgtlQkptcGZXSzRmcyjOrsOdBg%3D%3D",
            "x-origin": "https://www.youtube.com",
            "x-youtube-bootstrap-logged-in": "true",
            "x-youtube-client-name": "1",
            "x-youtube-client-version": "2.20221220.09.00"
        },
        "referrer": "https://www.youtube.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"US\",\"remoteHost\":\"172.115.243.17\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"CgtlQkptcGZXSzRmcyjOrsOdBg%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB\",\"clientVersion\":\"2.20221220.09.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://www.youtube.com/playlist?list=" + playlistID + "\",\"screenPixelDensity\":1,\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CM6uw50GEIfdrgUQuNSuBRCC3a4FEP3urgUQzN-uBRCJ4a4FELKI_hIQ2umuBRC2nP4SEOLUrgUQvNquBRDX5K4FEKjcrgUQuZD-EhC4i64FEKLsrgUQieiuBRCA0q4FEIye_hIQkfj8EhDYvq0F\"},\"screenDensityFloat\":1,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"timeZone\":\"America/Los_Angeles\",\"browserName\":\"Chrome\",\"browserVersion\":\"108.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"deviceExperimentId\":\"ChxOekU0TURFNE5qYzVOVE13TkRReE9EZ3dOdz09EM6uw50GGNnLlJ0G\",\"screenWidthPoints\":1920,\"screenHeightPoints\":977,\"utcOffsetMinutes\":-480,\"memoryTotalKbytes\":\"8000000\",\"mainAppWebInfo\":{\"graftUrl\":\"/playlist?list=PLU8JULtUESmRbSTkN2FcIMRWCwdBt5r6i\",\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"consistencyTokenJars\":[{\"encryptedTokenJarContents\":\"ACHmjUq6VYaNcoCwruYVeYjxPjPwekmcudz0uloXDeBtplpwLuQiT8qorn_2BMv_FjiIbNFKe_MqHtS2aCM-Jcn5cMKmHTHUctK4KPynnrefW7uMdjfOH6KBoyp44kR8Vc9qCvbbHCJrV_g4iIoWArjXz_4YuDzhK5p1s1lrkr52uM2MGa8xrku5uJk2hTqneLid3ZBXTBduoxYPIGIDgpYFzDA_f_Uppb-OAEWwUZnt_0VKz08MDVpFdLgicEUcRkEvalTqqaXHMEdtQpgTZb7yqwalK5jywjEacvGy\"}],\"internalExperimentFlags\":[]},\"clickTracking\":{\"clickTrackingParams\":\"CM4CELUsGAgiEwjLn6yLkqX8AhWrAK0GHWd2DDE=\"},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1672533868476\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"-480\"},{\"key\":\"u_his\",\"value\":\"5\"},{\"key\":\"u_h\",\"value\":\"1080\"},{\"key\":\"u_w\",\"value\":\"1920\"},{\"key\":\"u_ah\",\"value\":\"1080\"},{\"key\":\"u_aw\",\"value\":\"1920\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"977\"},{\"key\":\"biw\",\"value\":\"1904\"},{\"key\":\"brdim\",\"value\":\"2049,-370,2049,-370,1920,-371,1918,1078,1920,977\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}],\"bid\":\"ANyPxKoGoMQLYkO1RRR36X6YE2UcbT0IKSIg2jjWuMFkQLySLYsdXSFqDxeuW53Wa-b5mB4BBYWS3z51TaBrv5oQgO5ePA-cUQ\"}},\"browseId\":\"VLPLU8JULtUESmRbSTkN2FcIMRWCwdBt5r6i\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    let data = await res.json()
    let videos = await contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents.map(i => i.playlistVideoRenderer.videoId)
    console.log(videos)
    return videos;
}

main()
