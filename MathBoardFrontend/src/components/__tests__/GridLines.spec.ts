import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GridComponent from "@/components/GridLines.vue";

describe("GridComponent", () => {
  it("calculates the correct number of horizontal and vertical lines", () => {
    const wrapper = mount(GridComponent, {
      props: {
        width: 800,
        height: 600,
        cellWidth: 50,
        cellHeight: 50,
      },
    });

    const horizontalLines = wrapper.vm.horizontalLines;
    const verticalLines = wrapper.vm.verticalLines;

    expect(horizontalLines).toBe(12); // 600 / 50 = 12
    expect(verticalLines).toBe(16); // 800 / 50 = 16
  });

  it("handles different cell sizes correctly", () => {
    const wrapper = mount(GridComponent, {
      props: {
        width: 1000,
        height: 500,
        cellWidth: 200,
        cellHeight: 100,
      },
    });

    const horizontalLines = wrapper.vm.horizontalLines;
    const verticalLines = wrapper.vm.verticalLines;

    expect(horizontalLines).toBe(5); // 500 / 100 = 5
    expect(verticalLines).toBe(5); // 1000 / 200 = 5
  });

  it("uses default props if none are provided", () => {
    const wrapper = mount(GridComponent);

    const horizontalLines = wrapper.vm.horizontalLines;
    const verticalLines = wrapper.vm.verticalLines;

    expect(horizontalLines).toBe(12); // Default: 600 / 50 = 12
    expect(verticalLines).toBe(16); // Default: 800 / 50 = 16
  });
});
