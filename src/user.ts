import { renderBlock } from './lib.js'

const getUserDta = (localStorage):unknown => {
  return  {
    username: localStorage.user.username,
    avatarUrl: localStorage.user.avatarUrl,
  }
}

const getFavoritesAmount = (localStorage ):unknown => {
  return localStorage.favoritesAmount
}



export function renderUserBlock (userName: string, userAvatarSrc: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  userName = 'Wade Warren'
  userAvatarSrc = '/img/avatar.png'

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${userAvatarSrc} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
