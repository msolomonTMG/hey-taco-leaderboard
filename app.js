var app = new Vue({
  el: '#app',
  data: {
    leaders: []
  },
  computed: {
    numDays: function() {
      let urlParams = new URLSearchParams(window.location.search);
      
      if(urlParams.has('days')) {
        return urlParams.get('days')
      } else {
        return '1'
      }
      
    }
  },
  created: function () {
    this.loadLeaderboard()
    
    setInterval(function() {
      this.loadLeaderboard()
    }.bind(this), 300000)
  },
  methods: {
    loadLeaderboard: function() {
      console.log('fetching data')
      fetch('https://www.heytaco.chat/api/v1.1/json/leaderboard/T376NB673?days=' + this.numDays)
      //fetch('https://heytacoleaderboard.firebaseio.com/.json')
      .then(response => response.json())
      .then(data => {
        this.leaders = data.leaderboard.sort(function(a,b) {return (parseInt(b.sum) > parseInt(a.sum)) ? 1 : ((parseInt(a.sum) > parseInt(b.sum)) ? -1 : 0);} );
        console.log(this.leaders)
      })
    }
  }
})
