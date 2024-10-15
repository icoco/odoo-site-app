// vite.config.ts
import { resolve } from "node:path";
import { loadEnv } from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.5_less@4.2.0/node_modules/vite/dist/node/index.js";
import { format } from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/date-fns@3.0.6/node_modules/date-fns/index.mjs";

// build/utils.ts
import dotenv from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/dotenv@16.3.1/node_modules/dotenv/lib/main.js";
function isReportMode() {
  return process.env.REPORT === "true";
}
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

// build/vite/plugin/index.ts
import Components from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.1_vue@3.3.13/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.1_vue@3.3.13/node_modules/unplugin-vue-components/dist/resolvers.js";
import vue from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/@vitejs+plugin-vue@5.0.0_vite@5.0.10_vue@3.3.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.32_rollup@4.9.1_vite@5.0.10/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.7.0_rollup@4.9.1/node_modules/unplugin-auto-import/dist/vite.js";

// build/vite/plugin/html.ts
import { createHtmlPlugin } from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.0.10/node_modules/vite-plugin-html/dist/index.mjs";

// package.json
var package_default = {
  name: "odoo-site-app",
  type: "module",
  version: "2.1.0",
  private: true,
  packageManager: "pnpm@9.8.0",
  author: {
    name: "xiangshu233",
    email: "xiangshu233@outlook.com",
    url: "https://github.com/xiangshu233"
  },
  license: "MIT",
  repository: {
    type: "git",
    url: "git+https://github.com/xiangshu233/odoo-site-app.git"
  },
  bugs: {
    url: "https://github.com/xiangshu233/odoo-site-app/issues"
  },
  engines: {
    node: "^20.9.0 || >=21.7.1",
    pnpm: ">=8.15.4"
  },
  scripts: {
    preinstall: "npx only-allow pnpm",
    bootstrap: "pnpm install",
    serve: "npm run dev",
    dev: "cross-env VITE_CJS_IGNORE_WARNING=true vite dev",
    "dev:debugcjs": "cross-env VITE_CJS_TRACE=true vite dev",
    build: "cross-env NODE_ENV=production vite build && esno ./build/script/postBuild.ts",
    "build:no-cache": "pnpm clean:cache && npm run build",
    report: "cross-env REPORT=true npm run build",
    "type:check": "vue-tsc --noEmit --skipLibCheck",
    preview: "vite preview",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:lib": "rimraf node_modules",
    lint: "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:lint-staged": "lint-staged"
  },
  dependencies: {
    "@types/lodash-es": "^4.17.12",
    "@unocss/reset": "^0.58.5",
    "@vueuse/core": "^10.7.0",
    "@vueuse/rxjs": "^11.1.0",
    axios: "^1.4.0",
    "date-fns": "^3.0.6",
    echarts: "^5.4.3",
    "lodash-es": "^4.17.21",
    mitt: "^3.0.1",
    mockjs: "^1.1.0",
    nprogress: "^0.2.0",
    pinia: "^2.1.7",
    "pinia-plugin-persist": "^1.0.0",
    qs: "^6.11.2",
    rxjs: "^7.8.1",
    vant: "^4.8.1",
    vue: "^3.3.13",
    "vue-router": "4.2.5",
    "odoo-websdk": "file:/Users/icoco/WorkSpace/2024/prj/odoo/kit/git/npm/odoo-websdk"
  },
  devDependencies: {
    "@antfu/eslint-config": "^2.6.3",
    "@commitlint/cli": "^18.4.3",
    "@commitlint/config-conventional": "^18.4.3",
    "@iconify/json": "^2.2.188",
    "@types/fs-extra": "^11.0.4",
    "@types/mockjs": "^1.0.10",
    "@types/node": "^20.10.5",
    "@types/nprogress": "^0.2.3",
    "@types/qs": "^6.9.11",
    "@unocss/eslint-plugin": "^0.58.4",
    "@unocss/preset-icons": "^0.58.5",
    "@unocss/preset-rem-to-px": "^0.58.5",
    "@unocss/transformer-directives": "^0.58.4",
    "@unocss/transformer-variant-group": "^0.58.4",
    "@vitejs/plugin-vue": "^5.0.0",
    autoprefixer: "^10.4.16",
    "cross-env": "^7.0.3",
    "cz-git": "^1.8.0",
    dotenv: "^16.3.1",
    eslint: "^8.56.0",
    "eslint-plugin-format": "^0.1.0",
    esno: "^0.16.3",
    "fs-extra": "^11.2.0",
    less: "^4.2.0",
    "lint-staged": "^15.2.0",
    "only-allow": "^1.2.1",
    picocolors: "^1.0.0",
    postcss: "^8.4.32",
    "postcss-mobile-forever": "^4.0.0",
    rimraf: "^3.0.2",
    rollup: "^4.9.1",
    "rollup-plugin-visualizer": "^5.11.0",
    "simple-git-hooks": "^2.9.0",
    typescript: "^5.3.3",
    unocss: "^0.58.5",
    "unplugin-auto-import": "^0.17.5",
    "unplugin-vue-components": "^0.26.0",
    vite: "^5.0.10",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.2",
    "vite-plugin-mock": "^2.9.8",
    "vite-plugin-svg-icons": "^2.0.1",
    "vue-tsc": "^1.8.27"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged",
    "commit-msg": "npx --no-install commitlint --edit $1"
  },
  "lint-staged": {
    "*": "eslint --fix"
  },
  config: {
    commitizen: {
      path: "node_modules/cz-git"
    }
  }
};

// build/constant.ts
var GLOB_CONFIG_FILE_NAME = "app.config.js";
var OUTPUT_DIR = "dist/vant-mobile";

// build/vite/plugin/html.ts
function configHtmlPlugin(env, isBuild) {
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env;
  const path2 = VITE_PUBLIC_PATH.endsWith("/") ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;
  const getAppConfigSrc = () => {
    return `${path2 || "/"}${GLOB_CONFIG_FILE_NAME}?v=${package_default.version}-${(/* @__PURE__ */ new Date()).getTime()}`;
  };
  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      // 需要注入 index.html ejs 模版的数据 使用在 html 中 ：<div><%= title %></div>
      data: {
        title: VITE_GLOB_APP_TITLE
      },
      // Embed the generated app.config.js file 需要注入的标签列表
      tags: isBuild ? [
        {
          tag: "script",
          attrs: {
            src: getAppConfigSrc()
          }
        }
      ] : []
    }
  });
  return htmlPlugin;
}

// build/vite/plugin/mock.ts
import { viteMockServe } from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@5.0.10/node_modules/vite-plugin-mock/dist/index.js";
function configMockPlugin(isBuild, prodMock) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: "mock",
    localEnabled: !isBuild,
    prodEnabled: isBuild && prodMock,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `
  });
}

// build/vite/plugin/compress.ts
import compressPlugin from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.0.10/node_modules/vite-plugin-compression/dist/index.mjs";
function configCompressPlugin(compress, deleteOriginFile = false) {
  const compressList = compress.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile
      })
    );
  }
  return plugins;
}

// build/vite/plugin/visualizer.ts
import visualizer from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/rollup-plugin-visualizer@5.11.0_rollup@4.9.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    });
  }
  return [];
}

// build/vite/plugin/svgSprite.ts
import path from "node:path";
import { createSvgIconsPlugin } from "file:///Users/icoco/WorkSpace/2024/prj/odoo/kit/git/mobile/odoo-mobile/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.10/node_modules/vite-plugin-svg-icons/dist/index.mjs";
function configSvgIconsPlugin(isBuild) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    // 是否压缩
    svgoOptions: isBuild,
    // 指定symbolId格式
    symbolId: "icon-[dir]-[name]"
  });
  return svgIconsPlugin;
}

// build/vite/plugin/index.ts
function createVitePlugins(viteEnv, isBuild, prodMock) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const vitePlugins = [
    // have to
    vue(),
    // 按需引入VantUi且自动创建组件声明
    Components({
      dts: true,
      resolvers: [VantResolver()],
      types: []
    }),
    // UnoCSS
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/
        // .vue
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core"
      ],
      dts: "types/auto-imports.d.ts"
    })
  ];
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  vitePlugins.push(configVisualizerConfig());
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild, prodMock));
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  if (isBuild) {
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    );
  }
  return vitePlugins;
}

// build/vite/proxy.ts
var httpsRE = /^https:\/\//;
function createProxy(list = []) {
  const ret = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path2) => path2.replace(new RegExp(`^${prefix}`), ""),
      // https is require secure=false
      // 如果您secure="true"只允许来自 HTTPS 的请求，则secure="false"意味着允许来自 HTTP 和 HTTPS 的请求。
      ...isHttps ? { secure: false } : {}
    };
  }
  return ret;
}

// vite.config.ts
var { dependencies, devDependencies, name, version } = package_default;
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var __APP_INFO__ = {
  // APP 后台管理信息
  pkg: { dependencies, devDependencies, name, version },
  // 最后编译时间
  lastBuildTime: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")
};
var vite_config_default = ({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PORT, VITE_PROXY, VITE_GLOB_PROD_MOCK } = viteEnv;
  const prodMock = VITE_GLOB_PROD_MOCK;
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    root,
    // 别名
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /\@\//,
          replacement: `${pathResolve("src")}/`
        },
        // #/xxxx => types/xxxx
        {
          find: /\#\//,
          replacement: `${pathResolve("types")}/`
        }
      ],
      dedupe: ["vue"]
    },
    // 定义全局常量替换方式
    define: {
      // 在生产中 启用/禁用 intlify-devtools 和 vue-devtools 支持，默认值 false
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    esbuild: {
      // 使用 esbuild 压缩 剔除 console.log
      drop: VITE_DROP_CONSOLE ? ["debugger", "console"] : []
      // minify: true, // minify: true, 等于 minify: 'esbuild',
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: "es2015",
      minify: "esbuild",
      // 构建后是否生成 source map 文件(用于线上报错代码报错映射对应代码)
      sourcemap: false,
      cssTarget: "chrome80",
      // 指定输出路径（相对于 项目根目录)
      outDir: OUTPUT_DIR,
      // 只有 minify 为 terser 的时候, 本配置项才能起作用
      // terserOptions: {
      //   compress: {
      //     // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
      //     keep_infinity: true,
      //     // 打包是否自动删除 console
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // 启用/禁用 gzip 压缩大小报告
      // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      reportCompressedSize: true,
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2e3,
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js",
          // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]",
          // 资源文件像 字体，图片等
          // 将 node_modules 三方依赖包最小化拆分
          manualChunks(id) {
            if (id.includes("node_modules")) {
              const paths = id.toString().split("node_modules/");
              if (paths[2]) {
                return paths[2].split("/")[0].toString();
              }
              return paths[1].split("/")[0].toString();
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          // 注入全局 less 变量
          additionalData: `@import "src/styles/var.less";`
        }
      }
    },
    server: {
      host: true,
      // 服务启动时是否自动打开浏览器
      open: true,
      // 服务端口号
      port: Number(VITE_PORT),
      proxy: createProxy(VITE_PROXY),
      // 预热文件以降低启动期间的初始页面加载时长
      warmup: {
        // 预热的客户端文件：首页、views、 components
        clientFiles: ["./index.html", "./src/{views,components}/*"]
      }
      // proxy: {
      //     '/api': {
      //         target: '',
      //         changeOrigin: true,
      //         rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      //     }
      // }
    },
    optimizeDeps: {
      /**
       * 依赖预构建，vite 启动时会将下面 include 里的模块，编译成 esm 格式并缓存到 node_modules/.vite 文件夹，
       * 页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载
       * 尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 include 里，
       * 否则会遇到开发环境切换页面卡顿的问题（vite 会认为它是一个新的依赖包会重新加载并强制刷新页面），
       * 因为它既无法使用浏览器缓存，又没有在本地 node_modules/.vite 里缓存
       * 温馨提示：如果你使用的第三方库是全局引入，也就是引入到 src/main.ts 文件里，
       * 就不需要再添加到 include 里了，因为 vite 会自动将它们缓存到 node_modules/.vite
       */
      include: [
        "pinia",
        "lodash-es",
        "axios"
      ],
      // 打包时强制排除的依赖项
      exclude: [
        // https://www.mulingyuer.com/archives/928/
        "vant",
        "@vant/use"
      ]
    },
    // 加载插件
    plugins: createVitePlugins(viteEnv, isBuild, prodMock)
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdXRpbHMudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaW5kZXgudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaHRtbC50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvY29uc3RhbnQudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vbW9jay50cyIsICJidWlsZC92aXRlL3BsdWdpbi9jb21wcmVzcy50cyIsICJidWlsZC92aXRlL3BsdWdpbi92aXN1YWxpemVyLnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2luL3N2Z1Nwcml0ZS50cyIsICJidWlsZC92aXRlL3Byb3h5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSAnLi9idWlsZC91dGlscydcbmltcG9ydCB7IGNyZWF0ZVZpdGVQbHVnaW5zIH0gZnJvbSAnLi9idWlsZC92aXRlL3BsdWdpbidcbmltcG9ydCB7IE9VVFBVVF9ESVIgfSBmcm9tICcuL2J1aWxkL2NvbnN0YW50J1xuaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tICcuL2J1aWxkL3ZpdGUvcHJveHknXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuXG5jb25zdCB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0gPSBwa2dcblxuLy8gXHU1RjUzXHU0RjdGXHU3NTI4XHU2NTg3XHU0RUY2XHU3Q0ZCXHU3RURGXHU4REVGXHU1Rjg0XHU3Njg0XHU1MjJCXHU1NDBEXHU2NUY2XHVGRjBDXHU4QkY3XHU1OUNCXHU3RUM4XHU0RjdGXHU3NTI4XHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHUzMDAyXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHU3Njg0XHU1MjJCXHU1NDBEXHU1MDNDXHU0RjFBXHU1MzlGXHU1QzAxXHU0RTBEXHU1MkE4XHU1NzMwXHU4OEFCXHU0RjdGXHU3NTI4XHVGRjBDXHU1NkUwXHU2QjY0XHU2NUUwXHU2Q0Q1XHU4OEFCXHU2QjYzXHU1RTM4XHU4OUUzXHU2NzkwXHUzMDAyXG4vLyBwYXRoLnJlc29sdmUgKCkgXHU2NUI5XHU2Q0Q1XHU3NTI4XHU0RThFXHU1QzA2XHU0RTAwXHU3Q0ZCXHU1MjE3XHU4REVGXHU1Rjg0XHU2QkI1XHU4OUUzXHU2NzkwXHU0RTNBXHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHUzMDAyXHU1QjgzXHU5MDFBXHU4RkM3XHU1OTA0XHU3NDA2XHU0RUNFXHU1M0YzXHU1MjMwXHU1REU2XHU3Njg0XHU4REVGXHU1Rjg0XHU1RThGXHU1MjE3XHU2NzY1XHU1REU1XHU0RjVDXHVGRjBDXHU1NzI4XHU2QkNGXHU0RTJBXHU4REVGXHU1Rjg0XHU0RTRCXHU1MjREXHU2REZCXHU1MkEwXHVGRjBDXHU3NkY0XHU1MjMwXHU1MjFCXHU1RUZBXHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHUzMDAyXG5mdW5jdGlvbiBwYXRoUmVzb2x2ZShkaXI6IHN0cmluZykge1xuICByZXR1cm4gcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLicsIGRpcilcbn1cblxuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICAvLyBBUFAgXHU1NDBFXHU1M0YwXHU3QkExXHU3NDA2XHU0RkUxXHU2MDZGXG4gIHBrZzogeyBkZXBlbmRlbmNpZXMsIGRldkRlcGVuZGVuY2llcywgbmFtZSwgdmVyc2lvbiB9LFxuICAvLyBcdTY3MDBcdTU0MEVcdTdGMTZcdThCRDFcdTY1RjZcdTk1RjRcbiAgbGFzdEJ1aWxkVGltZTogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkIEhIOm1tOnNzJyksXG59XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG4gIC8vIHByb2Nlc3MuY3dkKCkgXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFIE5vZGUuanMgXHU4RkRCXHU3QTBCXHU3Njg0XHU1RjUzXHU1MjREXHU1REU1XHU0RjVDXHU3NkVFXHU1RjU1XG4gIC8vIG1vZGUgXHU4RkQ0XHU1NkRFXHU1RTk0XHU3NTI4XHU3Njg0XHU3M0FGXHU1ODgzXHU2QTIxXHU1RjBGIGRldmVsb3BtZW50XHVGRjA4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHVGRjA5IFx1NjIxNlx1ODAwNSBwcm9kdWN0aW9uXHVGRjA4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHVGRjA5XG4gIC8vIGNvbW1hbmQgXHU4RkQ0XHU1NkRFXHVGRjA4ZGV2L3NlcnZlIFx1NjIxNiBidWlsZFx1RkYwOVx1NTQ3RFx1NEVFNFx1NkEyMVx1NUYwRlx1RkYwQ3lhcm4gZGV2IFx1OEZENFx1NTZERSBkZXYvc2VydmUgeWFybiBidWlsZCBcdThGRDRcdTU2REUgYnVpbGRcbiAgY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKClcbiAgLy8gbG9hZEVudigpIFx1NjgzOVx1NjM2RSBtb2RlIFx1NjhDMFx1NjdFNSByb290KFx1OTg3OVx1NzZFRVx1NjgzOVx1OERFRlx1NUY4NCkgXHU4REVGXHU1Rjg0XHU0RTBCIC5lbnZcdTMwMDEuZW52LmRldmVsb3BtZW50IFx1NzNBRlx1NTg4M1x1NjU4N1x1NEVGNlx1RkYwQ1x1OEY5M1x1NTFGQSBOT0RFX0VOViBcdTU0OEMgVklURV8gXHU1RjAwXHU1OTM0XHU3Njg0XHU5NTJFXHU1MDNDXHU5NjFGXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcm9vdClcbiAgLy8gXHU4QkZCXHU1M0Q2XHU1RTc2XHU1OTA0XHU3NDA2XHU2MjQwXHU2NzA5XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2IC5lbnZcbiAgY29uc3Qgdml0ZUVudiA9IHdyYXBwZXJFbnYoZW52KVxuXG4gIGNvbnN0IHsgVklURV9QVUJMSUNfUEFUSCwgVklURV9EUk9QX0NPTlNPTEUsIFZJVEVfUE9SVCwgVklURV9QUk9YWSwgVklURV9HTE9CX1BST0RfTU9DSyB9XG4gICAgPSB2aXRlRW52XG5cbiAgY29uc3QgcHJvZE1vY2sgPSBWSVRFX0dMT0JfUFJPRF9NT0NLXG5cbiAgY29uc3QgaXNCdWlsZCA9IGNvbW1hbmQgPT09ICdidWlsZCdcbiAgLy8gY29tbWFuZCA9PT0gJ2J1aWxkJ1xuICByZXR1cm4ge1xuICAgIGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsXG4gICAgcm9vdCxcblxuICAgIC8vIFx1NTIyQlx1NTQwRFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiBbXG4gICAgICAgIC8vIEAveHh4eCA9PiBzcmMveHh4eFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL1xcQFxcLy8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IGAke3BhdGhSZXNvbHZlKCdzcmMnKX0vYCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gIy94eHh4ID0+IHR5cGVzL3h4eHhcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9cXCNcXC8vLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBgJHtwYXRoUmVzb2x2ZSgndHlwZXMnKX0vYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkZWR1cGU6IFsndnVlJ10sXG4gICAgfSxcblxuICAgIC8vIFx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1NUUzOFx1OTFDRlx1NjZGRlx1NjM2Mlx1NjVCOVx1NUYwRlxuICAgIGRlZmluZToge1xuICAgICAgLy8gXHU1NzI4XHU3NTFGXHU0RUE3XHU0RTJEIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjggaW50bGlmeS1kZXZ0b29scyBcdTU0OEMgdnVlLWRldnRvb2xzIFx1NjUyRlx1NjMwMVx1RkYwQ1x1OUVEOFx1OEJBNFx1NTAzQyBmYWxzZVxuICAgICAgX19JTlRMSUZZX1BST0RfREVWVE9PTFNfXzogZmFsc2UsXG4gICAgICBfX0FQUF9JTkZPX186IEpTT04uc3RyaW5naWZ5KF9fQVBQX0lORk9fXyksXG4gICAgfSxcblxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIC8vIFx1NEY3Rlx1NzUyOCBlc2J1aWxkIFx1NTM4Qlx1N0YyOSBcdTUyNTRcdTk2NjQgY29uc29sZS5sb2dcbiAgICAgIGRyb3A6IFZJVEVfRFJPUF9DT05TT0xFID8gWydkZWJ1Z2dlcicsICdjb25zb2xlJ10gOiBbXSxcbiAgICAgIC8vIG1pbmlmeTogdHJ1ZSwgLy8gbWluaWZ5OiB0cnVlLCBcdTdCNDlcdTRFOEUgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgfSxcblxuICAgIGJ1aWxkOiB7XG4gICAgICAvLyBcdThCQkVcdTdGNkVcdTY3MDBcdTdFQzhcdTY3ODRcdTVFRkFcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTUxN0NcdTVCQjlcdTc2RUVcdTY4MDdcbiAgICAgIHRhcmdldDogJ2VzMjAxNScsXG4gICAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICAgIC8vIFx1Njc4NFx1NUVGQVx1NTQwRVx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMCBzb3VyY2UgbWFwIFx1NjU4N1x1NEVGNihcdTc1MjhcdTRFOEVcdTdFQkZcdTRFMEFcdTYyQTVcdTk1MTlcdTRFRTNcdTc4MDFcdTYyQTVcdTk1MTlcdTY2MjBcdTVDMDRcdTVCRjlcdTVFOTRcdTRFRTNcdTc4MDEpXG4gICAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgICAgY3NzVGFyZ2V0OiAnY2hyb21lODAnLFxuICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4RjkzXHU1MUZBXHU4REVGXHU1Rjg0XHVGRjA4XHU3NkY4XHU1QkY5XHU0RThFIFx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NSlcbiAgICAgIG91dERpcjogT1VUUFVUX0RJUixcbiAgICAgIC8vIFx1NTNFQVx1NjcwOSBtaW5pZnkgXHU0RTNBIHRlcnNlciBcdTc2ODRcdTY1RjZcdTUwMTksIFx1NjcyQ1x1OTE0RFx1N0Y2RVx1OTg3OVx1NjI0RFx1ODBGRFx1OEQ3N1x1NEY1Q1x1NzUyOFxuICAgICAgLy8gdGVyc2VyT3B0aW9uczoge1xuICAgICAgLy8gICBjb21wcmVzczoge1xuICAgICAgLy8gICAgIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcbiAgICAgIC8vICAgICBrZWVwX2luZmluaXR5OiB0cnVlLFxuICAgICAgLy8gICAgIC8vIFx1NjI1M1x1NTMwNVx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NTIyMFx1OTY2NCBjb25zb2xlXG4gICAgICAvLyAgICAgZHJvcF9jb25zb2xlOiBWSVRFX0RST1BfQ09OU09MRSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4IGd6aXAgXHU1MzhCXHU3RjI5XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBXG4gICAgICAvLyBcdTUzOEJcdTdGMjlcdTU5MjdcdTU3OEJcdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTVGODhcdTYxNjJcdUZGMENcdTU2RTBcdTZCNjRcdTc5ODFcdTc1MjhcdThCRTVcdTUyOUZcdTgwRkRcdTUzRUZcdTgwRkRcdTRGMUFcdTYzRDBcdTlBRDhcdTU5MjdcdTU3OEJcdTk4NzlcdTc2RUVcdTc2ODRcdTY3ODRcdTVFRkFcdTYwMjdcdTgwRkRcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgICAgLy8gY2h1bmsgXHU1OTI3XHU1QzBGXHU4QjY2XHU1NDRBXHU3Njg0XHU5NjUwXHU1MjM2XHVGRjA4XHU0RUU1IGticyBcdTRFM0FcdTUzNTVcdTRGNERcdUZGMDlcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCxcbiAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUU5NVx1NUM0Mlx1NzY4NCBSb2xsdXAgXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTIwNlx1N0M3Qlx1NjI1M1x1NTMwNVxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2pzL1tuYW1lXS1baGFzaF0uanMnLCAvLyBcdTVGMTVcdTUxNjVcdTY1ODdcdTRFRjZcdTU0MERcdTc2ODRcdTU0MERcdTc5RjBcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2pzL1tuYW1lXS1baGFzaF0uanMnLCAvLyBcdTUzMDVcdTc2ODRcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdTU0MERcdTc5RjBcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLCAvLyBcdThENDRcdTZFOTBcdTY1ODdcdTRFRjZcdTUwQ0YgXHU1QjU3XHU0RjUzXHVGRjBDXHU1NkZFXHU3MjQ3XHU3QjQ5XG4gICAgICAgICAgLy8gXHU1QzA2IG5vZGVfbW9kdWxlcyBcdTRFMDlcdTY1QjlcdTRGOURcdThENTZcdTUzMDVcdTY3MDBcdTVDMEZcdTUzMTZcdTYyQzZcdTUyMDZcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGF0aHMgPSBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylcbiAgICAgICAgICAgICAgaWYgKHBhdGhzWzJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGhzWzJdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBhdGhzWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgbGVzczoge1xuICAgICAgICAgIG1vZGlmeVZhcnM6IHt9LFxuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIC8vIFx1NkNFOFx1NTE2NVx1NTE2OFx1NUM0MCBsZXNzIFx1NTNEOFx1OTFDRlxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyLmxlc3NcIjtgLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgLy8gXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU2NUY2XHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgLy8gXHU2NzBEXHU1MkExXHU3QUVGXHU1M0UzXHU1M0Y3XG4gICAgICBwb3J0OiBOdW1iZXIoVklURV9QT1JUKSxcbiAgICAgIHByb3h5OiBjcmVhdGVQcm94eShWSVRFX1BST1hZKSxcbiAgICAgIC8vIFx1OTg4NFx1NzBFRFx1NjU4N1x1NEVGNlx1NEVFNVx1OTY0RFx1NEY0RVx1NTQyRlx1NTJBOFx1NjcxRlx1OTVGNFx1NzY4NFx1NTIxRFx1NTlDQlx1OTg3NVx1OTc2Mlx1NTJBMFx1OEY3RFx1NjVGNlx1OTU3RlxuICAgICAgd2FybXVwOiB7XG4gICAgICAgIC8vIFx1OTg4NFx1NzBFRFx1NzY4NFx1NUJBMlx1NjIzN1x1N0FFRlx1NjU4N1x1NEVGNlx1RkYxQVx1OTk5Nlx1OTg3NVx1MzAwMXZpZXdzXHUzMDAxIGNvbXBvbmVudHNcbiAgICAgICAgY2xpZW50RmlsZXM6IFsnLi9pbmRleC5odG1sJywgJy4vc3JjL3t2aWV3cyxjb21wb25lbnRzfS8qJ10sXG4gICAgICB9LFxuICAgICAgLy8gcHJveHk6IHtcbiAgICAgIC8vICAgICAnL2FwaSc6IHtcbiAgICAgIC8vICAgICAgICAgdGFyZ2V0OiAnJyxcbiAgICAgIC8vICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgLy8gICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGkvdjEnKVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFx1NEY5RFx1OEQ1Nlx1OTg4NFx1Njc4NFx1NUVGQVx1RkYwQ3ZpdGUgXHU1NDJGXHU1MkE4XHU2NUY2XHU0RjFBXHU1QzA2XHU0RTBCXHU5NzYyIGluY2x1ZGUgXHU5MUNDXHU3Njg0XHU2QTIxXHU1NzU3XHVGRjBDXHU3RjE2XHU4QkQxXHU2MjEwIGVzbSBcdTY4M0NcdTVGMEZcdTVFNzZcdTdGMTNcdTVCNThcdTUyMzAgbm9kZV9tb2R1bGVzLy52aXRlIFx1NjU4N1x1NEVGNlx1NTkzOVx1RkYwQ1xuICAgICAgICogXHU5ODc1XHU5NzYyXHU1MkEwXHU4RjdEXHU1MjMwXHU1QkY5XHU1RTk0XHU2QTIxXHU1NzU3XHU2NUY2XHU1OTgyXHU2NzlDXHU2RDRGXHU4OUM4XHU1NjY4XHU2NzA5XHU3RjEzXHU1QjU4XHU1QzMxXHU4QkZCXHU1M0Q2XHU2RDRGXHU4OUM4XHU1NjY4XHU3RjEzXHU1QjU4XHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU0RjFBXHU4QkZCXHU1M0Q2XHU2NzJDXHU1NzMwXHU3RjEzXHU1QjU4XHU1RTc2XHU2MzA5XHU5NzAwXHU1MkEwXHU4RjdEXG4gICAgICAgKiBcdTVDMjRcdTUxNzZcdTVGNTNcdTYwQThcdTc5ODFcdTc1MjhcdTZENEZcdTg5QzhcdTU2NjhcdTdGMTNcdTVCNThcdTY1RjZcdUZGMDhcdThGRDlcdTc5Q0RcdTYwQzVcdTUxQjVcdTUzRUFcdTVFOTRcdThCRTVcdTUzRDFcdTc1MUZcdTU3MjhcdThDMDNcdThCRDVcdTk2MzZcdTZCQjVcdUZGMDlcdTVGQzVcdTk4N0JcdTVDMDZcdTVCRjlcdTVFOTRcdTZBMjFcdTU3NTdcdTUyQTBcdTUxNjVcdTUyMzAgaW5jbHVkZSBcdTkxQ0NcdUZGMENcbiAgICAgICAqIFx1NTQyNlx1NTIxOVx1NEYxQVx1OTA0N1x1NTIzMFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1NTIwN1x1NjM2Mlx1OTg3NVx1OTc2Mlx1NTM2MVx1OTg3Rlx1NzY4NFx1OTVFRVx1OTg5OFx1RkYwOHZpdGUgXHU0RjFBXHU4QkE0XHU0RTNBXHU1QjgzXHU2NjJGXHU0RTAwXHU0RTJBXHU2NUIwXHU3Njg0XHU0RjlEXHU4RDU2XHU1MzA1XHU0RjFBXHU5MUNEXHU2NUIwXHU1MkEwXHU4RjdEXHU1RTc2XHU1RjNBXHU1MjM2XHU1MjM3XHU2NUIwXHU5ODc1XHU5NzYyXHVGRjA5XHVGRjBDXG4gICAgICAgKiBcdTU2RTBcdTRFM0FcdTVCODNcdTY1RTJcdTY1RTBcdTZDRDVcdTRGN0ZcdTc1MjhcdTZENEZcdTg5QzhcdTU2NjhcdTdGMTNcdTVCNThcdUZGMENcdTUzQzhcdTZDQTFcdTY3MDlcdTU3MjhcdTY3MkNcdTU3MzAgbm9kZV9tb2R1bGVzLy52aXRlIFx1OTFDQ1x1N0YxM1x1NUI1OFxuICAgICAgICogXHU2RTI5XHU5OUE4XHU2M0QwXHU3OTNBXHVGRjFBXHU1OTgyXHU2NzlDXHU0RjYwXHU0RjdGXHU3NTI4XHU3Njg0XHU3QjJDXHU0RTA5XHU2NUI5XHU1RTkzXHU2NjJGXHU1MTY4XHU1QzQwXHU1RjE1XHU1MTY1XHVGRjBDXHU0RTVGXHU1QzMxXHU2NjJGXHU1RjE1XHU1MTY1XHU1MjMwIHNyYy9tYWluLnRzIFx1NjU4N1x1NEVGNlx1OTFDQ1x1RkYwQ1xuICAgICAgICogXHU1QzMxXHU0RTBEXHU5NzAwXHU4OTgxXHU1MThEXHU2REZCXHU1MkEwXHU1MjMwIGluY2x1ZGUgXHU5MUNDXHU0RTg2XHVGRjBDXHU1NkUwXHU0RTNBIHZpdGUgXHU0RjFBXHU4MUVBXHU1MkE4XHU1QzA2XHU1QjgzXHU0RUVDXHU3RjEzXHU1QjU4XHU1MjMwIG5vZGVfbW9kdWxlcy8udml0ZVxuICAgICAgICovXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgICdwaW5pYScsXG4gICAgICAgICdsb2Rhc2gtZXMnLFxuICAgICAgICAnYXhpb3MnLFxuICAgICAgXSxcbiAgICAgIC8vIFx1NjI1M1x1NTMwNVx1NjVGNlx1NUYzQVx1NTIzNlx1NjM5Mlx1OTY2NFx1NzY4NFx1NEY5RFx1OEQ1Nlx1OTg3OVxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAvLyBodHRwczovL3d3dy5tdWxpbmd5dWVyLmNvbS9hcmNoaXZlcy85MjgvXG4gICAgICAgICd2YW50JyxcbiAgICAgICAgJ0B2YW50L3VzZScsXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICAvLyBcdTUyQTBcdThGN0RcdTYzRDJcdTRFRjZcbiAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52LCBpc0J1aWxkLCBwcm9kTW9jayksXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3V0aWxzLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2Rm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlID09PSAnZGV2ZWxvcG1lbnQnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2RGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGUgPT09ICdwcm9kdWN0aW9uJ1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gZ2VuZXJhdGUgcGFja2FnZSBwcmV2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlcG9ydE1vZGUoKTogYm9vbGVhbiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5SRVBPUlQgPT09ICd0cnVlJ1xufVxuXG4vLyBSZWFkIGFsbCBlbnZpcm9ubWVudCB2YXJpYWJsZSBjb25maWd1cmF0aW9uIGZpbGVzIHRvIHByb2Nlc3MuZW52XG4vLyBcdThCRkJcdTUzRDZcdTVFNzZcdTU5MDRcdTc0MDZcdTYyNDBcdTY3MDlcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYgLmVudlxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZXJFbnYoZW52Q29uZjogUmVjb3JkYWJsZSk6IFZpdGVFbnYge1xuICBjb25zdCByZXQ6IGFueSA9IHt9XG5cbiAgZm9yIChjb25zdCBlbnZOYW1lIG9mIE9iamVjdC5rZXlzKGVudkNvbmYpKSB7XG4gICAgLy8gXHU1M0JCXHU5NjY0XHU3QTdBXHU2ODNDXG4gICAgbGV0IHJlYWxOYW1lID0gZW52Q29uZltlbnZOYW1lXS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lXG5cbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUE9SVCcpIHtcbiAgICAgIHJlYWxOYW1lID0gTnVtYmVyKHJlYWxOYW1lKVxuICAgIH1cbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUFJPWFknKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZWFsTmFtZSA9IEpTT04ucGFyc2UocmVhbE5hbWUpXG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICAgIHJldFtlbnZOYW1lXSA9IHJlYWxOYW1lXG4gICAgcHJvY2Vzcy5lbnZbZW52TmFtZV0gPSByZWFsTmFtZVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzdGFydGluZyB3aXRoIHRoZSBzcGVjaWZpZWQgcHJlZml4XG4gKiBAcGFyYW0gbWF0Y2ggcHJlZml4XG4gKiBAcGFyYW0gY29uZkZpbGVzIGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW52Q29uZmlnKG1hdGNoID0gJ1ZJVEVfR0xPQl8nLCBjb25mRmlsZXMgPSBbJy5lbnYnLCAnLmVudi5wcm9kdWN0aW9uJ10pIHtcbiAgbGV0IGVudkNvbmZpZyA9IHt9XG4gIGNvbmZGaWxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVudiA9IGRvdGVudi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGl0ZW0pKSlcbiAgICAgIGVudkNvbmZpZyA9IHsgLi4uZW52Q29uZmlnLCAuLi5lbnYgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHt9XG4gIH0pXG5cbiAgT2JqZWN0LmtleXMoZW52Q29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBeKCR7bWF0Y2h9KWApXG4gICAgaWYgKCFyZWcudGVzdChrZXkpKSB7XG4gICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGVudkNvbmZpZywga2V5KVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGVudkNvbmZpZ1xufVxuXG4vKipcbiAqIEdldCB1c2VyIHJvb3QgZGlyZWN0b3J5XG4gKiBAcGFyYW0gZGlyIGZpbGUgcGF0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdFBhdGgoLi4uZGlyOiBzdHJpbmdbXSkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIC4uLmRpcilcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3ZpdGUvcGx1Z2luXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW4vaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3ZpdGUvcGx1Z2luL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyBjb25maWdIdG1sUGx1Z2luIH0gZnJvbSAnLi9odG1sJ1xuaW1wb3J0IHsgY29uZmlnTW9ja1BsdWdpbiB9IGZyb20gJy4vbW9jaydcbmltcG9ydCB7IGNvbmZpZ0NvbXByZXNzUGx1Z2luIH0gZnJvbSAnLi9jb21wcmVzcydcbmltcG9ydCB7IGNvbmZpZ1Zpc3VhbGl6ZXJDb25maWcgfSBmcm9tICcuL3Zpc3VhbGl6ZXInXG5pbXBvcnQgeyBjb25maWdTdmdJY29uc1BsdWdpbiB9IGZyb20gJy4vc3ZnU3ByaXRlJ1xuXG4vKipcbiAqIFx1OTE0RFx1N0Y2RSB2aXRlIFx1NjNEMlx1NEVGNlxuICogQHBhcmFtIHZpdGVFbnYgdml0ZSBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTk1MkVcdTUwM0NcdTk2MUYgb2JqZWN0XG4gKiBAcGFyYW0gaXNCdWlsZCBcdTY2MkZcdTU0MjZcdTY2MkYgYnVpbGQgXHU3M0FGXHU1ODgzIHRydWUvZmFsc2VcbiAqIEByZXR1cm5zIHZpdGVQbHVnaW5zW11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnY6IFZpdGVFbnYsIGlzQnVpbGQ6IGJvb2xlYW4sIHByb2RNb2NrOiBib29sZWFuKSB7XG4gIC8vIFZJVEVfQlVJTERfQ09NUFJFU1MgXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4IGd6aXAgXHU1MzhCXHU3RjI5XHU2MjE2IGJyb3RsaSBcdTUzOEJcdTdGMjlcbiAgLy8gXHU1M0VGXHU5MDA5OiBnemlwIHwgYnJvdGxpIHwgbm9uZVx1RkYwQ1xuICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTk3MDBcdTg5ODFcdTU5MUFcdTc5Q0RcdTVGNjJcdTVGMEZcdUZGMENcdTRGNjBcdTUzRUZcdTRFRTVcdTc1MjgnLCdcdTY3NjVcdTUyMDZcdTk2OTRcblxuICAvLyBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSBcdTYyNTNcdTUzMDVcdTRGN0ZcdTc1MjhcdTUzOEJcdTdGMjlcdTY1RjZcdTY2MkZcdTU0MjZcdTUyMjBcdTk2NjRcdTUzOUZcdTU5Q0JcdTY1ODdcdTRFRjZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcbiAgY29uc3QgeyBWSVRFX1VTRV9NT0NLLCBWSVRFX0JVSUxEX0NPTVBSRVNTLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSB9ID0gdml0ZUVudlxuXG4gIGNvbnN0IHZpdGVQbHVnaW5zOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbXG4gICAgLy8gaGF2ZSB0b1xuICAgIHZ1ZSgpLFxuICAgIC8vIFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVZhbnRVaVx1NEUxNFx1ODFFQVx1NTJBOFx1NTIxQlx1NUVGQVx1N0VDNFx1NEVGNlx1NThGMFx1NjYwRVxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZHRzOiB0cnVlLFxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxuICAgICAgdHlwZXM6IFtdLFxuICAgIH0pLFxuICAgIC8vIFVub0NTU1xuICAgIFVub0NTUygpLFxuXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICAvLyB0YXJnZXRzIHRvIHRyYW5zZm9ybVxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxuICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAvLyBwcmVzZXRzXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLXJvdXRlcicsXG4gICAgICAgICdwaW5pYScsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgXSxcbiAgICAgIGR0czogJ3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICB9KSxcbiAgXVxuXG4gIC8vIFx1NTJBMFx1OEY3RCBodG1sIFx1NjNEMlx1NEVGNiB2aXRlLXBsdWdpbi1odG1sXG4gIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnSHRtbFBsdWdpbih2aXRlRW52LCBpc0J1aWxkKSlcblxuICAvLyByb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcbiAgdml0ZVBsdWdpbnMucHVzaChjb25maWdWaXN1YWxpemVyQ29uZmlnKCkpXG5cbiAgLy8gdml0ZS1wbHVnaW4tbW9ja1xuICBWSVRFX1VTRV9NT0NLICYmIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnTW9ja1BsdWdpbihpc0J1aWxkLCBwcm9kTW9jaykpXG5cbiAgLy8gdml0ZS1wbHVnaW4tc3ZnLWljb25zXG4gIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnU3ZnSWNvbnNQbHVnaW4oaXNCdWlsZCkpXG5cbiAgaWYgKGlzQnVpbGQpIHtcbiAgICAvLyByb2xsdXAtcGx1Z2luLWd6aXBcbiAgICAvLyBcdTUyQTBcdThGN0QgZ3ppcCBcdTYyNTNcdTUzMDVcbiAgICB2aXRlUGx1Z2lucy5wdXNoKFxuICAgICAgY29uZmlnQ29tcHJlc3NQbHVnaW4oVklURV9CVUlMRF9DT01QUkVTUywgVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEUpLFxuICAgIClcbiAgfVxuXG4gIHJldHVybiB2aXRlUGx1Z2luc1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9pY29jby9Xb3JrU3BhY2UvMjAyNC9wcmovb2Rvby9raXQvZ2l0L21vYmlsZS9vZG9vLW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9odG1sLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9pY29jby9Xb3JrU3BhY2UvMjAyNC9wcmovb2Rvby9raXQvZ2l0L21vYmlsZS9vZG9vLW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9odG1sLnRzXCI7LyoqXG4gKiBQbHVnaW4gdG8gbWluaW1pemUgYW5kIHVzZSBlanMgdGVtcGxhdGUgc3ludGF4IGluIGluZGV4Lmh0bWwuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLWh0bWxcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IEdMT0JfQ09ORklHX0ZJTEVfTkFNRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnSHRtbFBsdWdpbihlbnY6IFZpdGVFbnYsIGlzQnVpbGQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFLCBWSVRFX1BVQkxJQ19QQVRIIH0gPSBlbnZcblxuICBjb25zdCBwYXRoID0gVklURV9QVUJMSUNfUEFUSC5lbmRzV2l0aCgnLycpID8gVklURV9QVUJMSUNfUEFUSCA6IGAke1ZJVEVfUFVCTElDX1BBVEh9L2BcblxuICBjb25zdCBnZXRBcHBDb25maWdTcmMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAke3BhdGggfHwgJy8nfSR7R0xPQl9DT05GSUdfRklMRV9OQU1FfT92PSR7cGtnLnZlcnNpb259LSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YFxuICB9XG5cbiAgLy8gXHU1RjUzXHU2MjY3XHU4ODRDIHlhcm4gYnVpbGQgXHU2Nzg0XHU1RUZBXHU5ODc5XHU3NkVFXHU0RTRCXHU1NDBFXHVGRjBDXHU0RjFBXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwIF9hcHAuY29uZmlnLmpzIFx1NjU4N1x1NEVGNlx1NUU3Nlx1NjNEMlx1NTE2NSBpbmRleC5odG1sXG4gIC8vIF9hcHAuY29uZmlnLmpzIFx1NzUyOFx1NEU4RVx1OTg3OVx1NzZFRVx1NTcyOFx1NjI1M1x1NTMwNVx1NTQwRVx1RkYwQ1x1OTcwMFx1ODk4MVx1NTJBOFx1NjAwMVx1NEZFRVx1NjUzOVx1OTE0RFx1N0Y2RVx1NzY4NFx1OTcwMFx1NkM0Mlx1RkYwQ1x1NTk4Mlx1NjNBNVx1NTNFM1x1NTczMFx1NTc0MFxuICAvLyBcdTRFMERcdTc1MjhcdTkxQ0RcdTY1QjBcdThGREJcdTg4NENcdTYyNTNcdTUzMDVcdUZGMENcdTUzRUZcdTU3MjhcdTYyNTNcdTUzMDVcdTU0MEVcdTRGRUVcdTY1MzkgL2Rpc3QvX2FwcC5jb25maWcuanMgXHU1MTg1XHU3Njg0XHU1M0Q4XHU5MUNGXHVGRjBDXHU1MjM3XHU2NUIwXHU1MzczXHU1M0VGXHU2NkY0XHU2NUIwXHU0RUUzXHU3ODAxXHU1MTg1XHU3Njg0XHU1QzQwXHU5MEU4XHU1M0Q4XHU5MUNGXG5cbiAgY29uc3QgaHRtbFBsdWdpbjogUGx1Z2luT3B0aW9uW10gPSBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICBtaW5pZnk6IGlzQnVpbGQsXG4gICAgaW5qZWN0OiB7XG4gICAgICAvLyBJbmplY3QgZGF0YSBpbnRvIGVqcyB0ZW1wbGF0ZVxuICAgICAgLy8gXHU5NzAwXHU4OTgxXHU2Q0U4XHU1MTY1IGluZGV4Lmh0bWwgZWpzIFx1NkEyMVx1NzI0OFx1NzY4NFx1NjU3MFx1NjM2RSBcdTRGN0ZcdTc1MjhcdTU3MjggaHRtbCBcdTRFMkQgXHVGRjFBPGRpdj48JT0gdGl0bGUgJT48L2Rpdj5cbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IFZJVEVfR0xPQl9BUFBfVElUTEUsXG4gICAgICB9LFxuXG4gICAgICAvLyBFbWJlZCB0aGUgZ2VuZXJhdGVkIGFwcC5jb25maWcuanMgZmlsZSBcdTk3MDBcdTg5ODFcdTZDRThcdTUxNjVcdTc2ODRcdTY4MDdcdTdCN0VcdTUyMTdcdTg4NjhcbiAgICAgIHRhZ3M6IGlzQnVpbGRcbiAgICAgICAgPyBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogJ3NjcmlwdCcsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOiBnZXRBcHBDb25maWdTcmMoKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdLFxuICAgIH0sXG4gIH0pXG4gIHJldHVybiBodG1sUGx1Z2luXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJ2dWUzLXZhbnQ0LW1vYmlsZVwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjBcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDkuOC4wXCIsXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJ4aWFuZ3NodTIzM1wiLFxuICAgIFwiZW1haWxcIjogXCJ4aWFuZ3NodTIzM0BvdXRsb29rLmNvbVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hpYW5nc2h1MjMzXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL3hpYW5nc2h1MjMzL3Z1ZTMtdmFudDQtbW9iaWxlLmdpdFwiXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20veGlhbmdzaHUyMzMvdnVlMy12YW50NC1tb2JpbGUvaXNzdWVzXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCJeMjAuOS4wIHx8ID49MjEuNy4xXCIsXG4gICAgXCJwbnBtXCI6IFwiPj04LjE1LjRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwicHJlaW5zdGFsbFwiOiBcIm5weCBvbmx5LWFsbG93IHBucG1cIixcbiAgICBcImJvb3RzdHJhcFwiOiBcInBucG0gaW5zdGFsbFwiLFxuICAgIFwic2VydmVcIjogXCJucG0gcnVuIGRldlwiLFxuICAgIFwiZGV2XCI6IFwiY3Jvc3MtZW52IFZJVEVfQ0pTX0lHTk9SRV9XQVJOSU5HPXRydWUgdml0ZSBkZXZcIixcbiAgICBcImRldjpkZWJ1Z2Nqc1wiOiBcImNyb3NzLWVudiBWSVRFX0NKU19UUkFDRT10cnVlIHZpdGUgZGV2XCIsXG4gICAgXCJidWlsZFwiOiBcImNyb3NzLWVudiBOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGUgYnVpbGQgJiYgZXNubyAuL2J1aWxkL3NjcmlwdC9wb3N0QnVpbGQudHNcIixcbiAgICBcImJ1aWxkOm5vLWNhY2hlXCI6IFwicG5wbSBjbGVhbjpjYWNoZSAmJiBucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJyZXBvcnRcIjogXCJjcm9zcy1lbnYgUkVQT1JUPXRydWUgbnBtIHJ1biBidWlsZFwiLFxuICAgIFwidHlwZTpjaGVja1wiOiBcInZ1ZS10c2MgLS1ub0VtaXQgLS1za2lwTGliQ2hlY2tcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcImNsZWFuOmNhY2hlXCI6IFwicmltcmFmIG5vZGVfbW9kdWxlcy8uY2FjaGUvICYmIHJpbXJhZiBub2RlX21vZHVsZXMvLnZpdGVcIixcbiAgICBcImNsZWFuOmxpYlwiOiBcInJpbXJhZiBub2RlX21vZHVsZXNcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLlwiLFxuICAgIFwibGludDpmaXhcIjogXCJlc2xpbnQgLiAtLWZpeFwiLFxuICAgIFwibGludDpsaW50LXN0YWdlZFwiOiBcImxpbnQtc3RhZ2VkXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL2xvZGFzaC1lc1wiOiBcIl40LjE3LjEyXCIsXG4gICAgXCJAdW5vY3NzL3Jlc2V0XCI6IFwiXjAuNTguNVwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjcuMFwiLFxuICAgIFwiQHZ1ZXVzZS9yeGpzXCI6IFwiXjExLjEuMFwiLFxuICAgIFwiYXhpb3NcIjogXCJeMS40LjBcIixcbiAgICBcImRhdGUtZm5zXCI6IFwiXjMuMC42XCIsXG4gICAgXCJlY2hhcnRzXCI6IFwiXjUuNC4zXCIsXG4gICAgXCJsb2Rhc2gtZXNcIjogXCJeNC4xNy4yMVwiLFxuICAgIFwibWl0dFwiOiBcIl4zLjAuMVwiLFxuICAgIFwibW9ja2pzXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJucHJvZ3Jlc3NcIjogXCJeMC4yLjBcIixcbiAgICBcInBpbmlhXCI6IFwiXjIuMS43XCIsXG4gICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdFwiOiBcIl4xLjAuMFwiLFxuICAgIFwicXNcIjogXCJeNi4xMS4yXCIsXG4gICAgXCJyeGpzXCI6IFwiXjcuOC4xXCIsXG4gICAgXCJ2YW50XCI6IFwiXjQuOC4xXCIsXG4gICAgXCJ2dWVcIjogXCJeMy4zLjEzXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiNC4yLjVcIiwgXG4gICAgXCJvZG9vLXdlYnNka1wiOiBcImZpbGU6L1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbnBtL29kb28td2Vic2RrXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGFudGZ1L2VzbGludC1jb25maWdcIjogXCJeMi42LjNcIixcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOC40LjNcIixcbiAgICBcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTguNC4zXCIsXG4gICAgXCJAaWNvbmlmeS9qc29uXCI6IFwiXjIuMi4xODhcIixcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjRcIixcbiAgICBcIkB0eXBlcy9tb2NranNcIjogXCJeMS4wLjEwXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xMC41XCIsXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4zXCIsXG4gICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjExXCIsXG4gICAgXCJAdW5vY3NzL2VzbGludC1wbHVnaW5cIjogXCJeMC41OC40XCIsXG4gICAgXCJAdW5vY3NzL3ByZXNldC1pY29uc1wiOiBcIl4wLjU4LjVcIixcbiAgICBcIkB1bm9jc3MvcHJlc2V0LXJlbS10by1weFwiOiBcIl4wLjU4LjVcIixcbiAgICBcIkB1bm9jc3MvdHJhbnNmb3JtZXItZGlyZWN0aXZlc1wiOiBcIl4wLjU4LjRcIixcbiAgICBcIkB1bm9jc3MvdHJhbnNmb3JtZXItdmFyaWFudC1ncm91cFwiOiBcIl4wLjU4LjRcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjAuMFwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTZcIixcbiAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuM1wiLFxuICAgIFwiY3otZ2l0XCI6IFwiXjEuOC4wXCIsXG4gICAgXCJkb3RlbnZcIjogXCJeMTYuMy4xXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ni4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWZvcm1hdFwiOiBcIl4wLjEuMFwiLFxuICAgIFwiZXNub1wiOiBcIl4wLjE2LjNcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjIuMFwiLFxuICAgIFwibGVzc1wiOiBcIl40LjIuMFwiLFxuICAgIFwibGludC1zdGFnZWRcIjogXCJeMTUuMi4wXCIsXG4gICAgXCJvbmx5LWFsbG93XCI6IFwiXjEuMi4xXCIsXG4gICAgXCJwaWNvY29sb3JzXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zMlwiLFxuICAgIFwicG9zdGNzcy1tb2JpbGUtZm9yZXZlclwiOiBcIl40LjAuMFwiLFxuICAgIFwicmltcmFmXCI6IFwiXjMuMC4yXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeNC45LjFcIixcbiAgICBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiOiBcIl41LjExLjBcIixcbiAgICBcInNpbXBsZS1naXQtaG9va3NcIjogXCJeMi45LjBcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4zLjNcIixcbiAgICBcInVub2Nzc1wiOiBcIl4wLjU4LjVcIixcbiAgICBcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTcuNVwiLFxuICAgIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJeMC4yNi4wXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjUuMC4xMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjogXCJeMC41LjFcIixcbiAgICBcInZpdGUtcGx1Z2luLWh0bWxcIjogXCJeMy4yLjJcIixcbiAgICBcInZpdGUtcGx1Z2luLW1vY2tcIjogXCJeMi45LjhcIixcbiAgICBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiOiBcIl4yLjAuMVwiLFxuICAgIFwidnVlLXRzY1wiOiBcIl4xLjguMjdcIlxuICB9LFxuICBcInNpbXBsZS1naXQtaG9va3NcIjoge1xuICAgIFwicHJlLWNvbW1pdFwiOiBcInBucG0gbGludC1zdGFnZWRcIixcbiAgICBcImNvbW1pdC1tc2dcIjogXCJucHggLS1uby1pbnN0YWxsIGNvbW1pdGxpbnQgLS1lZGl0ICQxXCJcbiAgfSxcbiAgXCJsaW50LXN0YWdlZFwiOiB7XG4gICAgXCIqXCI6IFwiZXNsaW50IC0tZml4XCJcbiAgfSxcbiAgXCJjb25maWdcIjoge1xuICAgIFwiY29tbWl0aXplblwiOiB7XG4gICAgICBcInBhdGhcIjogXCJub2RlX21vZHVsZXMvY3otZ2l0XCJcbiAgICB9XG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvY29uc3RhbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL2NvbnN0YW50LnRzXCI7LyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGVudGVyZWQgaW4gdGhlIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEdMT0JfQ09ORklHX0ZJTEVfTkFNRSA9ICdhcHAuY29uZmlnLmpzJ1xuXG5leHBvcnQgY29uc3QgT1VUUFVUX0RJUiA9ICdkaXN0L3ZhbnQtbW9iaWxlJ1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9pY29jby9Xb3JrU3BhY2UvMjAyNC9wcmovb2Rvby9raXQvZ2l0L21vYmlsZS9vZG9vLW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9tb2NrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9pY29jby9Xb3JrU3BhY2UvMjAyNC9wcmovb2Rvby9raXQvZ2l0L21vYmlsZS9vZG9vLW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9tb2NrLnRzXCI7LyoqXG4gKiBNb2NrIHBsdWdpbiBmb3IgZGV2ZWxvcG1lbnQgYW5kIHByb2R1Y3Rpb24uXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLW1vY2tcbiAqL1xuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdNb2NrUGx1Z2luKGlzQnVpbGQ6IGJvb2xlYW4sIHByb2RNb2NrOiBib29sZWFuKSB7XG4gIHJldHVybiB2aXRlTW9ja1NlcnZlKHtcbiAgICBpZ25vcmU6IC9eXFxfLyxcbiAgICBtb2NrUGF0aDogJ21vY2snLFxuICAgIGxvY2FsRW5hYmxlZDogIWlzQnVpbGQsXG4gICAgcHJvZEVuYWJsZWQ6IGlzQnVpbGQgJiYgcHJvZE1vY2ssXG4gICAgaW5qZWN0Q29kZTogYFxuICAgICAgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4uL21vY2svX2NyZWF0ZVByb2R1Y3Rpb25TZXJ2ZXInO1xuXG4gICAgICBzZXR1cFByb2RNb2NrU2VydmVyKCk7XG4gICAgICBgLFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9pY29jby9Xb3JrU3BhY2UvMjAyNC9wcmovb2Rvby9raXQvZ2l0L21vYmlsZS9vZG9vLW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9jb21wcmVzcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW4vY29tcHJlc3MudHNcIjsvKipcbiAqIFVzZWQgdG8gcGFja2FnZSBhbmQgb3V0cHV0IGd6aXAuIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IHdvcmsgcHJvcGVybHkgaW4gVml0ZSwgdGhlIHNwZWNpZmljIHJlYXNvbiBpcyBzdGlsbCBiZWluZyBpbnZlc3RpZ2F0ZWRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbm5jd2Ivdml0ZS1wbHVnaW4tY29tcHJlc3Npb25cbiAqL1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuXG5pbXBvcnQgY29tcHJlc3NQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdDb21wcmVzc1BsdWdpbihcbiAgY29tcHJlc3M6ICdnemlwJyB8ICdicm90bGknIHwgJ25vbmUnLFxuICBkZWxldGVPcmlnaW5GaWxlID0gZmFsc2UsXG4pOiBQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSB7XG4gIGNvbnN0IGNvbXByZXNzTGlzdCA9IGNvbXByZXNzLnNwbGl0KCcsJylcblxuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtdXG5cbiAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnZ3ppcCcpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgY29tcHJlc3NQbHVnaW4oe1xuICAgICAgICBleHQ6ICcuZ3onLFxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlLFxuICAgICAgfSksXG4gICAgKVxuICB9XG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgY29tcHJlc3NQbHVnaW4oe1xuICAgICAgICBleHQ6ICcuYnInLFxuICAgICAgICBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGUsXG4gICAgICB9KSxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHBsdWdpbnNcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3ZpdGUvcGx1Z2luXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW4vdmlzdWFsaXplci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW4vdmlzdWFsaXplci50c1wiOy8qKlxuICogUGFja2FnZSBmaWxlIHZvbHVtZSBhbmFseXNpc1xuICovXG5pbXBvcnQgdmlzdWFsaXplciBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBpc1JlcG9ydE1vZGUgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ1Zpc3VhbGl6ZXJDb25maWcoKSB7XG4gIGlmIChpc1JlcG9ydE1vZGUoKSkge1xuICAgIHJldHVybiB2aXN1YWxpemVyKHtcbiAgICAgIGZpbGVuYW1lOiAnLi9ub2RlX21vZHVsZXMvLmNhY2hlL3Zpc3VhbGl6ZXIvc3RhdHMuaHRtbCcsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICBicm90bGlTaXplOiB0cnVlLFxuICAgIH0pIGFzIFBsdWdpbk9wdGlvblxuICB9XG4gIHJldHVybiBbXVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZS9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9pY29jby9Xb3JrU3BhY2UvMjAyNC9wcmovb2Rvby9raXQvZ2l0L21vYmlsZS9vZG9vLW1vYmlsZS9idWlsZC92aXRlL3BsdWdpbi9zdmdTcHJpdGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3ZpdGUvcGx1Z2luL3N2Z1Nwcml0ZS50c1wiOy8qKlxuICogIFZpdGUgUGx1Z2luIGZvciBmYXN0IGNyZWF0aW5nIFNWRyBzcHJpdGVzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1zdmctaWNvbnNcbiAqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ1N2Z0ljb25zUGx1Z2luKGlzQnVpbGQ6IGJvb2xlYW4pIHtcbiAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gIGNvbnN0IHN2Z0ljb25zUGx1Z2luID0gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NTM4Qlx1N0YyOVxuICAgIHN2Z29PcHRpb25zOiBpc0J1aWxkLFxuICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXG4gICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXG4gIH0pXG4gIHJldHVybiBzdmdJY29uc1BsdWdpblxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaWNvY28vV29ya1NwYWNlLzIwMjQvcHJqL29kb28va2l0L2dpdC9tb2JpbGUvb2Rvby1tb2JpbGUvYnVpbGQvdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3ZpdGUvcHJveHkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ljb2NvL1dvcmtTcGFjZS8yMDI0L3Byai9vZG9vL2tpdC9naXQvbW9iaWxlL29kb28tbW9iaWxlL2J1aWxkL3ZpdGUvcHJveHkudHNcIjsvKipcbiAqIFVzZWQgdG8gcGFyc2UgdGhlIC5lbnYuZGV2ZWxvcG1lbnQgcHJveHkgY29uZmlndXJhdGlvblxuICovXG5pbXBvcnQgdHlwZSB7IFByb3h5T3B0aW9ucyB9IGZyb20gJ3ZpdGUnXG5cbnR5cGUgUHJveHlJdGVtID0gW3N0cmluZywgc3RyaW5nXVxuXG50eXBlIFByb3h5TGlzdCA9IFByb3h5SXRlbVtdXG5cbnR5cGUgUHJveHlUYXJnZXRMaXN0ID0gUmVjb3JkPHN0cmluZywgUHJveHlPcHRpb25zICYgeyByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcgfT5cblxuY29uc3QgaHR0cHNSRSA9IC9eaHR0cHM6XFwvXFwvL1xuXG4vKipcbiAqIEdlbmVyYXRlIHByb3h5XG4gKiBAcGFyYW0gbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHkobGlzdDogUHJveHlMaXN0ID0gW10pIHtcbiAgY29uc3QgcmV0OiBQcm94eVRhcmdldExpc3QgPSB7fVxuICBmb3IgKGNvbnN0IFtwcmVmaXgsIHRhcmdldF0gb2YgbGlzdCkge1xuICAgIGNvbnN0IGlzSHR0cHMgPSBodHRwc1JFLnRlc3QodGFyZ2V0KVxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2h0dHAtcGFydHkvbm9kZS1odHRwLXByb3h5I29wdGlvbnNcbiAgICByZXRbcHJlZml4XSA9IHtcbiAgICAgIHRhcmdldCxcbiAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIHdzOiB0cnVlLFxuICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7cHJlZml4fWApLCAnJyksXG4gICAgICAvLyBodHRwcyBpcyByZXF1aXJlIHNlY3VyZT1mYWxzZVxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2MEE4c2VjdXJlPVwidHJ1ZVwiXHU1M0VBXHU1MTQxXHU4QkI4XHU2NzY1XHU4MUVBIEhUVFBTIFx1NzY4NFx1OEJGN1x1NkM0Mlx1RkYwQ1x1NTIxOXNlY3VyZT1cImZhbHNlXCJcdTYxMEZcdTU0NzNcdTc3NDBcdTUxNDFcdThCQjhcdTY3NjVcdTgxRUEgSFRUUCBcdTU0OEMgSFRUUFMgXHU3Njg0XHU4QkY3XHU2QzQyXHUzMDAyXG4gICAgICAuLi4oaXNIdHRwcyA/IHsgc2VjdXJlOiBmYWxzZSB9IDoge30pLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRcblxuICAvLyByZXRcbiAgLy8ge1xuICAvLyAgICcvdGVzdC9hcGknOiB7XG4gIC8vICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwODAvdGVzdC9hcGknLFxuICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAvLyAgICAgd3M6IHRydWUsXG4gIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoL15cXC90ZXN0L2FwaS8pLCAnJyksXG4gIC8vICAgfSxcbiAgLy8gICAnL3VwbG9hZCc6IHtcbiAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMS91cGxvYWQnLFxuICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAvLyAgICAgd3M6IHRydWUsXG4gIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoL15cXC91cGxvYWQvKSwgJycpLFxuICAvLyAgIH1cbiAgLy8gfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVyxTQUFTLGVBQWU7QUFFdlksU0FBUyxlQUFlO0FBQ3hCLFNBQVMsY0FBYzs7O0FDRHZCLE9BQU8sWUFBWTtBQWFaLFNBQVMsZUFBd0I7QUFDdEMsU0FBTyxRQUFRLElBQUksV0FBVztBQUNoQztBQUlPLFNBQVMsV0FBVyxTQUE4QjtBQUN2RCxRQUFNLE1BQVcsQ0FBQztBQUVsQixhQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sR0FBRztBQUUxQyxR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
