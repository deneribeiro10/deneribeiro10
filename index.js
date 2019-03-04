var myPage = new Vue({ 
  el: '#app',
  data: {
    lenguage: {
      options: ['en', 'pt-br'],
      active: 'pt-br'
    },
    socialMediaIcons: [
      'fab fa-facebook', 
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    name: "Dener Ribeiro",
    office: "Desenvolvedor de Sistemas"
  }
})

