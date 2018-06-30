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
      fetch('https://cors-anywhere.herokuapp.com/https://www.heytaco.chat/api/v1/json/leaderboard/T376NB673?days=' + this.numDays)
      //fetch('https://heytacoleaderboard.firebaseio.com/.json')
      .then(response => response.json())
      .then(data => {
        //sort the leaderboard by count when in dev
        this.leaders = data.leaderboard//.sort(function(a,b) {return (parseInt(b.count) > parseInt(a.count)) ? 1 : ((parseInt(a.count) > parseInt(b.count)) ? -1 : 0);} );
        console.log(this.leaders)
      })
    }
  }
})
