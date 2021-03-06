Vue.component('leader-card', {
  props: ['leader'],
  computed: {
    tacos: function() {
      return new Array(parseInt(this.leader.sum)) //empty array for taco sum
    },
    tacoImageLocation: function() {
      return window.location.href.split('?')[0] + 'taco.png'
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
              <transition-group name="taco-list" tag="span">
                <span v-for="(taco, index) in tacos" v-bind:key="index" class="taco-list-item">
                  <img :src=tacoImageLocation height="18px" width="21px">
                </span>
              </transition-group>
            </div>
            <div class="col-2">
              <h4 class="vertical-align float-right">
                {{leader.sum}}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </li>
  `
})
