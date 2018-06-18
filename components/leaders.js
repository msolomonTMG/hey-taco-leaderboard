Vue.component('leader-card', {
  props: ['leader'],
  computed: {
    tacos: function() {
      return new Array(parseInt(this.leader.count)) //empty array for taco count
    }
  },
  template:`
    <div class="card mt-2" style="width: 18rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <img :src=leader.avatar class="rounded-circle">
          </div>
          <div class="col">
            <span class="align-middle">{{leader.username}}</span>
            <span class="align-middle">{{leader.count}}</span>
            <span v-for="taco in tacos">🌮</span>
          </div>
        </div>
      </div>
    </div>
  `
})
