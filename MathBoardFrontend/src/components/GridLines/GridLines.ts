import { defineComponent, computed } from "./GridLines.vue";

interface Props {
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
}

export default defineComponent({
  name: "GridComponent",
  props: {
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 600,
    },
    cellWidth: {
      type: Number,
      default: 50,
    },
    cellHeight: {
      type: Number,
      default: 50,
    },
  },
  setup(props: Props) {
    const horizontalLines = computed(() => Math.ceil(props.height / props.cellHeight));
    const verticalLines = computed(() => Math.ceil(props.width / props.cellWidth));

    return {
      horizontalLines,
      verticalLines,
    };
  },
});
