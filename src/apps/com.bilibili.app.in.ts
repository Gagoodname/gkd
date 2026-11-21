import { defineApp } from "@gkd-kit/define";
export default defineApp({
  id: "com.bilibili.app.in",
  name: "哔哩哔哩",
  groups: [
    {
      key: "bilibili_splash",
      name: "跳过开屏",
      category: "splash",
      rules: [
        {
          matches: "text=跳过",
          action: "click",
          delay: 100
        }
      ]
    }
  ]
});
