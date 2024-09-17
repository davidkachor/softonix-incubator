interface ISocialPost {
  socialPostID: number
  text: string
  likesCount: number
  comments: string[]
  userID: number
}

interface ISocialKudo {
  kudosID: number
  userID: number
  kudoReasonType: number
  message: string
}

type TFeedItem = ISocialPost | ISocialKudo

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const list: TFeedItem[] = [
  {
    socialPostID: 1,
    text: 'Hello, World!',
    likesCount: 0,
    comments: [],
    userID: 1
  },
  {
    kudosID: 1,
    userID: 1,
    kudoReasonType: 1,
    message: 'Hello, TS!'
  },
  {
    socialPostID: 2,
    text: 'Hello, World!',
    likesCount: 0,
    comments: [],
    userID: 1
  },
  {
    kudosID: 2,
    userID: 1,
    kudoReasonType: 1,
    message: 'Hello, TS!'
  }
]

function isSocialPost (item: TFeedItem): item is ISocialPost {
  return item.hasOwnProperty('socialPostID')
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function deleteFeedItem<T extends TFeedItem> (feedItem: T) {
  // Виправити код знизу так, щоб позбутися помилки
  if (isSocialPost(feedItem)) {
    return apiDeleteSocialPost(feedItem)
  } else {
    return apiDeleteSocialKudo(feedItem)
  }
}

function apiDeleteSocialPost (socialPost: ISocialPost) {
  return Promise.resolve(socialPost.socialPostID)
}

function apiDeleteSocialKudo (socialKudo: ISocialKudo) {
  return Promise.resolve(socialKudo.kudosID)
}
