

export default {
  name: "Bi",
  props: { v: { type: [String, Object], required: true } },
  computed: {
    zh() { return typeof this.v === "string" ? this.v : this.v.zh; },
    en() { return typeof this.v === "string" ? this.v : this.v.en; },
  },
  template: `<span data-l="zh" v-html="zh"></span><span data-l="en" v-html="en"></span>`,
};
