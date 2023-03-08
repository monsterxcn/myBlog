<template>
  <aside class="w-toc -ml-82 aside group fixed top-24 hidden xl:block">
    <div>
      <div
        class="rounded-xl border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800"
      >
        <h1
          class="flex items-center border-b border-gray-200 px-6 py-3 text-2xl font-medium tracking-wide text-gray-700 dark:border-gray-700 dark:text-white"
        >
          <span class="mr-2 -mt-[1.5px] h-[19px] w-[19px]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path></svg></span
          >Contents
        </h1>
        <ul
          class="aside-mask max-h-[70vh] overflow-hidden overflow-y-auto overscroll-contain px-3 py-3 text-xl text-gray-500 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
          id="toc"
        >
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header0"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            圣诞快乐
          </li>
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header1"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            问题与后果
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header2"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              模糊的目标，敷衍的执行
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header3"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              转折中失去了掌控感
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header4"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              不尽人意的环境
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header5"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              几乎不存在的社交生活
            </div>
          </li>
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header6"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            原因与动机
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header7"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              身心健康对生产力的直接影响
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header8"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              过度的内容消费
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header9"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              被动思维
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header10"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              可怕的舒适区
            </div>
          </li>
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header11"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            解决方案
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header12"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              态度与计划
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header13"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 10px; margin-left: 10px"
            >
              <div
                class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                style="padding-left: 0px; margin-left: 0px"
              >
                态度的转变
              </div>
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header14"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 10px; margin-left: 10px"
            >
              <div
                class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                style="padding-left: 0px; margin-left: 0px"
              >
                深度工作
              </div>
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header15"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 10px; margin-left: 10px"
            >
              <div
                class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                style="padding-left: 0px; margin-left: 0px"
              >
                目标与系统
              </div>
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header16"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              方法论
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header17"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              总有更值得做的事
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header18"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              普通且自信
            </div>
          </li>
          <li
            class="toc-sub cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:rounded-tl-none hover:rounded-bl-none hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header19"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 10px"
          >
            <div
              class="border-l-0toc-sub -my-2 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              style="padding-left: 0px; margin-left: 0px"
            >
              积硅步以致千里
            </div>
          </li>
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header20"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            年轻才卷的动
          </li>
          <li
            class="toc-active cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header21"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            一些好事
          </li>
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header22"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            往日不再
          </li>
          <li
            class="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-gray-100 py-2 pr-[10px] hover:rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            id="header23"
            data-oa="click-tocItem"
            style="padding-left: 10px; margin-left: 0px"
          >
            引用与参考
          </li>
        </ul>
      </div>
      <div
        class="tour mt-5 grid grid-cols-1 rounded-xl border bg-white text-xl text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400"
      >
        <a href="/post/984">
          <div
            class="flex cursor-pointer items-center justify-center rounded-xl px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Next<span class="ml-2 h-6 w-6"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path></svg
            ></span>
          </div>
        </a>
      </div>
    </div>
  </aside>
</template>
