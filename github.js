
const [_, profile] = document.location.pathname.split('/')

if (profile) {
  $(document).ready(function(){
    document
      .querySelector('#js-pjax-container > div > div:nth-child(3) > div:nth-child(2)')
      .insertAdjacentHTML('afterend', '<div id="profile-github" style="margin-top: 20px;"></div>')
    $('#profile-github').load(`https://github.com/${profile}/.github #readme`)
  })
}
