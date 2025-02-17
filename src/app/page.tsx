import Image from "next/image";
import { User, Mail, Settings } from "lucide-react";
export default function Home() {
  return (
    <div className="flex min-h-[96vh] bg-gray-50 p-3 rounded-3xl">
      {/* 侧边栏 */}
      <div className="w-[18%] bg-pink-300">
        <div className="px-4 mb-12">
          <Image src="/logo.png" alt="GrowCrinee" width={425} height={100} />
        </div>
        <div className="px-2 py-4 bg-green-300">
          <div className="px-2 py-4">
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-4 px-3 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium "
              >
                <User className="w-4 h-4 ml-5" />
                <span className="text-sm ">AI 写作</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors font-bold"
              >
                <Mail className="w-4 h-4 ml-5" />
                <span className="text-sm ">AIGC 视频</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors font-bold"
              >
                <Settings className="w-4 h-4 ml-5" />
                <span className="text-sm ">AIGC 图片</span>
              </a>
              {/* 其他菜单项 */}
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <Image src="/intro.gif" alt="intro" width={200} height={200} />
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 p-8">
        {/* 顶部搜索栏 */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg border bg-white"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-purple-600">21</span>
              <span>Points</span>
            </div>
            <button className="p-2 bg-gray-900 text-white rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          </div>
        </div>
        <div className="bg-pink-300 rounded-bg ">
          {/* 注册提示卡片 */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-200 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Complete the registration to get 100 free points and connect
                  with a salesman.
                </h2>
                <button className="bg-black text-white px-6 py-2 rounded-lg">
                  Get 100 FREE points
                </button>
              </div>
              <Image
                src="/illustration.png"
                alt="Registration"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* 过滤器 */}
          <div className="flex gap-4 mb-8">
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
              Availability
            </button>
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
              Experience
            </button>
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
              Language
            </button>
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
              Work Location
            </button>
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
              Job Type
            </button>
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
              Expertise
            </button>
          </div>

          {/* 销售人员卡片网格 */}
          <div className="grid grid-cols-3 gap-6">
            {/* 单个卡片示例 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="font-semibold">Mayke Schuurs</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded">
                        Level - 2
                      </span>
                      <span>Since 2021</span>
                    </div>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Active Tags:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Italian
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    English
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Arabic
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    B2C
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    B2B
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Remote
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Hybrid
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Full Time
                  </span>
                </div>
              </div>
            </div>
            {/* 更多卡片... */}
          </div>
        </div>
      </div>
    </div>
  );
}
