import Vue from "vue";
import Component from "vue-class-component";

@Component({
})

export default class FeatureComponent extends Vue {
  message: string;

  constructor() {
    super();
    this.message = 'Hello There from typescript!'
  }

  mounted() { }
}