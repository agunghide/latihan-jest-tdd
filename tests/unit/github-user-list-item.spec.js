import GithubUserListItem from "@/components/exercise/github-user-list-item";
import { mount } from "@vue/test-utils";

describe("GithubUserListComponent", () => {
  it("can emit index to remove users", async () => {
    const wrapper = mount(GithubUserListItem, {
      propsData: {
        index: 1,
      },
    });

    wrapper.vm.$emit("remove", 1);
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().remove).toBeTruthy();
    expect(wrapper.emitted().remove.length).toBe(1);
    expect(wrapper.emitted().remove[0]).toEqual([1]);
  });

  it("can emit index to duplicate users", async () => {
    const wrapper = mount(GithubUserListItem, {
      propsData: {
        index: 1,
      },
    });

    wrapper.vm.$emit("duplicate", 1);
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().duplicate).toBeTruthy();
    expect(wrapper.emitted().duplicate.length).toBe(1);
    expect(wrapper.emitted().duplicate[0]).toEqual([1]);
  });
});
