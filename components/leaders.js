Vue.component('leader-card', {
  props: ['leader'],
  computed: {
    tacos: function() {
      return new Array(parseInt(this.leader.count)) //empty array for taco count
    }
  },
  template:`
    <li>
      <div class="card mt-2">
        <div class="card-body">
          <div class="row">
            <div class="col-10">
              <img :src=leader.avatar class="rounded-circle avatar float-left">
              <h4 class="card-title">{{leader.username}}</h4>
              <span v-for="taco in tacos">🌮</span>
            </div>
            <div class="col-2">
              <h4 class="vertical-align float-right">
                {{leader.count}}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </li>
  `
})
