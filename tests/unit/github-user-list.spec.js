import GithubUserList from "@/components/exercise/github-user-list";
import { mount, shallowMount } from "@vue/test-utils";

describe("GithubUserListComponent", () => {
  it("composeUrl", () => {
    const wrapper = mount(GithubUserList);
    const { composeUrl } = wrapper.vm;
    expect(composeUrl("angaihimitsu")).toBe(
      "https://api.github.com/users/angaihimitsu"
    );
  });

  it("can add user to array with button add", async () => {
    const wrapper = shallowMount(GithubUserList);
    const input = wrapper.find("#username");
    const button = wrapper.find("button[type='submit']");

    const jsonMock = jest.fn().mockResolvedValue({ login: "GITHUB DATA" });
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    });

    input.element.value = "angaihimitsu";
    await input.trigger("input");
    expect(wrapper.vm.username).toBe("angaihimitsu");
    wrapper.setMethods({
      composeUrl: (username) => `mocked:${username}`,
    });
    await button.trigger("submit");

    await wrapper.vm.$nextTick();
    expect(window.fetch).toHaveBeenCalledWith("mocked:angaihimitsu");
    await wrapper.vm.$nextTick();
    expect(jsonMock).toHaveBeenCalled();
    expect(wrapper.vm.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ login: "GITHUB DATA" }),
      ])
    );
  });

  it("can remove all user array with remove button", async () => {
    const wrapper = shallowMount(GithubUserList);
    const button = wrapper.find("button[role='clear']");

    wrapper.setData({
      users: [
        {
          login: "angaihimitsu",
        },
      ],
    });
    await button.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.users).toEqual([]);
  });
});
