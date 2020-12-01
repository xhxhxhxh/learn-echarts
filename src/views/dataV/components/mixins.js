export default {
  data () {
    return {

    }
  },
  mounted () {
    this.initEcharts()
    this.loadChart()
    this.addResizeEvent()
  },
  beforeDestroy () {
    this.removeResizeEvent()
  },
  methods: {
    resize () {
      if (this.chart) {
        this.chart.resize()
      }
    },
    addResizeEvent () {
      window.addEventListener('resize', this.resize)
    },
    removeResizeEvent () {
      window.removeEventListener('resize', this.resize)
    },
  }
}
