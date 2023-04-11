const username = ''

async function main() {
  let res = await fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-prefers-color-scheme": "dark",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "viewport-width": "870",
      "x-asbd-id": "198387",
      "x-csrftoken": "lwuHHn1ni3FXGz9Sn1JIDdzN7rCeYBsw",
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "hmac.AR2KG9gQf4KNS__wBUSD4LEUEqUM188249n_9A-0F2Q8fjt0",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://www.instagram.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  })
  let data = await res.json()
  let ids = await data.data.user.edge_owner_to_timeline_media.edges.map(e => { return { id: e.node.id, shortcode: e.node.shortcode, expectedComments: e.node.edge_media_to_comment.count } })
  let allData = []
  //ids = ids.slice(0, 2)
  console.log(ids)

  let countMap = {}
  ids.forEach(i => countMap[i.shortcode] = i.expectedComments)
  console.log(countMap)

  for (let i of ids) {
    i.reqStr = `https://www.instagram.com/api/v1/media/${i.id}/comments/?can_support_threading=true&permalink_enabled=false`
    let comments = await getComments(i)
    //console.log(comments)
    allData.push(...comments)
  }
  console.log(allData)


  validateCounts(allData, "yourPostID", countMap)


}


async function validateCounts(items, key, countMap) {
  let hashMap = {}
  for (let i of items) {
    if (!hashMap[i[key]]) {
      hashMap[i[key]] = 1
    } else {
      hashMap[i[key]] += 1
    }
  }


  let misMatch = false;
  for (let [k, v] of Object.entries(countMap)) {
    if (!hashMap.hasOwnProperty(k)) {
      countMap[k] = { expectedAmount: v, FoundinHashMap: false }
    } else {
      countMap[k] = { expectedAmount: v, FoundinHashMap: hashMap[k] }
      if (v === hashMap[k]) {
        countMap[k].match = true
      } else {
        countMap[k].match = false
        misMatch = true

      }
    }
  }

  if (misMatch = true) {
    console.warn(countMap)
    return false
  } else {
    return true
  }

}

async function getComments(post) {
  console.log(post.reqStr)

  let options = {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-prefers-color-scheme": "dark",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "viewport-width": "951",
      "x-asbd-id": "198387",
      "x-csrftoken": "lwuHHn1ni3FXGz9Sn1JIDdzN7rCeYBsw",
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "hmac.AR2KG9gQf4KNS__wBUSD4LEUEqUM188249n_9A-0F2Q8ftP5",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": `https://www.instagram.com/p/${post.shortcode}/`,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }

  let res = await fetch(post.reqStr, options)
  let data = await res.json()

  //Select Data
  let out = [];
  let clean = await data.comments.map(i => {
    return {
      yourPostID: post.shortcode,
      CommentID: i.pk,
      Commenter: i.user.username,
      CommenterFullName: i.user.full_name,
      CommentDateTime: new Date(i.created_at_utc * 1000).toISOString().slice(0, 19),
      Comment: i.text
    }
  });
  out.push(...clean)

  //Parse next_min_id and recurse
  if (data.next_min_id) {
    let x = await JSON.parse(data.next_min_id);
    post.next = {}
    post.next.cursor = x.cached_comments_cursor;
    post.next.token = x.bifilter_token;
    post.reqStr = `https://www.instagram.com/api/v1/media/${post.id}/comments/?can_support_threading=true&min_id=%7B%22cached_comments_cursor%22%3A%20%22${post.next.cursor}%22%2C%20%22bifilter_token%22%3A%20%22${post.next.token}%3D%3D%22%7D`
    let resp = await getComments(post)
    out.push(...resp)
    console.log("Pushed data from" + post.next.cursor)
  } else {
    console.log(data)
  }

  return out

}

(async () => {
  main()
})()



